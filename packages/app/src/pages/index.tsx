import { NextPage } from 'next';
import * as ort from 'onnxruntime-web';
import { useState } from 'react';
import Tesseract from 'tesseract.js';

type ExtractedFields = {
  vendor: string;
  total: string;
  date: string;
};

const HomePage: NextPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [ocrText, setOcrText] = useState<string>('');
  const [fields, setFields] = useState<ExtractedFields | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const extract = (type: string, text: string): string => {
    if (type === 'total') {
      const m = text.match(/total[:\s]*\$?([\d.,]+)/i);
      return m ? m[1] : 'Not found';
    }

    if (type === 'date') {
      const m = text.match(/(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4})/);
      return m ? m[1] : 'Not found';
    }

    if (type === 'vendor') {
      return text.split('\n')[0] || 'Not found';
    }

    return 'Not found';
  };

  // Automatically detect correct base path for GitHub Pages
  const getBasePath = (): string => {
    // Example pathname on GitHub Pages: "/smart-invoice/index.html"
    // We remove the file name and keep the folder: "/smart-invoice/"
    const path = window.location.pathname;

    // Remove file name OR index.html OR trailing parts
    const base = path.replace(/\/[^/]*$/, '/');

    return base === '/' ? '' : base; // localhost → ""
  };

  const runOCR = async (): Promise<void> => {
    if (!image) {
      console.warn('[WARN] No image selected');
      return;
    }

    console.log('==================================================');
    console.log('[START] Running OCR + ONNX pipeline');
    console.log('Image URL:', image);
    console.log('Timestamp:', new Date().toISOString());
    console.log('==================================================');

    setLoading(true);

    try {
      console.log('\n[1] Starting OCR (Tesseract WASM)...');
      const t1 = performance.now();

      const res = await Tesseract.recognize(image, 'eng');
      const text = res.data.text;

      const t2 = performance.now();
      console.log(`[1] OCR completed in ${(t2 - t1).toFixed(0)} ms`);
      console.log('[1] OCR text length:', text.length);
      console.log('[1] First 200 chars:\n', text.slice(0, 200));

      setOcrText(text);

      const basePath = getBasePath();
      const modelURL = `${basePath}invoice-parser.onnx`;

      console.log(`\n[2] Loading ONNX model ${modelURL}...`);
      const t3 = performance.now();

      const session: ort.InferenceSession = await ort.InferenceSession.create(
        modelURL,
        { executionProviders: ['wasm'] }
      );

      const t4 = performance.now();
      console.log(`[2] ONNX model loaded in ${(t4 - t3).toFixed(0)} ms`);
      console.log('[2] Model input names:', session.inputNames);
      console.log('[2] Model output names:', session.outputNames);

      console.log('\n[3] Creating dummy input tensor...');
      const dummy = new Float32Array(128).fill(0);
      console.log('[3] Dummy tensor sample:', dummy.slice(0, 6));

      const inputTensor = new ort.Tensor('float32', dummy, [1, 128]);
      console.log('[3] Tensor shape:', inputTensor.dims);

      console.log('\n[4] Running ONNX inference...');
      const t5 = performance.now();

      const output = await session.run({ input: inputTensor });

      const t6 = performance.now();
      console.log(`[4] Inference finished in ${(t6 - t5).toFixed(0)} ms`);
      console.log('[4] Output keys:', Object.keys(output));
      console.log('[4] Raw output object:', output);

      // Optional: try extracting label (if exists)
      if (output.output_label?.data) {
        console.log('[4] output_label tensor:', output.output_label.data);
      }

      // Optional: try reading probability map
      if (output.output_probability) {
        console.log('[4] output_probability map:', output.output_probability);
      }

      console.log('\n[5] Extracting fields from OCR text...');
      const extracted = {
        vendor: extract('vendor', text),
        total: extract('total', text),
        date: extract('date', text),
      };

      console.log('[5] Extracted fields:', extracted);
      setFields(extracted);

      console.log('\n[END] Process completed successfully.');
    } catch (err) {
      console.error('❌ ERROR during OCR/ONNX pipeline:', err);
    } finally {
      setLoading(false);
      console.log('==================================================');
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col p-6">
      <h1 className="mb-6 text-center text-4xl font-bold">
        📄 Smart Invoice Scanner
      </h1>

      <div className="card bg-base-200 p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">Upload Invoice</h2>

        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full"
          onChange={handleUpload}
        />

        {image && (
          <div className="mt-4">
            <h3 className="font-semibold">Preview</h3>
            <img
              src={image}
              alt="Invoice"
              className="mt-2 rounded-xl border shadow"
              width={350}
            />
          </div>
        )}

        <button
          className={`btn btn-primary mt-6 ${loading ? 'btn-disabled' : ''}`}
          onClick={runOCR}>
          {loading ? 'Processing...' : 'Run OCR + AI'}
        </button>
      </div>

      {ocrText && (
        <div className="card bg-base-200 mt-6 p-6 shadow-xl">
          <h2 className="text-xl font-semibold">OCR Output</h2>
          <pre className="mt-3 whitespace-pre-wrap">{ocrText}</pre>
        </div>
      )}

      {fields && (
        <div className="card bg-base-200 mt-6 p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-semibold">Extracted Fields</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="alert alert-info">
              <span>
                <b>Vendor:</b> {fields.vendor}
              </span>
            </div>
            <div className="alert alert-success">
              <span>
                <b>Total:</b> {fields.total}
              </span>
            </div>
            <div className="alert alert-warning">
              <span>
                <b>Date:</b> {fields.date}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
