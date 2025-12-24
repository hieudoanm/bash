(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,278,t=>{t.v("/invoice/_next/static/media/ort-wasm-simd-threaded.jsep.8d20f3cb.wasm")},3678,t=>{t.v("/invoice/_next/static/media/ort.bundle.min.1f5335f2.mjs")},1754,(t,i,r)=>{var a=function(t){"use strict";var i,r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(t,i,r){t[i]=r.value},s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,i,r){return Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[i]}try{d({},"")}catch(t){d=function(t,i,r){return t[i]=r}}function p(t,r,a,s){var o,u,l,d,p=Object.create((r&&r.prototype instanceof y?r:y).prototype);return n(p,"_invoke",{value:(o=t,u=a,l=new I(s||[]),d=h,function(t,r){if(d===f)throw Error("Generator is already running");if(d===m){if("throw"===t)throw r;return z()}for(l.method=t,l.arg=r;;){var a=l.delegate;if(a){var n=function t(r,a){var n=a.method,s=r.iterator[n];if(i===s)return(a.delegate=null,"throw"===n&&r.iterator.return&&(a.method="return",a.arg=i,t(r,a),"throw"===a.method))?g:("return"!==n&&(a.method="throw",a.arg=TypeError("The iterator does not provide a '"+n+"' method")),g);var o=c(s,r.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,g;var u=o.arg;return u?u.done?(a[r.resultName]=u.value,a.next=r.nextLoc,"return"!==a.method&&(a.method="next",a.arg=i),a.delegate=null,g):u:(a.method="throw",a.arg=TypeError("iterator result is not an object"),a.delegate=null,g)}(a,l);if(n){if(n===g)continue;return n}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(d===h)throw d=m,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);d=f;var s=c(o,u,l);if("normal"===s.type){if(d=l.done?m:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:l.done}}"throw"===s.type&&(d=m,l.method="throw",l.arg=s.arg)}})}),p}function c(t,i,r){try{return{type:"normal",arg:t.call(i,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var h="suspendedStart",f="executing",m="completed",g={};function y(){}function _(){}function b(){}var $={};d($,o,function(){return this});var v=Object.getPrototypeOf,w=v&&v(v(E([])));w&&w!==r&&a.call(w,o)&&($=w);var x=b.prototype=y.prototype=Object.create($);function C(t){["next","throw","return"].forEach(function(i){d(t,i,function(t){return this._invoke(i,t)})})}function S(t,i){var r;n(this,"_invoke",{value:function(n,s){function o(){return new i(function(r,o){!function r(n,s,o,u){var l=c(t[n],t,s);if("throw"===l.type)u(l.arg);else{var d=l.arg,p=d.value;return p&&"object"==typeof p&&a.call(p,"__await")?i.resolve(p.__await).then(function(t){r("next",t,o,u)},function(t){r("throw",t,o,u)}):i.resolve(p).then(function(t){d.value=t,o(d)},function(t){return r("throw",t,o,u)})}}(n,s,r,o)})}return r=r?r.then(o,o):o()}})}function k(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function T(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,s=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=i,r.done=!0,r};return s.next=s}}return{next:z}}function z(){return{value:i,done:!0}}return _.prototype=b,n(x,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:_,configurable:!0}),_.displayName=d(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var i="function"==typeof t&&t.constructor;return!!i&&(i===_||"GeneratorFunction"===(i.displayName||i.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(S.prototype),d(S.prototype,u,function(){return this}),t.AsyncIterator=S,t.async=function(i,r,a,n,s){void 0===s&&(s=Promise);var o=new S(p(i,r,a,n),s);return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},C(x),d(x,l,"Generator"),d(x,o,function(){return this}),d(x,"toString",function(){return"[object Generator]"}),t.keys=function(t){var i=Object(t),r=[];for(var a in i)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in i)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=E,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return u.type="throw",u.arg=t,r.next=a,n&&(r.method="next",r.arg=i),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],u=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),d=a.call(o,"finallyLoc");if(l&&d){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else if(d){if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,i){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=i&&i<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return(o.type=t,o.arg=i,s)?(this.method="next",this.next=s.finallyLoc,g):this.complete(o)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),g},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;T(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:E(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=i),g}},t}(i.exports);try{regeneratorRuntime=a}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}},3376,(t,i,r)=>{"use strict";i.exports=(t,i)=>`${t}-${i}-${Math.random().toString(16).slice(3,8)}`},5184,(t,i,r)=>{"use strict";let a=t.r(3376),n=0;i.exports=({id:t,action:i,payload:r={}})=>{let s=t;return void 0===s&&(s=a("Job",n),n+=1),{id:s,action:i,payload:r}}},1127,(t,i,r)=>{"use strict";let a=!1;r.logging=!1,r.setLogging=t=>{a=t},r.log=(...i)=>a?console.log.apply(t.e,i):null},645,(t,i,r)=>{"use strict";let a=t.r(5184),{log:n}=t.r(1127),s=t.r(3376),o=0;i.exports=()=>{let i=s("Scheduler",o),r={},u={},l=[];o+=1;let d=()=>Object.keys(r).length,p=()=>{if(0!==l.length){let t=Object.keys(r);for(let i=0;i<t.length;i+=1)if(void 0===u[t[i]]){l[0](r[t[i]]);break}}};return{addWorker:t=>(r[t.id]=t,n(`[${i}]: Add ${t.id}`),n(`[${i}]: Number of workers=${d()}`),p(),t.id),addJob:async(r,...s)=>{if(0===d())throw Error(`[${i}]: You need to have at least one worker before adding jobs`);return new Promise((o,d)=>{let c=a({action:r,payload:s});l.push(async i=>{l.shift(),u[i.id]=c;try{o(await i[r].apply(t.e,[...s,c.id]))}catch(t){d(t)}finally{delete u[i.id],p()}}),n(`[${i}]: Add ${c.id} to JobQueue`),n(`[${i}]: JobQueue length=${l.length}`),p()})},terminate:async()=>{Object.keys(r).forEach(async t=>{await r[t].terminate()}),l=[]},getQueueLen:()=>l.length,getNumWorkers:d}}},4440,(t,i,r)=>{"use strict";var a=t.i(5925);i.exports=t=>{let i={};return("undefined"!=typeof WorkerGlobalScope?i.type="webworker":"object"==typeof document?i.type="browser":"object"==typeof a.default&&(i.type="node"),void 0===t)?i:i[t]}},494,(t,i,r)=>{"use strict";let a="browser"===t.r(4440)("type")?t=>new URL(t,window.location.href).href:t=>t;i.exports=t=>{let i={...t};return["corePath","workerPath","langPath"].forEach(r=>{t[r]&&(i[r]=a(i[r]))}),i}},1065,(t,i,r)=>{"use strict";i.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},4003,t=>{t.v({name:"tesseract.js",version:"7.0.0",description:"Pure Javascript Multilingual OCR",main:"src/index.js",type:"commonjs",types:"src/index.d.ts",unpkg:"dist/tesseract.min.js",jsdelivr:"dist/tesseract.min.js",scripts:{start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser test:node:all","test:browser":"karma start karma.conf.js","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.mjs","test:node:all":"npm run test:node -- ./tests/*.test.mjs",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},browser:{"./src/worker/node/index.js":"./src/worker/browser/index.js"},author:"",contributors:["jeromewu"],license:"Apache-2.0",devDependencies:{"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","npm-run-all":"^4.1.5",karma:"^6.4.2","karma-chrome-launcher":"^3.2.0","karma-firefox-launcher":"^2.1.2","karma-mocha":"^2.0.1","karma-webpack":"^5.0.0",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},dependencies:{"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^7.0.0","wasm-feature-detect":"^1.8.0",zlibjs:"^0.3.1"},overrides:{"@rollup/pluginutils":"^5.0.2"},repository:{type:"git",url:"https://github.com/naptha/tesseract.js.git"},bugs:{url:"https://github.com/naptha/tesseract.js/issues"},homepage:"https://github.com/naptha/tesseract.js",collective:{type:"opencollective",url:"https://opencollective.com/tesseractjs"}})},3660,(t,i,r)=>{"use strict";i.exports={workerBlobURL:!0,logger:()=>{}}},2052,(t,i,r)=>{"use strict";let a=t.r(4003).version;i.exports={...t.r(3660),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${a}/dist/worker.min.js`}},1900,(t,i,r)=>{"use strict";i.exports=({workerPath:t,workerBlobURL:i})=>{let r;if(Blob&&URL&&i){let i=new Blob([`importScripts("${t}");`],{type:"application/javascript"});r=new Worker(URL.createObjectURL(i))}else r=new Worker(t);return r}},7706,(t,i,r)=>{"use strict";i.exports=t=>{t.terminate()}},8200,(t,i,r)=>{"use strict";i.exports=(t,i)=>{t.onmessage=({data:t})=>{i(t)}}},6283,(t,i,r)=>{"use strict";i.exports=async(t,i)=>{t.postMessage(i)}},3984,(t,i,r)=>{"use strict";let a=t=>new Promise((i,r)=>{let a=new FileReader;a.onload=()=>{i(a.result)},a.onerror=({target:{error:{code:t}}})=>{r(Error(`File could not be read! Code=${t}`))},a.readAsArrayBuffer(t)}),n=async t=>{let i=t;if(void 0===t)return"undefined";if("string"==typeof t)if(/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(t))i=atob(t.split(",")[1]).split("").map(t=>t.charCodeAt(0));else{let r=await fetch(t);i=await r.arrayBuffer()}else if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)"IMG"===t.tagName&&(i=await n(t.src)),"VIDEO"===t.tagName&&(i=await n(t.poster)),"CANVAS"===t.tagName&&await new Promise(r=>{t.toBlob(async t=>{i=await a(t),r()})});else if("undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas){let r=await t.convertToBlob();i=await a(r)}else(t instanceof File||t instanceof Blob)&&(i=await a(t));return new Uint8Array(i)};i.exports=n},8238,(t,i,r)=>{"use strict";let a=t.r(2052),n=t.r(1900),s=t.r(7706),o=t.r(8200);i.exports={defaultOptions:a,spawnWorker:n,terminateWorker:s,onMessage:o,send:t.r(6283),loadImage:t.r(3984)}},1164,(t,i,r)=>{"use strict";let a=t.r(494),n=t.r(5184),{log:s}=t.r(1127),o=t.r(3376),u=t.r(1065),{defaultOptions:l,spawnWorker:d,terminateWorker:p,onMessage:c,loadImage:h,send:f}=t.r(8238),m=0;i.exports=async(t="eng",i=u.LSTM_ONLY,r={},g={})=>{let y,_,b=o("Worker",m),{logger:$,errorHandler:v,...w}=a({...l,...r}),x={},C="string"==typeof t?t.split("+"):t,S=i,k=g,T=[u.DEFAULT,u.LSTM_ONLY].includes(i)&&!w.legacyCore,I=new Promise((t,i)=>{_=t,y=i}),E=d(w);E.onerror=t=>{y(t.message)},m+=1;let z=({id:t,action:i,payload:r})=>new Promise((a,n)=>{s(`[${b}]: Start ${t}, action=${i}`),x[`${i}-${t}`]={resolve:a,reject:n},f(E,{workerId:b,jobId:t,action:i,payload:r})}),A=(t,i)=>z(n({id:i,action:"loadLanguage",payload:{langs:t,options:{langPath:w.langPath,dataPath:w.dataPath,cachePath:w.cachePath,cacheMethod:w.cacheMethod,gzip:w.gzip,lstmOnly:[u.DEFAULT,u.LSTM_ONLY].includes(S)&&!w.legacyLang}}})),O=(t,i,r,a)=>z(n({id:a,action:"initialize",payload:{langs:t,oem:i,config:r}})),R=async(t,i={},r={text:!0},a)=>z(n({id:a,action:"recognize",payload:{image:await h(t),options:i,output:r}})),B=async(t,i)=>{if(T)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return z(n({id:i,action:"detect",payload:{image:await h(t)}}))},N=async()=>(null!==E&&(p(E),E=null),Promise.resolve());c(E,({workerId:t,jobId:i,status:r,action:a,data:n})=>{let o=`${a}-${i}`;if("resolve"===r)s(`[${t}]: Complete ${i}`),x[o].resolve({jobId:i,data:n}),delete x[o];else if("reject"===r)if(x[o].reject(n),delete x[o],"load"===a&&y(n),v)v(n);else throw Error(n);else"progress"===r&&$({...n,userJobId:i})});let M={id:b,worker:E,load:()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),writeText:(t,i,r)=>z(n({id:r,action:"FS",payload:{method:"writeFile",args:[t,i]}})),readText:(t,i)=>z(n({id:i,action:"FS",payload:{method:"readFile",args:[t,{encoding:"utf8"}]}})),removeFile:(t,i)=>z(n({id:i,action:"FS",payload:{method:"unlink",args:[t]}})),FS:(t,i,r)=>z(n({id:r,action:"FS",payload:{method:t,args:i}})),reinitialize:(t="eng",i,r,a)=>{if(T&&[u.TESSERACT_ONLY,u.TESSERACT_LSTM_COMBINED].includes(i))throw Error("Legacy model requested but code missing.");let n=i||S;S=n;let s=r||k;k=s;let o=("string"==typeof t?t.split("+"):t).filter(t=>!C.includes(t));return(C.push(...o),o.length>0)?A(o,a).then(()=>O(t,n,s,a)):O(t,n,s,a)},setParameters:(t={},i)=>z(n({id:i,action:"setParameters",payload:{params:t}})),recognize:R,detect:B,terminate:N};return z(n({id:void 0,action:"load",payload:{options:{lstmOnly:T,corePath:w.corePath,logging:w.logging}}})).then(()=>A(t)).then(()=>O(t,i,g)).then(()=>_(M)).catch(()=>{}),I}},7709,(t,i,r)=>{"use strict";let a=t.r(1164);i.exports={recognize:async(t,i,r)=>{let n=await a(i,1,r);return n.recognize(t).finally(async()=>{await n.terminate()})},detect:async(t,i)=>{let r=await a("osd",0,i);return r.detect(t).finally(async()=>{await r.terminate()})}}},6491,(t,i,r)=>{"use strict";i.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},2208,(t,i,r)=>{"use strict";i.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},3462,(t,i,r)=>{"use strict";t.r(1754);let a=t.r(645),n=t.r(1164),s=t.r(7709),o=t.r(6491),u=t.r(1065),l=t.r(2208),{setLogging:d}=t.r(1127);i.exports={languages:o,OEM:u,PSM:l,createScheduler:a,createWorker:n,setLogging:d,...s}},7820,t=>{"use strict";var i=t.i(8601);let r={get url(){return`file://${t.P("node_modules/.pnpm/onnxruntime-web@1.23.2/node_modules/onnxruntime-web/dist/ort.bundle.min.mjs")}`}};var a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v,w,x,C,S,k,T,I,E,z,A,O,R,B,N,M,D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,U=Object.getOwnPropertyNames,L=Object.prototype.hasOwnProperty,W=t.z,j=(t,i)=>()=>(t&&(i=t(t=0)),i),q=(t,i)=>{for(var r in i)D(t,r,{get:i[r],enumerable:!0})},G=t=>((t,i,r,a)=>{if(i&&"object"==typeof i||"function"==typeof i)for(let r of U(i))L.call(t,r)||void 0===r||D(t,r,{get:()=>i[r],enumerable:!(a=P(i,r))||a.enumerable});return t})(D({},"__esModule",{value:!0}),t),V=j(()=>{a=new Map,n=[],s=(t,i,r)=>{if(i&&"function"==typeof i.init&&"function"==typeof i.createInferenceSessionHandler){let s=a.get(t);if(void 0===s)a.set(t,{backend:i,priority:r});else{if(s.priority>r)return;if(s.priority===r&&s.backend!==i)throw Error(`cannot register backend "${t}" using priority ${r}`)}if(r>=0){let i=n.indexOf(t);-1!==i&&n.splice(i,1);for(let i=0;i<n.length;i++)if(a.get(n[i]).priority<=r)return void n.splice(i,0,t);n.push(t)}return}throw TypeError("not a valid backend")},o=async t=>{let i=a.get(t);if(!i)return"backend not found.";if(i.initialized)return i.backend;if(i.aborted)return i.error;{let r=!!i.initPromise;try{return r||(i.initPromise=i.backend.init(t)),await i.initPromise,i.initialized=!0,i.backend}catch(t){return r||(i.error=`${t}`,i.aborted=!0),i.error}finally{delete i.initPromise}}},u=async t=>{let i=t.executionProviders||[],r=i.map(t=>"string"==typeof t?t:t.name),a=0===r.length?n:r,s,u=[],l=new Set;for(let t of a){let i=await o(t);"string"==typeof i?u.push({name:t,err:i}):(s||(s=i),s===i&&l.add(t))}if(!s)throw Error(`no available backend found. ERR: ${u.map(t=>`[${t.name}] ${t.err}`).join(", ")}`);for(let{name:t,err:i}of u)r.includes(t)&&console.warn(`removing requested execution provider "${t}" from session options because it is not available: ${i}`);let d=i.filter(t=>l.has("string"==typeof t?t:t.name));return[s,new Proxy(t,{get:(t,i)=>"executionProviders"===i?d:Reflect.get(t,i)})]}}),H=j(()=>{V()}),F=j(()=>{l="1.23.2"}),K=j(()=>{F(),d="warning",Object.defineProperty(p={wasm:{},webgl:{},webgpu:{},versions:{common:l},set logLevel(e){if(void 0!==e){if("string"!=typeof e||-1===["verbose","info","warning","error","fatal"].indexOf(e))throw Error(`Unsupported logging level: ${e}`);d=e}},get logLevel(){return d}},"logLevel",{enumerable:!0})}),Z=j(()=>{K(),c=p}),X=j(()=>{h=(t,i)=>{let r="u">typeof document?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=t.dims[3],r.height=t.dims[2];let a=r.getContext("2d");if(null!=a){let n,s;i?.tensorLayout!==void 0&&"NHWC"===i.tensorLayout?(n=t.dims[2],s=t.dims[3]):(n=t.dims[3],s=t.dims[2]);let o=i?.format!==void 0?i.format:"RGB",u=i?.norm,l,d;void 0===u||void 0===u.mean?l=[255,255,255,255]:"number"==typeof u.mean?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],void 0!==u.mean[3]&&(l[3]=u.mean[3])),void 0===u||void 0===u.bias?d=[0,0,0,0]:"number"==typeof u.bias?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],void 0!==u.bias[3]&&(d[3]=u.bias[3]));let p=s*n,c=0,h=p,f=2*p,m=-1;"RGBA"===o?(c=0,h=p,f=2*p,m=3*p):"RGB"===o?(c=0,h=p,f=2*p):"RBG"===o&&(c=0,f=p,h=2*p);for(let i=0;i<s;i++)for(let r=0;r<n;r++)a.fillStyle="rgba("+(t.data[c++]-d[0])*l[0]+","+(t.data[h++]-d[1])*l[1]+","+(t.data[f++]-d[2])*l[2]+","+(-1===m?255:(t.data[m++]-d[3])*l[3])+")",a.fillRect(r,i,1,1);if("toDataURL"in r)return r.toDataURL();throw Error("toDataURL is not supported")}throw Error("Can not access image data")},f=(t,i)=>{let r="u">typeof document?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(null!=r){let n,s,o;i?.tensorLayout!==void 0&&"NHWC"===i.tensorLayout?(n=t.dims[2],s=t.dims[1],o=t.dims[3]):(n=t.dims[3],s=t.dims[2],o=t.dims[1]);let u=void 0!==i&&void 0!==i.format?i.format:"RGB",l=i?.norm,d,p;void 0===l||void 0===l.mean?d=[255,255,255,255]:"number"==typeof l.mean?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],void 0!==l.mean[3]&&(d[3]=l.mean[3])),void 0===l||void 0===l.bias?p=[0,0,0,0]:"number"==typeof l.bias?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],void 0!==l.bias[3]&&(p[3]=l.bias[3]));let c=s*n;if(void 0!==i&&(void 0!==i.format&&4===o&&"RGBA"!==i.format||3===o&&"RGB"!==i.format&&"BGR"!==i.format))throw Error("Tensor format doesn't match input tensor dims");let h=0,f=1,m=2,g=3,y=0,_=c,b=2*c,$=-1;"RGBA"===u?(y=0,_=c,b=2*c,$=3*c):"RGB"===u?(y=0,_=c,b=2*c):"RBG"===u&&(y=0,b=c,_=2*c),a=r.createImageData(n,s);for(let i=0;i<s*n;h+=4,f+=4,m+=4,g+=4,i++)a.data[h]=(t.data[y++]-p[0])*d[0],a.data[f]=(t.data[_++]-p[1])*d[1],a.data[m]=(t.data[b++]-p[2])*d[2],a.data[g]=-1===$?255:(t.data[$++]-p[3])*d[3]}else throw Error("Can not access image data");return a}}),Q=j(()=>{ee(),m=(t,i)=>{if(void 0===t)throw Error("Image buffer must be defined");if(void 0===i.height||void 0===i.width)throw Error("Image height and width must be defined");if("NHWC"===i.tensorLayout)throw Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=i,n=i.norm??{mean:255,bias:0},s,o;s="number"==typeof n.mean?[n.mean,n.mean,n.mean,n.mean]:[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],o="number"==typeof n.bias?[n.bias,n.bias,n.bias,n.bias]:[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=void 0!==i.format?i.format:"RGBA",l=void 0!==i.tensorFormat&&void 0!==i.tensorFormat?i.tensorFormat:"RGB",d=r*a,p=new Float32Array("RGBA"===l?4*d:3*d),c=4,h=0,f=1,m=2,g=3,y=0,_=d,b=2*d,$=-1;"RGB"===u&&(c=3,h=0,f=1,m=2,g=-1),"RGBA"===l?$=3*d:"RBG"===l?(y=0,b=d,_=2*d):"BGR"===l&&(b=0,_=d,y=2*d);for(let i=0;i<d;i++,h+=c,m+=c,f+=c,g+=c)p[y++]=(t[h]+o[0])/s[0],p[_++]=(t[f]+o[1])/s[1],p[b++]=(t[m]+o[2])/s[2],-1!==$&&-1!==g&&(p[$++]=(t[g]+o[3])/s[3]);return"RGBA"===l?new T("float32",p,[1,4,r,a]):new T("float32",p,[1,3,r,a])},g=async(t,i)=>{let r="u">typeof HTMLImageElement&&t instanceof HTMLImageElement,a="u">typeof ImageData&&t instanceof ImageData,n="u">typeof ImageBitmap&&t instanceof ImageBitmap,s="string"==typeof t,o,u=i??{},l=()=>{if("u">typeof document)return document.createElement("canvas");if("u">typeof OffscreenCanvas)return new OffscreenCanvas(1,1);throw Error("Canvas is not supported")},d=t=>"u">typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||t instanceof OffscreenCanvas?t.getContext("2d"):null;if(r){let r=l();r.width=t.width,r.height=t.height;let a=d(r);if(null!=a){let r=t.height,n=t.width;if(void 0!==i&&void 0!==i.resizedHeight&&void 0!==i.resizedWidth&&(r=i.resizedHeight,n=i.resizedWidth),void 0!==i){if(u=i,void 0!==i.tensorFormat)throw Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=r,u.width=n}else u.tensorFormat="RGBA",u.height=r,u.width=n;a.drawImage(t,0,0),o=a.getImageData(0,0,n,r).data}else throw Error("Can not access image data")}else if(a){let r,a;if(void 0!==i&&void 0!==i.resizedWidth&&void 0!==i.resizedHeight?(r=i.resizedHeight,a=i.resizedWidth):(r=t.height,a=t.width),void 0!==i&&(u=i),u.format="RGBA",u.height=r,u.width=a,void 0!==i){let i=l();i.width=a,i.height=r;let n=d(i);if(null!=n)n.putImageData(t,0,0),o=n.getImageData(0,0,a,r).data;else throw Error("Can not access image data")}else o=t.data}else if(n){if(void 0===i)throw Error("Please provide image config with format for Imagebitmap");let r=l();r.width=t.width,r.height=t.height;let a=d(r);if(null!=a){let i=t.height,r=t.width;return a.drawImage(t,0,0,r,i),o=a.getImageData(0,0,r,i).data,u.height=i,u.width=r,m(o,u)}throw Error("Can not access image data")}else{if(s)return new Promise((i,r)=>{let a=l(),n=d(a);if(!t||!n)return r();let s=new Image;s.crossOrigin="Anonymous",s.src=t,s.onload=()=>{a.width=s.width,a.height=s.height,n.drawImage(s,0,0,a.width,a.height);let t=n.getImageData(0,0,a.width,a.height);u.height=a.height,u.width=a.width,i(m(t.data,u))}});throw Error("Input data provided is not supported - aborted tensor creation")}if(void 0!==o)return m(o,u);throw Error("Input data provided is not supported - aborted tensor creation")},y=(t,i)=>{let{width:r,height:a,download:n,dispose:s}=i;return new T({location:"texture",type:"float32",texture:t,dims:[1,a,r,4],download:n,dispose:s})},_=(t,i)=>{let{dataType:r,dims:a,download:n,dispose:s}=i;return new T({location:"gpu-buffer",type:r??"float32",gpuBuffer:t,dims:a,download:n,dispose:s})},b=(t,i)=>{let{dataType:r,dims:a,download:n,dispose:s}=i;return new T({location:"ml-tensor",type:r??"float32",mlTensor:t,dims:a,download:n,dispose:s})},$=(t,i,r)=>new T({location:"cpu-pinned",type:t,data:i,dims:r??[i.length]})}),Y=j(()=>{v=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),w=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),x=!1,C=()=>{if(!x){x=!0;let t="u">typeof BigInt64Array&&BigInt64Array.from,i="u">typeof BigUint64Array&&BigUint64Array.from,r=globalThis.Float16Array,a="u">typeof r&&r.from;t&&(v.set("int64",BigInt64Array),w.set(BigInt64Array,"int64")),i&&(v.set("uint64",BigUint64Array),w.set(BigUint64Array,"uint64")),a?(v.set("float16",r),w.set(r,"float16")):v.set("float16",Uint16Array)}}}),J=j(()=>{ee(),S=t=>{let i=1;for(let r=0;r<t.length;r++){let a=t[r];if("number"!=typeof a||!Number.isSafeInteger(a))throw TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);i*=a}return i},k=(t,i)=>{switch(t.location){case"cpu":return new T(t.type,t.data,i);case"cpu-pinned":return new T({location:"cpu-pinned",data:t.data,type:t.type,dims:i});case"texture":return new T({location:"texture",texture:t.texture,type:t.type,dims:i});case"gpu-buffer":return new T({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:i});case"ml-tensor":return new T({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:i});default:throw Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),ee=j(()=>{X(),Q(),Y(),J(),T=class{constructor(t,i,r){let a,n;if(C(),"object"==typeof t&&"location"in t)switch(this.dataLocation=t.location,a=t.type,n=t.dims,t.location){case"cpu-pinned":{let i=v.get(a);if(!i)throw TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(t.data instanceof i))throw TypeError(`buffer should be of type ${i.name}`);this.cpuData=t.data;break}case"texture":if("float32"!==a)throw TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break;case"gpu-buffer":if("float32"!==a&&"float16"!==a&&"int32"!==a&&"int64"!==a&&"uint32"!==a&&"uint8"!==a&&"bool"!==a&&"uint4"!==a&&"int4"!==a)throw TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break;case"ml-tensor":if("float32"!==a&&"float16"!==a&&"int32"!==a&&"int64"!==a&&"uint32"!==a&&"uint64"!==a&&"int8"!==a&&"uint8"!==a&&"bool"!==a&&"uint4"!==a&&"int4"!==a)throw TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if("string"==typeof t)if(a=t,o=r,"string"===t){if(!Array.isArray(i))throw TypeError("A string tensor's data must be a string array.");s=i}else{let r=v.get(t);if(void 0===r)throw TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(i)){if("float16"===t&&r===Uint16Array||"uint4"===t||"int4"===t)throw TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${r.name} as data.`);s="uint64"===t||"int64"===t?r.from(i,BigInt):r.from(i)}else if(i instanceof r)s=i;else if(i instanceof Uint8ClampedArray)if("uint8"===t)s=Uint8Array.from(i);else throw TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if("float16"===t&&i instanceof Uint16Array&&r!==Uint16Array)s=new globalThis.Float16Array(i.buffer,i.byteOffset,i.length);else throw TypeError(`A ${a} tensor's data must be type of ${r}`)}else if(o=i,Array.isArray(t)){if(0===t.length)throw TypeError("Tensor type cannot be inferred from an empty array.");let i=typeof t[0];if("string"===i)a="string",s=t;else if("boolean"===i)a="bool",s=Uint8Array.from(t);else throw TypeError(`Invalid element type of data array: ${i}.`)}else if(t instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(t);else{let i=w.get(t.constructor);if(void 0===i)throw TypeError(`Unsupported type for tensor data: ${t.constructor}.`);a=i,s=t}if(void 0===o)o=[s.length];else if(!Array.isArray(o))throw TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let s=S(n);if(this.cpuData&&s!==this.cpuData.length&&("uint4"!==a&&"int4"!==a||Math.ceil(s/2)!==this.cpuData.length))throw Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=s}static async fromImage(t,i){return g(t,i)}static fromTexture(t,i){return y(t,i)}static fromGpuBuffer(t,i){return _(t,i)}static fromMLTensor(t,i){return b(t,i)}static fromPinnedBuffer(t,i,r){return $(t,i,r)}toDataURL(t){return h(this,t)}toImageData(t){return f(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":if(!this.downloader)throw Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let i=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=i,t&&this.disposer&&(this.disposer(),this.disposer=void 0),i}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if("none"===this.dataLocation)throw Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw Error("Cannot reshape a tensor that owns GPU resource.");return k(this,t)}}}),et=j(()=>{ee(),I=T}),ei=j(()=>{K(),E=(t,i)=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&console.timeStamp(`${t}::ORT::${i}`)},z=(t,i)=>{let r=Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let n=0;n<r.length;n++){if(a&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${t}::${r[n].trim().split(" ")[1]}`;i&&(a+=`::${i}`),E("CPU",a);return}r[n].includes("TRACE_FUNC")&&(a=!0)}},A=t=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&z("BEGIN",t)},O=t=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&z("END",t)},R=t=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&console.time(`ORT::${t}`)},B=t=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&console.timeEnd(`ORT::${t}`)}}),er=j(()=>{V(),et(),ei(),N=class t{constructor(t){this.handler=t}async run(t,i,r){A(),R("InferenceSession.run");let a={},n={};if("object"!=typeof t||null===t||t instanceof I||Array.isArray(t))throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if("object"==typeof i){if(null===i)throw TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof I)throw TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(0===i.length)throw TypeError("'fetches' cannot be an empty array.");for(let t of(s=!1,i)){if("string"!=typeof t)throw TypeError("'fetches' must be a string array or an object.");if(-1===this.outputNames.indexOf(t))throw RangeError(`'fetches' contains invalid output name: ${t}.`);a[t]=null}if("object"==typeof r&&null!==r)n=r;else if("u">typeof r)throw TypeError("'options' must be an object.")}else{let t=!1,o=Object.getOwnPropertyNames(i);for(let r of this.outputNames)if(-1!==o.indexOf(r)){let n=i[r];(null===n||n instanceof I)&&(t=!0,s=!1,a[r]=n)}if(t){if("object"==typeof r&&null!==r)n=r;else if("u">typeof r)throw TypeError("'options' must be an object.")}else n=i}}else if("u">typeof i)throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let i of this.inputNames)if(typeof t[i]>"u")throw Error(`input '${i}' is missing in 'feeds'.`);if(s)for(let t of this.outputNames)a[t]=null;let o=await this.handler.run(t,a,n),u={};for(let t in o)if(Object.hasOwnProperty.call(o,t)){let i=o[t];i instanceof I?u[t]=i:u[t]=new I(i.type,i.data,i.dims)}return B("InferenceSession.run"),O(),u}async release(){return this.handler.dispose()}static async create(i,r,a,n){A(),R("InferenceSession.create");let s,o={};if("string"==typeof i){if(s=i,"object"==typeof r&&null!==r)o=r;else if("u">typeof r)throw TypeError("'options' must be an object.")}else if(i instanceof Uint8Array){if(s=i,"object"==typeof r&&null!==r)o=r;else if("u">typeof r)throw TypeError("'options' must be an object.")}else if(i instanceof ArrayBuffer||"u">typeof SharedArrayBuffer&&i instanceof SharedArrayBuffer){let t=0,u=i.byteLength;if("object"==typeof r&&null!==r)o=r;else if("number"==typeof r){if(!Number.isSafeInteger(t=r))throw RangeError("'byteOffset' must be an integer.");if(t<0||t>=i.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${i.byteLength}).`);if(u=i.byteLength-t,"number"==typeof a){if(!Number.isSafeInteger(u=a))throw RangeError("'byteLength' must be an integer.");if(u<=0||t+u>i.byteLength)throw RangeError(`'byteLength' is out of range (0, ${i.byteLength-t}].`);if("object"==typeof n&&null!==n)o=n;else if("u">typeof n)throw TypeError("'options' must be an object.")}else if("u">typeof a)throw TypeError("'byteLength' must be a number.")}else if("u">typeof r)throw TypeError("'options' must be an object.");s=new Uint8Array(i,t,u)}else throw TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await u(o),p=await l.createInferenceSessionHandler(s,d);return B("InferenceSession.create"),O(),new t(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ea=j(()=>{er(),M=N}),en=j(()=>{}),es=j(()=>{}),eo=j(()=>{}),eu=j(()=>{});q({},{InferenceSession:()=>M,TRACE:()=>E,TRACE_EVENT_BEGIN:()=>R,TRACE_EVENT_END:()=>B,TRACE_FUNC_BEGIN:()=>A,TRACE_FUNC_END:()=>O,Tensor:()=>I,env:()=>c,registerBackend:()=>s});var el=j(()=>{H(),Z(),ea(),et(),en(),es(),ei(),eo(),eu()}),ed=j(()=>{}),ep={};q(ep,{default:()=>eh});var ec,eh,ef=j(()=>{s3(),np(),nd(),(ec=globalThis.self?.name==="ort-wasm-proxy-worker")&&(self.onmessage=t=>{let{type:i,in:r}=t.data;try{switch(i){case"init-wasm":eR(r.wasm).then(()=>{sC(r).then(()=>{postMessage({type:i})},t=>{postMessage({type:i,err:t})})},t=>{postMessage({type:i,err:t})});break;case"init-ep":{let{epName:t,env:a}=r;sS(a,t).then(()=>{postMessage({type:i})},t=>{postMessage({type:i,err:t})});break}case"copy-from":{let{buffer:t}=r,a=sI(t);postMessage({type:i,out:a});break}case"create":{let{model:t,options:a}=r;sE(t,a).then(t=>{postMessage({type:i,out:t})},t=>{postMessage({type:i,err:t})});break}case"release":sz(r),postMessage({type:i});break;case"run":{let{sessionId:t,inputIndices:a,inputs:n,outputIndices:s,options:o}=r;sO(t,a,n,s,Array(s.length).fill(null),o).then(t=>{t.some(t=>"cpu"!==t[3])?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:t},sB([...n,...t]))},t=>{postMessage({type:i,err:t})});break}case"end-profiling":sR(r),postMessage({type:i})}}catch(t){postMessage({type:i,err:t})}}),eh=ec?null:t=>new Worker(t??e$,{type:"module",name:"ort-wasm-proxy-worker"})}),em={};q(em,{default:()=>ey});var eg,ey,e_,eb,e$,ev,ew,ex,eC,eS,ek,eT,eI,eE,ez,eA,eO,eR,eB,eN,eM,eD,eP,eU,eL,eW,ej,eq,eG,eV,eH,eF,eK,eZ,eX,eQ,eY,eJ,e0,e2,e1,e3,e4,e6,e8,e5,e9,e7,te,tt,ti,tr,ta,tn,ts,to,tu,tl,td,tp,tc,th,tf,tm,tg,ty,t_,tb,t$,tv,tw,tx,tC,tS,tk,tT,tI,tE,tz,tA,tO,tR,tB,tN,tM,tD,tP,tU,tL,tW,tj,tq,tG,tV,tH,tF,tK,tZ,tX,tQ,tY,tJ,t0,t2,t1,t3,t4,t6,t8,t5,t9,t7,ie,it,ii,ir,ia,is,io,iu,il,id,ip,ic,ih,im,ig,iy,i_,ib,i$,iv,iw,ix,iC,iS,ik,iT,iI,iE,iz,iA,iO,iR,iB,iN,iM,iD,iP,iU,iL,iW,ij,iq,iG,iV,iH,iF,iK,iZ,iX,iQ,iY,iJ,i0,i2,i1,i3,i4,i6,i8,i5,i9,i7,re,rt,ri,rr,ra,rn,rs,ro,ru,rl,rd,rp,rc,rh,rf,rm,rg,ry,r_,rb,r$,rv,rw,rx,rC,rS,rk,rT,rI,rE,rz,rA,rO,rR,rB,rN,rM,rD,rP,rU,rL,rW,rj,rq,rG,rV,rH,rF,rK,rZ,rX,rQ,rY,rJ,r0,r2,r1,r3,r4,r6,r8,r5,r9,r7,ae,at,ai,ar,aa,an,as,ao,au,al,ad,ap,ac,ah,af,am,ag,ay,a_,ab,a$,av,aw,ax,aC,aS,ak,aT,aI,aE,az,aA,aO,aR,aB,aN,aM,aD,aP,aU,aL,aW,aj,aq,aG,aV,aH,aF,aK,aZ,aX,aQ,aY,aJ,a0,a2,a1,a3,a4,a6,a8,a5,a9,a7,ne,nt,ni,nr,na,nn,ns,no,nu,nl=j(()=>{ey=eg=async function(i={}){var a,n,s=new Promise((t,i)=>{a=t,n=i}),o="object"==typeof window,u="u">typeof WorkerGlobalScope,l=u&&self.name?.startsWith("em-pthread");i.mountExternalData=(t,r)=>{t.startsWith("./")&&(t=t.substring(2)),(i.Fb||(i.Fb=new Map)).set(t,r)},i.unmountExternalData=()=>{delete i.Fb};var d=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let p=t=>async(...r)=>{try{if(i.Gb)throw Error("Session already started");let a=i.Gb={ec:r[0],errors:[]},n=await t(...r);if(i.Gb!==a)throw Error("Session mismatch");i.Kb?.flush();let s=a.errors;if(0<s.length){let t=await Promise.all(s);if(t=t.filter(t=>t),0<t.length)throw Error(t.join(`
`))}return n}finally{i.Gb=null}};i.jsepInit=(t,r)=>{if("webgpu"===t){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.Ab,i.$b,i.bc,i.Wb,i.Xb,i.ac]=r;let t=i.Kb;i.jsepRegisterBuffer=(i,r,a,n)=>t.registerBuffer(i,r,a,n),i.jsepGetBuffer=i=>t.getBuffer(i),i.jsepCreateDownloader=(i,r,a)=>t.createDownloader(i,r,a),i.jsepOnCreateSession=i=>{t.onCreateSession(i)},i.jsepOnReleaseSession=i=>{t.onReleaseSession(i)},i.jsepOnRunStart=i=>t.onRunStart(i),i.cc=(i,r)=>{t.upload(i,r)}}else if("webnn"===t){let t=r[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor,i.nc,i.webnnEnableTraceEvent]=r.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnRegisterMLContext=i.nc,i.webnnOnRunStart=i=>t.onRunStart(i),i.webnnOnRunEnd=t.onRunEnd.bind(t),i.webnnOnReleaseSession=i=>{t.onReleaseSession(i)},i.webnnCreateMLTensorDownloader=(i,r)=>t.createMLTensorDownloader(i,r),i.webnnRegisterMLTensor=(i,r,a,n)=>t.registerMLTensor(i,r,a,n),i.webnnCreateMLContext=i=>t.createMLContext(i),i.webnnRegisterMLConstant=(r,a,n,s,o,u)=>t.registerMLConstant(r,a,n,s,o,i.Fb,u),i.webnnRegisterGraphInput=t.registerGraphInput.bind(t),i.webnnIsGraphInput=t.isGraphInput.bind(t),i.webnnRegisterGraphOutput=t.registerGraphOutput.bind(t),i.webnnIsGraphOutput=t.isGraphOutput.bind(t),i.webnnCreateTemporaryTensor=t.createTemporaryTensor.bind(t),i.webnnIsGraphInputOutputTypeSupported=t.isGraphInputOutputTypeSupported.bind(t)}};let c=()=>{let t=(t,i,r)=>(...a)=>{let n=tI,s=i?.();a=t(...a);let o=i?.();return s!==o&&(t=o,r(s),i=r=null),tI!=n?new Promise((t,i)=>{tB={resolve:t,reject:i}}):a};(()=>{for(let r of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[r]=t(i[r],()=>i[r],t=>i[r]=t)})(),void 0!==p&&(i._OrtRun=p(i._OrtRun),i._OrtRunWithBinding=p(i._OrtRunWithBinding)),c=void 0};i.asyncInit=()=>{c?.()};var h,f,m=(t,i)=>{throw i},g=r.url,y="";if(o||u){try{y=new URL(".",g).href}catch{}u&&(f=t=>{var i=new XMLHttpRequest;return i.open("GET",t,!1),i.responseType="arraybuffer",i.send(null),new Uint8Array(i.response)}),h=async t=>{if(P(t))return new Promise((i,r)=>{var a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="arraybuffer",a.onload=()=>{200==a.status||0==a.status&&a.response?i(a.response):r(a.status)},a.onerror=r,a.send(null)});var i=await fetch(t,{credentials:"same-origin"});if(i.ok)return i.arrayBuffer();throw Error(i.status+" : "+i.url)}}var _,b,$,v,w,x,C,S,k,T,I,E,z,A,O,R=console.log.bind(console),B=console.error.bind(console),N=R,M=B,D=!1,P=t=>t.startsWith("file://");function U(){return b.buffer!=w.buffer&&K(),w}function L(){return b.buffer!=w.buffer&&K(),x}function W(){return b.buffer!=w.buffer&&K(),C}function j(){return b.buffer!=w.buffer&&K(),S}function q(){return b.buffer!=w.buffer&&K(),k}function G(){return b.buffer!=w.buffer&&K(),T}function V(){return b.buffer!=w.buffer&&K(),I}function H(){return b.buffer!=w.buffer&&K(),A}if(l){let t=function(r){try{var a=r.data,n=a.Db;if("load"===n){let r=[];for(let n of(self.onmessage=t=>r.push(t),self.startWorker=()=>{for(let i of(postMessage({Db:"loaded"}),r))t(i);self.onmessage=t},a.Sb))i[n]&&!i[n].proxy||(i[n]=(...t)=>{postMessage({Db:"callHandler",Rb:n,args:t})},"print"==n&&(N=i[n]),"printErr"==n&&(M=i[n]));b=a.kc,K(),O(a.lc)}else if("run"===n){eb(a.Bb),iF(a.Bb,0,0,1,0,0),eg(),tf(a.Bb),F||(iq(),F=!0);try{e$(a.hc,a.Jb)}catch(t){if("unwind"!=t)throw t}}else"setimmediate"!==a.target&&("checkMailbox"===n?F&&tm():n&&(M(`worker: received unknown command ${n}`),M(a)))}catch(t){throw iK(),t}};var F=!1;self.onunhandledrejection=t=>{throw t.reason||t},self.onmessage=t}function K(){var t=b.buffer;i.HEAP8=w=new Int8Array(t),C=new Int16Array(t),i.HEAPU8=x=new Uint8Array(t),S=new Uint16Array(t),i.HEAP32=k=new Int32Array(t),i.HEAPU32=T=new Uint32Array(t),I=new Float32Array(t),A=new Float64Array(t),E=new BigInt64Array(t),z=new BigUint64Array(t)}function Z(){l?startWorker(i):iW.Da()}var X,Q=0,Y=null;function J(){if(0==--Q&&Y){var t=Y;Y=null,t()}}function ee(t){throw M(t="Aborted("+t+")"),D=!0,t=new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info."),n(t),t}function et(){return{a:{L:iL,Aa:iU,b:ew,$:eC,A:eI,pa:eE,X:ez,Z:eA,qa:eO,na:eR,ga:eB,ma:eN,J:eM,Y:eD,V:eP,oa:eU,W:eL,va:ej,E:eX,Q:eY,O:e8,D:e5,v:e9,s:e7,P:ti,z:td,R:tp,ja:tc,T:tg,aa:t_,M:tb,F:t$,ia:tf,sa:tv,r:tC,Ca:tS,w:tD,o:tU,m:tj,c:e2,Ba:tq,n:tV,j:tH,u:tF,p:tK,f:tZ,t:tX,l:tQ,e:tY,k:tJ,h:t0,g:t2,d:t1,da:t3,ea:t5,fa:t9,ba:t7,ca:ie,N:ir,xa:ia,ua:io,i:id,C:ip,G:ic,ta:is,x:ih,ra:im,U:ig,q:ii,y:iy,K:i_,S:ib,za:ix,ya:iC,ka:iI,la:iE,_:ed,B:iz,I:iA,ha:iO,H:iB,a:b,wa:eu}}}class ei{name="ExitStatus";constructor(t){this.message=`Program terminated with exit(${t})`,this.status=t}}var er=t=>{t.terminate(),t.onmessage=()=>{}},ea=[],en=t=>{0==ep.length&&(e_(),ey(ep[0]));var i=ep.pop();if(!i)return 6;ec.push(i),ef[t.Bb]=i,i.Bb=t.Bb;var r={Db:"run",hc:t.fc,Jb:t.Jb,Bb:t.Bb};return i.postMessage(r,t.Nb),0},es=0,eo=(t,i,...r)=>{for(var a=2*r.length,n=i3(),s=i1(8*a),o=s>>>3,u=0;u<r.length;u++){var l=r[u];"bigint"==typeof l?(E[o+2*u]=1n,E[o+2*u+1]=l):(E[o+2*u]=0n,H()[o+2*u+1>>>0]=l)}return t=iZ(t,0,a,s,i),i2(n),t};function eu(t){if(l)return eo(0,1,t);if(v=t,!(0<es)){for(var i of ec)er(i);for(i of ep)er(i);ep=[],ec=[],ef={},D=!0}m(0,new ei(t))}function el(t){if(l)return eo(1,0,t);ed(t)}var ed=t=>{if(v=t,l)throw el(t),"unwind";eu(t)},ep=[],ec=[],eh=[],ef={},em=t=>{var i=t.Bb;delete ef[i],ep.push(t),ec.splice(ec.indexOf(t),1),t.Bb=0,iX(i)};function eg(){eh.forEach(t=>t())}var ey=t=>new Promise(r=>{t.onmessage=a=>{var n=(a=a.data).Db;if(a.Hb&&a.Hb!=iG()){var s=ef[a.Hb];s?s.postMessage(a,a.Nb):M(`Internal error! Worker sent a message "${n}" to target pthread ${a.Hb}, but that thread no longer exists!`)}else"checkMailbox"===n?tm():"spawnThread"===n?en(a):"cleanupThread"===n?em(ef[a.ic]):"loaded"===n?(t.loaded=!0,r(t)):"setimmediate"===a.target?t.postMessage(a):"callHandler"===n?i[a.Rb](...a.args):n&&M(`worker sent an unknown command ${n}`)},t.onerror=t=>{throw M(`worker sent an error! ${t.filename}:${t.lineno}: ${t.message}`),t};var a,n=[];for(a of[])i.propertyIsEnumerable(a)&&n.push(a);t.postMessage({Db:"load",Sb:n,kc:b,lc:$})});function e_(){var i=new Worker((URL,r.url>"file:"&&r.url<"file;"?new t.U(t.r(3678)):new URL(r.url)),{type:"module",workerData:"em-pthread",name:"em-pthread"});ep.push(i)}var eb=t=>{K();var i=G()[t+52>>>2>>>0];t=G()[t+56>>>2>>>0],i0(i,i-t),i2(i)},e$=(t,i)=>{es=0,t=i4(t,i),0<es?v=t:iQ(t)};class ev{constructor(t){this.Ib=t-24}}function ew(t,i,r){var a=new ev(t>>>=0);throw i>>>=0,r>>>=0,G()[a.Ib+16>>>2>>>0]=0,G()[a.Ib+4>>>2>>>0]=i,G()[a.Ib+8>>>2>>>0]=r,t}function ex(t,i,r,a){return l?eo(2,1,t,i,r,a):eC(t,i,r,a)}function eC(t,i,r,a){if(t>>>=0,r>>>=0,a>>>=0,void 0===d)return 6;var n=[];return l&&0===n.length?ex(t,i>>>=0,r,a):(t={fc:r,Bb:t,Jb:a,Nb:n},l?(t.Db="spawnThread",postMessage(t,n),0):en(t))}var eS="u">typeof TextDecoder?new TextDecoder:void 0,ek=(t,i=0,r=NaN)=>{var a=(i>>>=0)+r;for(r=i;t[r]&&!(r>=a);)++r;if(16<r-i&&t.buffer&&eS)return eS.decode(t.buffer instanceof ArrayBuffer?t.subarray(i,r):t.slice(i,r));for(a="";i<r;){var n=t[i++];if(128&n){var s=63&t[i++];if((224&n)==192)a+=String.fromCharCode((31&n)<<6|s);else{var o=63&t[i++];65536>(n=(240&n)==224?(15&n)<<12|s<<6|o:(7&n)<<18|s<<12|o<<6|63&t[i++])?a+=String.fromCharCode(n):(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n))}}else a+=String.fromCharCode(n)}return a},eT=(t,i)=>(t>>>=0)?ek(L(),t,i):"";function eI(t,i,r){return l?eo(3,1,t,i,r):0}function eE(t,i){if(l)return eo(4,1,t,i)}function ez(t,i){if(l)return eo(5,1,t,i)}function eA(t,i,r){if(l)return eo(6,1,t,i,r)}function eO(t,i,r){return l?eo(7,1,t,i,r):0}function eR(t,i){if(l)return eo(8,1,t,i)}function eB(t,i,r){if(l)return eo(9,1,t,i,r)}function eN(t,i,r,a){if(l)return eo(10,1,t,i,r,a)}function eM(t,i,r,a){if(l)return eo(11,1,t,i,r,a)}function eD(t,i,r,a){if(l)return eo(12,1,t,i,r,a)}function eP(t){if(l)return eo(13,1,t)}function eU(t,i){if(l)return eo(14,1,t,i)}function eL(t,i,r){if(l)return eo(15,1,t,i,r)}var eW,ej=()=>ee(""),eq=t=>{for(var i="";L()[t>>>0];)i+=eW[L()[t++>>>0]];return i},eG={},eV={},eH={},eF=i.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError"}};function eK(t,i,r={}){return function(t,i,r={}){var a=i.name;if(!t)throw new eF(`type "${a}" must have a positive integer typeid pointer`);if(eV.hasOwnProperty(t)){if(r.Tb)return;throw new eF(`Cannot register type '${a}' twice`)}eV[t]=i,delete eH[t],eG.hasOwnProperty(t)&&(i=eG[t],delete eG[t],i.forEach(t=>t()))}(t,i,r)}var eZ=(t,i,r)=>{switch(i){case 1:return r?t=>U()[t>>>0]:t=>L()[t>>>0];case 2:return r?t=>W()[t>>>1>>>0]:t=>j()[t>>>1>>>0];case 4:return r?t=>q()[t>>>2>>>0]:t=>G()[t>>>2>>>0];case 8:return r?t=>E[t>>>3]:t=>z[t>>>3];default:throw TypeError(`invalid integer width (${i}): ${t}`)}};function eX(t,i,r){r>>>=0,eK(t>>>=0,{name:i=eq(i>>>0),fromWireType:t=>t,toWireType:function(t,i){if("bigint"!=typeof i&&"number"!=typeof i)throw i=null===i?"null":"object"==(t=typeof i)||"array"===t||"function"===t?i.toString():""+i,TypeError(`Cannot convert "${i}" to ${this.name}`);return"number"==typeof i&&(i=BigInt(i)),i},Cb:eQ,readValueFromPointer:eZ(i,r,-1==i.indexOf("u")),Eb:null})}var eQ=8;function eY(t,i,r,a){eK(t>>>=0,{name:i=eq(i>>>0),fromWireType:function(t){return!!t},toWireType:function(t,i){return i?r:a},Cb:eQ,readValueFromPointer:function(t){return this.fromWireType(L()[t>>>0])},Eb:null})}var eJ=[],e0=[];function e2(t){9<(t>>>=0)&&0==--e0[t+1]&&(e0[t]=void 0,eJ.push(t))}var e1=t=>{if(!t)throw new eF(`Cannot use deleted val. handle = ${t}`);return e0[t]},e3=t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let i=eJ.pop()||e0.length;return e0[i]=t,e0[i+1]=1,i}};function e4(t){return this.fromWireType(G()[t>>>2>>>0])}var e6={name:"emscripten::val",fromWireType:t=>{var i=e1(t);return e2(t),i},toWireType:(t,i)=>e3(i),Cb:8,readValueFromPointer:e4,Eb:null};function e8(t){return eK(t>>>0,e6)}function e5(t,i,r){r>>>=0,eK(t>>>=0,{name:i=eq(i>>>0),fromWireType:t=>t,toWireType:(t,i)=>i,Cb:eQ,readValueFromPointer:((t,i)=>{switch(i){case 4:return function(t){return this.fromWireType(V()[t>>>2>>>0])};case 8:return function(t){return this.fromWireType(H()[t>>>3>>>0])};default:throw TypeError(`invalid float width (${i}): ${t}`)}})(i,r),Eb:null})}function e9(t,i,r,a,n){if(t>>>=0,r>>>=0,i=eq(i>>>0),-1===n&&(n=0xffffffff),n=t=>t,0===a){var s=32-8*r;n=t=>t<<s>>>s}var o=i.includes("unsigned")?function(t,i){return i>>>0}:function(t,i){return i};eK(t,{name:i,fromWireType:n,toWireType:o,Cb:eQ,readValueFromPointer:eZ(i,r,0!==a),Eb:null})}function e7(t,i,r){function a(t){var i=G()[t>>>2>>>0];return t=G()[t+4>>>2>>>0],new n(U().buffer,t,i)}var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][i];eK(t>>>=0,{name:r=eq(r>>>0),fromWireType:a,Cb:eQ,readValueFromPointer:a},{Tb:!0})}var te=(t,i,r)=>{var a=L();if(i>>>=0,0<r){var n=i;r=i+r-1;for(var s=0;s<t.length;++s){var o=t.charCodeAt(s);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++s)),127>=o){if(i>=r)break;a[i++>>>0]=o}else{if(2047>=o){if(i+1>=r)break;a[i++>>>0]=192|o>>6}else{if(65535>=o){if(i+2>=r)break;a[i++>>>0]=224|o>>12}else{if(i+3>=r)break;a[i++>>>0]=240|o>>18,a[i++>>>0]=128|o>>12&63}a[i++>>>0]=128|o>>6&63}a[i++>>>0]=128|63&o}}a[i>>>0]=0,t=i-n}else t=0;return t},tt=t=>{for(var i=0,r=0;r<t.length;++r){var a=t.charCodeAt(r);127>=a?i++:2047>=a?i+=2:55296<=a&&57343>=a?(i+=4,++r):i+=3}return i};function ti(t,i){eK(t>>>=0,{name:i=eq(i>>>0),fromWireType:function(t){for(var i,r=G()[t>>>2>>>0],a=t+4,n=a,s=0;s<=r;++s){var o=a+s;s!=r&&0!=L()[o>>>0]||(n=eT(n,o-n),void 0===i?i=n:(i+="\0",i+=n),n=o+1)}return iV(t),i},toWireType:function(t,i){i instanceof ArrayBuffer&&(i=new Uint8Array(i));var r="string"==typeof i;if(!(r||ArrayBuffer.isView(i)&&1==i.BYTES_PER_ELEMENT))throw new eF("Cannot pass non-string to std::string");var a=r?tt(i):i.length,n=iH(4+a+1),s=n+4;return G()[n>>>2>>>0]=a,r?te(i,s,a+1):L().set(i,s>>>0),null!==t&&t.push(iV,n),n},Cb:eQ,readValueFromPointer:e4,Eb(t){iV(t)}})}var tr="u">typeof TextDecoder?new TextDecoder("utf-16le"):void 0,ta=(t,i)=>{for(var r=t>>1,a=r+i/2;!(r>=a)&&j()[r>>>0];)++r;if(32<(r<<=1)-t&&tr)return tr.decode(L().slice(t,r));for(r="",a=0;!(a>=i/2);++a){var n=W()[t+2*a>>>1>>>0];if(0==n)break;r+=String.fromCharCode(n)}return r},tn=(t,i,r)=>{if(2>(r??=0x7fffffff))return 0;var a=i;r=(r-=2)<2*t.length?r/2:t.length;for(var n=0;n<r;++n){var s=t.charCodeAt(n);W()[i>>>1>>>0]=s,i+=2}return W()[i>>>1>>>0]=0,i-a},ts=t=>2*t.length,to=(t,i)=>{for(var r=0,a="";!(r>=i/4);){var n=q()[t+4*r>>>2>>>0];if(0==n)break;++r,65536<=n?(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n)):a+=String.fromCharCode(n)}return a},tu=(t,i,r)=>{if(i>>>=0,4>(r??=0x7fffffff))return 0;var a=i;r=a+r-4;for(var n=0;n<t.length;++n){var s=t.charCodeAt(n);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++n)),q()[i>>>2>>>0]=s,(i+=4)+4>r)break}return q()[i>>>2>>>0]=0,i-a},tl=t=>{for(var i=0,r=0;r<t.length;++r){var a=t.charCodeAt(r);55296<=a&&57343>=a&&++r,i+=4}return i};function td(t,i,r){if(t>>>=0,i>>>=0,r=eq(r>>>=0),2===i)var a=ta,n=tn,s=ts,o=t=>j()[t>>>1>>>0];else 4===i&&(a=to,n=tu,s=tl,o=t=>G()[t>>>2>>>0]);eK(t,{name:r,fromWireType:t=>{for(var r,n=G()[t>>>2>>>0],s=t+4,u=0;u<=n;++u){var l=t+4+u*i;u!=n&&0!=o(l)||(s=a(s,l-s),void 0===r?r=s:(r+="\0",r+=s),s=l+i)}return iV(t),r},toWireType:(t,a)=>{if("string"!=typeof a)throw new eF(`Cannot pass non-string to C++ string type ${r}`);var o=s(a),u=iH(4+o+i);return G()[u>>>2>>>0]=o/i,n(a,u+4,o+i),null!==t&&t.push(iV,u),u},Cb:eQ,readValueFromPointer:e4,Eb(t){iV(t)}})}function tp(t,i){eK(t>>>=0,{Ub:!0,name:i=eq(i>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function tc(t){iF(t>>>0,!u,1,!o,131072,!1),eg()}var th=t=>{if(!D)try{if(t(),!(0<es))try{l?iQ(v):ed(v)}catch(t){t instanceof ei||"unwind"==t||m(0,t)}}catch(t){t instanceof ei||"unwind"==t||m(0,t)}};function tf(t){t>>>=0,"function"==typeof Atomics.jc&&(Atomics.jc(q(),t>>>2,t).value.then(tm),t+=128,Atomics.store(q(),t>>>2,1))}var tm=()=>{var t=iG();t&&(tf(t),th(iJ))};function tg(t,i){(t>>>=0)==i>>>0?setTimeout(tm):l?postMessage({Hb:t,Db:"checkMailbox"}):(t=ef[t])&&t.postMessage({Db:"checkMailbox"})}var ty=[];function t_(t,i,r,a,n){for(i>>>=0,ty.length=a/=2,r=n>>>0>>>3,n=0;n<a;n++)ty[n]=E[r+2*n]?E[r+2*n+1]:H()[r+2*n+1>>>0];return(i?iP[i]:iD[t])(...ty)}var tb=()=>{es=0};function t$(t){t>>>=0,l?postMessage({Db:"cleanupThread",ic:t}):em(ef[t])}function tv(t){}var tw=(t,i)=>{var r=eV[t];if(void 0===r)throw r=eq(t=ij(t)),iV(t),new eF(`${i} has unknown type ${r}`);return r},tx=(t,i,r)=>{var a=[];return t=t.toWireType(a,r),a.length&&(G()[i>>>2>>>0]=e3(a)),t};function tC(t,i,r){return i>>>=0,r>>>=0,t=e1(t>>>0),tx(i=tw(i,"emval::as"),r,t)}function tS(t,i){return i>>>=0,t=e1(t>>>0),(i=tw(i,"emval::as")).toWireType(null,t)}var tk=t=>{try{t()}catch(t){ee(t)}},tT=0,tI=null,tE=0,tz=[],tA={},tO={},tR=0,tB=null,tN=[];function tM(t){return function(t){if(!D){if(0===tT){var i,r,a,n=!1,s=!1;t((t=0)=>{if(!D&&(tE=t,n=!0,s)){tT=2,tk(()=>i5(tI)),"u">typeof MainLoop&&MainLoop.Qb&&MainLoop.resume(),t=!1;try{var i,r=(i=iW[tO[i=q()[tI+8>>>2>>>0]]],--es,i())}catch(i){r=i,t=!0}var a=!1;if(!tI){var o=tB;o&&(tB=null,(t?o.reject:o.resolve)(r),a=!0)}if(t&&!a)throw r}}),s=!0,n||(tT=1,r=(i=iH(65548))+12,G()[i>>>2>>>0]=r,G()[i+4>>>2>>>0]=r+65536,void 0===(a=tA[r=tz[0]])&&(a=tR++,tA[r]=a,tO[a]=r),r=a,q()[i+8>>>2>>>0]=r,tI=i,"u">typeof MainLoop&&MainLoop.Qb&&MainLoop.pause(),tk(()=>i6(tI)))}else 2===tT?(tT=0,tk(i9),iV(tI),tI=null,tN.forEach(th)):ee(`invalid state: ${tT}`);return tE}}(i=>{t().then(i)})}function tD(t){return t>>>=0,tM(async()=>e3(await e1(t)))}var tP=[];function tU(t,i,r,a){return r>>>=0,a>>>=0,(t=tP[t>>>0])(null,i=e1(i>>>0),r,a)}var tL={},tW=t=>{var i=tL[t];return void 0===i?eq(t):i};function tj(t,i,r,a,n){return r>>>=0,a>>>=0,n>>>=0,(t=tP[t>>>0])(i=e1(i>>>0),i[r=tW(r)],a,n)}function tq(t,i){return i>>>=0,(t=e1(t>>>0))==e1(i)}var tG=()=>"object"==typeof globalThis?globalThis:Function("return this")();function tV(t){return 0==(t>>>=0)?e3(tG()):(t=tW(t),e3(tG()[t]))}function tH(t,i,r){var a,n,s=(i=((t,i)=>{for(var r=Array(t),a=0;a<t;++a)r[a]=tw(G()[i+4*a>>>2>>>0],`parameter ${a}`);return r})(t,i>>>0)).shift();t--;var o=`return function (obj, func, destructorsRef, args) {
`,u=0,l=[];0===r&&l.push("obj");for(var d=["retType"],p=[s],c=0;c<t;++c)l.push(`arg${c}`),d.push(`argType${c}`),p.push(i[c]),o+=`  var arg${c} = argType${c}.readValueFromPointer(args${u?"+"+u:""});
`,u+=i[c].Cb;return o+=`  var rv = ${1===r?"new func":"func.call"}(${l.join(", ")});
`,s.Ub||(d.push("emval_returnValue"),p.push(tx),o+=`  return emval_returnValue(retType, destructorsRef, rv);
`),a=Object.defineProperty(t=Function(...d,o+`};
`)(...p),"name",{value:r=`methodCaller<(${i.map(t=>t.name).join(", ")}) => ${s.name}>`}),n=tP.length,tP.push(a),n}function tF(t){return e3(i[t=tW(t>>>0)])}function tK(t,i){return i>>>=0,e3((t=e1(t>>>0))[i=e1(i)])}function tZ(t){9<(t>>>=0)&&(e0[t+1]+=1)}function tX(){return e3([])}function tQ(t){t=e1(t>>>0);for(var i=Array(t.length),r=0;r<t.length;r++)i[r]=t[r];return e3(i)}function tY(t){return e3(tW(t>>>0))}function tJ(){return e3({})}function t0(t){for(var i=e1(t>>>=0);i.length;){var r=i.pop();i.pop()(r)}e2(t)}function t2(t,i,r){i>>>=0,r>>>=0,t=e1(t>>>0),i=e1(i),r=e1(r),t[i]=r}function t1(t,i){return i>>>=0,e3(t=(t=tw(t>>>0,"_emval_take_value")).readValueFromPointer(i))}function t3(t,i){t=-0x20000000000000>t||0x20000000000000<t?NaN:Number(t),i>>>=0,t=new Date(1e3*t),q()[i>>>2>>>0]=t.getUTCSeconds(),q()[i+4>>>2>>>0]=t.getUTCMinutes(),q()[i+8>>>2>>>0]=t.getUTCHours(),q()[i+12>>>2>>>0]=t.getUTCDate(),q()[i+16>>>2>>>0]=t.getUTCMonth(),q()[i+20>>>2>>>0]=t.getUTCFullYear()-1900,q()[i+24>>>2>>>0]=t.getUTCDay(),t=(t.getTime()-Date.UTC(t.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,q()[i+28>>>2>>>0]=t}var t4=t=>t%4==0&&(t%100!=0||t%400==0),t6=[0,31,60,91,121,152,182,213,244,274,305,335],t8=[0,31,59,90,120,151,181,212,243,273,304,334];function t5(t,i){t=-0x20000000000000>t||0x20000000000000<t?NaN:Number(t),i>>>=0,t=new Date(1e3*t),q()[i>>>2>>>0]=t.getSeconds(),q()[i+4>>>2>>>0]=t.getMinutes(),q()[i+8>>>2>>>0]=t.getHours(),q()[i+12>>>2>>>0]=t.getDate(),q()[i+16>>>2>>>0]=t.getMonth(),q()[i+20>>>2>>>0]=t.getFullYear()-1900,q()[i+24>>>2>>>0]=t.getDay();var r=(t4(t.getFullYear())?t6:t8)[t.getMonth()]+t.getDate()-1|0;q()[i+28>>>2>>>0]=r,q()[i+36>>>2>>>0]=-60*t.getTimezoneOffset(),r=new Date(t.getFullYear(),6,1).getTimezoneOffset();var a=new Date(t.getFullYear(),0,1).getTimezoneOffset();t=0|(r!=a&&t.getTimezoneOffset()==Math.min(a,r)),q()[i+32>>>2>>>0]=t}function t9(t){t>>>=0;var i=new Date(q()[t+20>>>2>>>0]+1900,q()[t+16>>>2>>>0],q()[t+12>>>2>>>0],q()[t+8>>>2>>>0],q()[t+4>>>2>>>0],q()[t>>>2>>>0],0),r=q()[t+32>>>2>>>0],a=i.getTimezoneOffset(),n=new Date(i.getFullYear(),6,1).getTimezoneOffset(),s=new Date(i.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(s,n);return 0>r?q()[t+32>>>2>>>0]=+(n!=s&&o==a):0<r!=(o==a)&&(n=Math.max(s,n),i.setTime(i.getTime()+6e4*((0<r?o:n)-a))),q()[t+24>>>2>>>0]=i.getDay(),r=(t4(i.getFullYear())?t6:t8)[i.getMonth()]+i.getDate()-1|0,q()[t+28>>>2>>>0]=r,q()[t>>>2>>>0]=i.getSeconds(),q()[t+4>>>2>>>0]=i.getMinutes(),q()[t+8>>>2>>>0]=i.getHours(),q()[t+12>>>2>>>0]=i.getDate(),q()[t+16>>>2>>>0]=i.getMonth(),q()[t+20>>>2>>>0]=i.getYear(),BigInt(isNaN(t=i.getTime())?-1:t/1e3)}function t7(t,i,r,a,n,s,o){return l?eo(16,1,t,i,r,a,n,s,o):-52}function ie(t,i,r,a,n,s){if(l)return eo(17,1,t,i,r,a,n,s)}var it={},ii=()=>performance.timeOrigin+performance.now();function ir(t,i){if(l)return eo(18,1,t,i);if(it[t]&&(clearTimeout(it[t].id),delete it[t]),!i)return 0;var r=setTimeout(()=>{delete it[t],th(()=>iY(t,performance.timeOrigin+performance.now()))},i);return it[t]={id:r,rc:i},0}function ia(t,i,r,a){t>>>=0,i>>>=0,r>>>=0,a>>>=0;var n=new Date().getFullYear(),s=new Date(n,0,1).getTimezoneOffset(),o=Math.max(s,n=new Date(n,6,1).getTimezoneOffset());G()[t>>>2>>>0]=60*o,q()[i>>>2>>>0]=+(s!=n),t=(i=t=>{var i=Math.abs(t);return`UTC${0<=t?"-":"+"}${String(Math.floor(i/60)).padStart(2,"0")}${String(i%60).padStart(2,"0")}`})(s),i=i(n),n<s?(te(t,r,17),te(i,a,17)):(te(t,a,17),te(i,r,17))}var is=()=>Date.now();function io(t,i,r){return 0<=t&&3>=t?(t=0===t?Date.now():performance.timeOrigin+performance.now(),E[r>>>0>>>3]=BigInt(Math.round(1e6*t)),0):28}var iu=[],il=(t,i)=>{iu.length=0;for(var r;r=L()[t++>>>0];){var a=105!=r;i+=(a&=112!=r)&&i%8?4:0,iu.push(112==r?G()[i>>>2>>>0]:106==r?E[i>>>3]:105==r?q()[i>>>2>>>0]:H()[i>>>3>>>0]),i+=a?8:4}return iu};function id(t,i,r){return t>>>=0,i=il(i>>>0,r>>>0),iP[t](...i)}function ip(t,i,r){return t>>>=0,i=il(i>>>0,r>>>0),iP[t](...i)}var ic=()=>{};function ih(t,i){return M(eT(t>>>0,i>>>0))}var im=()=>{throw es+=1,"unwind"};function ig(){return 0xffff0000}var iy=()=>navigator.hardwareConcurrency;function i_(){return ee("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ib(t){t>>>=0;var i=L().length;if(t<=i||0xffff0000<t)return!1;for(var r=1;4>=r;r*=2){var a=i*(1+.2/r);a=Math.min(a,t+0x6000000);e:{a=(Math.min(0xffff0000,65536*Math.ceil(Math.max(t,a)/65536))-b.buffer.byteLength+65535)/65536|0;try{b.grow(a),K();var n=1;break e}catch{}n=void 0}if(n)return!0}return!1}var i$=()=>(ee("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),iv={},iw=t=>{t.forEach(t=>{var i=i$();i&&(iv[i]=t)})};function ix(){var t=Error().stack.toString().split(`
`);return"Error"==t[0]&&t.shift(),iw(t),iv.Mb=i$(),iv.dc=t,iv.Mb}function iC(t,i,r){if(t>>>=0,i>>>=0,iv.Mb==t)var a=iv.dc;else"Error"==(a=Error().stack.toString().split(`
`))[0]&&a.shift(),iw(a);for(var n=3;a[n]&&i$()!=t;)++n;for(t=0;t<r&&a[t+n];++t)q()[i+4*t>>>2>>>0]=i$();return t}var iS,ik={},iT=()=>{if(!iS){var t,i={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(t in ik)void 0===ik[t]?delete i[t]:i[t]=ik[t];var r=[];for(t in i)r.push(`${t}=${i[t]}`);iS=r}return iS};function iI(t,i){if(l)return eo(19,1,t,i);t>>>=0,i>>>=0;var r,a=0,n=0;for(r of iT()){var s=i+a;G()[t+n>>>2>>>0]=s,a+=te(r,s,1/0)+1,n+=4}return 0}function iE(t,i){if(l)return eo(20,1,t,i);t>>>=0,i>>>=0;var r=iT();for(var a of(G()[t>>>2>>>0]=r.length,t=0,r))t+=tt(a)+1;return G()[i>>>2>>>0]=t,0}function iz(t){return l?eo(21,1,t):52}function iA(t,i,r,a){return l?eo(22,1,t,i,r,a):52}function iO(t,i,r,a){return l?eo(23,1,t,i,r,a):70}var iR=[null,[],[]];function iB(t,i,r,a){if(l)return eo(24,1,t,i,r,a);i>>>=0,r>>>=0,a>>>=0;for(var n=0,s=0;s<r;s++){var o=G()[i>>>2>>>0],u=G()[i+4>>>2>>>0];i+=8;for(var d=0;d<u;d++){var p=L()[o+d>>>0],c=iR[t];0===p||10===p?((1===t?N:M)(ek(c)),c.length=0):c.push(p)}n+=u}return G()[a>>>2>>>0]=n,0}l||function(){for(var t=i.numThreads-1;t--;)e_();ea.push(()=>{var t;Q++,t=()=>J(),l?t():Promise.all(ep.map(ey)).then(t)})}();for(var iN=Array(256),iM=0;256>iM;++iM)iN[iM]=String.fromCharCode(iM);eW=iN,e0.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>e0.length/2-5-eJ.length,l||(b=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),K()),i.wasmBinary&&(_=i.wasmBinary),i.stackSave=()=>i3(),i.stackRestore=t=>i2(t),i.stackAlloc=t=>i1(t),i.setValue=function(t,i,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":case"i8":U()[t>>>0]=i;break;case"i16":W()[t>>>1>>>0]=i;break;case"i32":q()[t>>>2>>>0]=i;break;case"i64":E[t>>>3]=BigInt(i);break;case"float":V()[t>>>2>>>0]=i;break;case"double":H()[t>>>3>>>0]=i;break;case"*":G()[t>>>2>>>0]=i;break;default:ee(`invalid type for setValue: ${r}`)}},i.getValue=function(t,i="i8"){switch(i.endsWith("*")&&(i="*"),i){case"i1":case"i8":return U()[t>>>0];case"i16":return W()[t>>>1>>>0];case"i32":return q()[t>>>2>>>0];case"i64":return E[t>>>3];case"float":return V()[t>>>2>>>0];case"double":return H()[t>>>3>>>0];case"*":return G()[t>>>2>>>0];default:ee(`invalid type for getValue: ${i}`)}},i.UTF8ToString=eT,i.stringToUTF8=te,i.lengthBytesUTF8=tt;var iD=[eu,el,ex,eI,eE,ez,eA,eO,eR,eB,eN,eM,eD,eP,eU,eL,t7,ie,ir,iI,iE,iz,iA,iO,iB],iP={893836:(t,r,a,n,s)=>{if(void 0===i||!i.Fb)return 1;if((t=eT(Number(t>>>0))).startsWith("./")&&(t=t.substring(2)),!(t=i.Fb.get(t)))return 2;if(r=Number(r>>>0),a=Number(a>>>0),n=Number(n>>>0),r+a>t.byteLength)return 3;try{let o=t.subarray(r,r+a);switch(s){case 0:L().set(o,n>>>0);break;case 1:i.mc?i.mc(n,o):i.cc(n,o);break;default:return 4}return 0}catch{return 4}},894660:(t,r,a)=>{i.Pb(t,L().subarray(r>>>0,r+a>>>0))},894724:()=>i.oc(),894766:t=>{i.Ob(t)},894803:()=>{i.Wb()},894834:()=>{i.Xb()},894863:()=>{i.ac()},894888:t=>i.Vb(t),894921:t=>i.Zb(t),894953:(t,r,a)=>{i.Lb(Number(t),Number(r),Number(a),!0)},895016:(t,r,a)=>{i.Lb(Number(t),Number(r),Number(a))},895073:()=>"u">typeof wasmOffsetConverter,895130:t=>{i.Ab("Abs",t,void 0)},895181:t=>{i.Ab("Neg",t,void 0)},895232:t=>{i.Ab("Floor",t,void 0)},895285:t=>{i.Ab("Ceil",t,void 0)},895337:t=>{i.Ab("Reciprocal",t,void 0)},895395:t=>{i.Ab("Sqrt",t,void 0)},895447:t=>{i.Ab("Exp",t,void 0)},895498:t=>{i.Ab("Erf",t,void 0)},895549:t=>{i.Ab("Sigmoid",t,void 0)},895604:(t,r,a)=>{i.Ab("HardSigmoid",t,{alpha:r,beta:a})},895683:t=>{i.Ab("Log",t,void 0)},895734:t=>{i.Ab("Sin",t,void 0)},895785:t=>{i.Ab("Cos",t,void 0)},895836:t=>{i.Ab("Tan",t,void 0)},895887:t=>{i.Ab("Asin",t,void 0)},895939:t=>{i.Ab("Acos",t,void 0)},895991:t=>{i.Ab("Atan",t,void 0)},896043:t=>{i.Ab("Sinh",t,void 0)},896095:t=>{i.Ab("Cosh",t,void 0)},896147:t=>{i.Ab("Asinh",t,void 0)},896200:t=>{i.Ab("Acosh",t,void 0)},896253:t=>{i.Ab("Atanh",t,void 0)},896306:t=>{i.Ab("Tanh",t,void 0)},896358:t=>{i.Ab("Not",t,void 0)},896409:(t,r,a)=>{i.Ab("Clip",t,{min:r,max:a})},896478:t=>{i.Ab("Clip",t,void 0)},896530:(t,r)=>{i.Ab("Elu",t,{alpha:r})},896588:t=>{i.Ab("Gelu",t,void 0)},896640:t=>{i.Ab("Relu",t,void 0)},896692:(t,r)=>{i.Ab("LeakyRelu",t,{alpha:r})},896756:(t,r)=>{i.Ab("ThresholdedRelu",t,{alpha:r})},896826:(t,r)=>{i.Ab("Cast",t,{to:r})},896884:t=>{i.Ab("Add",t,void 0)},896935:t=>{i.Ab("Sub",t,void 0)},896986:t=>{i.Ab("Mul",t,void 0)},897037:t=>{i.Ab("Div",t,void 0)},897088:t=>{i.Ab("Pow",t,void 0)},897139:t=>{i.Ab("Equal",t,void 0)},897192:t=>{i.Ab("Greater",t,void 0)},897247:t=>{i.Ab("GreaterOrEqual",t,void 0)},897309:t=>{i.Ab("Less",t,void 0)},897361:t=>{i.Ab("LessOrEqual",t,void 0)},897420:(t,r,a,n,s)=>{i.Ab("ReduceMean",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},897595:(t,r,a,n,s)=>{i.Ab("ReduceMax",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},897769:(t,r,a,n,s)=>{i.Ab("ReduceMin",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},897943:(t,r,a,n,s)=>{i.Ab("ReduceProd",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},898118:(t,r,a,n,s)=>{i.Ab("ReduceSum",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},898292:(t,r,a,n,s)=>{i.Ab("ReduceL1",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},898465:(t,r,a,n,s)=>{i.Ab("ReduceL2",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},898638:(t,r,a,n,s)=>{i.Ab("ReduceLogSum",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},898815:(t,r,a,n,s)=>{i.Ab("ReduceSumSquare",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},898995:(t,r,a,n,s)=>{i.Ab("ReduceLogSumExp",t,{keepDims:!!r,noopWithEmptyAxes:!!a,axes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},899175:t=>{i.Ab("Where",t,void 0)},899228:(t,r,a)=>{i.Ab("Transpose",t,{perm:r?Array.from(q().subarray(Number(r)>>>0,Number(a)>>>0)):[]})},899352:(t,r,a,n)=>{i.Ab("DepthToSpace",t,{blocksize:r,mode:eT(a),format:n?"NHWC":"NCHW"})},899485:(t,r,a,n)=>{i.Ab("DepthToSpace",t,{blocksize:r,mode:eT(a),format:n?"NHWC":"NCHW"})},899618:(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g)=>{i.Ab("ConvTranspose",t,{format:d?"NHWC":"NCHW",autoPad:r,dilations:[a],group:n,kernelShape:[s],pads:[o,u],strides:[l],wIsConst:()=>!!U()[p>>>0],outputPadding:c?Array.from(q().subarray(Number(c)>>>0,Number(h)>>>0)):[],outputShape:f?Array.from(q().subarray(Number(f)>>>0,Number(m)>>>0)):[],activation:eT(g)})},900051:(t,r,a,n,s,o,u,l,d,p,c,h,f,m)=>{i.Ab("ConvTranspose",t,{format:l?"NHWC":"NCHW",autoPad:r,dilations:Array.from(q().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:n,kernelShape:Array.from(q().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),pads:Array.from(q().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(q().subarray(Number(u)>>>0,2+(Number(u)>>>0)>>>0)),wIsConst:()=>!!U()[d>>>0],outputPadding:p?Array.from(q().subarray(Number(p)>>>0,Number(c)>>>0)):[],outputShape:h?Array.from(q().subarray(Number(h)>>>0,Number(f)>>>0)):[],activation:eT(m)})},900712:(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g)=>{i.Ab("ConvTranspose",t,{format:d?"NHWC":"NCHW",autoPad:r,dilations:[a],group:n,kernelShape:[s],pads:[o,u],strides:[l],wIsConst:()=>!!U()[p>>>0],outputPadding:c?Array.from(q().subarray(Number(c)>>>0,Number(h)>>>0)):[],outputShape:f?Array.from(q().subarray(Number(f)>>>0,Number(m)>>>0)):[],activation:eT(g)})},901145:(t,r,a,n,s,o,u,l,d,p,c,h,f,m)=>{i.Ab("ConvTranspose",t,{format:l?"NHWC":"NCHW",autoPad:r,dilations:Array.from(q().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:n,kernelShape:Array.from(q().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),pads:Array.from(q().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(q().subarray(Number(u)>>>0,2+(Number(u)>>>0)>>>0)),wIsConst:()=>!!U()[d>>>0],outputPadding:p?Array.from(q().subarray(Number(p)>>>0,Number(c)>>>0)):[],outputShape:h?Array.from(q().subarray(Number(h)>>>0,Number(f)>>>0)):[],activation:eT(m)})},901806:(t,r)=>{i.Ab("GlobalAveragePool",t,{format:r?"NHWC":"NCHW"})},901897:(t,r,a,n,s,o,u,l,d,p,c,h,f,m)=>{i.Ab("AveragePool",t,{format:m?"NHWC":"NCHW",auto_pad:r,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(q().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(q().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(q().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(q().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},902376:(t,r)=>{i.Ab("GlobalAveragePool",t,{format:r?"NHWC":"NCHW"})},902467:(t,r,a,n,s,o,u,l,d,p,c,h,f,m)=>{i.Ab("AveragePool",t,{format:m?"NHWC":"NCHW",auto_pad:r,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(q().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(q().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(q().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(q().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},902946:(t,r)=>{i.Ab("GlobalMaxPool",t,{format:r?"NHWC":"NCHW"})},903033:(t,r,a,n,s,o,u,l,d,p,c,h,f,m)=>{i.Ab("MaxPool",t,{format:m?"NHWC":"NCHW",auto_pad:r,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(q().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(q().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(q().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(q().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},903508:(t,r)=>{i.Ab("GlobalMaxPool",t,{format:r?"NHWC":"NCHW"})},903595:(t,r,a,n,s,o,u,l,d,p,c,h,f,m)=>{i.Ab("MaxPool",t,{format:m?"NHWC":"NCHW",auto_pad:r,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(q().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(q().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(q().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(q().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},904070:(t,r,a,n,s)=>{i.Ab("Gemm",t,{alpha:r,beta:a,transA:n,transB:s})},904174:t=>{i.Ab("MatMul",t,void 0)},904228:(t,r,a,n)=>{i.Ab("ArgMax",t,{keepDims:!!r,selectLastIndex:!!a,axis:n})},904336:(t,r,a,n)=>{i.Ab("ArgMin",t,{keepDims:!!r,selectLastIndex:!!a,axis:n})},904444:(t,r)=>{i.Ab("Softmax",t,{axis:r})},904507:(t,r)=>{i.Ab("Concat",t,{axis:r})},904567:(t,r,a,n,s)=>{i.Ab("Split",t,{axis:r,numOutputs:a,splitSizes:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},904723:t=>{i.Ab("Expand",t,void 0)},904777:(t,r)=>{i.Ab("Gather",t,{axis:Number(r)})},904848:(t,r)=>{i.Ab("GatherElements",t,{axis:Number(r)})},904927:(t,r)=>{i.Ab("GatherND",t,{batch_dims:Number(r)})},905006:(t,r,a,n,s,o,u,l,d,p,c)=>{i.Ab("Resize",t,{antialias:r,axes:a?Array.from(q().subarray(Number(a)>>>0,Number(n)>>>0)):[],coordinateTransformMode:eT(s),cubicCoeffA:o,excludeOutside:u,extrapolationValue:l,keepAspectRatioPolicy:eT(d),mode:eT(p),nearestMode:eT(c)})},905368:(t,r,a,n,s,o,u)=>{i.Ab("Slice",t,{starts:r?Array.from(q().subarray(Number(r)>>>0,Number(a)>>>0)):[],ends:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[],axes:o?Array.from(q().subarray(Number(o)>>>0,Number(u)>>>0)):[]})},905632:t=>{i.Ab("Tile",t,void 0)},905684:(t,r,a)=>{i.Ab("InstanceNormalization",t,{epsilon:r,format:a?"NHWC":"NCHW"})},905798:(t,r,a)=>{i.Ab("InstanceNormalization",t,{epsilon:r,format:a?"NHWC":"NCHW"})},905912:t=>{i.Ab("Range",t,void 0)},905965:(t,r)=>{i.Ab("Einsum",t,{equation:eT(r)})},906046:(t,r,a,n,s)=>{i.Ab("Pad",t,{mode:r,value:a,pads:n?Array.from(q().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},906189:(t,r,a,n,s,o)=>{i.Ab("BatchNormalization",t,{epsilon:r,momentum:a,spatial:!!s,trainingMode:!!n,format:o?"NHWC":"NCHW"})},906358:(t,r,a,n,s,o)=>{i.Ab("BatchNormalization",t,{epsilon:r,momentum:a,spatial:!!s,trainingMode:!!n,format:o?"NHWC":"NCHW"})},906527:(t,r,a)=>{i.Ab("CumSum",t,{exclusive:Number(r),reverse:Number(a)})},906624:(t,r,a)=>{i.Ab("DequantizeLinear",t,{axis:r,blockSize:a})},906714:(t,r,a,n,s)=>{i.Ab("GridSample",t,{align_corners:r,mode:eT(a),padding_mode:eT(n),format:s?"NHWC":"NCHW"})},906884:(t,r,a,n,s)=>{i.Ab("GridSample",t,{align_corners:r,mode:eT(a),padding_mode:eT(n),format:s?"NHWC":"NCHW"})},907054:(t,r)=>{i.Ab("ScatterND",t,{reduction:eT(r)})},907139:(t,r,a,n,s,o,u,l,d)=>{i.Ab("Attention",t,{numHeads:r,isUnidirectional:a,maskFilterValue:n,scale:s,doRotary:o,qkvHiddenSizes:u?Array.from(q().subarray(Number(l)>>>0,Number(l)+u>>>0)):[],pastPresentShareBuffer:!!d})},907411:t=>{i.Ab("BiasAdd",t,void 0)},907466:t=>{i.Ab("BiasSplitGelu",t,void 0)},907527:t=>{i.Ab("FastGelu",t,void 0)},907583:(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y)=>{i.Ab("Conv",t,{format:h?"NHWC":"NCHW",auto_pad:r,dilations:a?Array.from(q().subarray(Number(a)>>>0,Number(n)>>>0)):[],group:s,kernel_shape:o?Array.from(q().subarray(Number(o)>>>0,Number(u)>>>0)):[],pads:l?Array.from(q().subarray(Number(l)>>>0,Number(d)>>>0)):[],strides:p?Array.from(q().subarray(Number(p)>>>0,Number(c)>>>0)):[],w_is_const:()=>!!U()[Number(f)>>>0],activation:eT(m),activation_params:g?Array.from(V().subarray(Number(g)>>>0,Number(y)>>>0)):[]})},908167:t=>{i.Ab("Gelu",t,void 0)},908219:(t,r,a,n,s,o,u,l,d)=>{i.Ab("GroupQueryAttention",t,{numHeads:r,kvNumHeads:a,scale:n,softcap:s,doRotary:o,rotaryInterleaved:u,smoothSoftmax:l,localWindowSize:d})},908436:(t,r,a,n)=>{i.Ab("LayerNormalization",t,{axis:r,epsilon:a,simplified:!!n})},908547:(t,r,a,n)=>{i.Ab("LayerNormalization",t,{axis:r,epsilon:a,simplified:!!n})},908658:(t,r,a,n,s,o)=>{i.Ab("MatMulNBits",t,{k:r,n:a,accuracyLevel:n,bits:s,blockSize:o})},908785:(t,r,a,n,s,o)=>{i.Ab("MultiHeadAttention",t,{numHeads:r,isUnidirectional:a,maskFilterValue:n,scale:s,doRotary:o})},908944:(t,r)=>{i.Ab("QuickGelu",t,{alpha:r})},909008:(t,r,a,n,s)=>{i.Ab("RotaryEmbedding",t,{interleaved:!!r,numHeads:a,rotaryEmbeddingDim:n,scale:s})},909147:(t,r,a)=>{i.Ab("SkipLayerNormalization",t,{epsilon:r,simplified:!!a})},909249:(t,r,a)=>{i.Ab("SkipLayerNormalization",t,{epsilon:r,simplified:!!a})},909351:(t,r,a,n)=>{i.Ab("GatherBlockQuantized",t,{gatherAxis:r,quantizeAxis:a,blockSize:n})},909472:t=>{i.$b(t)},909506:(t,r)=>i.bc(Number(t),Number(r),i.Gb.ec,i.Gb.errors)};function iU(t,r,a){return tM(async()=>{await i.Yb(Number(t),Number(r),Number(a))})}function iL(){return"u">typeof wasmOffsetConverter}var iW=await async function(){function r(t,i){var r,a,n;return iW=t.exports,r=iW=function(){var t={};for(let[i,r]of Object.entries(iW))t[i]="function"==typeof r?(...t)=>{tz.push(i);try{return r(...t)}finally{D||(tz.pop(),tI&&1===tT&&0===tz.length&&(tT=0,es+=1,tk(i8),"u">typeof Fibers&&Fibers.sc()))}}:r;return t}(),a=t=>i=>t(i)>>>0,n=t=>()=>t()>>>0,(r=Object.assign({},r)).Ea=a(r.Ea),r.gb=n(r.gb),r.ib=a(r.ib),r.tb=a(r.tb),r.ub=n(r.ub),r.__cxa_get_exception_ptr=a(r.__cxa_get_exception_ptr),iW=r,eh.push(iW.jb),$=i,J(),iW}Q++;var a=et();if(i.instantiateWasm)return new Promise(t=>{i.instantiateWasm(a,(i,a)=>{t(r(i,a))})});if(l)return new Promise(t=>{O=i=>{t(r(new WebAssembly.Instance(i,et()),i))}});X??=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new t.U(t.r(278)).href;try{var s=await async function(t){if(!_&&"function"==typeof WebAssembly.instantiateStreaming&&!P(X))try{var i=fetch(X,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(i,t)}catch(t){M(`wasm streaming compile failed: ${t}`),M("falling back to ArrayBuffer instantiation")}return async function(t,i){try{var r=await async function(t){if(!_)try{var i=await h(t);return new Uint8Array(i)}catch{}if(t==X&&_)t=new Uint8Array(_);else{if(!f)throw"both async and sync fetching of the wasm failed";t=f(t)}return t}(t);return await WebAssembly.instantiate(r,i)}catch(t){M(`failed to asynchronously prepare wasm: ${t}`),ee(t)}}(X,t)}(a);return r(s.instance,s.module)}catch(t){return n(t),Promise.reject(t)}}(),ij=t=>(ij=iW.Ea)(t),iq=()=>(iq=iW.Fa)();i._OrtInit=(t,r)=>(i._OrtInit=iW.Ga)(t,r),i._OrtGetLastError=(t,r)=>(i._OrtGetLastError=iW.Ha)(t,r),i._OrtCreateSessionOptions=(t,r,a,n,s,o,u,l,d,p)=>(i._OrtCreateSessionOptions=iW.Ia)(t,r,a,n,s,o,u,l,d,p),i._OrtAppendExecutionProvider=(t,r,a,n,s)=>(i._OrtAppendExecutionProvider=iW.Ja)(t,r,a,n,s),i._OrtAddFreeDimensionOverride=(t,r,a)=>(i._OrtAddFreeDimensionOverride=iW.Ka)(t,r,a),i._OrtAddSessionConfigEntry=(t,r,a)=>(i._OrtAddSessionConfigEntry=iW.La)(t,r,a),i._OrtReleaseSessionOptions=t=>(i._OrtReleaseSessionOptions=iW.Ma)(t),i._OrtCreateSession=(t,r,a)=>(i._OrtCreateSession=iW.Na)(t,r,a),i._OrtReleaseSession=t=>(i._OrtReleaseSession=iW.Oa)(t),i._OrtGetInputOutputCount=(t,r,a)=>(i._OrtGetInputOutputCount=iW.Pa)(t,r,a),i._OrtGetInputOutputMetadata=(t,r,a,n)=>(i._OrtGetInputOutputMetadata=iW.Qa)(t,r,a,n),i._OrtFree=t=>(i._OrtFree=iW.Ra)(t),i._OrtCreateTensor=(t,r,a,n,s,o)=>(i._OrtCreateTensor=iW.Sa)(t,r,a,n,s,o),i._OrtGetTensorData=(t,r,a,n,s)=>(i._OrtGetTensorData=iW.Ta)(t,r,a,n,s),i._OrtReleaseTensor=t=>(i._OrtReleaseTensor=iW.Ua)(t),i._OrtCreateRunOptions=(t,r,a,n)=>(i._OrtCreateRunOptions=iW.Va)(t,r,a,n),i._OrtAddRunConfigEntry=(t,r,a)=>(i._OrtAddRunConfigEntry=iW.Wa)(t,r,a),i._OrtReleaseRunOptions=t=>(i._OrtReleaseRunOptions=iW.Xa)(t),i._OrtCreateBinding=t=>(i._OrtCreateBinding=iW.Ya)(t),i._OrtBindInput=(t,r,a)=>(i._OrtBindInput=iW.Za)(t,r,a),i._OrtBindOutput=(t,r,a,n)=>(i._OrtBindOutput=iW._a)(t,r,a,n),i._OrtClearBoundOutputs=t=>(i._OrtClearBoundOutputs=iW.$a)(t),i._OrtReleaseBinding=t=>(i._OrtReleaseBinding=iW.ab)(t),i._OrtRunWithBinding=(t,r,a,n,s)=>(i._OrtRunWithBinding=iW.bb)(t,r,a,n,s),i._OrtRun=(t,r,a,n,s,o,u,l)=>(i._OrtRun=iW.cb)(t,r,a,n,s,o,u,l),i._OrtEndProfiling=t=>(i._OrtEndProfiling=iW.db)(t),i._JsepOutput=(t,r,a)=>(i._JsepOutput=iW.eb)(t,r,a),i._JsepGetNodeName=t=>(i._JsepGetNodeName=iW.fb)(t);var iG=()=>(iG=iW.gb)(),iV=i._free=t=>(iV=i._free=iW.hb)(t),iH=i._malloc=t=>(iH=i._malloc=iW.ib)(t),iF=(t,i,r,a,n,s)=>(iF=iW.kb)(t,i,r,a,n,s),iK=()=>(iK=iW.lb)(),iZ=(t,i,r,a,n)=>(iZ=iW.mb)(t,i,r,a,n),iX=t=>(iX=iW.nb)(t),iQ=t=>(iQ=iW.ob)(t),iY=(t,i)=>(iY=iW.pb)(t,i),iJ=()=>(iJ=iW.qb)(),i0=(t,i)=>(i0=iW.rb)(t,i),i2=t=>(i2=iW.sb)(t),i1=t=>(i1=iW.tb)(t),i3=()=>(i3=iW.ub)(),i4=i.dynCall_ii=(t,r)=>(i4=i.dynCall_ii=iW.vb)(t,r);i.dynCall_vii=(t,r,a)=>(i.dynCall_vii=iW.dynCall_vii)(t,r,a),i.dynCall_iiiii=(t,r,a,n,s)=>(i.dynCall_iiiii=iW.dynCall_iiiii)(t,r,a,n,s),i.dynCall_iii=(t,r,a)=>(i.dynCall_iii=iW.dynCall_iii)(t,r,a),i.dynCall_iiiiii=(t,r,a,n,s,o)=>(i.dynCall_iiiiii=iW.dynCall_iiiiii)(t,r,a,n,s,o),i.dynCall_iiiiiiii=(t,r,a,n,s,o,u,l)=>(i.dynCall_iiiiiiii=iW.dynCall_iiiiiiii)(t,r,a,n,s,o,u,l),i.dynCall_iiiiiii=(t,r,a,n,s,o,u)=>(i.dynCall_iiiiiii=iW.dynCall_iiiiiii)(t,r,a,n,s,o,u),i.dynCall_vi=(t,r)=>(i.dynCall_vi=iW.dynCall_vi)(t,r),i.dynCall_iiii=(t,r,a,n)=>(i.dynCall_iiii=iW.dynCall_iiii)(t,r,a,n),i.dynCall_i=t=>(i.dynCall_i=iW.dynCall_i)(t),i.dynCall_viiiiiiii=(t,r,a,n,s,o,u,l,d)=>(i.dynCall_viiiiiiii=iW.dynCall_viiiiiiii)(t,r,a,n,s,o,u,l,d),i.dynCall_viii=(t,r,a,n)=>(i.dynCall_viii=iW.dynCall_viii)(t,r,a,n),i.dynCall_viijj=(t,r,a,n,s)=>(i.dynCall_viijj=iW.dynCall_viijj)(t,r,a,n,s),i.dynCall_viiiiii=(t,r,a,n,s,o,u)=>(i.dynCall_viiiiii=iW.dynCall_viiiiii)(t,r,a,n,s,o,u),i.dynCall_viiii=(t,r,a,n,s)=>(i.dynCall_viiii=iW.dynCall_viiii)(t,r,a,n,s),i.dynCall_viiiii=(t,r,a,n,s,o)=>(i.dynCall_viiiii=iW.dynCall_viiiii)(t,r,a,n,s,o),i.dynCall_vfiii=(t,r,a,n,s)=>(i.dynCall_vfiii=iW.dynCall_vfiii)(t,r,a,n,s),i.dynCall_viiiiff=(t,r,a,n,s,o,u)=>(i.dynCall_viiiiff=iW.dynCall_viiiiff)(t,r,a,n,s,o,u),i.dynCall_viiiiiff=(t,r,a,n,s,o,u,l)=>(i.dynCall_viiiiiff=iW.dynCall_viiiiiff)(t,r,a,n,s,o,u,l),i.dynCall_ffff=(t,r,a,n)=>(i.dynCall_ffff=iW.dynCall_ffff)(t,r,a,n),i.dynCall_viiff=(t,r,a,n,s)=>(i.dynCall_viiff=iW.dynCall_viiff)(t,r,a,n,s),i.dynCall_fffffff=(t,r,a,n,s,o,u)=>(i.dynCall_fffffff=iW.dynCall_fffffff)(t,r,a,n,s,o,u),i.dynCall_jjjjjjj=(t,r,a,n,s,o,u)=>(i.dynCall_jjjjjjj=iW.dynCall_jjjjjjj)(t,r,a,n,s,o,u),i.dynCall_jjjjjj=(t,r,a,n,s,o)=>(i.dynCall_jjjjjj=iW.dynCall_jjjjjj)(t,r,a,n,s,o),i.dynCall_iijjii=(t,r,a,n,s,o)=>(i.dynCall_iijjii=iW.dynCall_iijjii)(t,r,a,n,s,o),i.dynCall_viiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m)=>(i.dynCall_viiiiiiiiiiiii=iW.dynCall_viiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m),i.dynCall_viiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c)=>(i.dynCall_viiiiiiiiii=iW.dynCall_viiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c),i.dynCall_viiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h)=>(i.dynCall_viiiiiiiiiii=iW.dynCall_viiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h),i.dynCall_viiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f)=>(i.dynCall_viiiiiiiiiiii=iW.dynCall_viiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f),i.dynCall_viiiiiiiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$)=>(i.dynCall_viiiiiiiiiiiiiiiiii=iW.dynCall_viiiiiiiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$),i.dynCall_viiiiiiiii=(t,r,a,n,s,o,u,l,d,p)=>(i.dynCall_viiiiiiiii=iW.dynCall_viiiiiiiii)(t,r,a,n,s,o,u,l,d,p),i.dynCall_viiiiiiiiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v)=>(i.dynCall_viiiiiiiiiiiiiiiiiii=iW.dynCall_viiiiiiiiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v),i.dynCall_viiiiiii=(t,r,a,n,s,o,u,l)=>(i.dynCall_viiiiiii=iW.dynCall_viiiiiii)(t,r,a,n,s,o,u,l),i.dynCall_viiiiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y)=>(i.dynCall_viiiiiiiiiiiiiii=iW.dynCall_viiiiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y),i.dynCall_jiji=(t,r,a,n)=>(i.dynCall_jiji=iW.dynCall_jiji)(t,r,a,n),i.dynCall_v=t=>(i.dynCall_v=iW.dynCall_v)(t),i.dynCall_iidiiii=(t,r,a,n,s,o,u)=>(i.dynCall_iidiiii=iW.dynCall_iidiiii)(t,r,a,n,s,o,u),i.dynCall_iiiiiiiii=(t,r,a,n,s,o,u,l,d)=>(i.dynCall_iiiiiiiii=iW.dynCall_iiiiiiiii)(t,r,a,n,s,o,u,l,d),i.dynCall_iiij=(t,r,a,n)=>(i.dynCall_iiij=iW.dynCall_iiij)(t,r,a,n),i.dynCall_iiiiiiiiii=(t,r,a,n,s,o,u,l,d,p)=>(i.dynCall_iiiiiiiiii=iW.dynCall_iiiiiiiiii)(t,r,a,n,s,o,u,l,d,p),i.dynCall_iiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f)=>(i.dynCall_iiiiiiiiiiiii=iW.dynCall_iiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f),i.dynCall_iiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c)=>(i.dynCall_iiiiiiiiiii=iW.dynCall_iiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c),i.dynCall_ji=(t,r)=>(i.dynCall_ji=iW.dynCall_ji)(t,r),i.dynCall_iijii=(t,r,a,n,s)=>(i.dynCall_iijii=iW.dynCall_iijii)(t,r,a,n,s),i.dynCall_vij=(t,r,a)=>(i.dynCall_vij=iW.dynCall_vij)(t,r,a),i.dynCall_viiijii=(t,r,a,n,s,o,u)=>(i.dynCall_viiijii=iW.dynCall_viiijii)(t,r,a,n,s,o,u),i.dynCall_viijiiiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b)=>(i.dynCall_viijiiiiiiiiiiiiii=iW.dynCall_viijiiiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b),i.dynCall_viiiji=(t,r,a,n,s,o)=>(i.dynCall_viiiji=iW.dynCall_viiiji)(t,r,a,n,s,o),i.dynCall_fiii=(t,r,a,n)=>(i.dynCall_fiii=iW.dynCall_fiii)(t,r,a,n),i.dynCall_viijii=(t,r,a,n,s,o)=>(i.dynCall_viijii=iW.dynCall_viijii)(t,r,a,n,s,o),i.dynCall_viij=(t,r,a,n)=>(i.dynCall_viij=iW.dynCall_viij)(t,r,a,n),i.dynCall_jiij=(t,r,a,n)=>(i.dynCall_jiij=iW.dynCall_jiij)(t,r,a,n),i.dynCall_fi=(t,r)=>(i.dynCall_fi=iW.dynCall_fi)(t,r),i.dynCall_fii=(t,r,a)=>(i.dynCall_fii=iW.dynCall_fii)(t,r,a),i.dynCall_jii=(t,r,a)=>(i.dynCall_jii=iW.dynCall_jii)(t,r,a),i.dynCall_dii=(t,r,a)=>(i.dynCall_dii=iW.dynCall_dii)(t,r,a),i.dynCall_fiiii=(t,r,a,n,s)=>(i.dynCall_fiiii=iW.dynCall_fiiii)(t,r,a,n,s),i.dynCall_fif=(t,r,a)=>(i.dynCall_fif=iW.dynCall_fif)(t,r,a),i.dynCall_jfi=(t,r,a)=>(i.dynCall_jfi=iW.dynCall_jfi)(t,r,a),i.dynCall_viiiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g)=>(i.dynCall_viiiiiiiiiiiiii=iW.dynCall_viiiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g),i.dynCall_viiiiiiiiiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v,w)=>(i.dynCall_viiiiiiiiiiiiiiiiiiii=iW.dynCall_viiiiiiiiiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v,w),i.dynCall_viiiiiiiiiiiiiiii=(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_)=>(i.dynCall_viiiiiiiiiiiiiiii=iW.dynCall_viiiiiiiiiiiiiiii)(t,r,a,n,s,o,u,l,d,p,c,h,f,m,g,y,_),i.dynCall_iif=(t,r,a)=>(i.dynCall_iif=iW.dynCall_iif)(t,r,a),i.dynCall_jiiii=(t,r,a,n,s)=>(i.dynCall_jiiii=iW.dynCall_jiiii)(t,r,a,n,s),i.dynCall_jiii=(t,r,a,n)=>(i.dynCall_jiii=iW.dynCall_jiii)(t,r,a,n),i.dynCall_viif=(t,r,a,n)=>(i.dynCall_viif=iW.dynCall_viif)(t,r,a,n),i.dynCall_viiij=(t,r,a,n,s)=>(i.dynCall_viiij=iW.dynCall_viiij)(t,r,a,n,s),i.dynCall_viiiijii=(t,r,a,n,s,o,u,l)=>(i.dynCall_viiiijii=iW.dynCall_viiiijii)(t,r,a,n,s,o,u,l),i.dynCall_iiiiij=(t,r,a,n,s,o)=>(i.dynCall_iiiiij=iW.dynCall_iiiiij)(t,r,a,n,s,o),i.dynCall_iiiiid=(t,r,a,n,s,o)=>(i.dynCall_iiiiid=iW.dynCall_iiiiid)(t,r,a,n,s,o),i.dynCall_iiiiijj=(t,r,a,n,s,o,u)=>(i.dynCall_iiiiijj=iW.dynCall_iiiiijj)(t,r,a,n,s,o,u),i.dynCall_iiiiiijj=(t,r,a,n,s,o,u,l)=>(i.dynCall_iiiiiijj=iW.dynCall_iiiiiijj)(t,r,a,n,s,o,u,l);var i6=t=>(i6=iW.wb)(t),i8=()=>(i8=iW.xb)(),i5=t=>(i5=iW.yb)(t),i9=()=>(i9=iW.zb)();return function t(){if(0<Q)Y=t;else if(l)a(i),Z();else{for(;0<ea.length;)ea.shift()(i);0<Q?Y=t:(i.calledRun=!0,D||(Z(),a(i)))}}(),i.PTR_SIZE=4,s},globalThis.self?.name?.startsWith("em-pthread")&&eg()}),nd=j(()=>{ed(),e_=typeof location>"u"?void 0:location.origin,eb=r.url>"file:"&&r.url<"file;",e$=eb?(URL,new URL(new t.U(t.r(3678)).href,e_).href):r.url,ev=()=>{if(e$&&!e$.startsWith("blob:"))return e$.substring(0,e$.lastIndexOf("/")+1)},ew=(t,i)=>{try{let r=i??e$;return(r?new URL(t,r):new URL(t)).origin===e_}catch{return!1}},ex=async t=>{let i=await (await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(i)},eC=async t=>(await import(t)).default,eS=(ef(),G(ep)).default,ek=async()=>{if(!e$)throw Error("Failed to load proxy worker: cannot determine the script source URL.");if(ew(e$))return[void 0,eS()];let t=await ex(e$);return[t,eS(t)]},eT=(nl(),G(em)).default,eI=async(t,i,r,a)=>{let n=eT&&!(t||i);if(n)if(e$)n=ew(e$);else if(a&&!r)n=!0;else throw Error("cannot determine the script source URL.");if(n)return[void 0,eT];{let a,n,s="ort-wasm-simd-threaded.jsep.mjs",o=t??((t,i)=>{let r=i??e$;try{return(r?new URL(t,r):new URL(t)).href}catch{return}})(s,i),u=r&&o&&!ew(o,i),l=u?await ex(o):o??(a=s,n=i,`${n??"./"}${a}`);return[u?l:void 0,await eC(l)]}}}),np=j(()=>{nd(),ez=!1,eA=!1,eO=!1,eR=async t=>{if(ez)return Promise.resolve();if(eA)throw Error("multiple calls to 'initializeWebAssembly()' detected.");if(eO)throw Error("previous call to 'initializeWebAssembly()' failed.");eA=!0;let i=t.initTimeout,r=t.numThreads;if(!1!==t.simd){if("relaxed"===t.simd){if(!(()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}})())throw Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!(()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}})())throw Error("WebAssembly SIMD is not supported in the current environment.")}let a=(()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return"u">typeof MessageChannel&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}})();r>1&&!a&&("u">typeof self&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=r=1);let n=t.wasmPaths,s="string"==typeof n?n:void 0,o=n?.mjs,u=o?.href??o,l=n?.wasm,d=l?.href??l,p=t.wasmBinary,[c,h]=await eI(u,s,r>1,!!p||!!d),f=!1,m=[];if(i>0&&m.push(new Promise(t=>{setTimeout(()=>{f=!0,t()},i)})),m.push(new Promise((t,i)=>{let a={numThreads:r};if(p)a.wasmBinary=p;else if(d||s)a.locateFile=t=>d??s+t;else if(u&&0!==u.indexOf("blob:"))a.locateFile=t=>new URL(t,u).href;else if(c){let t=ev();t&&(a.locateFile=i=>t+i)}h(a).then(i=>{eA=!1,ez=!0,eE=i,t(),c&&URL.revokeObjectURL(c)},t=>{eA=!1,eO=!0,i(t)})})),await Promise.race(m),f)throw Error(`WebAssembly backend initializing failed due to timeout: ${i}ms`)},eB=()=>{if(ez&&eE)return eE;throw Error("WebAssembly is not initialized yet.")}}),nc=j(()=>{np(),eN=(t,i)=>{let r=eB(),a=r.lengthBytesUTF8(t)+1,n=r._malloc(a);return r.stringToUTF8(t,n,a),i.push(n),n},eM=(t,i,r,a)=>{if("object"==typeof t&&null!==t){if(r.has(t))throw Error("Circular reference in options");r.add(t)}Object.entries(t).forEach(([t,n])=>{let s=i?i+t:t;if("object"==typeof n)eM(n,s+".",r,a);else if("string"==typeof n||"number"==typeof n)a(s,n.toString());else if("boolean"==typeof n)a(s,n?"1":"0");else throw Error(`Can't handle extra config type: ${typeof n}`)})},eD=t=>{let i=eB(),r=i.stackSave();try{let r=i.PTR_SIZE,a=i.stackAlloc(2*r);i._OrtGetLastError(a,a+r);let n=Number(i.getValue(a,4===r?"i32":"i64")),s=i.getValue(a+r,"*"),o=s?i.UTF8ToString(s):"";throw Error(`${t} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{i.stackRestore(r)}}}),nh=j(()=>{np(),nc(),eP=t=>{let i=eB(),r=0,a=[],n=t||{};try{if(t?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if("number"!=typeof t.logSeverityLevel||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw Error(`log severity level is not valid: ${t.logSeverityLevel}`);if(t?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if("number"!=typeof t.logVerbosityLevel||!Number.isInteger(t.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);t?.terminate===void 0&&(n.terminate=!1);let s=0;return t?.tag!==void 0&&(s=eN(t.tag,a)),r=i._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),0===r&&eD("Can't create run options."),t?.extra!==void 0&&eM(t.extra,"",new WeakSet,(t,n)=>{let s=eN(t,a),o=eN(n,a);0!==i._OrtAddRunConfigEntry(r,s,o)&&eD(`Can't set a run config entry: ${t} - ${n}.`)}),[r,a]}catch(t){throw 0!==r&&i._OrtReleaseRunOptions(r),a.forEach(t=>i._free(t)),t}}}),nf=j(()=>{np(),nc(),eU=(t,i,r,a)=>{let n=eN(i,a),s=eN(r,a);0!==eB()._OrtAddSessionConfigEntry(t,n,s)&&eD(`Can't set a session config entry: ${i} - ${r}.`)},eL=async(t,i,r)=>{for(let a of i){let i="string"==typeof a?a:a.name,n=[];switch(i){case"webnn":if(i="WEBNN","string"!=typeof a){let i=a?.deviceType;i&&eU(t,"deviceType",i,r)}break;case"webgpu":if(i="JS","string"!=typeof a&&a?.preferredLayout){if("NCHW"!==a.preferredLayout&&"NHWC"!==a.preferredLayout)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);eU(t,"preferredLayout",a.preferredLayout,r)}break;case"wasm":case"cpu":continue;default:throw Error(`not supported execution provider: ${i}`)}let s=eN(i,r),o=n.length,u=0,l=0;if(o>0){u=eB()._malloc(o*eB().PTR_SIZE),r.push(u),l=eB()._malloc(o*eB().PTR_SIZE),r.push(l);for(let t=0;t<o;t++)eB().setValue(u+t*eB().PTR_SIZE,n[t][0],"*"),eB().setValue(l+t*eB().PTR_SIZE,n[t][1],"*")}await eB()._OrtAppendExecutionProvider(t,s,u,l,o)!==0&&eD(`Can't append execution provider: ${i}.`)}},eW=async t=>{var i;let r,a=eB(),n=0,s=[],o=t||{};(i=o).extra||(i.extra={}),i.extra.session||(i.extra.session={}),(r=i.extra.session).use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),i.executionProviders&&i.executionProviders.some(t=>("string"==typeof t?t:t.name)==="webgpu")&&(i.enableMemPattern=!1);try{let t=(t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw Error(`unsupported graph optimization level: ${t}`)}})(o.graphOptimizationLevel??"all"),i=(t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw Error(`unsupported execution mode: ${t}`)}})(o.executionMode??"sequential"),r="string"==typeof o.logId?eN(o.logId,s):0,u=o.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw Error(`log severity level is not valid: ${u}`);let l=o.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw Error(`log verbosity level is not valid: ${l}`);let d="string"==typeof o.optimizedModelFilePath?eN(o.optimizedModelFilePath,s):0;if(n=a._OrtCreateSessionOptions(t,!!o.enableCpuMemArena,!!o.enableMemPattern,i,!!o.enableProfiling,0,r,u,l,d),0===n&&eD("Can't create session options."),o.executionProviders&&await eL(n,o.executionProviders,s),void 0!==o.enableGraphCapture){if("boolean"!=typeof o.enableGraphCapture)throw Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);eU(n,"enableGraphCapture",o.enableGraphCapture.toString(),s)}if(o.freeDimensionOverrides)for(let[t,i]of Object.entries(o.freeDimensionOverrides)){if("string"!=typeof t)throw Error(`free dimension override name must be a string: ${t}`);if("number"!=typeof i||!Number.isInteger(i)||i<0)throw Error(`free dimension override value must be a non-negative integer: ${i}`);let r=eN(t,s);0!==a._OrtAddFreeDimensionOverride(n,r,i)&&eD(`Can't set a free dimension override: ${t} - ${i}.`)}return void 0!==o.extra&&eM(o.extra,"",new WeakSet,(t,i)=>{eU(n,t,i,s)}),[n,s]}catch(t){throw 0!==n&&0!==a._OrtReleaseSessionOptions(n)&&eD("Can't release session options."),s.forEach(t=>a._free(t)),t}}}),nm=j(()=>{ej=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw Error(`unsupported data type: ${t}`)}},eq=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw Error(`unsupported data type: ${t}`)}},eG=(t,i)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],a="number"==typeof i?i:i.reduce((t,i)=>t*i,1);return r>0?Math.ceil(a*r):void 0},eV=t=>{switch(t){case"float16":return"u">typeof Float16Array&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":case"bool":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw Error(`unsupported type: ${t}`)}},eH=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw Error(`unsupported logging level: ${t}`)}},eF=t=>"float32"===t||"float16"===t||"int32"===t||"int64"===t||"uint32"===t||"uint8"===t||"bool"===t||"uint4"===t||"int4"===t,eK=t=>"float32"===t||"float16"===t||"int32"===t||"int64"===t||"uint32"===t||"uint64"===t||"int8"===t||"uint8"===t||"bool"===t||"uint4"===t||"int4"===t,eZ=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw Error(`unsupported data location: ${t}`)}}}),ng=j(()=>{ed(),eX=async t=>{if("string"!=typeof t)return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t);{let i=await fetch(t);if(!i.ok)throw Error(`failed to load external data file: ${t}`);let r=i.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<0x40000000)return new Uint8Array(await i.arrayBuffer());{if(!i.body)throw Error(`failed to load external data file: ${t}, no response body.`);let r=i.body.getReader(),n;try{n=new ArrayBuffer(a)}catch(t){if(t instanceof RangeError){let t=Math.ceil(a/65536);n=new WebAssembly.Memory({initial:t,maximum:t}).buffer}else throw t}let s=0;for(;;){let{done:t,value:i}=await r.read();if(t)break;let a=i.byteLength;new Uint8Array(n,s,a).set(i),s+=a}return new Uint8Array(n,0,a)}}}}),ny=j(()=>{nm(),eQ=["V","I","W","E","F"],e0=(t,i)=>{eY=t,eJ=i},e2=(...t)=>{eJ&&((t,i)=>{var r,a;let n=eH(t);n>=eH(eY)&&(r=n,a="function"==typeof i?i():i,console.log(`[${eQ[r]},${new Date().toISOString()}]${a}`))})(...t)}}),n_=j(()=>{e1=class{static calcMatMulShape(t,i){return t[1]!==i[0]?void 0:[t[0],i[1]]}},e3=class{static calcShape(t,i,r=!1){let a=t.length,n=i.length;if(0===a)return i;if(0===n)return t;let s=Math.max(t.length,i.length),o=Array(s);if(r){if(a<2||n<2)return;let r=e1.calcMatMulShape([t[a-2],t[a-1]],[i[n-2],i[n-1]]);if(void 0===r)return;[o[s-2],o[s-1]]=r}for(let u=r?3:1;u<=s;u++){let r=a-u<0?1:t[a-u],l=n-u<0?1:i[n-u];if(r!==l&&r>1&&l>1)return;let d=Math.max(r,l);if(r&&l)o[s-u]=Math.max(r,l);else{if(d>1)return;o[s-u]=0}}return o}static isValidBroadcast(t,i){let r=t.length,a=i.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(1!==t[r-n]&&t[r-n]!==i[a-n])return!1;return!0}},e4=class t{static size(i){return t.getSizeFromDimensionRange(i,0,i.length)}static convertShape(t,i=4){let r=t.length;if(0===r)return[];let a=Array(r),n=r-1;for(;n>=0;){if(t[n]%i==0){a[n]=t[n]/i;break}if(i%t[n]!=0)throw Error("cannot convert shape");a[n]=1,i/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(i,r){if(r<0||r>i.length)throw Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${i.length} dimensions.`);return t.getSizeFromDimensionRange(i,r,i.length)}static sizeToDimension(i,r){if(r<0||r>i.length)throw Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${i.length} dimensions.`);return t.getSizeFromDimensionRange(i,0,r)}static getSizeFromDimensionRange(t,i,r){let a=1;for(let n=i;n<r;n++){if(t[n]<0)throw Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let i=t.length;if(0===i)return[];if(1===i)return[1];let r=Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let a=i-3;a>=0;--a)r[a]=r[a+1]*t[a+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(i=>t[i]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((t,a)=>t+i[a]+i[a+r])}static areEqual(t,i){return t.length===i.length&&t.every((t,r)=>t===i[r])}},e6=class t{static adjustPoolAttributes(t,i,r,a,n,s){if(!t&&r.length!==i.length-2)throw Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let t=0;t<i.length-2;t++)t>=r.length?r.push(i[t+2]):r[t]=i[t+2];for(let t=0;t<r.length;t++)if(t<a.length){if(a[t]<0)throw Error("strides should be greater than or equal to 1")}else a.push(1);for(let t=0;t<r.length;t++)if(t<n.length){if(n[t]<0)throw Error("dilations should be greater than or equal to 1")}else n.push(1);for(let t=0;t<2*r.length;t++)if(t<s.length){if(s[t]<0)throw Error("pad should be greater than or equal to 1")}else s.push(0);for(let t=0;t<r.length;t++){if(r[t]<=0)throw Error("kernel shapes need to be greater than 0");if(s[t]>=r[t]||s[t+r.length]>=r[t])throw Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(i,r,a,n,s,o,u){if(u){if(s.length!==2*(i.length-2))throw Error("length of pads should be twice the length of data dimensions");if(r.length!==i.length-2)throw Error("length of strides should be the length of data dimensions");if(n.length!==i.length-2)throw Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<i.length-2;l++)t.adjustPadAndReturnShape(i[l+(o?1:2)],r[l],a[l],n[l],s,l,l+i.length-2,u)}}static computePoolOutputShape(i,r,a,n,s,o,u){if(r.length<=0)throw Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return t.computeShapeHelper(i,r,l,a,n,s,o,u),l}static computeConvOutputShape(i,r,a,n,s,o,u){if(i.length<=0||r.length<=0)throw Error("invalid input tensor dims or invalid filter tensor dims");let l=[i[0],r[0]];return t.computeShapeHelper(!1,i,l,a,n,s,o,u),l}static computeShapeHelper(i,r,a,n,s,o,u,l){if(i)for(let t=0;t<r.length-2;t++)a.push(1);else for(let i=0;i<r.length-2;i++)a.push(t.adjustPadAndReturnShape(r[i+2],n[i],s[i],o[i],u,i,i+r.length-2,l))}static adjustPadAndReturnShape(t,i,r,a,n,s,o,u){let l=r*(a-1)+1;if(!u||"NOTSET"===u)return Math.floor((t+n[s]+n[o]-l)/i+1);switch(u){case"VALID":return n[s]=0,n[o]=0,Math.floor((t-l)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(1!==r)throw Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let r=((t+i-1)/i-1)*i+a-t;return n[s]=Math.floor("SAME_LOWER"===u?(r+1)/2:r/2),n[o]=r-n[s],Math.floor((t+r-a)/i+1)}default:throw Error("Unsupported AutoPad type")}}},e8=class{static getShapeOfGemmResult(t,i,r,a,n){let s,o,u;if(2!==t.length||2!==r.length)throw Error("shape need to be of size 2");i?(s=t[1],o=t[0]):(s=t[0],o=t[1]);let l=-1;if(a?(u=r[0],l=1):(u=r[1],l=0),r[l]!==o)throw Error("dimension mismatch");if(s<=0||u<=0||o<=0)throw Error("invalid shape specified");if(n&&!e3.isValidBroadcast(n,[s,u]))throw Error("gemm: invalid bias shape for broadcast");return[s,u,o]}},e5=-34028234663852886e22,e9=34028234663852886e22}),nb=j(()=>{nm(),e7=(t,i)=>new(eV(i))(t)}),n$=j(()=>{nm(),ny(),te=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),tt=(t,i)=>{if("int32"===i)return t;let r=te.get(i);if(!r)throw Error(`WebNN backend does not support data type: ${i}`);let a=r/8;if(t.byteLength%a!=0)throw Error(`Invalid Uint8Array length - must be a multiple of ${a}.`);let n=t.byteLength/a,s=new(eV(i))(t.buffer,t.byteOffset,n);switch(i){case"int64":case"uint64":{let t=new Int32Array(n);for(let i=0;i<n;i++){let r=s[i];if(r>2147483647n||r<-2147483648n)throw Error("Can not convert int64 data to int32 - value out of range.");t[i]=Number(r)}return new Uint8Array(t.buffer)}case"int8":case"uint8":case"uint32":if("uint32"===i&&s.some(t=>t>0x7fffffff))throw Error("Can not convert uint32 data to int32 - value out of range.");return new Uint8Array(Int32Array.from(s,Number).buffer);default:throw Error(`Unsupported data conversion from ${i} to 'int32'`)}},ti=(t,i)=>{if("int32"===i)return t;if(t.byteLength%4!=0)throw Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=t.byteLength/4,a=new Int32Array(t.buffer,t.byteOffset,r);switch(i){case"int64":return new Uint8Array(BigInt64Array.from(a,BigInt).buffer);case"uint64":if(a.some(t=>t<0))throw Error("Can not convert int32 data to uin64 - negative value found.");return new Uint8Array(BigUint64Array.from(a,BigInt).buffer);case"int8":if(a.some(t=>t<-128||t>127))throw Error("Can not convert int32 data to int8 - value out of range.");return new Uint8Array(Int8Array.from(a,Number).buffer);case"uint8":if(a.some(t=>t<0||t>255))throw Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(a,Number);case"uint32":if(a.some(t=>t<0))throw Error("Can not convert int32 data to uint32 - negative value found.");return new Uint8Array(Uint32Array.from(a,Number).buffer);default:throw Error(`Unsupported data conversion from 'int32' to ${i}`)}},tr=1,ta=()=>tr++,tn=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ts=(t,i)=>{let r=te.get(t);if(!r)throw Error(`WebNN backend does not support data type: ${t}`);return i.length>0?Math.ceil(i.reduce((t,i)=>t*i)*r/8):0},to=class{constructor(t){this.isDataConverted=!1;let{sessionId:i,context:r,tensor:a,dataType:n,shape:s,fallbackDataType:o}=t;this.sessionId=i,this.mlContext=r,this.mlTensor=a,this.dataType=n,this.tensorShape=s,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ts(this.dataType,this.tensorShape)}destroy(){e2("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){if(!this.fallbackDataType)return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor);{let i=ti(new Uint8Array(await this.mlContext.readTensor(this.mlTensor)),this.dataType);return t?void(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(i):i.buffer}}canReuseTensor(t,i,r){return this.mlContext===t&&this.dataType===i&&this.tensorShape.length===r.length&&this.tensorShape.every((t,i)=>t===r[i])}setIsDataConverted(t){this.isDataConverted=t}},tu=class{constructor(t,i){this.tensorManager=t,this.wrapper=i}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,i,r,a){let n=this.tensorManager.getMLContext(t),s;if(!n.opSupportLimits().input.dataTypes.includes(i)){if(!(s=tn.get(i))||!n.opSupportLimits().input.dataTypes.includes(s))throw Error(`WebNN backend does not support data type: ${i}`);e2("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${i} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,i,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==ts(i,r))throw Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,i,r,o,!0,!0,s),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){let i=t;if(this.wrapper){if(this.wrapper.fallbackType)if("int32"===this.wrapper.fallbackType)i=tt(t,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(t.byteLength===this.wrapper.byteLength)return void this.wrapper.write(i);e2("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(i):this.activeUpload=new Uint8Array(i)}async download(t){if(this.activeUpload){let i=this.wrapper?.isDataConverted?ti(this.activeUpload,this.wrapper?.type):this.activeUpload;return t?void(t instanceof ArrayBuffer?new Uint8Array(t).set(i):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(i)):i.buffer}if(!this.wrapper)throw Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},tl=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(t){let i=this.backend.getMLContext(t);if(!i)throw Error("MLContext not found for session.");return i}reserveTensorId(){let t=ta();return this.tensorTrackersById.set(t,new tu(this)),t}releaseTensorId(t){let i=this.tensorTrackersById.get(t);i&&(this.tensorTrackersById.delete(t),i.tensorWrapper&&this.releaseTensor(i.tensorWrapper))}async ensureTensor(t,i,r,a,n){e2("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${i}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let s=this.tensorTrackersById.get(i);if(!s)throw Error("Tensor not found.");return s.ensureTensor(t,r,a,n)}upload(t,i){let r=this.tensorTrackersById.get(t);if(!r)throw Error("Tensor not found.");r.upload(i)}async download(t,i){e2("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${i?.byteLength}}`);let r=this.tensorTrackersById.get(t);if(!r)throw Error("Tensor not found.");return r.download(i)}releaseTensorsForSession(t){for(let i of this.freeTensors)i.sessionId===t&&i.destroy();this.freeTensors=this.freeTensors.filter(i=>i.sessionId!==t)}registerTensor(t,i,r,a){let n=this.getMLContext(t),s=ta(),o=new to({sessionId:t,context:n,tensor:i,dataType:r,shape:a});return this.tensorTrackersById.set(s,new tu(this,o)),this.externalTensors.add(o),s}async getCachedTensor(t,i,r,a,n,s,o){let u=this.getMLContext(t);for(let[a,n]of this.freeTensors.entries())if(n.canReuseTensor(u,i,r)){e2("verbose",()=>`[WebNN] Reusing tensor {dataType: ${i}, ${o?`fallbackDataType: ${o},`:""} shape: ${r}`);let n=this.freeTensors.splice(a,1)[0];return n.sessionId=t,n}e2("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${i}, ${o?`fallbackDataType: ${o},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:o??i,shape:r,dimensions:r,usage:a,writable:n,readable:s});return new to({sessionId:t,context:u,tensor:l,dataType:i,shape:r,fallbackDataType:o})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},td=(...t)=>new tl(...t)}),nv=j(()=>{nm(),np(),nb(),n$(),ny(),tp=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),tc=class{constructor(t){this.tensorManager=td(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,e0(t.logLevel,!!t.debug)}get currentSessionId(){if(void 0===this.activeSessionId)throw Error("No active session");return this.activeSessionId}onRunStart(t){e2("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){e2("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let i=this.temporarySessionTensorIds.get(t);if(i){for(let t of i)e2("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let i=this.mlContextCache.findIndex(i=>i.gpuDevice===t);if(-1!==i)return this.mlContextCache[i].mlContext;{let i=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:i}),i}}if(void 0===t){let t=this.mlContextCache.findIndex(t=>void 0===t.options&&void 0===t.gpuDevice);if(-1!==t)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:t}),t}}let i=this.mlContextCache.findIndex(i=>((t,i)=>{if(t===i)return!0;if(void 0===t||void 0===i)return!1;let r=Object.keys(t).sort(),a=Object.keys(i).sort();return r.length===a.length&&r.every((r,n)=>r===a[n]&&t[r]===i[r])})(i.options,t));if(-1!==i)return this.mlContextCache[i].mlContext;{let i=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:i}),i}}registerMLContext(t,i){this.mlContextBySessionId.set(t,i);let r=this.sessionIdsByMLContext.get(i);r||(r=new Set,this.sessionIdsByMLContext.set(i,r)),r.add(t),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(t,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t),this.sessionGraphOutputs.delete(t);let i=this.mlContextBySessionId.get(t);if(!i)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t);let r=this.sessionIdsByMLContext.get(i);if(r.delete(t),0===r.size){this.sessionIdsByMLContext.delete(i);let t=this.mlContextCache.findIndex(t=>t.mlContext===i);-1!==t&&this.mlContextCache.splice(t,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){e2("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,i,r,a,n){let s=tp.get(r);if(!s)throw Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,i,s,a,n)}async createTemporaryTensor(t,i,r){e2("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${i}, shape: ${r}}`);let a=tp.get(i);if(!a)throw Error(`Unsupported ONNX data type: ${i}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,n,a,r,!1);let s=this.temporarySessionTensorIds.get(t);return s?s.push(n):this.temporarySessionTensorIds.set(t,[n]),n}uploadTensor(t,i){if(!eB().shouldTransferToMLTensor)throw Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");e2("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${i.byteLength}}`),this.tensorManager.upload(t,i)}async downloadTensor(t,i){return this.tensorManager.download(t,i)}createMLTensorDownloader(t,i){return async()=>{let r=await this.tensorManager.download(t);return e7(r,i)}}registerMLTensor(t,i,r,a){let n=tp.get(r);if(!n)throw Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(t,i,n,a);return e2("verbose",()=>`[WebNN] registerMLTensor {tensor: ${i}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${s}}`),s}registerMLConstant(t,i,r,a,n,s,o=!1){if(!s)throw Error("External mounted files are not available.");let u=t;t.startsWith("./")&&(u=t.substring(2));let l=s.get(u);if(!l)throw Error(`File with name ${u} not found in preloaded files.`);if(i+r>l.byteLength)throw Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(i,i+r).buffer,p;switch(n.dataType){case"float32":p=new Float32Array(d);break;case"float16":p="u">typeof Float16Array&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":o?(p=new Int32Array(tt(new Uint8Array(d),"int64").buffer),n.dataType="int32"):p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return e2("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(n,p)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}registerGraphOutput(t){this.temporaryGraphOutputs.push(t)}isGraphInput(t,i){let r=this.sessionGraphInputs.get(t);return!!r&&r.includes(i)}isGraphOutput(t,i){let r=this.sessionGraphOutputs.get(t);return!!r&&r.includes(i)}isGraphInputOutputTypeSupported(t,i,r=!0){let a=this.mlContextBySessionId.get(t),n=tp.get(ej(i));return!(typeof n>"u")&&(r?!!a?.opSupportLimits().input.dataTypes.includes(n):!!a?.opSupportLimits().output.dataTypes.includes(n))}flush(){}}}),nw=j(()=>{}),nx=j(()=>{ny(),nw(),th=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[0xc00000,10],[0x1000000,10],[0x1900000,15],[0x2000000,22],[0x2a30000,2],[0x3840000,6],[0x4000000,6],[0x8000000,6],[0xa000000,6]]),tf=[],tm=t=>16*Math.ceil(Number(t)/16),tg=1,ty=()=>tg++,t_=async(t,i,r,a)=>{let n=tm(r),s=t.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=t.getCommandEncoder();t.endComputePass(),o.copyBufferToBuffer(i,0,s,0,n),t.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(!a)return new Uint8Array(u.slice(0,r));{let t=a();return t.set(new Uint8Array(u,0,r)),t}}finally{s.destroy()}},tb=class{constructor(t){for(let[i]of(this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map,th))tf.push(i),this.freeBuffers.set(i,[]),this.freeUniformBuffers.set(i,[]);this.sessionCount=0}upload(t,i){let r=i.buffer,a=i.byteOffset,n=i.byteLength,s=tm(n),o=this.storageCache.get(t);if(!o)throw Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==n)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC});new Uint8Array(u.getMappedRange()).set(new Uint8Array(r,a,n)),u.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(u,0,o.gpuData.buffer,0,s),this.backend.device.queue.submit([l.finish()]),u.destroy(),e2("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,i){let r=this.storageCache.get(t);if(!r)throw Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(i);if(!a)throw Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw Error("inconsistent source and destination gpu data size");let n=tm(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(t,i,r){let a;if(r){if(a=r[0],t===r[1])return e2("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=ty();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:t},originalSize:i}),e2("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${a}, registered.`),a}unregisterExternalBuffer(t){void 0!==t&&(this.storageCache.delete(t),e2("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,i=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=(t=>{for(let i=0;i<tf.length;i++){let r=tf[i];if(t<=r)return r}return 16*Math.ceil(t/16)})(t),a,n=(i&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(i&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let t=(n?this.freeBuffers:this.freeUniformBuffers).get(r);a=t&&t.length>0?t.pop():this.backend.device.createBuffer({size:r,usage:i})}else a=this.backend.device.createBuffer({size:r,usage:i});let o={id:ty(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(t)}),e2("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${o.id}`),o}get(t){return this.storageCache.get(t)?.gpuData}release(t){let i="bigint"==typeof t?Number(t):t,r=this.storageCache.get(i);if(!r){if(0===this.storageCache.size)return 0;throw Error("releasing data does not exist")}return e2("verbose",()=>`[WebGPU] GpuDataManager.release(id=${i}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(i),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(t,i){let r=this.storageCache.get(Number(t));if(!r)throw Error("data does not exist");await t_(this.backend,r.gpuData.buffer,r.originalSize,i)}refreshPendingBuffers(){if(0!==this.buffersPending.length)if("default"===this.backend.sessionStatus){for(let t of this.buffersPending){let i=th.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(t.size)||[];void 0===i||r.length>=i?t.destroy():r.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(t.size)||[];void 0===i||r.length>=i?t.destroy():r.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);for(let i of(t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t)),this.buffersPending))t.push(i);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let i=this.capturedPendingBuffers.get(t);i&&(i.forEach(t=>{t.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,0===this.sessionCount&&(e2("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.storageCache=new Map)}},t$=(...t)=>new tb(...t)}),nC=j(()=>{tv=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},tw=t=>new tv(t)}),nS=j(()=>{nm(),n_(),tx=64,tC=(t,i)=>{if(3===i)throw Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return i>1?`vec${i}<f16>`:"f16";case 1:return i>1?`vec${i}<f32>`:"f32";case 6:return i>1?`vec${i}<i32>`:"i32";case 12:return i>1?`vec${i}<u32>`:"u32";case 7:if(i>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(i>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(4!==i)throw Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw Error(`Unknown data type: ${t}`)}},tS=(t,i=1)=>{let r=tC(t,i);return"string"==typeof r?r:r[0]},tk=(t,i=1)=>{let r=tC(t,i);return"string"==typeof r?r:r[1]},tT=(...t)=>{let i=[];return t.forEach(t=>{0!==t.length&&i.push({type:12,data:t},{type:12,data:e4.computeStrides(t)})}),i},tI=t=>t%4==0?4:t%2==0?2:1,tE=(t="f32",i,r="0")=>i&&1!==i?`vec${i}<${t}>(${r})`:`${t}(${r})`,tz=(t,i,r)=>"f32"===t?r:1===i?`f32(${r})`:`vec${i}<f32>(${r})`,tA=(t,i)=>4===i?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:2===i?`(${t}.x + ${t}.y)`:3===i?`(${t}.x + ${t}.y + ${t}.z)`:t,tO=(t,i,r,a)=>t.startsWith("uniforms.")&&r>4?"string"==typeof i?"f16"===a?`${t}[(${i}) / 8][(${i}) % 8 / 4][(${i}) % 8 % 4]`:`${t}[(${i}) / 4][(${i}) % 4]`:"f16"===a?`${t}[${Math.floor(i/8)}][${Math.floor(i%8/4)}][${i%8%4}]`:`${t}[${Math.floor(i/4)}][${i%4}]`:r>1?`${t}[${i}]`:t,tR=(t,i,r,a,n)=>{let s,o,u,l,d="number"==typeof r,p=d?r:r.length,c=[...Array(p).keys()],h=p<2?"u32":p<=4?`vec${p}<u32>`:`array<u32, ${p}>`,f=tC(i,n),m="string"==typeof f?f:f[1],g={indices:h,value:m,storage:"string"==typeof f?f:f[0],tensor:i},y=t=>"string"==typeof t?t:`${t}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=d?"uniforms.":"",$=`${b}${t}_shape`,v=`${b}${t}_strides`,w="";for(let t=0;t<p-1;t++)w+=`
    let dim${t} = current / ${tO(v,t,p)};
    let rest${t} = current % ${tO(v,t,p)};
    indices[${t}] = dim${t};
    current = rest${t};
    `;w+=`indices[${p-1}] = current;`;let x=p<2?"":`
  fn o2i_${t}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,C=[];if(p>=2)for(let t=p-1;t>=0;t--)C.push(`${tO(v,t,p)} * (indices[${t}])`);let S=p<2?"":`
  fn i2o_${t}(indices: ${g.indices}) -> u32 {
    return ${C.join("+")};
  }`,k=(...t)=>0===p?"0u":`${g.indices}(${t.map(y).join(",")})`,T=(t,i)=>p<2?`${t}`:`${tO(t,i,p)}`,I={},E=(i,r)=>(()=>{if(g.storage===g.value)return`${t}[${i}]=${r};`;if("vec2<u32>"===g.storage&&"i32"===g.value)return`${t}[${i}]=vec2<u32>(u32(${r}), select(0u, 0xFFFFFFFFu, ${r} < 0));`;if("vec2<u32>"===g.storage&&"u32"===g.value)return`${t}[${i}]=vec2<u32>(u32(${r}), 0u);`;if("u32"===g.storage&&"vec4<bool>"===g.value)return`${t}[${i}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${r}));`;throw Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),z=i=>(()=>{if(g.storage===g.value)return`${t}[${i}]`;if("vec2<u32>"===g.storage&&"i32"===g.value)return`i32(${t}[${i}].x)`;if("vec2<u32>"===g.storage&&"u32"===g.value)return`u32(${t}[${i}].x)`;if("u32"===g.storage&&"vec4<bool>"===g.value)return`vec4<bool>(bool(${t}[${i}] & 0xFFu), bool(${t}[${i}] & 0xFF00u), bool(${t}[${i}] & 0xFF0000u), bool(${t}[${i}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),A=p<2?"":`
  fn get_${t}ByIndices(indices: ${g.indices}) -> ${m} {
    return ${z(`i2o_${t}(indices)`)};
  }`,O=p<2?"":(s=c.map(t=>`d${t}: u32`).join(", "),o=c.map(t=>`d${t}`).join(", "),`
  fn get_${t}(${s}) -> ${m} {
    return get_${t}ByIndices(${k(o)});
  }`),R=p<2?"":`
  fn set_${t}ByIndices(indices: ${g.indices}, value: ${m}) {
    ${E(`i2o_${t}(indices)`,"value")}
  }`,B=p<2?"":(u=c.map(t=>`d${t}: u32`).join(", "),l=c.map(t=>`d${t}`).join(", "),`
  fn set_${t}(${u}, value: ${m}) {
    set_${t}ByIndices(${k(l)}, value);
  }`);return{impl:()=>{let t=[],i=!1;return _.offsetToIndices&&(t.push(x),i=!0),_.indicesToOffset&&(t.push(S),i=!0),_.broadcastedIndicesToOffset&&(Object.values(I).forEach(i=>t.push(i)),i=!0),_.set&&(t.push(B),i=!0),_.setByIndices&&(t.push(R),i=!0),_.get&&(t.push(O),i=!0),_.getByIndices&&(t.push(A),i=!0),!d&&i&&t.unshift(`const ${$} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${e4.computeStrides(r).join(",")});`),t.join(`
`)},type:g,offsetToIndices:i=>(_.offsetToIndices=!0,p<2?i:`o2i_${t}(${i})`),indicesToOffset:i=>(_.indicesToOffset=!0,p<2?i:`i2o_${t}(${i})`),broadcastedIndicesToOffset:(i,r)=>{_.broadcastedIndicesToOffset=!0;let a=`${r.name}broadcastedIndicesTo${t}Offset`;if(a in I)return`${a}(${i})`;let n=[];for(let t=p-1;t>=0;t--){let i=r.indicesGet("outputIndices",t+r.rank-p);n.push(`${T(v,t)} * (${i} % ${T($,t)})`)}return I[a]=`fn ${a}(outputIndices: ${r.type.indices}) -> u32 {
             return ${n.length>0?n.join("+"):"0u"};
           }`,`${a}(${i})`},indices:k,indicesGet:T,indicesSet:(t,i,r)=>p<2?`${t}=${r};`:`${tO(t,i,p)}=${r};`,set:(...i)=>{if(i.length!==p+1)throw Error(`indices length must be ${p}`);let r=i[p];if("string"!=typeof r)throw Error("value must be string");let a=i.slice(0,p).map(y).join(",");return 0===p?E("0u",r):1===p?E(a[0],r):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${t}(${a}, ${r})`)},setByOffset:E,setByIndices:(i,r)=>p<2?E(i,r):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${t}ByIndices(${i}, ${r});`),get:(...i)=>{if(i.length!==p)throw Error(`indices length must be ${p}`);let r=i.map(y).join(",");return 0===p?z("0u"):1===p?z(r[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${t}(${r})`)},getByOffset:z,getByIndices:i=>p<2?z(i):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${t}ByIndices(${i})`),usage:a,name:t,strides:v,shape:$,rank:p}},tB=(t,i,r,a=1)=>tR(t,i,r,"input",a),tN=(t,i,r,a=1)=>tR(t,i,r,"output",a),tM=(t,i,r)=>tR(t,i,r,"atomicOutput",1),tD=(t,i,r,a=1)=>tR(t,i,r,"internal",a),tP=class{constructor(t,i){this.normalizedDispatchGroup=t,this.limits=i,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${"number"==typeof t?`${t}u`:t}) { return; }`}mainStart(t=tx){let i="number"==typeof t?t:t[0],r="number"==typeof t?1:t[1],a="number"==typeof t?1:t[2];if(i>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${i}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(i*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${i}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=1===this.normalizedDispatchGroup[1]&&1===this.normalizedDispatchGroup[2],s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${i*r*a}u + local_idx;`;return`@compute @workgroup_size(${i}, ${r}, ${a})
  fn main(${s}) {
    ${o}
  `}appendVariableUniforms(t){0!==t.rank&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,i){if("internal"===t.usage)throw Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let r="input"===t.usage?"read":"read_write",a="atomicOutput"===t.usage?"atomic<i32>":t.type.storage;return`@group(0) @binding(${i}) var<storage, ${r}> ${t.name}: array<${a}>;`}declareVariables(...t){return t.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if("internal"!==t.usage)throw Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(t,i,r=1){return this.uniforms.push({name:t,type:i,length:r}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(0===this.uniforms.length)return"";let t=[];for(let{name:i,type:r,length:a}of this.uniforms)if(a&&a>4)"f16"===r?t.push(`@align(16) ${i}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):t.push(`${i}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=null==a||1===a?r:`vec${a}<${r}>`;t.push(`${i}:${n}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(0!==this.uniforms.length)return this.uniforms.map(t=>[[12,10,1,6][["u32","f16","f32","i32"].indexOf(t.type)],t.length??1])}},tU=(t,i)=>new tP(t,i)}),nk=j(()=>{nm(),n_(),nC(),nS(),tL=(t,i)=>0!==i.length?i:[...Array(t).keys()].reverse(),tW=(t,i)=>{let r,a,n=t.dataType,s=t.dims.length,o=tL(s,i),u=(r=t.dims,a=o,e4.sortBasedOnPerm(r,tL(r.length,a))),l=t.dims,d=u;if(s<2||((t,i)=>{let r=0;for(let a=0;a<t.length;++a)if(1!==i[t[a]]){if(t[a]<r)return!1;r=t[a]}return!0})(o,t.dims))return{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let i=e4.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(i/64/4)},programUniforms:[{type:12,data:Math.ceil(i/4)}]}},getShaderSource:t=>{let i=tB("input",n,l,4),r=tN("output",n,d,4);return`
  ${t.registerUniform("output_size","u32").declareVariables(i,r)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`}};let{newShape:p,newPerm:c}=((t,i)=>{let r=[],a=[];for(let n=0;n<t.length;++n)1!==t[n]&&r.push(t[n]),1!==t[i[n]]&&a.push(i[n]);return{newShape:r,newPerm:a}})(t.dims,o),h=e4.areEqual(c,[2,3,1]),f=e4.areEqual(c,[3,1,2]);return 2===p.length||h||f?(d=[(l=h?[p[0],p[1]*p[2]]:f?[p[0]*p[1],p[2]]:p)[1],l[0]],{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let i=e4.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(d[1]/16),y:Math.ceil(d[0]/16)},programUniforms:[{type:12,data:i},...tT(l,d)]}},getShaderSource:t=>{let i=tB("a",n,l.length),r=tN("output",n,d.length);return`
  ${t.registerUniform("output_size","u32").declareVariables(i,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${t.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${i.getByIndices(`${i.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`}}):{name:"Transpose",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>{let i=e4.size(u);return{outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...tT(l,d)]}},getShaderSource:t=>{let i=tB("a",n,l.length),r=tN("output",n,d.length);return`
  ${t.registerUniform("output_size","u32").declareVariables(i,r)}

  ${((t,i,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let r=0;r<i;++r)n+=`a[${t[r]}]=i[${r}];`;return n+"return a;}"})(o,s,i,r)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${r.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${r.setByOffset("global_idx",i.getByIndices("aIndices"))}
  }`}}},tj=(t,i)=>{((t,i)=>{if(!t||1!==t.length)throw Error("Transpose requires 1 input.");if(0!==i.length&&i.length!==t[0].dims.length)throw Error(`perm size ${i.length} does not match input rank ${t[0].dims.length}`)})(t.inputs,i.perm),t.compute(tW(t.inputs[0],i.perm))},tq=t=>tw({perm:t.perm})}),nT=j(()=>{nm(),n_(),nS(),nI(),nk(),tG={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},tV={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},tH={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},tF={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},tK=(t,i,r,a)=>{var n,s,o,u,l,d,p;let c,h,f,m,g,y,_,b=1===t.inputs.length?r:t9(t.inputs,r),$=b.axes;0!==$.length||b.noopWithEmptyAxes||($=t.inputs[0].dims.map((t,i)=>i));let v=e4.normalizeAxes($,t.inputs[0].dims.length),w=v,x=t.inputs[0],C=((t,i)=>{let r=[];if(!((t,i)=>{for(let r=0;r<t.length;++r)if(t[t.length-r-1]!==i-1-r)return!1;return!0})(t,i)){for(let a=0;a<i;++a)-1===t.indexOf(a)&&r.push(a);t.forEach(t=>r.push(t))}return r})(w,t.inputs[0].dims.length);C.length>0&&(x=t.compute(tW(t.inputs[0],C),{inputs:[0],outputs:[-1]})[0],w=((t,i)=>{let r=[];for(let a=i-t;a<i;++a)r.push(a);return r})(w.length,x.dims.length));let[S,k]=((t,i)=>{let r=[],a=t.length;for(let n=0;n<a;n++)-1===i.indexOf(n)&&r.push(t[n]);return[r,i.map(i=>t[i])]})(x.dims,w),T=S;b.keepDims&&(T=((t,i)=>{let r=t.length+i.length,a=[],n=0;for(let s=0;s<r;s++)-1===i.indexOf(s)?a.push(t[n++]):a.push(1);return a})(S,v)),t.compute((n=i,s=b.cacheKey,o=[x],u=a,l=t.inputs[0].dataType,d=T,p=k,c=o[0].dims,h=e4.size(d),f=e4.size(p),m=tB("_A",o[0].dataType,c),g=tN("output",l,d),y=64,1===h&&(y=256),_=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,{name:n,shaderCache:{hint:`${s};${y}`,inputDependencies:["type"]},getShaderSource:t=>`
        ${t.registerUniform("reduceSize","u32").declareVariables(m,g)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${t.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${tH[u]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${tG[u]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${tV[u]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${"mean"===u?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${tF[u]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:d,dataType:l}],dispatchGroup:{x:h},programUniforms:[{type:12,data:f}]})}),{inputs:[x]})},tZ=(t,i)=>{tK(t,"ReduceMeanShared",i,"mean")},tX=(t,i)=>{tK(t,"ReduceL1Shared",i,"l1")},tQ=(t,i)=>{tK(t,"ReduceL2Shared",i,"l2")},tY=(t,i)=>{tK(t,"ReduceLogSumExpShared",i,"logSumExp")},tJ=(t,i)=>{tK(t,"ReduceMaxShared",i,"max")},t0=(t,i)=>{tK(t,"ReduceMinShared",i,"min")},t2=(t,i)=>{tK(t,"ReduceProdShared",i,"prod")},t1=(t,i)=>{tK(t,"ReduceSumShared",i,"sum")},t3=(t,i)=>{tK(t,"ReduceSumSquareShared",i,"sumSquare")},t4=(t,i)=>{tK(t,"ReduceLogSumShared",i,"logSum")}}),nI=j(()=>{nm(),n_(),nC(),nS(),nT(),t6=t=>{if(!t||0===t.length||t.length>2)throw Error("Reduce op requires 1 or 2 inputs.");if(2===t.length&&1!==t[1].dims.length)throw Error("Invalid axes input dims.")},t8=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],t5=(t,i,r,a,n,s,o=!1,u=!1)=>{let l=[],d=r[0].dims,p=d.length,c=e4.normalizeAxes(n,p),h=!u&&0===c.length;d.forEach((t,i)=>{h||c.indexOf(i)>=0?o&&l.push(1):l.push(t)});let f=l.length,m=e4.size(l);return{name:t,shaderCache:i,getShaderSource:t=>{let i=[],n=tB("_A",r[0].dataType,p),u=tN("output",s,f),l=a(n,u,c),m=l[2];for(let t=0,r=0;t<p;t++)h||c.indexOf(t)>=0?(o&&r++,m=`for(var j${t}: u32 = 0; j${t} < ${d[t]}; j${t}++) {
                  ${l[2].includes("last_index")?`let last_index = j${t};`:""}
                  ${n.indicesSet("input_indices",t,`j${t}`)}
                  ${m}
                }`):(i.push(`${n.indicesSet("input_indices",t,u.indicesGet("output_indices",r))};`),r++);return`

        ${t.registerUniform("output_size","u32").declareVariables(n,u)}

        ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${n.type.indices};
          let output_indices = ${u.offsetToIndices("global_idx")};

          ${i.join(`
`)}
          ${l[0]}       // init ops for reduce max/min
          ${l[1]}
          ${m}
          ${l[3]}
          ${4===l.length?u.setByOffset("global_idx","value"):l.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...tT(d,l)]})}},t9=(t,i)=>{let r=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(t=>r.push(Number(t))),tw({axes:r,keepDims:i.keepDims,noopWithEmptyAxes:i.noopWithEmptyAxes})},t7=(t,i,r,a)=>{let n=t.inputs,s=1===n.length?r:t9(n,r);t.compute(t5(i,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&0===s.axes.length?t8:a,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},ie=(t,i,r)=>{if(0===i.length)return r;let a=1,n=1;for(let r=0;r<i.length;r++)-1===i.indexOf(r)?a*=t[r]:n*=t[r];return n<32&&a>1024},it=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceMean",a,(t,i,a)=>{let n=1;for(let i=0;i<t.rank;i++)(a.indexOf(i)>=0||0===a.length)&&(n*=r.inputs[0].dims[i]);return["var sum = f32(0);","",`sum += f32(${t.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})):tZ(t,i)},ii=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceL1",a,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${t.getByIndices("input_indices")});`,""])):tX(t,i)},ir=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceL2",a,(t,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])):tQ(t,i)},ia=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceLogSumExp",a,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${t.getByIndices("input_indices")});`,"value = log(value);"])):tY(t,i)},is=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceMax",a,(t,i,r)=>{let a=[];for(let i=0;i<t.rank;i++)(r.indexOf(i)>=0||0===r.length)&&a.push(t.indicesSet("input_indices",i,0));return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = max(value, ${t.getByIndices("input_indices")});`,""]})):tJ(t,i)},io=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceMin",a,(t,i,r)=>{let a=[];for(let i=0;i<t.rank;i++)(r.indexOf(i)>=0||0===r.length)&&a.push(`input_indices[${i}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = min(value, ${t.getByIndices("input_indices")});`,""]})):t0(t,i)},iu=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceProd",a,(t,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${t.getByIndices("input_indices")};`,""])):t2(t,i)},il=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceSum",a,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,""])):t1(t,i)},id=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceSumSquare",a,(t,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += t * t;`,""])):t3(t,i)},ip=(t,i)=>{var r,a;ie(t.inputs[0].dims,i.axes,i.noopWithEmptyAxes)?(r=t,a=i,t6(r.inputs),t7(r,"ReduceLogSum",a,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,"value = log(value);"])):t4(t,i)}}),nE=j(()=>{nm(),nC(),nI(),ic=t=>{if(!t||0===t.length||t.length>2)throw Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(1!==t[0].dataType)throw Error("Invalid input type.")},ih=(t,i)=>{ic(t.inputs),t.compute(t5("ArgMin",{hint:i.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],(t,r,a)=>{let n=[];for(let i=0;i<t.rank;i++)(a.indexOf(i)>=0||0===a.length)&&n.push(`input_indices[${i}] = 0;`);return[`${n.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${i.selectLastIndex>0?"<=":"<"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]},[i.axis],7,i.keepDims),{inputs:[0]})},im=(t,i)=>{ic(t.inputs),t.compute(t5("argMax",{hint:i.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],(t,r,a)=>{let n=[];for(let i=0;i<t.rank;i++)(a.indexOf(i)>=0||0===a.length)&&n.push(`input_indices[${i}] = 0;`);return[`${n.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${i.selectLastIndex>0?">=":">"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]},[i.axis],7,i.keepDims),{inputs:[0]})},ig=t=>tw(t)}),nz=j(()=>{nm(),n_(),nw(),nS(),iy=(t,i,r)=>i&&t?`
      let total_sequence_length_input = u32(${i.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${t?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,i_=(t,i,r,a,n,s,o,u,l,d,p,c)=>{var h,f,m,g,y,_,b,$,v,w,x,C,S,k,T,I,E,z,A,O,R,B,N,M,D;let P,U,L,W,j,q,G,V,H,F,K,Z,X,Q,Y,J,ee,et,ei,er,ea,en,es,eo,eu,el,ed,ep,ec,eh,ef,em,eg,ey=Math.min(t.outputCount,1+ +!!o+ +!!u),e_=ey>1?d.pastSequenceLength:0,eb=e_+d.kvSequenceLength,e$=l&&e4.size(l.dims)>0?l:void 0,ev=[i,r];ey>1&&o&&e4.size(o.dims)>0&&ev.push(o),e$&&ev.push(e$),p&&ev.push(p),c&&ev.push(c);let ew=t.compute((h=ey,f=i,m=r,g=o,y=e$,_=d,b=e_,$=p,v=c,P=b+_.kvSequenceLength,U=[_.batchSize,_.numHeads,_.sequenceLength,P],L=h>1&&g,W=_.kvNumHeads?_.kvNumHeads:_.numHeads,j=L?[_.batchSize,W,P,_.headSize]:void 0,q=_.nReps?_.nReps:1,G=0===_.scale?1/Math.sqrt(_.headSize):_.scale,V=tI(_.headSize),H=_.headSize/V,F={x:Math.ceil(P/12),y:Math.ceil(_.sequenceLength/12),z:_.batchSize*_.numHeads},K=[{type:12,data:_.sequenceLength},{type:12,data:H},{type:12,data:P},{type:12,data:_.numHeads},{type:12,data:_.headSize},{type:1,data:G},{type:12,data:b},{type:12,data:_.kvSequenceLength},{type:12,data:q}],Z=L&&g&&e4.size(g.dims)>0,X=["type","type"],Z&&X.push("type"),y&&X.push("type"),$&&X.push("type"),v&&X.push("type"),Q=[{dims:U,dataType:f.dataType,gpuDataType:0}],L&&Q.push({dims:j,dataType:f.dataType,gpuDataType:0}),{name:"AttentionProbs",shaderCache:{hint:`${V};${void 0!==y};${void 0!==g};${h}`,inputDependencies:X},getRunData:()=>({outputs:Q,dispatchGroup:F,programUniforms:K}),getShaderSource:t=>{let i=tB("q",f.dataType,f.dims,V),r=[i,tB("key",m.dataType,m.dims,V)];if(Z){let t=tB("past_key",g.dataType,g.dims,V);r.push(t)}y&&r.push(tB("attention_bias",y.dataType,y.dims));let a=$?tB("seq_lens",$.dataType,$.dims):void 0;a&&r.push(a);let n=v?tB("total_sequence_length_input",v.dataType,v.dims):void 0;n&&r.push(n);let s=tN("output",f.dataType,U),o=[s];L&&o.push(tN("present_key",f.dataType,j,V));let u=tk(1,V);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${i.type.storage}, 144>;
  var<workgroup> tileK: array<${i.type.storage}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}]).declareVariables(...r,...o)}
  ${t.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${1===q?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${1===q?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${iy(a,n,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${Z&&L?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${L?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${u}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${Z&&L?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${L?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${u}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(V){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw Error(`Unsupported components: ${V}`)}})()};
        output[outputIdx] = ${s.type.value} (sum * uniforms.alpha) + ${y?"attention_bias[outputIdx]":"0.0"};
    }
  }`}}),{inputs:ev,outputs:ey>1?[-1,1]:[-1]})[0];t.compute((w=ew,x=d.batchSize,C=d.numHeads,S=e_,k=d.sequenceLength,T=eb,I=p,E=c,Y=tI(I?1:T),J=64,(ee=T/Y)<64&&(J=32),et=[{type:12,data:x},{type:12,data:C},{type:12,data:S},{type:12,data:k},{type:12,data:ee},{type:12,data:Math.ceil(T/Y/J)}],ei=tS(w.dataType,Y),er=tk(1,Y),ea=["type"],I&&ea.push("type"),E&&ea.push("type"),{name:"AttentionProbsSoftmax",shaderCache:{hint:`${J};${ei};${Y}`,inputDependencies:ea},getShaderSource:t=>{let i=tN("x",w.dataType,w.dims,Y),r=[i],a=I?tB("seq_lens",I.dataType,I.dims):void 0;a&&r.push(a);let n=E?tB("total_sequence_length_input",E.dataType,E.dims):void 0;n&&r.push(n);let s=tk(w.dataType);return`
  var<workgroup> thread_max: array<f32, ${J}>;
  var<workgroup> thread_sum: array<f32, ${J}>;
  ${t.registerUniforms([{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}]).declareVariables(...r)}
  ${t.mainStart([J,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${iy(a,n,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${J}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${I?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${er}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${er}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(Y){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw Error(`Unsupported components: ${Y}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${J}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${er}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${er}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(Y){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw Error(`Unsupported components: ${Y}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${J}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${i.type.value}(${s}(1.0) / ${s}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${er}(x[offset + i]);
        x[offset + i] = ${i.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${I?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${i.type.value}(${s}(0));
        }`:""};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:k,z:x*C},programUniforms:et})}),{inputs:p&&c?[ew,p,c]:[ew],outputs:[]});let ex=[ew,a];ey>1&&u&&e4.size(u.dims)>0&&ex.push(u),p&&ex.push(p),c&&ex.push(c),t.compute((z=ey,A=ew,O=a,R=u,B=d,N=e_,M=p,D=c,en=N+B.kvSequenceLength,es=B.nReps?B.nReps:1,eo=B.vHiddenSize*es,eu=z>1&&R,el=B.kvNumHeads?B.kvNumHeads:B.numHeads,ed=eu?[B.batchSize,el,en,B.headSize]:void 0,ep=[B.batchSize,B.sequenceLength,eo],ec={x:Math.ceil(B.vHeadSize/12),y:Math.ceil(B.sequenceLength/12),z:B.batchSize*B.numHeads},eh=[{type:12,data:B.sequenceLength},{type:12,data:en},{type:12,data:B.vHeadSize},{type:12,data:B.numHeads},{type:12,data:B.headSize},{type:12,data:eo},{type:12,data:N},{type:12,data:B.kvSequenceLength},{type:12,data:es}],ef=eu&&R&&e4.size(R.dims)>0,em=["type","type"],ef&&em.push("type"),M&&em.push("type"),D&&em.push("type"),eg=[{dims:ep,dataType:A.dataType,gpuDataType:0}],eu&&eg.push({dims:ed,dataType:A.dataType,gpuDataType:0}),{name:"AttentionScore",shaderCache:{hint:`${void 0!==R};${z}`,inputDependencies:em},getRunData:()=>({outputs:eg,dispatchGroup:ec,programUniforms:eh}),getShaderSource:t=>{let i=tB("probs",A.dataType,A.dims),r=[i,tB("v",O.dataType,O.dims)];ef&&r.push(tB("past_value",R.dataType,R.dims));let a=M?tB("seq_lens",M.dataType,M.dims):void 0;M&&r.push(a);let n=D?tB("total_sequence_length_input",D.dataType,D.dims):void 0;D&&r.push(n);let s=[tN("output",A.dataType,ep)];return eu&&s.push(tN("present_value",A.dataType,ed)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}]).declareVariables(...r,...s)}
  ${t.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${1===es?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${1===es?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${iy(a,n,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${ef&&eu?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${eu?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${ef&&eu?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${eu?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}),{inputs:ex,outputs:ey>1?[0,2]:[0]})},ib=(t,i)=>{var r,a;let n,s,o,u,l,d,p,c=((t,i)=>{let r=t[0],a=t[1],n=t[2],s=t[3],o=t[4],u=t[5];if(o&&u)throw Error("Attention cannot have both past and attention_bias");if(3!==r.dims.length)throw Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],p=r.dims[2];if(1!==n.dims.length)throw Error('Input "bias" is expected to have 1 dimensions');if(2!==a.dims.length)throw Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==p)throw Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=n.dims[0]/3,h=c,f=h;if(i.qkvHiddenSizes.length>0){if(3!==i.qkvHiddenSizes.length)throw Error("qkv_hidden_sizes attribute should have 3 elements");for(let t of i.qkvHiddenSizes)if(t%i.numHeads!=0)throw Error("qkv_hidden_sizes should be divisible by num_heads");c=i.qkvHiddenSizes[0],h=i.qkvHiddenSizes[1],f=i.qkvHiddenSizes[2]}if(c!==h)throw Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==c+h+f)throw Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let m=0;if(o){if(h!==f)throw Error('Input "past" expect k_hidden_size == v_hidden_size');if(5!==o.dims.length)throw Error('Input "past" must have 5 dimensions');if(2!==o.dims[0])throw Error('Input "past" first dimension must be 2');if(o.dims[1]!==l)throw Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==i.numHeads)throw Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==h/i.numHeads)throw Error('Input "past" fifth dimension must be k_hidden_size / num_heads');i.pastPresentShareBuffer||(m=o.dims[3])}let g=d+m;if(s)throw Error("Mask not supported");if(o)throw Error("past is not supported");if(u){if(4!==u.dims.length)throw Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==i.numHeads||u.dims[2]!==d||u.dims[3]!==g)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:d,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:p,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/i.numHeads),vHeadSize:Math.floor(f/i.numHeads),numHeads:i.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:i.maskFilterValue,maskType:0,scale:i.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}})(t.inputs,i),[h,f,m]=(r=t,n=[(a=c).batchSize,a.numHeads,a.sequenceLength,a.headSize],s=a.sequenceLength,o=a.inputHiddenSize,u=a.headSize,l={x:Math.ceil(a.headSize/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},d=[r.inputs[0],r.inputs[1],r.inputs[2]],p=[{type:12,data:s},{type:12,data:o},{type:12,data:u},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:a.hiddenSize},{type:12,data:a.hiddenSize+a.hiddenSize+a.vHiddenSize}],r.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:r.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:r.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:r.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:t=>{let i=tN("output_q",d[0].dataType,n),r=tN("output_k",d[0].dataType,n),a=tN("output_v",d[0].dataType,n),s=tB("input",d[0].dataType,d[0].dims),o=tB("weight",d[1].dataType,d[1].dims),u=tB("bias",d[2].dataType,d[2].dims),l=s.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}]).declareVariables(s,o,u,i,r,a)}
  ${t.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:d,outputs:[-1,-1,-1]}));return i_(t,h,f,m,t.inputs[4],void 0,void 0,void 0,t.inputs[5],c)}}),nA=j(()=>{el(),nm(),n_(),nC(),nS(),i$=(t,i)=>{let r,{inputs:a,outputCount:n}=t,s=(r={...i,outputCount:n},tw(r));if(c.webgpu.validateInputContent&&((t,i)=>{if(!t||5!==t.length)throw Error("BatchNormalization requires 5 inputs");let r=(t,i,r)=>{let a=i.length;if(a!==t.length)throw Error(`${r}: num dimensions != ${a}`);i.forEach((i,a)=>{if(i!==t[a])throw Error(`${r}: dim[${a}] do not match`)})};if(t[0].dims.length>1){let a="NHWC"===i.format?i.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,i.spatial?2:void 0);r(t[1].dims,a,"Invalid input scale"),r(t[2].dims,a,"Invalid input B"),r(t[3].dims,a,"Invalid input mean"),r(t[4].dims,a,"Invalid input var")}else r(t[1].dims,[1],"Invalid input scale"),r(t[2].dims,[1],"Invalid input B"),r(t[3].dims,[1],"Invalid input mean"),r(t[4].dims,[1],"Invalid input var")})(a,s),i.trainingMode)throw Error("BatchNormalization trainingMode is not supported yet.");t.compute(((t,i)=>{let{epsilon:r,spatial:a,format:n}=i,s=t[0].dims,o=a?tI(s[s.length-1]):1,u="NHWC"===n&&s.length>1?o:1,l=e4.size(s)/o,d=a?s.length:s,p=tB("x",t[0].dataType,t[0].dims,o),c=tB("scale",t[1].dataType,t[1].dims,u),h=tB("bias",t[2].dataType,t[2].dims,u),f=tB("inputMean",t[3].dataType,t[3].dims,u),m=tB("inputVar",t[4].dataType,t[4].dims,u),g=tN("y",t[0].dataType,d,o);return{name:"BatchNormalization",shaderCache:{hint:`${i.epsilon}_${i.format}_${a}_${o}`,inputDependencies:a?["rank","type","type","type","type"]:void 0},getShaderSource:t=>`
  const epsilon = ${r};
  ${t.registerUniform("outputSize","u32").declareVariables(p,c,h,f,m,g)}
  ${t.mainStart()}
  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${(()=>{let t="";if(a)t=`let cOffset = ${1===s.length?"0u":"NHWC"===n?`outputIndices[${s.length-1}] / ${o}`:"outputIndices[1]"};`;else if("NCHW"===n)t=`
            ${g.indicesSet("outputIndices","0","0")}
            let cOffset = ${g.indicesToOffset("outputIndices")};`;else{t=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let i=1;i<c.rank;i++)t+=`cIndices[${i}] = outputIndices[${i}];`;t+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return t})()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${m.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset("global_idx","value")}
  }`,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:a?[{type:12,data:l},...tT(s)]:[{type:12,data:l}]})}})(a,s))}}),nO=j(()=>{n_(),nS(),iv=t=>{var i;let r,a,n,s,o,u,l,d;(t=>{if(3!==t[0].dims.length)throw Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw Error("number of channels should be 320, 640 or 1280");if(1!==t[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw Error("last dimension of input and bias are not the same")})(t.inputs),t.compute((r=(i=t.inputs)[0].dims,a=i[0].dims[2],n=e4.size(r)/4,s=i[0].dataType,o=tB("input",s,r,4),u=tB("bias",s,[a],4),l=tB("residual",s,r,4),d=tN("output",s,r,4),{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:i[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:t=>`
  const channels = ${a}u / 4;
  ${t.declareVariables(o,u,l,d)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${o.getByOffset("global_idx")}
      + ${u.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}))}}),nR=j(()=>{nm(),n_(),nC(),nS(),iw=(t,i,r,a,n,s=t.dataType,o,u)=>{let l=[{type:12,data:Math.ceil(e4.size(t.dims)/4)}];return o&&l.push(...o),{name:i,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:i=>{var n,o,l,d,p,c,h;let f,m,g,y,_;return n=i,o=e4.size(t.dims),l=t.dataType,d=s,p=r,c=a,h=u,f=Math.ceil(o/4),m="",m="string"==typeof p?`${p}(a)`:p("a"),g=tB("inputData",l,[f],4),y=tN("outputData",d,[f],4),_=[{name:"vec_size",type:"u32"}],h&&_.push(...h),`
      ${n.registerUniforms(_).declareVariables(g,y)}

  ${c??""}

  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${g.getByOffset("global_idx")};
    ${y.setByOffset("global_idx",m)}
  }`},getRunData:i=>({outputs:[{dims:t.dims,dataType:s}],dispatchGroup:{x:Math.ceil(e4.size(i[0].dims)/64/4)},programUniforms:l})}},ix=t=>{t.compute(iw(t.inputs[0],"Abs","abs"))},iC=t=>{t.compute(iw(t.inputs[0],"Acos","acos"))},iS=t=>{t.compute(iw(t.inputs[0],"Acosh","acosh"))},ik=t=>{t.compute(iw(t.inputs[0],"Asin","asin"))},iT=t=>{t.compute(iw(t.inputs[0],"Asinh","asinh"))},iI=t=>{t.compute(iw(t.inputs[0],"Atan","atan"))},iE=t=>{t.compute(iw(t.inputs[0],"Atanh","atanh"))},iz=t=>tw(t),iA=(t,i)=>{let r;switch(i.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${i.to}`)}t.compute(iw(t.inputs[0],"Cast",r,void 0,i.cacheKey,i.to))},iO=(t,i)=>{let r=i||(t=>{let i,r,a=t.length>=2&&0!==t[1].data,n=t.length>=3&&0!==t[2].data;switch(t[0].dataType){case 1:i=a?t[1].getFloat32Array()[0]:-34028234663852886e22,r=n?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:i=a?t[1].getUint16Array()[0]:64511,r=n?t[2].getUint16Array()[0]:31743;break;default:throw Error("Unsupport data type")}return tw({min:i,max:r})})(t.inputs),a=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"Clip",t=>`clamp(${t}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:t.inputs[0].dataType,data:r.min},{type:t.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},iR=t=>{t.compute(iw(t.inputs[0],"Ceil","ceil"))},iB=t=>{t.compute(iw(t.inputs[0],"Cos","cos"))},iN=t=>{t.compute(iw(t.inputs[0],"Cosh","cosh"))},iM=t=>tw(t),iD=(t,i)=>{let r=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"Elu",t=>`elu_vf32(${t})`,`
  const elu_alpha_ = ${r}(${i.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,i.cacheKey))},iP=(t="f32")=>`
const r0: ${t} = 0.3275911;
const r1: ${t} = 0.254829592;
const r2: ${t} = -0.284496736;
const r3: ${t} = 1.421413741;
const r4: ${t} = -1.453152027;
const r5: ${t} = 1.061405429;

fn erf_vf32(v: vec4<${t}>) -> vec4<${t}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,iU=t=>{let i=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"Erf",t=>`erf_vf32(${t})`,iP(i)))},iL=t=>{t.compute(iw(t.inputs[0],"Exp","exp"))},iW=t=>{t.compute(iw(t.inputs[0],"Floor","floor"))},ij=t=>{let i=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"Gelu",t=>`0.5 * ${t} * (1.0 + erf_vf32(${t} * 0.7071067811865475))`,iP(i)))},iq=(t,i)=>{let r=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"LeakyRelu",t=>`select(leaky_relu_alpha_ * ${t}, ${t}, ${t} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${i.alpha});`,i.cacheKey))},iG=t=>{t.compute(iw(t.inputs[0],"Not",t=>`!${t}`))},iV=t=>{t.compute(iw(t.inputs[0],"Neg",t=>`-${t}`))},iH=t=>{t.compute(iw(t.inputs[0],"Reciprocal",t=>`1.0/${t}`))},iF=t=>{let i=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"Relu",t=>`select(vec4<${i}>(0.0), ${t}, ${t} > vec4<${i}>(0.0))`))},iK=t=>{t.compute(iw(t.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},iZ=t=>tw(t),iX=(t,i)=>{let r=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"HardSigmoid",t=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${i.alpha} * ${t} + vec4<${r}>(${i.beta})))`,void 0,i.cacheKey))},iQ=t=>{t.compute(iw(t.inputs[0],"Sin","sin"))},iY=t=>{t.compute(iw(t.inputs[0],"Sinh","sinh"))},iJ=t=>{t.compute(iw(t.inputs[0],"Sqrt","sqrt"))},i0=t=>{t.compute(iw(t.inputs[0],"Tan","tan"))},i2=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,i1=t=>{t.compute(iw(t.inputs[0],"Tanh",i2))},i3=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${i2("v")};
}
`,i4=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,i6=t=>{let i=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"FastGelu",i4,i3(i),void 0,t.inputs[0].dataType))},i8=(t,i)=>{let r=tk(t.inputs[0].dataType);return t.compute(iw(t.inputs[0],"ThresholdedRelu",t=>`select(vec4<${r}>(0.0), ${t}, ${t} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${i.alpha});`,i.cacheKey)),0},i5=t=>{t.compute(iw(t.inputs[0],"Log","log"))},i9=t=>`quick_gelu_impl(${t})`,i7=(t,i)=>{let r,a,n=tk(t.inputs[0].dataType);t.compute(iw(t.inputs[0],"QuickGelu",i9,(r=n,a=i.alpha,`
const alpha = vec4<${r}>(${a});
const one = ${r}(1.0);
const zero = ${r}(0.0);

fn quick_gelu_impl(x: vec4<${r}>) -> vec4<${r}> {
  let v = x *alpha;
  var x1 : vec4<${r}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`),i.cacheKey,t.inputs[0].dataType))}}),nB=j(()=>{n_(),nS(),nR(),re=t=>{var i;let r,a,n,s,o,u;(t=>{if(3!==t[0].dims.length)throw Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw Error("hidden state should be 2560, 5120 or 10240");if(1!==t[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw Error("last dimension of input and bias are not the same")})(t.inputs),t.compute(((r=(i=t.inputs)[0].dims.slice())[2]=r[2]/2,a=tB("input",i[0].dataType,i[0].dims,4),n=tB("bias",i[0].dataType,[i[0].dims[2]],4),s=tN("output",i[0].dataType,r,4),o=e4.size(r)/4,u=tS(i[0].dataType),{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:i[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${i[0].dims[2]/4/2}u;

  ${t.declareVariables(a,n,s)}

  ${iP(u)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}))}}),nN=j(()=>{nm(),n_(),nS(),rt=(t,i,r,a,n,s)=>{t.compute(((t,i,r,a,n,s,o=r.dataType)=>{let u=r.dims.map(t=>Number(t)??1),l=a.dims.map(t=>Number(t)??1),d=!e4.areEqual(u,l),p=u,c=e4.size(u),h=!1,f=!1,m=[d];if(d){let t=e3.calcShape(u,l,!1);if(!t)throw Error("Can't perform binary op on the given tensors");p=t.slice(),c=e4.size(p);let i=1===e4.size(u),r=1===e4.size(l),a=u.length>0&&u[u.length-1]%4==0,n=l.length>0&&l[l.length-1]%4==0;m.push(i),m.push(r),m.push(a),m.push(n);let s=1;for(let t=1;t<p.length;t++){let i=u[u.length-t];if(i===l[l.length-t])s*=i;else break}s%4==0?(f=!0,h=!0):(i||r||a||n)&&(h=!0)}else h=!0;return m.push(h),{name:t,shaderCache:{hint:i+m.map(t=>t.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:t=>((t,i,r,a,n,s,o,u,l,d,p,c)=>{let h,f;"string"==typeof u?h=f=(t,i)=>`${u}((${t}),(${i}))`:"function"==typeof u?h=f=u:(h=u.scalar,f=u.vector);let m=tN("outputData",p,a.length,4),g=tB("aData",l,i.length,4),y=tB("bData",d,r.length,4),_;if(n)if(s){let t=1===e4.size(i),a=1===e4.size(r),n=i.length>0&&i[i.length-1]%4==0,s=r.length>0&&r[r.length-1]%4==0;_=t||a?m.setByOffset("global_idx",f(t?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),a?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"))):`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(o||n?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||s?y.getByOffset("offsetB / 4u"):`${y.type.value}(${y.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=m.setByOffset("global_idx",f(g.getByOffset("global_idx"),y.getByOffset("global_idx")));else{if(!s)throw Error("no necessary to use scalar implementation for element-wise binary op implementation.");let t=(t,i,r="")=>{let a=`aData[indexA${i}][componentA${i}]`,n=`bData[indexB${i}][componentB${i}]`;return`
            let outputIndices${i} = ${m.offsetToIndices(`global_idx * 4u + ${i}u`)};
            let offsetA${i} = ${g.broadcastedIndicesToOffset(`outputIndices${i}`,m)};
            let offsetB${i} = ${y.broadcastedIndicesToOffset(`outputIndices${i}`,m)};
            let indexA${i} = offsetA${i} / 4u;
            let indexB${i} = offsetB${i} / 4u;
            let componentA${i} = offsetA${i} % 4u;
            let componentB${i} = offsetB${i} % 4u;
            ${t}[${i}] = ${r}(${h(a,n)});
          `};_=9===p?`
            var data = vec4<u32>(0);
            ${t("data",0,"u32")}
            ${t("data",1,"u32")}
            ${t("data",2,"u32")}
            ${t("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${t("outputData[global_idx]",0)}
            ${t("outputData[global_idx]",1)}
            ${t("outputData[global_idx]",2)}
            ${t("outputData[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(g,y,m)}

        ${c??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`})(t,u,l,p,h,d,f,n,r.dataType,a.dataType,o,s),getRunData:()=>({outputs:[{dims:p,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(e4.size(p)/4)},...tT(u,l,p)]})}})(i,n??"",t.inputs[0],t.inputs[1],r,a,s))},ri=t=>{rt(t,"Add",(t,i)=>`${t}+${i}`)},rr=t=>{rt(t,"Div",(t,i)=>`${t}/${i}`)},ra=t=>{rt(t,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},rn=t=>{rt(t,"Mul",(t,i)=>`${t}*${i}`)},rs=t=>{let i=tB("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;rt(t,"Pow",{scalar:(t,i)=>`pow_custom(${t},${i})`,vector:(t,i)=>`pow_vector_custom(${t},${i})`},`
    fn pow_custom(a : ${i}, b : ${i}) -> ${i} {
      if (b == ${i}(0.0)) {
        return ${i}(1.0);
      } else if (a < ${i}(0.0) && f32(b) != floor(f32(b))) {
        return ${i}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${i}(1.0), round(f32(abs(b) % ${i}(2.0))) != 1.0) * ${i}(${"i32"===i?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${i}>, b : vec4<${i}>) -> vec4<${i}> {
      // TODO: implement vectorized pow
      return vec4<${i}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},ro=t=>{rt(t,"Sub",(t,i)=>`${t}-${i}`)},ru=t=>{rt(t,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},rl=t=>{rt(t,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},rd=t=>{rt(t,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},rp=t=>{rt(t,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),nM=j(()=>{nm(),n_(),nC(),nS(),rc=(t,i)=>{let r=t.inputs,a=r[0].dims,n=e4.normalizeAxis(i.axis,a.length);var s=r,o=n;if(!s||s.length<1)throw Error("too few inputs");let u=s[0],l=u.dataType,d=u.dims.length;s.forEach((t,i)=>{if(0!==i){if(t.dataType!==l)throw Error("input tensors should be one type");if(t.dims.length!==d)throw Error("input tensors should have the same shape");t.dims.forEach((t,i)=>{if(i!==o&&t!==u.dims[i])throw Error("non concat dimensions must match")})}});let p=a.slice();p[n]=r.reduce((t,i)=>t+(i.dims.length>n?i.dims[n]:0),0);let c=r.filter(t=>e4.size(t.dims)>0);t.compute(((t,i,r,a)=>{let n=e4.size(r),s=Array(t.length),o=Array(t.length),u=0,l=[],d=[],p=[{type:12,data:n}];for(let r=0;r<t.length;++r)u+=t[r].dims[i],s[r]=u,d.push(t[r].dims.length),o[r]=tB(`input${r}`,a,d[r]),l.push("rank"),p.push({type:12,data:s[r]});for(let i=0;i<t.length;++i)p.push(...tT(t[i].dims));p.push(...tT(r));let c=tN("output",a,r.length),h=c.indicesGet("indices",i),f=Array.from(Array(s.length).keys()).map(t=>`uniforms.sizeInConcatAxis${t}`).join(",");return{name:"Concat",shaderCache:{hint:`${i}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:i=>{let r,a;return`

  ${(()=>{i.registerUniform("outputSize","u32");for(let r=0;r<t.length;r++)i.registerUniform(`sizeInConcatAxis${r}`,"u32");return i.declareVariables(...o,c)})()}

  ${r=s.length,a=f,`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${r}u>(${a});
    for (var i: u32 = 0u; i < ${r}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${r}u;
  }`}

  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${f});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${((t,i)=>{let r=t.length,a=[];for(let n=0;n<r;++n){let s=i.setByOffset("global_idx",t[n].getByIndices("indices"));1===r?a.push(s):0===n?a.push(`if (inputIndex == ${n}u) { ${s} }`):n===r-1?a.push(`else { ${s} }`):a.push(`else if (inputIndex == ${n}) { ${s} }`)}return a.join(`
`)})(o,c)}
  }`}}})(c,n,p,r[0].dataType),{inputs:c})},rh=t=>tw({axis:t.axis})}),nD=j(()=>{nm(),n_(),rf=(t,i,r="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${i}(0.0));`;case"Sigmoid":return`value = (${i}(1.0) / (${i}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${i}(${r}(uniforms.clip_min)), ${i}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${i}(0.0), min(${i}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${i}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw Error(`Unsupported activation ${t.activation}`)}},rm=(t,i)=>{"Clip"===t.activation?i.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):"HardSigmoid"===t.activation?i.push({type:1,data:t.alpha},{type:1,data:t.beta}):"LeakyRelu"===t.activation&&i.push({type:1,data:t.alpha})},rg=(t,i)=>{"Clip"===t.activation?i.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):"HardSigmoid"===t.activation?i.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):"LeakyRelu"===t.activation&&i.push({name:"alpha",type:"f32"})},ry=t=>{let i=t?.activation||"";if("HardSigmoid"===i){let[r,a]=t?.activation_params||[.2,.5];return{activation:i,alpha:r,beta:a}}if("Clip"===i){let[r,a]=t?.activation_params||[e5,e9];return{activation:i,clipMax:a,clipMin:r}}if("LeakyRelu"===i){let[r]=t?.activation_params||[.01];return{activation:i,alpha:r}}return{activation:i}}}),nP=j(()=>{r_=(t,i)=>{switch(t){case 1:return i;case 2:return`vec2<${i}>`;case 3:return`vec3<${i}>`;case 4:return`vec4<${i}>`;default:throw Error(`${t}-component is not supported.`)}},rb=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nU=j(()=>{r$=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),nL=j(()=>{nm(),n_(),nS(),nD(),rv=(t,i,r,a,n)=>{let s=a-r;return`
      ${Array.from({length:r}).map((r,o)=>`
      if (${tO(i.shape,o,i.rank)} != 1) {
        ${i.indicesSet(t,o,tO(n,o+s,a))}
      } else {
        ${i.indicesSet(t,o,0)}
      }`).join("")}
`},rw=(t,i,r,a,n=!1,s)=>{let o=t[0].dims,u=t[1].dims,l=o[o.length-2],d=u[u.length-1],p=o[o.length-1],c=tI(d),h=tI(p),f=tI(l),m=e4.size(r)/c/f,g=t.length>2,y=a?a.slice(0,-2):r.slice(0,-2),_=[e4.size(y),l,d],b=[{type:12,data:m},{type:12,data:l},{type:12,data:d},{type:12,data:p}];return rm(i,b),b.push(...tT(y,o,u)),g&&b.push(...tT(t[2].dims)),b.push(...tT(_)),{name:"MatMulNaive",shaderCache:{hint:`${i.activation};${c};${h};${f};${n}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:b}),getShaderSource:a=>{let s=tD("batch_dims",t[0].dataType,y.length),l=tB("a",t[0].dataType,o.length,h),d=tB("b",t[1].dataType,u.length,c),p=tN("output",t[0].dataType,_.length,c),m=tS(p.type.tensor),b=rf(i,p.type.value,m),$=[l,d],v="";if(g){let i=n?c:1;$.push(tB("bias",t[2].dataType,t[2].dims.length,i)),v=`${n?`value += bias[col / ${i}];`:`value += ${p.type.value}(bias[row + i]);`}`}let w=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];return rg(i,w),`
  ${a.registerUniforms(w).registerInternalVariables(s).declareVariables(...$,p)}
  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${2===r.length?"":`let batch_indices = ${s.offsetToIndices("batch")};`}

    var a_indices: ${l.type.indices};
    ${rv("a_indices",l,l.rank-2,s.rank,"batch_indices")}
    ${l.indicesSet("a_indices",l.rank-2,0)}
    ${l.indicesSet("a_indices",l.rank-1,0)}
    let a_offset = ${l.indicesToOffset("a_indices")};

    var b_indices: ${d.type.indices};
    ${rv("b_indices",d,d.rank-2,s.rank,"batch_indices")}
    ${d.indicesSet("b_indices",d.rank-2,0)}
    ${d.indicesSet("b_indices",d.rank-1,0)}
    let b_offset = ${d.indicesToOffset("b_indices")};
    var values: array<${p.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${(()=>{let t=`var a_data: ${l.type.value};`;for(let i=0;i<h;i++)t+=`
              let b_data${i} = b[(b_offset + (k + ${i}) * uniforms.N + col) / ${c}];`;for(let i=0;i<f;i++){t+=`a_data = a[(a_offset + (row + ${i}) * uniforms.K + k) / ${h}];`;for(let r=0;r<h;r++)t+=`
            values[${i}] = fma(${d.type.value}(a_data${1===h?"":`[${r}]`}), b_data${r}, values[${i}]);
`}return t})()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${v}
      ${b}
      let cur_indices = ${p.type.indices}(batch, row + i, col);
      let offset = ${p.indicesToOffset("cur_indices")};
      ${p.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `}}}}),nW=j(()=>{nm(),n_(),nS(),nD(),nL(),nP(),rx=(t,i,r="f32",a,n=!1,s=32,o=!1,u=32)=>{let l,d,p,c,h=i[1]*t[1],f=i[0]*t[0],m=n?h:s,g=n?s:h,y=m/i[0],_=s/i[1];if(!((n&&4===y&&4===t[1]||!n&&(3===y||4===y))&&m%i[0]==0&&s%i[1]==0&&4===t[0]))throw Error(`If transposeA ${n} is true, innerElementSize ${y} and workPerThread[1] ${t[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${i[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${i[1]}. colPerThread ${t[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${r}>, ${m/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${f/t[0]}>, ${s}>;

const rowPerThread = ${t[1]};
const colPerThread = ${t[0]};
const innerElementSize = ${y};
const tileInner = ${s};

@compute @workgroup_size(${i[0]}, ${i[1]}, ${i[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${h};

  let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${l=n,d=a,l?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${d?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${d?", batchIndices":""});
        `}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${3===y?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${p=n,c=y,p?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${3===c?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${3===c?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${3===c?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},rC=(t,i)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${i?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${i?", batchIndices":""});
            `,rS=(t,i,r="f32",a,n=!1,s=32,o=!1,u=32,l=!1)=>{let d=t[1]*i[1],p=t[0]*i[0],c=n?d:s,h=n?s:d;if(h%i[1]!=0||c%i[0]!=0||s%i[1]!=0)throw Error(`tileAHight ${h} must be divisible by workgroupSize[1]${i[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${i[0]}, tileInner ${s} must be divisible by workgroupSize[1]${i[1]}`);let f=h/i[1],m=c/i[0],g=s/i[1],y=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${i[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${i[0]}) {
          ${rC(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${i[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${i[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${i[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${i[1]}];`:`mm_Asub[localRow + innerRow * ${i[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${i[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${i[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${rC(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${n?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];"}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${s}>;
  const rowPerThread = ${t[1]};
  const colPerThread = ${t[0]};
  const tileInner = ${s};

@compute @workgroup_size(${i[0]}, ${i[1]}, ${i[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${y}
  }
`},rk=(t,i,r,a,n=!1,s)=>{let o=t[0].dims,u=t[1].dims,l=o.slice(0,-2),d=u.slice(0,-2),p=a?a.slice(0,-2):r.slice(0,-2),c=e4.size(p),h=o[o.length-2],f=o[o.length-1],m=u[u.length-1],g=f%4==0&&m%4==0,y=h<=8?[4,1,1]:[4,4,1],_=[8,8,1],b=[Math.ceil(m/_[0]/y[0]),Math.ceil(h/_[1]/y[1]),Math.ceil(c/_[2]/y[2])],$=g?4:1,v=[...l,h,f/$],w=v.length,x=[...d,f,m/$],C=x.length,S=[c,h,m/$],k=[{type:6,data:h},{type:6,data:m},{type:6,data:f}];rm(i,k),k.push(...tT(p,v,x));let T=["rank","rank"],I=t.length>2;return I&&(k.push(...tT(t[2].dims)),T.push("rank")),k.push(...tT(S)),{name:"MatMul",shaderCache:{hint:`${y};${i.activation};${g};${n}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:t[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:k}),getShaderSource:r=>{let a=p.length,s=tD("batchDims",t[0].dataType,a,1),o=tS(t[0].dataType),u=tB("a",t[0].dataType,w,$),l=tB("b",t[1].dataType,C,$),d=tN("result",t[0].dataType,S.length,$),c=[u,l];if(I){let i=n?$:1;c.push(tB("bias",t[2].dataType,t[2].dims.length,i))}let h=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];rg(i,h);let f=tS(d.type.tensor),m=((t,i,r,a,n=!1)=>{let[s,o,u,l]=a,d=tS(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${r_(t,d)} {
      var value = ${r_(t,d)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${rv("aIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${r_(t,d)} {
      var value = ${r_(t,d)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${rv("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${r_(t,d)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${i?`value = value + ${n?"bias[colIn]":`${r_(t,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `})($,I,rf(i,d.type.value,f),[s,u,l,d],n);return`
  ${r.registerUniforms(h).registerInternalVariables(s).declareVariables(...c,d)}
  ${m}
  ${g?rx(y,_,o,s):rS(y,_,o,s)}
                   `}}}}),nj=j(()=>{nm(),ny(),nS(),nD(),nP(),nU(),nW(),rT=(t,i,r,a,n,s,o,u,l)=>{let d="NHWC"===i.format,p=d?t[0].dims[3]:t[0].dims[1],c=r[0],h=d?r[2]:r[3],f=d?r[1]:r[2],m=d?r[3]:r[1],g=d&&(p%4==0||p%3==0)&&m%4==0,y=d?m:h*f,_=d?h*f:m,b=[8,8,1],$=a<=8?[4,1,1]:[4,4,1],v=[Math.ceil(y/b[0]/$[0]),Math.ceil(_/b[1]/$[1]),Math.ceil(c/b[2]/$[2])];e2("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let w=g?d&&p%4!=0?3:4:1,x=b[1]*$[1],C=b[0]*$[0],S=Math.max(b[0]*w,b[1]),k=a%x==0,T=n%C==0,I=s%S==0,E=g?[w,4,4]:[1,1,1],z=[{type:6,data:a},{type:6,data:n},{type:6,data:s},{type:6,data:[i.pads[0],i.pads[1]]},{type:6,data:i.strides},{type:6,data:i.dilations}];rm(i,z),z.push(...tT(t[0].dims,t[1].dims));let A=["rank","rank"];return o&&(z.push(...tT(t[2].dims)),A.push("rank")),z.push(...tT(r)),{name:"Conv2DMatMul",shaderCache:{hint:`${i.cacheKey};${w};${g};${k};${T};${I};${x};${C};${S}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:t[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:z}),getShaderSource:a=>{let n=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];rg(i,n);let s=g?4:1,l=tS(t[0].dataType),p=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${l}>`:l}) {
        result[flatIndex] = ${g?`vec4<${l}>`:l}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${l}>`:l}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,c=[tB("x",t[0].dataType,t[0].dims.length,3===w?1:w),tB("w",t[1].dataType,t[1].dims.length,s)],h=tN("result",t[0].dataType,r.length,s);if(o){let i=tB("bias",t[2].dataType,t[2].dims.length,s);c.push(i),p+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${l}>`:l} {
          return bias[coords.${d?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${r$("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${a.registerUniforms(n).declareVariables(...c,h)}
        ${p}
        ${((t,i,r,a,n=!1,s,o=4,u=4,l=4,d="f32")=>{let p=t=>{switch(t){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw Error(`innerElementSize ${t} is not supported.`)}},c=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=t?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=t?"row":"col",m=t?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${f} / outWidth;
    let outCol = ${f} % outWidth;

    let WRow = ${m} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${m} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${m} % inChannels;
    var resData = ${r_(o,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])"} && xCol >= 0 && xCol < ${t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])"}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${(t=>{switch(t){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw Error(`innerElementSize ${t} is not supported.`)}})(o)}
    }
    return resData;`,y=t?i&&a?`
    let col = colIn * ${o};
    ${g}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${r_(o,d)}(0.0);`:a&&r?`
    let col = colIn * ${o};
    ${g}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${r_(o,d)}(0.0);`,_=t?a&&r?p(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(u)}
    }
    return ${r_(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(u)}
    }
    return ${r_(u,d)}(0.0);`,b=r_(l,d),$=t?r_(o,d):r_(u,d),v=t?r_(u,d):r_(o,d),w=rf(s,b,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${$} {
      ${t?y:_}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${v} {
      ${t?_:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${b}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${rb(n)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`})(d,k,T,I,o,i,E[0],E[1],E[2],l)}
        ${g?rx($,b,l,void 0,!d,S):rS($,b,l,void 0,!d,S,!1,void 0,u)}`}}}}),nq=j(()=>{nm(),ny(),n_(),nS(),nD(),nP(),rI=t=>"number"==typeof t?[t,t,t]:t,rE=(t,i)=>i<=1?t:t+(t-1)*(i-1),rz=(t,i,r,a,n)=>{null==n&&(n=((t,i,r,a=1)=>{let n=rE(i,a);return Math.floor((t[0]*(r-1)-r+n)/2)})(t,i[0],a[0]));let s=[0,0,0,r];for(let r=0;r<3;r++)t[r]+2*n>=i[r]&&(s[r]=Math.trunc((t[r]-i[r]+2*n)/a[r]+1));return s},rA=(t,i,r,a,n,s=!1,o="channelsLast")=>{let u,l,d,p,c;if("channelsLast"===o)[u,l,d,p,c]=t;else if("channelsFirst"===o)[u,c,l,d,p]=t;else throw Error(`Unknown dataFormat ${o}`);let[h,,f,m,g]=i,[y,_,b]=rI(r),[$,v,w]=rI(a),x=rE(f,$),C=rE(m,v),S=rE(g,w),{padInfo:k,outDepth:T,outHeight:I,outWidth:E}=((t,i,r,a,n,s,o,u,l,d)=>{let p,c,h,f;if("VALID"===t&&(t=0),"number"==typeof t){p={top:t,bottom:t,left:t,right:t,front:t,back:t};let m=rz([i,r,a,1],[u,l,d],1,[n,s,o],t);c=m[0],h=m[1],f=m[2]}else if(Array.isArray(t)){if(!t.every((t,i,r)=>t===r[0]))throw Error(`Unsupported padding parameter: ${t}`);p={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let m=rz([i,r,a,1],[u,l,d],1,[n,s,o],t[0]);c=m[0],h=m[1],f=m[2]}else if("SAME_UPPER"===t){c=Math.ceil(i/n),h=Math.ceil(r/s),f=Math.ceil(a/o);let t=(c-1)*n+u-i,m=(h-1)*s+l-r,g=(f-1)*o+d-a,y=Math.floor(t/2),_=Math.floor(m/2),b=Math.floor(g/2);p={top:_,bottom:m-_,left:b,right:g-b,front:y,back:t-y}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:p,outDepth:c,outHeight:h,outWidth:f}})(n,l,d,p,y,_,b,x,C,S),z=s?h*c:h,A=[0,0,0,0,0];return"channelsFirst"===o?A=[u,z,T,I,E]:"channelsLast"===o&&(A=[u,T,I,E,z]),{batchSize:u,dataFormat:o,inDepth:l,inHeight:d,inWidth:p,inChannels:c,outDepth:T,outHeight:I,outWidth:E,outChannels:z,padInfo:k,strideDepth:y,strideHeight:_,strideWidth:b,filterDepth:f,filterHeight:m,filterWidth:g,effectiveFilterDepth:x,effectiveFilterHeight:C,effectiveFilterWidth:S,dilationDepth:$,dilationHeight:v,dilationWidth:w,inShape:t,outShape:A,filterShape:i}},rO=(t,i,r,a,n,s)=>{let o="channelsLast"===s,u=[Math.ceil((t=>{let i=1;for(let r=0;r<t.length;r++)i*=t[r];return i})((o?t[0].dims[3]:t[0].dims[1],{x:r.map((t,i)=>i)}).x.map(t=>r[t]))/64),1,1];e2("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let l=[{type:12,data:e4.size(r)},{type:12,data:a},{type:12,data:n},{type:12,data:i.strides},{type:12,data:i.dilations}];rm(i,l),l.push(...tT(t[0].dims,t[1].dims));let d=["rank","rank"],p=3===t.length;return p&&(l.push(...tT(t[2].dims)),d.push("rank")),l.push(...tT(r)),{name:"Conv3DNaive",shaderCache:{hint:`${i.cacheKey};${o};1;${p}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:l}),getShaderSource:s=>{let u=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:i.strides.length},{name:"dilations",type:"u32",length:i.dilations.length}];rg(i,u);let l=tS(t[0].dataType),d=tB("x",t[0].dataType,t[0].dims.length,1),c=tB("W",t[1].dataType,t[1].dims.length,1),h=[d,c],f=tN("result",t[0].dataType,r.length,1),m="";if(p){let i=tB("bias",t[2].dataType,t[2].dims.length,1);h.push(i),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l} {
          return bias[${o?tO("coords",4,5):tO("coords",1,5)}];
        }`}let g=r_(1,l),y=rf(i,g,l);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${d.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${c.getByIndices("aIndices")};
            }
          ${s.registerUniforms(u).declareVariables(...h,f)}
          ${s.mainStart()}
          ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${f.offsetToIndices("global_idx")};
              let batch = ${tO("coords",0,d.rank)};
              let d2 = ${o?tO("coords",d.rank-1,d.rank):tO("coords",1,d.rank)};
              let xFRCCorner = vec3<u32>(${o?tO("coords",1,d.rank):tO("coords",2,d.rank)},
              ${o?tO("coords",2,d.rank):tO("coords",3,d.rank)},
              ${o?tO("coords",3,d.rank):tO("coords",4,d.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?tO("uniforms.x_shape",1,d.rank):tO("uniforms.x_shape",2,d.rank)};
              let xShapeZ = ${o?tO("uniforms.x_shape",2,d.rank):tO("uniforms.x_shape",3,d.rank)};
              let xShapeW = ${o?tO("uniforms.x_shape",3,d.rank):tO("uniforms.x_shape",4,d.rank)};
              let xShapeU = ${o?tO("uniforms.x_shape",4,d.rank):tO("uniforms.x_shape",1,d.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${p?"value = value + getBiasByOutputCoords(coords)":""};
              ${y}
              result[global_idx] = f32(value);
          }`}}}}),nG=j(()=>{nm(),n_(),nS(),nD(),rR=(t,i,r,a)=>{let n=t.length>2,s=n?"value += b[output_channel];":"",o=t[0].dims,u=t[1].dims,l="NHWC"===i.format,d=l?r[3]:r[1],p=d/i.group,c=l&&p>=4?tI(d):1,h=e4.size(r)/c,f=[{type:12,data:h},{type:12,data:i.dilations},{type:12,data:[i.strides[0],i.strides[1]]},{type:12,data:[i.pads[0],i.pads[1]]},{type:12,data:p}];return rm(i,f),f.push(...tT(o,[u[0],u[1],u[2],u[3]/c])),f.push(...tT([r[0],r[1],r[2],r[3]/c])),{name:"GroupedConv",shaderCache:{hint:`${i.cacheKey}_${c}`,inputDependencies:n?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:a=>{let d=tN("output",t[0].dataType,r.length,c),p=tS(d.type.tensor),h=rf(i,d.type.value,p),f=tB("x",t[0].dataType,o.length),m=tB("w",t[1].dataType,u.length,c),g=[f,m];n&&g.push(tB("b",t[2].dataType,t[2].dims,c));let y=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:i.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];rg(i,y);let _=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${f.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${m.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${f.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${m.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${a.registerUniforms(y).declareVariables(...g,d)}

  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${d.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${d.type.value} = ${d.type.value}(0);
    ${_}
    ${s}
    ${h}
    ${d.setByOffset("global_idx","value")}
  }`}}},rB=(t,i,r,a)=>{let n=t.length>2,s=tI(r[3]),o=tI(r[2]),u=e4.size(r)/s/o,l=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/s],d=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/s],p=[r[0],r[1],r[2],r[3]/s],c=[{type:12,data:u},{type:6,data:[i.strides[0],i.strides[1]]},{type:6,data:[i.pads[0],i.pads[1]]}];rm(i,c),c.push(...tT(l,d,p));let h=(o-1)*i.strides[1]+d[1];return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${i.cacheKey};${s};${o};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:r=>{let a=tN("output",t[0].dataType,p.length,s),u=tS(a.type.tensor),c=rf(i,a.type.value,u),f=tB("x",t[0].dataType,l.length,s),m=tB("w",t[1].dataType,d.length,s),g=[f,m];n&&g.push(tB("b",t[2].dataType,t[2].dims,s));let y=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return rg(i,y),`
  ${r.registerUniforms(y).declareVariables(...g,a)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${f.type.value}, ${h}>;
    var values: array<${a.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${f.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${f.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${m.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${n?"value += b[output_channel];":""}
      ${c}
      ${a.set("batch","row","col + i","output_channel","value")};
    }
  }`}}}}),nV=j(()=>{n_(),nj(),nq(),nW(),nG(),nD(),nL(),nk(),rN=[2,3,1,0],rM=(t,i)=>{let r=t.kernelShape.slice();r.length<i[1].dims.length-2&&r.push(...Array(i[1].dims.length-2-r.length).fill(0));for(let t=2;t<i[1].dims.length;++t)0===r[t-2]&&(r[t-2]=i[1].dims[t]);let a=t.pads.slice();e6.adjustPadsBasedOnAutoPad(i[0].dims,t.strides,t.dilations,r,a,"NHWC"===t.format,t.autoPad);let n=Object.assign({},t);return Object.assign(n,{kernelShape:r,pads:a}),n},rD=t=>{let i=ry(t),r=t.format;return{autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],format:r,dilations:t.dilations,group:t.group,kernelShape:t.kernel_shape,pads:t.pads,strides:t.strides,wIsConst:t.w_is_const(),...i,cacheKey:`${t.format};${i.activation};`}},rP=(t,i,r,a)=>{var n,s,o,u,l,d;let p,c,h,f,m,g,y="NHWC"===r.format,_=(n=i[0].dims,s=i[1].dims,o=r.dilations,u=r.pads,l=r.strides,d=y,p=n[0],h=(c=n.slice(d?1:2,d?3:4)).length,f=s[0],m=s.slice(2).map((t,i)=>t+(t-1)*(o[i]-1)),(g=c.map((t,i)=>t+u[i]+u[i+h]).map((t,i)=>Math.floor((t-m[i]+l[i])/l[i]))).splice(0,0,p),g.splice(d?3:1,0,f),g);if(1!==r.group){let n=[i[0]];if(y){let a=t.kernelCustomData.wT??t.compute(tW(i[1],rN),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=a),n.push(a)}else n.push(i[1]);3===i.length&&n.push(i[2]),!t.adapterInfo.isArchitecture("ampere")&&y&&i[1].dims[0]===r.group&&1===i[1].dims[1]&&1===r.dilations[0]&&1===r.dilations[1]?t.compute(rB(n,r,_,a),{inputs:n}):t.compute(rR(n,r,_,a),{inputs:n});return}let b=3===i.length,$=i[0].dims[y?1:2],v=i[0].dims[y?2:3],w=i[0].dims[y?3:1],x=i[1].dims[2],C=i[1].dims[3],S=_[y?1:2],k=_[y?2:3],T=_[y?3:1],I=y&&x===$&&C===v&&0===r.pads[0]&&0===r.pads[1];if(I||1===x&&1===C&&1===r.dilations[0]&&1===r.dilations[1]&&1===r.strides[0]&&1===r.strides[1]&&0===r.pads[0]&&0===r.pads[1]){let n=_[0],s,o,u,l=[];if(y){let a=t.kernelCustomData.wT??t.compute(tW(i[1],rN),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=a),I){let t=$*v*w;s=i[0].reshape([1,n,t]),o=a.reshape([1,t,T]),u=[1,n,T]}else s=i[0].reshape([n,$*v,w]),o=a.reshape([1,w,T]),u=[n,S*k,T];l.push(s),l.push(o)}else s=i[0].reshape([n,w,$*v]),o=i[1].reshape([1,T,w]),u=[n,T,S*k],l.push(o),l.push(s);b&&l.push(i[2]);let d=u[2],p=l[0].dims[l[0].dims.length-1];d<8&&p<8?t.compute(rw(l,r,_,u,y,a),{inputs:l}):t.compute(rk(l,r,_,u,y,a),{inputs:l});return}let E=t.kernelCustomData.wT??t.compute(tW(i[1],rN),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=E);let z=[i[0],E];b&&z.push(i[2]);let A=y?S*k:T,O=y?T:S*k,R=x*C*w;t.compute(rT(z,r,_,A,O,R,b,!0,a),{inputs:z})},rU=(t,i)=>{var r,a,n,s,o;if(((t,i)=>{if(!t||2!==t.length&&3!==t.length)throw Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw Error("filter does not have same dimension as input");if(t[0].dims["NHWC"===i.format?t[0].dims.length-1:1]!==t[1].dims[1]*i.group)throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(3===t.length&&(1!==t[2].dims.length||t[1].dims[0]!==t[2].dims[0]))throw Error("invalid bias");let r=t[0].dims.length-2;if(i.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(i.strides.length!==r)throw Error(`strides should be ${r}D`);if(i.pads.length!==2*r)throw Error(`pads should be ${2*r}D`);if(0!==i.kernelShape.length&&i.kernelShape.length!==t[1].dims.length-2)throw Error("invalid kernel shape")})(t.inputs,i),3===t.inputs[0].dims.length){let n,s,o,u,l,d,p;r=t,n="NHWC"===(a=i).format,s=[r.inputs[0].reshape(n?[r.inputs[0].dims[0],1,r.inputs[0].dims[1],r.inputs[0].dims[2]]:[r.inputs[0].dims[0],r.inputs[0].dims[1],1,r.inputs[0].dims[2]]),r.inputs[1].reshape([r.inputs[1].dims[0],r.inputs[1].dims[1],1,r.inputs[1].dims[2]])],3===r.inputs.length&&s.push(r.inputs[2]),o=[0,a.pads[0],0,a.pads[1]],u=[1].concat(a.strides),l=[1].concat(a.dilations),d=[1].concat(a.kernelShape),p=rM({...a,pads:o,strides:u,dilations:l,kernelShape:d},s),rP(r,s,p,t=>n?[t[0],t[2],t[3]]:[t[0],t[1],t[3]])}else if(5===t.inputs[0].dims.length){let r,a,u,l;n=t,s=t.inputs,r="NHWC"===(o=i).format?"channelsLast":"channelsFirst",a=rM(o,s),u="NOTSET"===o.autoPad?o.pads:o.autoPad,l=rA(s[0].dims,s[1].dims,o.strides,o.dilations,u,!1,r),n.compute(rO(s,a,l.outShape,[l.filterDepth,l.filterHeight,l.filterWidth],[l.padInfo.front,l.padInfo.top,l.padInfo.left],r))}else{let r=rM(i,t.inputs);rP(t,t.inputs,r)}}}),nH=j(()=>{nm(),ny(),n_(),nS(),rL=(t,i,r)=>{let a=t.length>2,n=i.outputShape,s="NHWC"===i.format,o=i.group,u=t[1].dims,l=u[2]/o,d=u[3],p=s?tI(l):1,c=s&&1===d&&l>=4,h=c?4*Math.floor(l/4):Math.floor(l/p)*p,f=l-h,m=s?tI(d):1,g=s?1===d?p:m:1,y=e4.size(n)/m,_=[Math.ceil(y/64),1,1];e2("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let b=["rank","rank"],$=[i.strides[0],i.strides[1]],v=[i.kernelShape[s?1:2],i.kernelShape[s?2:3]],w=[i.dilations[0],i.dilations[1]],x=[v[0]+(i.dilations[0]<=1?0:(i.kernelShape[s?1:2]-1)*(i.dilations[0]-1)),v[1]+(i.dilations[1]<=1?0:(i.kernelShape[s?2:3]-1)*(i.dilations[1]-1))],C=[x[0]-1-Math.floor((i.pads[0]+i.pads[2])/2),x[1]-1-Math.floor((i.pads[1]+i.pads[3])/2)],S=[{type:12,data:y},{type:12,data:$},{type:12,data:v},{type:12,data:w},{type:12,data:x},{type:6,data:C},{type:12,data:h},{type:12,data:l},{type:12,data:d},...tT(t[0].dims,t[1].dims)];return a&&(S.push(...tT(t[2].dims)),b.push("rank")),S.push(...tT(n)),{name:"ConvTranspose2D",shaderCache:{hint:`${i.cacheKey};${p}${g}${m}${c}${f}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(n):n,dataType:t[0].dataType}],programUniforms:S}),getShaderSource:i=>{let r=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:$.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:x.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],o=tS(t[0].dataType),u=s?1:2,l=s?2:3,d=s?3:1,h=tB("W",t[1].dataType,t[1].dims.length,g),y=tB("Dy",t[0].dataType,t[0].dims.length,p),_=[y,h];a&&_.push(tB("bias",t[2].dataType,[n[d]].length,m));let b=tN("result",t[0].dataType,n.length,m),w=`
            let outputIndices = ${b.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${b.indicesGet("outputIndices",0)};
            let d1 = ${b.indicesGet("outputIndices",d)};
            let r = ${b.indicesGet("outputIndices",u)};
            let c = ${b.indicesGet("outputIndices",l)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${b.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${u}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${l}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${y.indicesToOffset(`${y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${h.indicesToOffset(`${h.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${g};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:p}) {
                  ${(()=>{let t="";if(c)4===p?t+=`
        let xValue = ${y.getByOffset("x_offset")};
        let wValue = ${h.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:2===p?t+=`
          dotProd = dotProd + dot(vec4<${o}>(${y.getByOffset("x_offset")}, ${y.getByOffset("x_offset + 1u")}), vec4<${o}>(${h.getByOffset("w_offset")}, ${h.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:1===p&&(t+=`
          dotProd = dotProd + dot(vec4<${o}>(${y.getByOffset("x_offset")}, ${y.getByOffset("x_offset + 1u")}, ${y.getByOffset("x_offset + 2u")}, ${y.getByOffset("x_offset + 3u")}), vec4<${o}>(${h.getByOffset("w_offset")}, ${h.getByOffset("w_offset + 1u")}, ${h.getByOffset("w_offset + 2u")}, ${h.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(t+=`
                  let xValue = ${s?y.getByOffset(`${y.indicesToOffset(`${y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):y.get("batch","inputChannel","idyR","idyC")};
        `,1===p)t+=`
          let w_offset = ${h.indicesToOffset(`${h.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${h.getByOffset(`w_offset / ${g}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let i=0;i<p;i++)t+=`
            let wValue${i} = ${h.getByOffset(`${h.indicesToOffset(`${h.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${i}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${i}] * wValue${i};`;return t})()}
                  inputChannel = inputChannel + ${c?4:p};
                }
                ${(()=>{if(0===f)return"";if(!c)throw Error(`packInputAs4 ${c} is not true.`);let t="";if(1===p){t+="dotProd = dotProd";for(let i=0;i<f;i++)t+=`
            + ${y.getByOffset(`x_offset + ${i}`)} * ${h.getByOffset(`w_offset + ${i}`)}`;t+=";"}else if(2===p){if(2!==f)throw Error(`Invalid inputChannelsRemainder ${f}.`);t+=`
          let xValue = ${y.getByOffset("x_offset")};
          let wValue = ${h.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return t})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${m}]`:""};
            ${b.setByOffset("global_idx","value")};
          `;return`
    ${i.registerUniforms(r).declareVariables(..._,b)}
      ${i.mainStart()}
      ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${w}}`}}}}),nF=j(()=>{nH(),nD(),nk(),rW=(t,i,r,a,n,s)=>(t-1)*i+r+(a-1)*n+1-s,rj=(t,i,r,a,n)=>{let s=Math.floor(t/2);"SAME_UPPER"===i?(r[a]=s,r[n]=t-s):"SAME_LOWER"===i&&(r[a]=t-s,r[n]=s)},rq=(t,i)=>{let r=t.kernelShape.slice();if(0===t.kernelShape.length||0===t.kernelShape.reduce((t,i)=>t*i,1)){r.length=0;for(let t=2;t<i[1].dims.length;++t)r.push(i[1].dims[t])}let a="NHWC"===t.format;r.splice(0,0,i[1].dims[0]),r.splice(a?3:1,0,i[1].dims[1]);let n=t.pads.slice(),s=t.outputShape.slice(),o=t.outputPadding.slice(),u=i[0].dims,l=t.dilations.slice();0===l.reduce((t,i)=>t+i,0)&&(l=Array(i[0].dims.length-2).fill(1));let d=t.strides.slice();0===d.reduce((t,i)=>t+i,0)&&(d=Array(i[0].dims.length-2).fill(1)),((t,i,r,a,n,s,o,u,l,d)=>{let p=t.length-2,c=0===d.length;l.length<p&&l.push(...Array(p-l.length).fill(0));let h=t[0],f=i[u?3:1]*n;for(let n=0,h=t.length-p-!!u;n<p;++n,++h){let u=t[h],f=c?u*o[n]:d[n];rj(rW(u,o[n],s[n],i[h],r[n],f),a,s,n,n+p),c&&d.push(o[n]*(u-1)+l[n]+(i[h]-1)*r[n]+1-s[n]-s[n+p])}d.splice(0,0,h),d.splice(u?3:1,0,f)})(u,r,l,t.autoPad,t.group,n,d,a,o,s);let p=Object.assign({},t);return Object.assign(p,{kernelShape:r,pads:n,outputPadding:o,outputShape:s,dilations:l,strides:d}),p},rG=t=>{let i=ry(t),r=t.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],n=t.dilations,s=t.group,o=t.kernelShape,u=t.pads,l=t.strides,d=t.wIsConst();return{autoPad:a,format:r,dilations:n,group:s,kernelShape:o,outputPadding:t.outputPadding,outputShape:t.outputShape,pads:u,strides:l,wIsConst:d,...i,cacheKey:`${t.format};${i.activation};`}},rV=(t,i,r,a)=>{let n=t.kernelCustomData.wT??t.compute(tW(i[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=n);let s=[i[0],n];3===i.length&&s.push(i[2]),t.compute(rL(s,r,a),{inputs:s})},rH=(t,i)=>{if(((t,i)=>{if(!t||2!==t.length&&3!==t.length)throw Error("Conv requires 2 or 3 inputs");if(4!==t[0].dims.length&&3!==t[0].dims.length)throw Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw Error("filter does not have same dimension as input");if(t[0].dims["NHWC"===i.format?t[0].dims.length-1:1]!==t[1].dims[0])throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let r=t[1].dims[1]*i.group;if(3===t.length&&(1!==t[2].dims.length||t[2].dims[0]!==r))throw Error("invalid bias");let a=t[0].dims.length-2;if(i.dilations.reduce((t,i)=>t+i,0)>0&&i.dilations.length!==a)throw Error(`dilations should be ${a}D`);if(i.strides.reduce((t,i)=>t+i,0)>0&&i.strides.length!==a)throw Error(`strides should be ${a}D`);if(i.pads.reduce((t,i)=>t+i,0)>0&&i.pads.length!==2*a)throw Error(`pads should be ${2*a}D`);if(i.outputPadding.length!==a&&0!==i.outputPadding.length)throw Error(`output_padding should be ${a}D`);if(i.kernelShape.reduce((t,i)=>t+i,0)>0&&0!==i.kernelShape.length&&i.kernelShape.length!==t[1].dims.length-2)throw Error("invalid kernel shape");if(0!==i.outputShape.length&&i.outputShape.length!==t[0].dims.length-2)throw Error("invalid output shape")})(t.inputs,i),3===t.inputs[0].dims.length){var r,a;let n,s,o,u,l,d,p,c;r=t,n="NHWC"===(a=i).format,s=[r.inputs[0].reshape(n?[r.inputs[0].dims[0],1,r.inputs[0].dims[1],r.inputs[0].dims[2]]:[r.inputs[0].dims[0],r.inputs[0].dims[1],1,r.inputs[0].dims[2]]),r.inputs[1].reshape([r.inputs[1].dims[0],r.inputs[1].dims[1],1,r.inputs[1].dims[2]])],3===r.inputs.length&&s.push(r.inputs[2]),(0===(o=a.kernelShape).length||0===o[0])&&(o=[r.inputs[1].dims[2]]),(0===(u=a.dilations).length||0===u[0])&&(u=[1]),(0===(l=a.strides).length||0===l[0])&&(l=[1]),0===(d=a.pads).length&&(d=[0,0]),d=[0,d[0],0,d[1]],l=[1].concat(l),u=[1].concat(u),o=[1].concat(o),p=[0].concat(p=a.outputPadding),c=rq({...a,pads:d,strides:l,dilations:u,kernelShape:o,outputPadding:p},s),rV(r,s,c,t=>n?[t[0],t[2],t[3]]:[t[0],t[1],t[3]])}else{let r=rq(i,t.inputs);rV(t,t.inputs,r)}}}),nK=j(()=>{nm(),n_(),nC(),nS(),rF=(t,i)=>{var r,a,n,s;let o,u,l,d,p,c,h=t.inputs[0].dims,f=t.inputs[0].dataType,m=t.inputs[1];t.compute((r=f,a=h,n=m,s=i,o=e4.size(a),u=a.length,l=tB("input",r,u),d=tN("output",r,u),p=6===n.dataType?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),c=e4.normalizeAxis(p,u),{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:c},...tT(a,a)]}),getShaderSource:t=>{let i=` i32(${l.indicesGet("inputIndices","uniforms.axis")}) `,r=tO("uniforms.input_shape","uniforms.axis",u),a=s.reverse?i+(s.exclusive?" + 1":""):"0",n=s.reverse?r:i+(s.exclusive?"":" + 1");return`
                ${t.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(l,d)}
                ${t.mainStart()}
                  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${d.offsetToIndices("global_idx")};
                  var sum = ${d.type.value}(0);
                  let first : i32 = ${a};
                  let last : i32 = ${n};
                  for (var i : i32 = first; i < last; i++) {
                    ${l.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${l.getByIndices("inputIndices")};
                  }
                  ${d.setByOffset("global_idx","sum")};
                }`}}),{inputs:[0]})},rK=t=>{let i=1===t.exclusive,r=1===t.reverse;return tw({exclusive:i,reverse:r})}}),nZ=j(()=>{nm(),n_(),nC(),nS(),rZ=(t,i)=>{var r,a;let n,s,o,u,l,d,p,c,h,f,m,g,y,_;(t=>{if(!t||1!==t.length)throw Error("DepthToSpace requires 1 input.");if(4!==t[0].dims.length)throw Error("DepthToSpace requires 4D input.")})(t.inputs),t.compute((r=t.inputs[0],p="NHWC"===(a=i).format,c=a.blocksize,h="DCR"===a.mode,p?([n,s,o,u]=r.dims,l=h?[n,s,o,c,c,u/c**2]:[n,s,o,u/c**2,c,c],d=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,s,o,u]=[r.dims[0],r.dims[2],r.dims[3],r.dims[1]],l=h?[n,c,c,u/c**2,s,o]:[n,u/c**2,c,c,s,o],d=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]),m=(f=r.reshape(l)).dims.length,g=r.dataType,y=tB("a",g,m),_=tN("output",g,m),{name:"DepthToSpace",shaderCache:{hint:`${r.dims};${a.blocksize};${a.mode}`,inputDependencies:["rank"]},getRunData:t=>{let i=p?[n,s*c,o*c,u/c**2]:[n,u/c**2,s*c,o*c],r=e4.size(i),a=f.dims,l=e4.sortBasedOnPerm(a,d);return{outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},...tT(a,l)]}},getShaderSource:t=>`
  ${t.registerUniform("output_size","u32").declareVariables(y,_)}

  ${((t,i,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<i;++a)n.push(r.indicesSet("a",t[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)})(d,m,y,_)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`}))},rX=t=>tw({blocksize:t.blocksize,mode:t.mode,format:t.format})}),nX=j(()=>{nm(),n_(),nC(),nS(),rJ="^"+(rY="("+(rQ="[a-zA-Z]|\\.\\.\\.")+")+")+"$",r0="^"+("("+rY+",)*")+rY+"$",r2=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,i){let r=this.symbolToIndices.get(t);void 0===r?r=[i]:r.push(i),this.symbolToIndices.set(t,r)}},r1=class{constructor(t,i){this.equation=i,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[r,a]=i.includes("->")?i.split("->",2):[i,""];if(!r.match(RegExp(r0)))throw Error("Invalid LHS term");if(r.split(",").forEach((i,r)=>{let a=t[r].dims.slice();if(!i.match(RegExp(rJ)))throw Error("Invalid LHS term");let n=this.processTerm(i,!0,a,r);this.lhs.push(n)}),""===a)a+=[...this.symbolToInfo.entries()].filter(([t,i])=>1===i.count||"..."===t).map(([t])=>t).join("");else if(!a.match(RegExp(rY)))throw Error("Invalid RHS");a.match(RegExp(rQ,"g"))?.forEach(t=>{if("..."===t)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let i=this.symbolToInfo.get(t);if(void 0===i)throw Error("Invalid RHS symbol");this.outputDims.push(i.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(t,i,r){let a=this.symbolToInfo.get(t);if(void 0!==a){if(a.dimValue!==i&&1!==a.count)throw Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:i,inputIndices:[r]};this.symbolToInfo.set(t,a)}processTerm(t,i,r,a=-1){let n=r.length,s=!1,o=[],u=0;if(!t.match(RegExp(rJ))&&!i&&""!==t)throw Error("Invalid LHS term");let l=t.match(RegExp(rQ,"g")),d=new r2(a);return l?.forEach((t,p)=>{if("..."===t){if(s)throw Error("Only one ellipsis is allowed per input term");s=!0;let t=n-l.length+1;if(t<0)throw Error("Ellipsis out of bounds");if(o=r.slice(u,u+t),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error("Ellipsis dimensions mismatch")}else if(i)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error("Ellipsis must be specified in the LHS");for(let t=0;t<o.length;t++){let i=String.fromCharCode(48+t);d.addSymbol(i,p+t),this.addSymbol(i,r[u++],a)}}else d.addSymbol(t,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(t,r[u++],a)}),d}},r3=(t,i)=>{var r,a,n,s;let o,u,l,d,p=new r1(t.inputs,i.equation),c=p.outputDims,h=t.inputs.map((t,i)=>t.dims);t.compute((r=h,a=t.inputs[0].dataType,n=p,s=c,o=r.map(t=>t.length).map((t,i)=>tB(`input${i}`,a,t)),u=e4.size(s),l=tN("output",a,s.length),d=[...n.symbolToInfo.keys()].filter(t=>!n.rhs.symbolToIndices.has(t)),{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:r.map(()=>"rank")},getRunData:()=>{let t=d.filter(t=>n.symbolToInfo.has(t)).map(t=>({type:12,data:n.symbolToInfo.get(t)?.dimValue||0}));t.push({type:12,data:u});let i=r.map((t,i)=>[...tT(t)]).reduce((t,i)=>t.concat(i),t);return i.push(...tT(s)),{outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:i}},getShaderSource:t=>{let i=[],r=[],a=[],s=[],u=[],p=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((t,d)=>{if(n.rhs.symbolToIndices.has(d)){let r=n.rhs.symbolToIndices.get(d)?.[0];void 0!==r&&n.lhs.forEach((a,n)=>{if(t.inputIndices.includes(n)){let t=a.symbolToIndices.get(d);if(void 0===t)throw Error("Invalid symbol error");t.forEach(t=>{i.push(`${o[n].indicesSet(`input${n}Indices`,t,l.indicesGet("outputIndices",r))}`)})}})}else{let i;n.lhs.forEach((i,a)=>{if(t.inputIndices.includes(a)){let t=i.symbolToIndices.get(d);if(void 0===t)throw Error("Invalid symbol error");t.forEach(t=>{r.push(`${o[a].indicesSet(`input${a}Indices`,t,`${d}`)}`)}),u.push(`prod *= ${o[a].getByIndices(`input${a}Indices`)};`)}}),a.push(`for(var ${d}: u32 = 0; ${d} < uniforms.${(i=d)+"_max"}; ${d}++) {`),s.push("}")}});let c=p?[...i,`let sum = ${o.map((t,i)=>t.getByIndices(`input${i}Indices`)).join(" * ")};`]:[...i,"var sum = 0.0;",...a,...r,"var prod = 1.0;",...u,"sum += prod;",...s];return`
            ${t.registerUniforms(d.map(t=>{let i;return{name:`${(i=t)+"_max"}`,type:"u32"}})).registerUniform("outputSize","u32").declareVariables(...o,l)}

            ${t.mainStart()}
            ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${l.offsetToIndices("global_idx")};
            ${o.map((t,i)=>`var input${i}Indices: ${o[i].type.indices};`).join(`
`)}
            ${c.join(`
`)};
            ${l.setByOffset("global_idx","sum")};
          }`}}))},r4=t=>{let i=t.equation.replace(/\s+/g,"");return tw({equation:i})}}),nQ=j(()=>{nm(),n_(),nS(),r6=(t,i)=>{let r=t.length-i.length,a=[];for(let i=0;i<r;++i)a.push(t[i]);for(let n=0;n<i.length;++n)a.push(1===i[n]?t[n+r]:i[n]);return a},r8=t=>{var i;let r,a,n,s,o,u,l,d,p,c;(t=>{if(!t||2!==t.length)throw Error("Expand requires 2 input.");let i=t[0].dims,r=Array.from(t[1].getBigInt64Array(),Number),a=r.length<i.length?0:r.length-i.length,n=i.length<r.length?0:i.length-r.length;for(;a<r.length&&n<i.length;++a,++n)if(r[a]!==i[n]&&1!==r[a]&&1!==i[n])throw Error("Expand requires shape to be broadcastable to input")})(t.inputs),t.compute((s=(r=n=(i=t.inputs)[0].dims,a=Array.from(i[1].getBigInt64Array(),Number),r.length>a.length?r6(r,a):r6(a,r)),u=9===(o=i[0].dataType)||1===e4.size(n),l=9===o||n.length>0&&n[n.length-1]%4==0?4:1,d=u||s.length>0&&s[s.length-1]%4==0?4:1,c=[{type:12,data:p=Math.ceil(e4.size(s)/d)},...tT(n,s)],{name:"Expand",shaderCache:{hint:`${s.length};${l}${d}`,inputDependencies:["rank"]},getShaderSource:t=>{let i=tB("input",o,n.length,l),r=tN("output",o,s.length,d),a;if(9===o){let t=(t,a,n="")=>`
          let outputIndices${a} = ${r.offsetToIndices(`outputOffset + ${a}u`)};
          let offset${a} = ${i.broadcastedIndicesToOffset(`outputIndices${a}`,r)};
          let index${a} = offset${a} / 4u;
          let component${a} = offset${a} % 4u;
          ${t}[${a}] = ${n}(${i.getByOffset(`index${a}`)}[component${a}]);
        `;a=`
        let outputOffset = global_idx * ${d};
        var data = vec4<u32>(0);
        ${t("data",0,"u32")}
        ${t("data",1,"u32")}
        ${t("data",2,"u32")}
        ${t("data",3,"u32")}
        ${r.setByOffset("global_idx","data")}
      }`}else a=`
        let outputIndices = ${r.offsetToIndices(`global_idx * ${d}`)};
        let inputOffset = ${i.broadcastedIndicesToOffset("outputIndices",r)};
        let data = ${r.type.value}(${i.getByOffset(`inputOffset / ${l}`)});
        ${r.setByOffset("global_idx","data")}
      }`;return`
    ${t.registerUniform("vec_size","u32").declareVariables(i,r)}
    ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${a}`},getRunData:()=>({outputs:[{dims:s,dataType:i[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c})}),{inputs:[0]})}}),nY=j(()=>{nm(),n_(),nS(),nR(),r5=t=>{var i;let r,a,n,s;t.inputs.length<2||0===e4.size(t.inputs[1].dims)?i6(t):t.compute((r=(i=t.inputs)[0].dataType,a=e4.size(i[0].dims),s=(n=e4.size(i[1].dims))%4==0,{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:t=>{let i=tB("x",r,[1],4),a=tB("bias",r,[1],4),n=tN("y",r,[1],4),o=t=>`
      let bias${t}_offset: u32 = (global_idx * 4 + ${t}) % uniforms.bias_size;
      let bias${t} = ${a.getByOffset(`bias${t}_offset / 4`)}[bias${t}_offset % 4];`,u=s?`
      let bias = ${a.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${o(0)}${o(1)}${o(2)}${o(3)}
      let bias = ${i.type.value}(bias0, bias1, bias2, bias3);`;return`${t.registerUniforms([{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}]).declareVariables(i,a,n)}

    ${i3(tk(r))}

    ${t.mainStart(tx)}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${i.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${n.setByOffset("global_idx",i4("x_in"))}
    }`},getRunData:t=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],programUniforms:[{type:12,data:Math.ceil(a/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(a/tx/4)}})}))}}),nJ=j(()=>{nm(),n_(),nC(),nS(),r9=t=>tw({axis:t.axis}),r7=(t,i)=>{var r,a;let n,s,o,u,l,d,p,c,h;(t=>{if(!t||2!==t.length)throw Error("Gather requires 2 inputs.")})(t.inputs),t.compute((r=t.inputs,a=i,n=r[0].dims,s=r[1].dims,o=n.length,u=e4.normalizeAxis(a.axis,o),(l=n.slice(0)).splice(u,1,...s),d=n[u],p=9===r[0].dataType?4:1,h=[{type:12,data:c=Math.ceil(e4.size(l)/p)},{type:6,data:d},{type:12,data:u},...tT(r[0].dims,r[1].dims,l)],{name:"Gather",shaderCache:{hint:a.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:t=>{let i=tB("data",r[0].dataType,r[0].dims.length,p),a=tB("inputIndices",r[1].dataType,r[1].dims.length),n=tN("output",r[0].dataType,l.length,p),d=t=>{let r=s.length,n=`var indicesIndices${t}  = ${a.type.indices}(0);`;for(let i=0;i<r;i++)n+=`${r>1?`indicesIndices${t}[${i}]`:`indicesIndices${t}`} = ${l.length>1?`outputIndices${t}[uniforms.axis + ${i}]`:`outputIndices${t}`};`;n+=`
          var idx${t} = ${a.getByIndices(`indicesIndices${t}`)};
          if (idx${t} < 0) {
            idx${t} = idx${t} + uniforms.axisDimLimit;
          }
          var dataIndices${t} : ${i.type.indices};
        `;for(let i=0,a=0;i<o;i++)i===u?(n+=`${o>1?`dataIndices${t}[${i}]`:`dataIndices${t}`} = u32(idx${t});`,a+=r):(n+=`${o>1?`dataIndices${t}[${i}]`:`dataIndices${t}`} = ${l.length>1?`outputIndices${t}[${a}]`:`outputIndices${t}`};`,a++);return n},c;if(9===r[0].dataType){let t=(t,r,a="")=>`
          let outputIndices${r} = ${n.offsetToIndices(`outputOffset + ${r}u`)};
          ${d(r)};
          let offset${r} = ${i.indicesToOffset(`dataIndices${r}`)};
          let index${r} = offset${r} / 4u;
          let component${r} = offset${r} % 4u;
          ${t}[${r}] = ${a}(${i.getByOffset(`index${r}`)}[component${r}]);
        `;c=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${t("value",0,"u32")}
        ${t("value",1,"u32")}
        ${t("value",2,"u32")}
        ${t("value",3,"u32")}
        ${n.setByOffset("global_idx","value")}
      `}else c=`
      let outputIndices = ${n.offsetToIndices("global_idx")};
      ${d("")};
      let value = ${i.getByIndices("dataIndices")};
      ${n.setByOffset("global_idx","value")};
      `;return`
      ${t.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(i,a,n)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${c}
      }`}}))}}),n0=j(()=>{nm(),n_(),nS(),ae=(t,i)=>{var r,a,n,s,o,u;let l,d,p=t.inputs,c=p[0].dims,h=p[0].dataType,f=p[1].dims,m=f[f.length-1],g=e4.sizeToDimension(f,f.length-1),y=e4.sizeFromDimension(c,i.batchDims+m),_=e4.sizeToDimension(c,i.batchDims),b=e4.sizeFromDimension(c,i.batchDims),$=Array(m),v=y;for(let t=0;t<m;++t)$[m-1-t]=v,v*=c[i.batchDims+m-1-t];let w=(r=t,a=p[1],n=$,s=i.batchDims,o=c,l=[{type:12,data:u=g},{type:12,data:s},{type:12,data:o},{type:12,data:n},{type:12,data:g/_},{type:12,data:b},{type:12,data:m}],d=[u],l.push(...tT(a.dims,d)),r.compute({name:"computeSliceOffsets",shaderCache:{hint:`${o.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:r.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:t=>{let i=tB("indices_data",a.dataType,a.dims.length),r=tN("input_slice_offsets_data",12,1,1),s=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:o.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${t.registerUniforms(s).declareVariables(i,r)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${1===o.length?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${1===n.length?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[a],outputs:[-1]})[0]),x=i.batchDims+m;if(x>c.length)throw Error("last dimension of indices must not be larger than rank of input tensor");let C=f.slice(0,-1).concat(c.slice(x)),S=e4.size(C),k=[{type:12,data:S},{type:12,data:y},...tT(p[0].dims,w.dims,C)];t.compute({name:"GatherND",shaderCache:{hint:i.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:C,dataType:h}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:k}),getShaderSource:t=>{let i=tB("data",p[0].dataType,p[0].dims.length),r=tB("slice_offsets",12,w.dims.length),a=tN("output",p[0].dataType,C.length);return`
          ${t.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(i,r,a)}
            ${t.mainStart()}
            ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[p[0],w]})},at=t=>({batchDims:t.batch_dims,cacheKey:""})}),n2=j(()=>{nm(),n_(),nC(),nS(),ai=(t,i)=>{var r,a;let n,s,o,u,l,d,p,c,h,f;((t,i)=>{if(t.length<3||t.length>4)throw Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=e4.normalizeAxis(i.quantizeAxis,t[0].dims.length),a=i.blockSize,n=t[0],s=t[2],o=4===t.length?t[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((t,i)=>i===r?Math.ceil(t/a)===s.dims[i]:t===s.dims[i]).reduce((t,i)=>t&&i,!0))throw Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==n.dataType)throw Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==s.dims.length||!o.dims.map((t,i)=>t===s.dims[i]).reduce((t,i)=>t&&i,!0))throw Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}})(t.inputs,i),t.compute((r=t.inputs,a=i,n=r[0].dims,s=r[1].dims,o=n.length,u=e4.normalizeAxis(a.gatherAxis,o),l=e4.normalizeAxis(a.quantizeAxis,o),(d=n.slice(0)).splice(u,1,...s),p=e4.size(d),c=r[2].dataType,h=22===r[0].dataType,f=[{type:12,data:p},{type:12,data:l},{type:12,data:u},{type:12,data:a.blockSize},...tT(...r.map((t,i)=>t.dims),d)],{name:"GatherBlockQuantized",shaderCache:{hint:`${a.cacheKey};${r.filter((t,i)=>1!==i).map(t=>t.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:r.length},(t,i)=>"rank")},getRunData:()=>({outputs:[{dims:d,dataType:c}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:t=>{let i=tB("data",r[0].dataType,r[0].dims.length),a=tB("inputIndices",r[1].dataType,r[1].dims.length),o=tB("scales",r[2].dataType,r[2].dims.length),l=r.length>3?tB("zeroPoint",r[3].dataType,r[3].dims.length):void 0,p=tN("output",c,d.length),f=[i,a,o];return l&&f.push(l),`
        ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}]).declareVariables(...f,p)}
        ${t.mainStart()}
        let output_indices = ${p.offsetToIndices("global_idx")};
        var indices_indices = ${a.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${p.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${a.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${p.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${p.indicesGet("output_indices","i")};
          ${i.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${a.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[u]};
        }
        ${i.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${d.length}; i++) {
          let index = ${p.indicesGet("output_indices",`i + ${s.length} - 1`)};
          ${i.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${i.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${o.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${o.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${o.getByIndices("scale_indices")};
        ${l?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${l.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${l.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${tk(c)}(quantized_data - zero_point) * scale;
        ${p.setByOffset("global_idx","dequantized_data")};
    }`}}))},ar=t=>tw({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),n1=j(()=>{nm(),n_(),nC(),nS(),aa=t=>tw({axis:t.axis}),an=(t,i)=>{var r,a;let n,s,o,u,l,d,p,c,h,f,m,g,y;(t=>{if(!t||2!==t.length)throw Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)})(t.inputs),t.compute((r=t.inputs,a=i,n=r[0].dims,s=r[0].dataType,o=n.length,u=r[1].dims,l=r[1].dataType,p=n[d=e4.normalizeAxis(a.axis,o)],c=u.slice(0),h=e4.size(c),f=tB("input",s,o),m=tB("indicesInput",l,u.length),g=tN("output",s,c.length),(y=[{type:12,data:h},{type:6,data:p},{type:12,data:d}]).push(...tT(n,u,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:t=>`
      ${t.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,g)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}))}}),n3=j(()=>{nm(),n_(),nS(),as=t=>({transA:t.transA,transB:t.transB,alpha:t.alpha,beta:t.beta,cacheKey:`${t.transA};${t.transB};${1===t.alpha}`}),ao=(t,i)=>{(t=>{if(!t)throw Error("Input is missing");if(t.length<2||t.length>3)throw Error("Invaid input number.");if(3===t.length&&t[2].dims.length>2)throw Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||3===t.length&&t[0].dataType!==t[2].dataType)throw Error("Input types are mismatched")})(t.inputs),t.compute(((t,i)=>{let r=t[0].dims.slice(),a=t[1].dims.slice(),[n,s,o]=e8.getShapeOfGemmResult(r,i.transA,a,i.transB,3===t.length?t[2].dims:void 0),u=[n,s],l=Math.ceil(s/16),d=Math.ceil(n/16),p=(e4.size(u),[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:1,data:i.alpha},{type:1,data:i.beta}]),c=["type","type"];return 3===t.length&&(p.push(...tT(t[2].dims)),c.push("rank")),p.push(...tT(u)),{name:"GemmShared",shaderCache:{hint:`${i.cacheKey}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:l*d},programUniforms:p}),getShaderSource:r=>{let a=tB("a",t[0].dataType,t[0].dims),n=tB("b",t[1].dataType,t[1].dims),s=null,o=[a,n];3===t.length&&(s=tB("c",t[2].dataType,t[2].dims.length),o.push(s));let l=tN("output",t[0].dataType,u.length);o.push(l);let d="",p="";i.transA&&i.transB?(p=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):i.transA&&!i.transB?(p=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!i.transA&&i.transB?(p=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):i.transA||i.transB||(p=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let c=1===i.alpha?"":"value *= uniforms.alpha;";return`
  ${r.registerUniforms([{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}]).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${a.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${n.type.storage}, 16>, 16>;
  ${r.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${l.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${p}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${d}
      }
      workgroupBarrier();
    }

    ${c}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${null!=s?`let cOffset = ${s.broadcastedIndicesToOffset("vec2(m, n)",l)}; value += ${l.type.value}(uniforms.beta) * ${s.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}})(t.inputs,i))}}),n4=j(()=>{nm(),n_(),nC(),nS(),[au,al,ad,ap]=[0,1,2,3],ac=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,ah=(t,i)=>{var r,a;let n,s,o,u,l,d,p;(t=>{if(4!==t[0].dims.length)throw Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw Error("grid batch size must match input batch size")})(t.inputs),t.compute((r=t.inputs,a=i,n=tB("x",r[0].dataType,r[0].dims.length),s=[r[1].dims[0],r[1].dims[1],r[1].dims[2]],o=tB("grid",r[1].dataType,s.length,2),u=[r[0].dims[0],r[0].dims[1],r[1].dims[1],r[1].dims[2]],"NHWC"===a.format&&(u=[r[0].dims[0],r[1].dims[1],r[1].dims[2],r[0].dims[3]],[au,al,ad,ap]=[0,3,1,2]),l=tN("output",r[0].dataType,u.length),d=n.type.value,p=[{type:12,data:e4.size(u)},...tT(r[0].dims,s,u)],{name:"GridSample",shaderCache:{hint:`${a.cacheKey}`,inputDependencies:["type","type"]},getRunData:t=>{let i=e4.size(u);return{outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}},getShaderSource:t=>{let i,r,s,u,p,c,h,f,m;return`
  ${t.registerUniform("output_size","u32").declareVariables(n,o,l)}
  ${ac}
  ${i=d,`
  fn gs_bicubic_interpolate(p: mat4x4<${i}>, x: f32, y: f32) -> ${i} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${i}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`}
  ${r=a,`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${0===r.alignCorners?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`}
  ${s=a,`
  ${"reflection"===s.paddingMode?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`}
  ${u=n,p=d,c=a,`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${p} {
     var pixel = ${p}(0);
     var indices = vec4<u32>(0);
     indices[${au}] = batch;
     indices[${al}] = channel;`+(()=>{switch(c.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ad}] = u32(r);
            indices[${ap}] = u32(c);
          } else {
            return ${p}(0);
          }
        `;case"border":return`
          indices[${ad}] = u32(clamp(r, 0, H - 1));
          indices[${ap}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ad}] = gs_reflect(r, border[1], border[3]);
          indices[${ap}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${c.paddingMode} is not supported`)}})()+`
    return ${u.getByIndices("indices")};
  }
`}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ad}]);
      let W_in = i32(uniforms.x_shape[${ap}]);

      ${0===a.alignCorners?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${l.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${au}], indices[${ad}], indices[${ap}]);
      let nxy = ${o.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${h=l,f=d,m=a,(()=>{switch(m.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${au}], indices[${al}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${au}], indices[${al}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${au}], indices[${al}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${au}], indices[${al}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${au}], indices[${al}], border);

          let dx2 = ${f}(f32(x2) - x);
          let dx1 = ${f}(x - f32(x1));
          let dy2 = ${f}(f32(y2) - y);
          let dy1 = ${f}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${f}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${au}], indices[${al}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${m.mode} is not supported`)}})()+`${h.setByOffset("global_idx","result")}`}
  }`}}))},af=t=>tw({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),n6=j(()=>{nm(),n_(),nC(),nw(),nz(),nS(),nk(),am=(t,i)=>t.length>i&&t[i].dims.length>0?t[i]:void 0,ag=t=>tw({...t}),ay=tw({perm:[0,2,1,3]}),a_=(t,i,r,a,n,s,o,u)=>{var l,d,p,c,h,f,m;let g,y,_,b=s;if(!(o&&e4.size(o.dims)>0))return 3===s.dims.length&&(b=s.reshape([i,a,r,n])),1===r||1===a?b:t.compute(tW(b,ay.perm),{inputs:[b],outputs:[-1]})[0];if(1===a)throw Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return b=(l=t,d=s,p=o,c=i,h=a,f=r*n,m=u,g=[c,h,f],_=[{type:12,data:y=e4.size(g)},{type:12,data:m},{type:12,data:f}],b=l.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:g,dataType:d.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:t=>{let i=tN("qkv_with_bias",d.dataType,g),r=tB("qkv",d.dataType,g),a=tB("bias",p.dataType,g);return`
  ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}]).declareVariables(r,a,i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[d,p],outputs:[-1]})[0]).reshape([i,a,r,n]),1===r||1===a?b:t.compute(tW(b,ay.perm),{inputs:[b],outputs:[-1]})[0]},ab=(t,i)=>{let r=((t,i)=>{let r,a=t[0],n=am(t,1),s=am(t,2),o=am(t,3),u=am(t,4),l=am(t,5),d=am(t,6),p=am(t,7);if(3!==a.dims.length&&5!==a.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let c=a.dims[0],h=a.dims[1],f=3===a.dims.length?a.dims[2]:i.numHeads*a.dims[4],m=h,g=0,y=0,_=Math.floor(f/i.numHeads);if(d&&p&&e4.size(d.dims)&&e4.size(p.dims)){if(4!==d.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==c||d.dims[1]!==i.numHeads||d.dims[3]!==_)throw Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==i.numHeads||p.dims[3]!==_)throw Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(4!==p.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');g=d.dims[2],y=d.dims[2]}else if(d&&e4.size(d.dims)||p&&e4.size(p.dims))throw Error('Input "past_key" and "past_value" shall be both present or both absent');if(n&&e4.size(n.dims)>0){if(3!==a.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(a.dims[0]!==n.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===n.dims.length){if(n.dims[2]!==a.dims[2])throw Error('Input "query" and "key" shall have same dim 2 (hidden_size)');r=2,m=n.dims[1]}else if(5===n.dims.length){if(n.dims[2]!==i.numHeads||2!==n.dims[3]||n.dims[4]!==_)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw Error('Expect "value" be none when "key" has packed kv format.');r=5,m=n.dims[1]}else{if(n.dims[1]!==i.numHeads||n.dims[3]!==_)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');r=0,m=n.dims[2]}}else{if(5!==a.dims.length)throw Error('Input "query" is expected to have 5 dimensions when key is empty');if(a.dims[2]!==i.numHeads||3!==a.dims[3])throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');r=3}if(o&&e4.size(o.dims)>0){if(1!==o.dims.length)throw Error('Input "bias" is expected to have 1 dimension');if(n&&5===n.dims.length&&2===n.dims[3])throw Error("bias is not allowed for packed kv.")}let b=g+m,$=0;if(u&&e4.size(u.dims)>0){$=8;let t=u.dims;throw 1===t.length?t[0]===c?$=1:t[0]===3*c+2&&($=3):2===t.length&&t[0]===c&&t[1]===b&&($=5),8===$?Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):Error("Mask not supported")}let v=!1,w=f;if(s&&e4.size(s.dims)>0){if(3!==s.dims.length&&4!==s.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(a.dims[0]!==s.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===s.dims.length){if(m!==s.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');w=s.dims[2]}else{if(m!==s.dims[2])throw Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');w=s.dims[1]*s.dims[3],v=!0}}if(u&&e4.size(u.dims)>0)throw Error("Key padding mask is not supported");if(l&&e4.size(l.dims)>0){if(4!==l.dims.length)throw Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==i.numHeads||l.dims[2]!==h||l.dims[3]!==b)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:f,vHiddenSize:w,headSize:_,vHeadSize:Math.floor(w/i.numHeads),numHeads:i.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:i.maskFilterValue,maskType:$,scale:i.scale,broadcastResPosBias:!1,passPastInKv:v,qkvFormat:r}})(t.inputs,i),a=t.inputs[0],n=am(t.inputs,1),s=am(t.inputs,2),o=am(t.inputs,3),u=am(t.inputs,4),l=am(t.inputs,5),d=am(t.inputs,6),p=am(t.inputs,7);if(5===a.dims.length)throw Error("Packed QKV is not implemented");if(n?.dims.length===5)throw Error("Packed KV is not implemented");let c=n&&s&&4===n.dims.length&&4===s.dims.length,h=a_(t,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,o,0);if(c)return i_(t,h,n,s,u,void 0,d,p,l,r);if(!n||!s)throw Error("key and value must be provided");let f=a_(t,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,o,r.hiddenSize),m=a_(t,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,o,2*r.hiddenSize);i_(t,h,f,m,u,void 0,d,p,l,r)}}),n8=j(()=>{nm(),n_(),nC(),nS(),a$=(t,i)=>{let r=t[0].dims,a=e4.size(r),n=t[0].dataType,s=e4.normalizeAxis(i.axis,r.length),o=Array(i.numOutputs),u=tB("input",n,r.length),l=Array(i.numOutputs),d=[],p=[],c=0,h=[{type:12,data:a}];for(let a=0;a<i.numOutputs;a++){c+=i.splitSizes[a],l[a]=c;let u=r.slice();u[s]=i.splitSizes[a],p.push(u),o[a]=tN(`output${a}`,n,u.length),d.push({dims:p[a],dataType:t[0].dataType})}return h.push({type:12,data:l},...tT(r,...p)),{name:"Split",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getShaderSource:t=>{let i;return`
  ${t.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...o)}
  ${i=l.length,`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${i}u; i += 1u ) {
    if (index < ${tO("uniforms.size_in_split_axis","i",i)}) {
        return i;
    }
    }
    return ${i}u;
}`}
  ${(t=>{let i=t.length,r=[];for(let a=0;a<i;++a){let n=t[a].setByIndices("indices","input[global_idx]");1===i?r.push(n):0===a?r.push(`if (output_number == ${a}u) { ${n} }`):a===i-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`})(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${tO("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`},getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h})}},av=(t,i)=>{let r,a;var n,s,o=t.inputs;if(!o||o.length<1)throw Error("too few inputs");let u=1===t.inputs.length?i:(n=t.inputs,r=[],a=(s=i).numOutputs,n[1].dims[0]>0&&(n[1].getBigInt64Array().forEach(t=>r.push(Number(t))),a=r.length),tw({numOutputs:a,axis:s.axis,splitSizes:r}));t.compute(a$(t.inputs,u),{inputs:[0]})},aw=t=>{let i=t.axis,r=t.splitSizes,a=t.numOutputs<0?r.length:t.numOutputs;if(a!==r.length)throw Error("numOutputs and splitSizes length must be equal");return tw({axis:i,numOutputs:a,splitSizes:r})}}),n5=j(()=>{nm(),n_(),nC(),nS(),ax=(t,i)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:s}=i,o=t[0].dims[0],u=e4.sizeFromDimension(t[0].dims,1),l=t[0].dims[t[0].dims.length-2],d=u/l,p=t[2].dims[1],c=0===n?2*p:d/a,h=[o,l,d/c,c-p],f=e4.computeStrides(h),m=[{type:1,data:s},{type:12,data:h},{type:12,data:f},...3===t[0].dims.length?Array({type:12,data:[u,d,c,1]}):[],...4===t[0].dims.length?Array({type:12,data:[u,c,l*c,1]}):[],...tT(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)];return{name:"RotaryEmbedding",shaderCache:{hint:tw({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:i=>{let a=tB("input",t[0].dataType,t[0].dims.length),n=tB("position_ids",t[1].dataType,t[1].dims.length),s=tB("cos_cache",t[2].dataType,t[2].dims.length),o=tB("sin_cache",t[3].dataType,t[3].dims.length),u=tN("output",t[0].dataType,t[0].dims.length);return i.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${i.declareVariables(a,n,s,o,u)}

        ${i.mainStart(tx)}
          let half_rotary_emb_dim = uniforms.${s.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${i.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${n.broadcastedIndicesToOffset("bsnh.xy",tN("",n.type.tensor,2))};
            let position_id =
                u32(${n.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${a.getByOffset("i")} * ${s.get("position_id","bsnh[3]")} -
                ${a.getByOffset("j")} * ${o.get("position_id","bsnh[3]")};
            ${u.setByOffset("i","re")}
            let im = ${a.getByOffset("i")} * ${o.get("position_id","bsnh[3]")} +
                ${a.getByOffset("j")} * ${s.get("position_id","bsnh[3]")};
            ${u.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${u.setByOffset("k",a.getByOffset("k"))}
          }
        }`},getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(e4.size(h)/tx)},programUniforms:m})}},aC=(t,i)=>{((t,i)=>{let[r,a,n,s]=t,{numHeads:o,rotaryEmbeddingDim:u}=i;if(3!==r.dims.length&&4!==r.dims.length)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!e4.areEqual(a.dims,[])&&!e4.areEqual(a.dims,[1])&&2!==a.dims.length)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(2!==n.dims.length)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(2!==s.dims.length)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!e4.areEqual(n.dims,s.dims))throw Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&0===o)throw Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],p=n.dims[0],c=e4.sizeFromDimension(r.dims,1)/d,h=0===u?2*n.dims[1]:c/o;if(u>h)throw Error("rotary_embedding_dim must be less than or equal to head_size");if(2===a.dims.length){if(l!==a.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(h/2!==n.dims[1]&&u/2!==n.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>p)throw Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")})(t.inputs,i),t.compute(ax(t.inputs,i))}}),n9=j(()=>{nC(),nm(),nz(),n6(),n8(),nk(),n5(),nS(),aS=tw({perm:[0,2,1,3]}),ak=(t,i,r)=>{let a=i,n=r.kvNumHeads;return 3===i.dims.length&&0!==r.kvSequenceLength&&(a=i.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=t.compute(tW(a,aS.perm),{inputs:[a],outputs:[-1]})[0]),a},aT=(t,i)=>{let r=((t,i)=>{if(i.doRotary&&t.length<=7)throw Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=t[0],a=t[1],n=t[2],s=t[3],o=t[4];if(0!==i.doRotary&&t.length<=7)throw Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(-1!==i.localWindowSize)throw Error("Local attention is not supported");if(0!==i.softcap)throw Error("Softcap is not supported");if(0!==i.rotaryInterleaved)throw Error("Rotary interleaved is not supported");if(i.smoothSoftmax)throw Error("Smooth softmax is not supported");if(3!==r.dims.length&&5!==r.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let u=r.dims[0],l=r.dims[1],d=3===r.dims.length?r.dims[2]:i.numHeads*r.dims[4],p=l,c=0,h=!a||0===a.dims.length,f=Math.floor(h?d/(i.numHeads+2*i.kvNumHeads):d/i.numHeads);h&&(d=f*i.numHeads);let m=s&&0!==s.dims.length,g=o&&0!==o.dims.length;if(m&&4===s.dims.length&&s.dims[0]===u&&s.dims[1]!==i.kvNumHeads&&s.dims[2]===i.kvNumHeads&&s.dims[3]===f)throw Error("BSNH pastKey/pastValue is not supported");if(m&&g){if(4!==s.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(4!==o.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');c=s.dims[2]}else if(m||g)throw Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(a&&a.dims.length>0){if(3!==r.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===a.dims.length){if(r.dims[2]%a.dims[2]!=0)throw Error('Dimension 2 of "query" should be a multiple of "key"');p=a.dims[1]}else if(5===a.dims.length){if(a.dims[2]!==i.numHeads||2!==a.dims[3]||a.dims[4]!==f)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw Error('Expect "value" be none when "key" has packed kv format.');p=a.dims[1]}else{if(a.dims[1]!==i.numHeads||a.dims[3]!==f)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=a.dims[2]}}else{if(3!==r.dims.length&&5!==r.dims.length)throw Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(5===r.dims.length&&(r.dims[2]!==i.numHeads||3!==r.dims[3]))throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let _=!1,b=i.kvNumHeads?f*i.kvNumHeads:d;if(n&&n.dims.length>0){if(3!==n.dims.length&&4!==n.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===n.dims.length){if(p!==n.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');b=n.dims[2]}else{if(p!==n.dims[2])throw Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');b=n.dims[1]*n.dims[3],_=!0}}let $=t.length>4?t[5]:void 0;if($&&1!==$.dims.length&&$.dims[0]!==u)throw Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:c,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:b,headSize:f,vHeadSize:Math.floor(b/i.kvNumHeads),numHeads:i.numHeads,kvNumHeads:i.kvNumHeads,nReps:i.numHeads/i.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:i.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:y}})(t.inputs,i);if(5===t.inputs[0].dims.length)throw Error("Packed QKV is not implemented");if(t.inputs[1]?.dims.length===5)throw Error("Packed KV is not implemented");let a=t.inputs[0],n=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,s=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,o=t.inputs[3]&&0!==t.inputs[3].dims.length?t.inputs[3]:void 0,u=t.inputs[4]&&0!==t.inputs[4].dims.length?t.inputs[4]:void 0,l=t.inputs.length>4?t.inputs[5]:void 0,d=t.inputs.length>5?t.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=tw({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[h,f,m]=n||s?[a,n,s]:t.compute(a$([a],c),{inputs:[a],outputs:[-1,-1,-1]}),g,y;if(i.doRotary){var _,b,$,v;let a,n,s,o=t.compute((_=r.batchSize,b=r.sequenceLength,$=l,v=d,a=[_*b],s=[{type:12,data:n=_*b},{type:12,data:b},{type:12,data:_}],{name:"GeneratePositionIds",shaderCache:{hint:`${_};${b}`,inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:s}),getShaderSource:t=>{let i=tB("seq_lens",$.dataType,$.dims),r=tB("total_seq_lens",v.dataType,v.dims),n=tN("pos_ids",7,a);return`
  ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}]).declareVariables(i,r,n)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${r.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${i.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${n.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${n.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${n.setByOffset("global_idx","seqlen")}
    };
  }
  `}}),{inputs:[l,d],outputs:[-1]})[0],u=t.inputs[7],p=t.inputs[8],c=tw({interleaved:0!==i.rotaryInterleaved,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:i.scale}),m=[h,o,u,p],w=[-1];g=t.compute(ax(m,c),{inputs:m,outputs:w})[0],m.splice(0,1,f);let x=tw({interleaved:0!==i.rotaryInterleaved,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:i.scale});y=t.compute(ax(m,x),{inputs:m,outputs:w})[0]}let w=a_(t,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i.doRotary?g:h,void 0,0),x=ak(t,i.doRotary?y:f,r),C=ak(t,m,r);i_(t,w,x,C,void 0,void 0,o,u,void 0,r,l,d)}}),n7=j(()=>{nm(),n_(),nk(),nS(),aI=(t,i,r,a,n,s,o,u)=>{let l=tI(s),d=1===l?"f32":`vec${l}f`,p=1===l?"vec2f":`mat2x${l}f`,c=n*o,h=64;1===c&&(h=256);let f=[n,o,s/l],m=[n,o,2],g=[];return g.push(...tT(f,m)),t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${h}`,inputDependencies:["rank","type","type"]},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:g}),getShaderSource:t=>{let n=tB("x",i.dataType,3,l),s=[n,tB("scale",r.dataType,r.dims),tB("bias",a.dataType,a.dims),tN("output",1,3,2)];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${t.declareVariables(...s)}
  ${t.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${n.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${tA("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${tA("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[i,r,a],outputs:[-1]})[0]},aE=(t,i)=>{var r,a,n;let s,o,u,l,d,p,c,h,f;"NHWC"===i.format?((t,i,r)=>{let a=i[0].dims,n=a[0],s=a[a.length-1],o=e4.sizeFromDimension(a,1)/s,u=tI(s),l=e4.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=!1,c=[0,a.length-1];for(let t=0;t<a.length-2;t++)p=p||1!==a[t+1],c.push(t+1);let h=(p=p&&1!==a[a.length-1])?t.compute(tW(t.inputs[0],c),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:a.length},(t,i)=>a[c[i]])),f=aI(t,h,i[1],i[2],n,o,s,r.epsilon);t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:i[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:t=>{let r=tS(i[0].dataType),n=1===u?"vec2f":`mat${u}x2f`,s=t=>{let i=0===t?"x":"y",a=1===u?"f32":`vec${u}f`;switch(u){case 1:return`${r}(${a}(scale.${i}))`;case 2:return`vec2<${r}>(${a}(scale[0].${i}, scale[1].${i}))`;case 4:return`vec4<${r}>(${a}(scale[0].${i}, scale[1].${i}, scale[2].${i}, scale[3].${i}))`;default:throw Error(`Not supported compoents ${u}`)}},o=tB("input",i[0].dataType,i[0].dims,u),l=tN("output",i[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${n}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${l.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${t.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${s(0)}, ${s(1)});
  }`}},{inputs:[i[0],f]})})(t,t.inputs,i):(r=t,a=t.inputs,n=i,o=(s=a[0].dims)[0],u=s[1],l=e4.sizeFromDimension(s,2),d=tI(l),p=e4.size(s)/d,c=aI(r,a[0],a[1],a[2],o,l,u,n.epsilon),h=[o,u,l/d],f=[o,u],r.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:["type","none"]},getRunData:()=>({outputs:[{dims:s,dataType:a[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...tT(h,f,h)]}),getShaderSource:t=>{let i=tB("x",a[0].dataType,h.length,d),r=tB("scale_shift",1,f.length,2),n=tN("output",a[0].dataType,h.length,d),s=[i,r,n];return`
  ${t.registerUniform("output_size","u32").declareVariables(...s)}
  ${t.mainStart()}
  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${n.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${i.getByOffset("global_idx")} * ${n.type.value}(scale_shift.x) + ${n.type.value}(scale_shift.y);
      ${n.setByOffset("global_idx","value")};
  }`}},{inputs:[a[0],c]}))}}),se=j(()=>{nm(),n_(),nS(),az=(t,i)=>{(t=>{if(!t||t.length<2)throw Error("layerNorm requires at least 2 inputs.")})(t.inputs),t.compute(((t,i,r)=>{let a=i.simplified,n=t[0].dims,s=t[1],o=!a&&t[2],u=e4.normalizeAxis(i.axis,n.length),l=e4.sizeToDimension(n,u),d=e4.sizeFromDimension(n,u),p=e4.size(s.dims),c=o?e4.size(o.dims):0;if(p!==d||o&&c!==d)throw Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${c}`);let h=[];for(let t=0;t<n.length;++t)t<u?h.push(n[t]):h.push(1);let f=tI(d),m=["type","type"],g=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/f)},{type:1,data:i.epsilon}];o&&m.push("type");let y=r>1,_=r>2,b=[{dims:n,dataType:t[0].dataType}];return y&&b.push({dims:h,dataType:1}),_&&b.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${r};${a}`,inputDependencies:m},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:i=>{let r=tS(t[0].dataType),u=[tB("x",t[0].dataType,t[0].dims,f),tB("scale",s.dataType,s.dims,f)];return o&&u.push(tB("bias",o.dataType,o.dims,f)),u.push(tN("output",t[0].dataType,n,f)),y&&u.push(tN("mean_data_output",1,h)),_&&u.push(tN("inv_std_output",1,h)),`
  ${i.registerUniforms([{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}]).declareVariables(...u)}
  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${tE("f32",f)};
    var mean_square_vector = ${tE("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${tz(r,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${tA("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${tA("mean_square_vector",f)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${tz(r,f,"x[j + offset]")};
      let f32scale = ${tz(r,f,"scale[j]")};
      output[j + offset] = ${u[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${tz(r,f,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`}}})(t.inputs,i,t.outputCount))}}),st=j(()=>{n_(),nL(),nW(),aA=t=>{var i=t.inputs;if(!i||2!==i.length)throw Error("MatMul requires 2 inputs.");if(i[0].dims[i[0].dims.length-1]!==i[1].dims[i[1].dims.length-2])throw Error("shared dimension does not match.");let r=e3.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!r)throw Error("Can't use matmul on the given tensors");let a=r[r.length-1],n=t.inputs[0].dims[t.inputs[0].dims.length-1];if(a<8&&n<8)t.compute(rw(t.inputs,{activation:""},r));else{let i=r[r.length-2],s=e4.size(t.inputs[0].dims.slice(0,-2)),o=e4.size(t.inputs[1].dims.slice(0,-2));if(1!==s&&1===i&&1===o){let i=t.inputs[0].reshape([1,s,n]),o=t.inputs[1].reshape([1,n,a]),u=[1,s,a],l=[i,o];t.compute(rk(l,{activation:""},r,u),{inputs:l})}else t.compute(rk(t.inputs,{activation:""},r))}}}),si=j(()=>{nm(),n_(),nC(),nS(),aO=(t,i)=>{var r,a,n,s;let o,u,l,d,p,c,h,f,m,g,y,_,b,$,v,w,x,C,S,k,T,I,E,z,A,O,R,B,N,M,D,P,U,L,W,j,q,G,V,H,F;((t,i)=>{if(t.length<3||t.length>4)throw Error("MatMulNBits requires 3 or 4 inputs");let r=t[0],a=r.dims.length;if(r.dims[a-1]!==i.k)throw Error("The last dim of input shape does not match the k value");let n=Math.floor((i.k+i.blockSize-1)/i.blockSize),s=i.blockSize/8*i.bits,o=t[1];if(!e4.areEqual(o.dims,[i.n,n,s]))throw Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=t[2].dims;if(e4.size(u)!==i.n*n)throw Error("scales input size error.");if(4===t.length){let r=t[3].dims,a=i.n*(8===i.bits?n:Math.floor((n*i.bits+7)/8));if(e4.size(r)!==a)throw Error("zeroPoints input size error.")}})(t.inputs,i),32===i.blockSize&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute((r=t.inputs,a=i,u=(o=r[0].dims).length,l=o[u-2],d=a.k,p=a.n,c=o.slice(0,u-2),h=e4.size(c),f=r[1].dims[2]/4,m=r[0].dataType,g=tI(a.k),y=tI(f),_=c.concat([l,p]),w=(v=($=128/(b=p%8==0?8:p%4==0?4:1))*y*8)/g,x=v/a.blockSize,C=e4.size(_)/b,S=[],k=[h,l,d/g],(T=e4.convertShape(r[1].dims).slice()).splice(-1,1,f/y),S.push(...tT(k)),S.push(...tT(T)),S.push(...tT(r[2].dims)),4===r.length&&S.push(...tT(e4.convertShape(r[3].dims))),I=[h,l,p],S.push(...tT(I)),{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${a.blockSize};${g};${y};${$};${b}`,inputDependencies:Array(r.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:m}],dispatchGroup:{x:C},programUniforms:S}),getShaderSource:t=>{let i=k.length,n=tB("a",r[0].dataType,i,g),s=tB("b",12,T.length,y),o=tB("scales",r[2].dataType,r[2].dims.length),u=[n,s,o],l=4===r.length?tB("zero_points",12,r[3].dims.length):void 0;l&&u.push(l);let d=I.length,p=tN("output",r[0].dataType,d),c=tS(r[0].dataType);return`
        var<workgroup> sub_a: array<${n.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${p.type.value}, ${$}>, ${b}>;
        ${t.declareVariables(...u,p)}
        ${t.mainStart([$,b,1])}
          let output_indices = ${p.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${x} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${n.getByIndices(`${n.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${n.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${x} + local_id.x;
            ${l?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${c}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${c}(8);`}
            let scale = ${o.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${s.getByIndices(`${s.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${a.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${(()=>{switch(g){case 1:return`
          let a_data0 = vec4<${c}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${c}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${c}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${c}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${g}-component is not supported.`)}})()}
              let b_value = ${1===y?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${c}>(${Array.from({length:4},(t,i)=>`${c}(b_value_lower[${i}]), ${c}(b_value_upper[${i}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${c}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(t,i)=>`dot(a_data${i}, b_dequantized_values[${i}])`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${p.type.value} = ${p.type.value}(0);
            for (var b = 0u; b < ${$}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${p.setByIndices(`${p.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`}})):t.compute((n=t.inputs,s=i,z=(E=n[0].dims).length,A=E[z-2],O=s.k,R=s.n,B=E.slice(0,z-2),N=e4.size(B),M=n[1].dims[2]/4,D=n[0].dataType,P=tI(s.k),U=tI(M),L=tI(R),W=B.concat([A,R]),j=A>1&&R/L%2==0?2:1,q=e4.size(W)/L/j,G=[],V=[N,A,O/P],(H=e4.convertShape(n[1].dims).slice()).splice(-1,1,M/U),G.push(...tT(V)),G.push(...tT(H)),G.push(...tT(n[2].dims)),4===n.length&&G.push(...tT(e4.convertShape(n[3].dims))),F=[N,A,R/L],G.push(...tT(F)),{name:"MatMulNBits",shaderCache:{hint:`${s.blockSize};${s.bits};${P};${U};${L};${j};64`,inputDependencies:Array(n.length).fill("rank")},getRunData:()=>({outputs:[{dims:W,dataType:D}],dispatchGroup:{x:q},programUniforms:G}),getShaderSource:t=>{let i=V.length,r=tB("a",n[0].dataType,i,P),a=tB("b",12,H.length,U),o=tB("scales",n[2].dataType,n[2].dims.length),u=[r,a,o],l=4===n.length?tB("zero_points",12,n[3].dims.length):void 0;l&&u.push(l);let d=F.length,p=tN("output",n[0].dataType,d,L),c=tS(n[0].dataType),h=(()=>{switch(P){case 1:return`array<${c}, 8>`;case 2:return`mat4x2<${c}>`;case 4:return`mat2x4<${c}>`;default:throw Error(`${P}-component is not supported.`)}})();return`
        var<workgroup> workgroup_shared: array<${p.type.value}, ${64*j}>;
        ${t.declareVariables(...u,p)}
        ${t.mainStart([64,1,1])}
          let output_indices = ${p.offsetToIndices(`(global_idx / 64) * ${j}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${s.blockSize/P};
            ${(()=>{let t=`
            var col_index = col * ${L};
            ${l?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${c}(8);`}
            `;for(let i=0;i<L*j;i++)t+=`
            let scale${i} = ${o.getByOffset("col_index * nBlocksPerCol + block")};
            ${l?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${i} = ${c}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return t})()}
            for (var word: u32 = 0; word < ${M}; word += ${U}) {
              ${(()=>{let t=`col_index = col * ${L};`;for(let i=0;i<L*j;i++)t+=`
            let b${i}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return t+`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${h};
            var b_dequantized_values: ${h};`})()}
              for (var i: u32 = 0; i < ${U}; i++) {
                ${(()=>{let t=`
          // reuse a data
            var input_offset = ${r.indicesToOffset(`${r.type.indices}(batch, row, word_offset)`)};
            var a_data: ${h};
            for (var j: u32 = 0; j < ${8/P}; j++) {
              a_data[j] = ${r.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let i=0;i<L*j;i++)t+=`
            b_value = ${1===U?`b${i}_data`:`b${i}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${h}(${Array.from({length:4},(t,i)=>`${c}(b_value_lower[${i}]), ${c}(b_value_upper[${i}])`).join(", ")});
            b_dequantized_values = ${1===P?`${h}(${Array.from({length:8},(t,r)=>`(b_quantized_values[${r}] - ${l?`zero_point${i}`:"zero_point"}) * scale${i}`).join(", ")});`:`(b_quantized_values - ${h}(${Array(8).fill(`${l?`zero_point${i}`:"zero_point"}`).join(",")})) * scale${i};`};
            workgroup_shared[local_id.x * ${j} + ${Math.floor(i/L)}]${L>1?`[${i%L}]`:""} += ${Array.from({length:8/P},(t,i)=>`${1===P?`a_data[${i}] * b_dequantized_values[${i}]`:`dot(a_data[${i}], b_dequantized_values[${i}])`}`).join(" + ")};
          `;return t})()}
                word_offset += ${8/P};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${j}) {
            var output_value: ${p.type.value} = ${p.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${j};
            }
            ${p.setByIndices(`${p.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`}}))},aR=t=>tw(t)}),sr=j(()=>{nm(),n_(),nS(),aB=(t,i)=>{let r,a,n,s;var o,u,l=t.inputs;if(!l||l.length<1)throw Error("Too few inputs");if(1!==l[0].dataType&&10!==l[0].dataType)throw Error("Input type must be float or float16.");if(l.length>=2){let t=2*l[0].dims.length===l[1].dims[0];if(4===l.length&&(t=2*l[3].dims[0]===l[1].dims[0]),!t)throw Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}let d=((t,i)=>{if(!(t.length>1))return i;{let r=t[1].getBigInt64Array(),a=t.length>=3&&t[2].data?10===t[2].dataType?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,n=t[0].dims.length,s=new Int32Array(2*n).fill(0);if(t.length>=4){let i=t[3].getBigInt64Array();for(let t=0;t<i.length;t++)s[Number(i[t])]=Number(r[t]),s[Number(i[t])+n]=Number(r[t+i.length])}else r.forEach((t,i)=>s[Number(i)]=Number(t));let o=[];return s.forEach(t=>o.push(t)),{mode:i.mode,value:a,pads:o}}})(t.inputs,i);t.compute((o=t.inputs,u=d,r=e4.padShape(o[0].dims.slice(),u.pads),a=o[0].dims,n=[{type:12,data:e4.size(r)},{type:6,data:u.pads}],s=o.length>=3&&o[2].data,0===u.mode&&n.push({type:s?o[2].dataType:1,data:u.value}),n.push(...tT(o[0].dims,r)),{name:"Pad",shaderCache:{hint:`${u.mode}${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:o[0].dataType}],dispatchGroup:{x:Math.ceil(e4.size(r)/64)},programUniforms:n}),getShaderSource:t=>{let i=tN("output",o[0].dataType,r.length),n=tB("x",o[0].dataType,a.length),l=n.type.value,d=((t,i,r)=>{switch(r.mode){case 0:var a=t,n=i,s=r.pads.length;let o="";for(let t=n-1;t>=0;--t)o+=`
            k = i32(${a.indicesGet("indices",t)}) - ${tO("uniforms.pads",t,s)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${tO("uniforms.x_shape",t,n)})) {
              break;
            }
            offset += k * i32(${tO("uniforms.x_strides",t,n)});
        `;return`
          value = ${a.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${o}
            value = x[offset];
          }
      `;case 1:var u=t,l=i,d=r.pads.length;let p="";for(let t=l-1;t>=0;--t)p+=`
                k = i32(${u.indicesGet("indices",t)}) - ${tO("uniforms.pads",t,d)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${tO("uniforms.x_shape",t,l)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${tO("uniforms.x_shape",t,l)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${tO("uniforms.x_strides",t,l)});
            `;return`
              var offset = 0;
              var k = 0;
              ${p}
              value = x[offset];
          `;case 2:var c=t,h=i,f=r.pads.length;let m="";for(let t=h-1;t>=0;--t)m+=`
                k = i32(${c.indicesGet("indices",t)}) - ${tO("uniforms.pads",t,f)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${tO("uniforms.x_shape",t,h)})) {
                  k = i32(${tO("uniforms.x_shape",t,h)}) - 1;
                }
                offset += k * i32(${tO("uniforms.x_strides",t,h)});
            `;return`
              var offset = 0;
              var k = 0;
              ${m}
              value = x[offset];
          `;case 3:var g=t,y=i,_=r.pads.length;let b="";for(let t=y-1;t>=0;--t)b+=`
                k = i32(${g.indicesGet("indices",t)}) - ${tO("uniforms.pads",t,_)};
                if (k < 0)  {
                  k += i32(${tO("uniforms.x_shape",t,y)}]);
                }
                if (k >= i32(${tO("uniforms.x_shape",t,y)})) {
                  k -= i32(${tO("uniforms.x_shape",t,y)});
                }
                offset += k * i32(${tO("uniforms.x_strides",t,y)});
            `;return`
              var offset = 0;
              var k = 0;
              ${b}
              value = x[offset];
          `;default:throw Error("Invalid mode")}})(i,a.length,u),p=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:u.pads.length}];return 0===u.mode&&p.push({name:"constant_value",type:s?l:"f32"}),`
            ${t.registerUniforms(p).declareVariables(n,i)}
            ${t.mainStart()}
            ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${i.offsetToIndices("global_idx")};

            var value = ${l}(0);
            ${d}
            output[global_idx] = value;
        }`}}),{inputs:[0]})}}),sa=j(()=>{el(),nm(),n_(),nS(),aN=t=>{if(c.webgpu.validateInputContent&&(!t||1!==t.length))throw Error("Pool ops requires 1 input.")},aM=(t,i,r)=>{let a="NHWC"===i.format,n=t.dims.slice();a&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(i,"dilations"),o=i.kernelShape.slice(),u=i.strides.slice(),l=s?i.dilations.slice():[],d=i.pads.slice();e6.adjustPoolAttributes(r,n,o,u,l,d);let p=e6.computePoolOutputShape(r,n,u,l,o,d,i.autoPad),c=Object.assign({},i);s?Object.assign(c,{kernelShape:o,strides:u,pads:d,dilations:l,cacheKey:i.cacheKey}):Object.assign(c,{kernelShape:o,strides:u,pads:d,cacheKey:i.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[c,a?h:p]},aD=(t,i)=>{let r="NHWC"===i.format,a=[{type:12,data:e4.size(t)},{type:12,data:e4.size(i.kernelShape)}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(i.kernelShape.length<=2){let t=i.kernelShape[i.kernelShape.length-1],r=i.strides[i.strides.length-1],s=i.pads[i.pads.length/2-1],o=i.pads[i.pads.length-1],u=!!(s+o);a.push({type:12,data:t},{type:12,data:r},{type:12,data:s},{type:12,data:o}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let l=!1;if(2===i.kernelShape.length){let t=i.kernelShape[i.kernelShape.length-2],r=i.strides[i.strides.length-2],s=i.pads[i.pads.length/2-2],o=i.pads[i.pads.length-2];l=!!(s+o),a.push({type:12,data:t},{type:12,data:r},{type:12,data:s},{type:12,data:o}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,n,!0,u,l]}{if(r)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let t=e4.computeStrides(i.kernelShape);return a.push({type:12,data:t},{type:12,data:i.pads},{type:12,data:i.strides}),n.push({name:"kernelStrides",type:"u32",length:t.length},{name:"pads",type:"u32",length:i.pads.length},{name:"strides",type:"u32",length:i.strides.length}),[a,n,!!i.pads.reduce((t,i)=>t+i),!1,!1]}},aP=(t,i,r,a,n,s,o,u,l,d,p,c)=>{let h="NHWC"===n.format,f=i.type.value,m=tN("output",i.type.tensor,a);if(n.kernelShape.length<=2){let a="",d="",g="",y=r-(h?2:1);if(a=p?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${y}] < 0 || xIndices[${y}]
                      >= uniforms.x_shape[${y}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${i.indicesToOffset("xIndices")}];
                  ${s}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${i.indicesToOffset("xIndices")}];
                  ${s}
                }`,2===n.kernelShape.length){let t=r-(h?3:2);d=c?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${t}] = indices[${t}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${t}] < 0 || xIndices[${t}] >= uniforms.x_shape[${t}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${t}] = indices[${t}] * uniforms.sh - uniforms.phStart + j;
                `,g=`
              }
            `}return`
            ${t.registerUniforms(l).declareVariables(i,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${u});
              var pad = 0;
              ${d}
              ${a}
              ${g}
              ${o}

              output[global_idx] = value;
            }`}{if(h)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let a=n.kernelShape.length,p=n.pads.length,c="";return c=d?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${i.indicesToOffset("xIndices")}];
                ${s}
              }`:`
              }
              let x_val = x[${i.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${t.registerUniforms(l).declareVariables(i,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${a}>;

              var value = ${f}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${a-1}u; j++) {
                  offsets[j] = offset / ${tO("uniforms.kernelStrides","j",a)};
                  offset -= offsets[j] * ${tO("uniforms.kernelStrides","j",a)};
                }
                offsets[${a-1}] = offset;

                isPad = false;
                for (var j = ${r-a}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${tO("uniforms.strides",`j - ${r-a}u`,a)}
                    + offsets[j - ${r-a}u] - ${tO("uniforms.pads","j - 2u",p)};
                  ${c}
              }
              ${o}

              output[global_idx] = value;
            }`}},aU=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,aL=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),aW=(t,i,r,a)=>{let[n,s]=aM(i,a,r),o=tB("x",i.dataType,i.dims.length),u=o.type.value,l="";n.countIncludePad?l+=`value /= ${u}(uniforms.kernelSize);`:l+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[d,p,c,h,f]=aD(s,n);return d.push(...tT(i.dims,s)),{name:t,shaderCache:{hint:`${a.cacheKey};${c};${h};${f}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:i.dataType}],dispatchGroup:{x:Math.ceil(e4.size(s)/64)},programUniforms:d}),getShaderSource:t=>aP(t,o,i.dims.length,s.length,n,"value += x_val;",l,0,p,c,h,f)}},aj=t=>{let i,r=0!==t.count_include_pad,a=aL(t);if(0!==a.ceilMode)throw Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:r,...a,cacheKey:""};return{...n,cacheKey:(i=n,`${aU(i)};${i.countIncludePad}`)}},aq=(t,i)=>{aN(t.inputs),t.compute(aW("AveragePool",t.inputs[0],!1,i))},aG={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},aV=t=>{let i=t.format;return{format:i,...aG,cacheKey:i}},aH=(t,i)=>{aN(t.inputs),t.compute(aW("GlobalAveragePool",t.inputs[0],!0,i))},aF=(t,i,r,a)=>{let[n,s]=aM(i,a,r),o=`
      value = max(x_val, value);
    `,u=tB("x",i.dataType,i.dims.length),[l,d,p,c,h]=aD(s,n);return l.push(...tT(i.dims,s)),{name:t,shaderCache:{hint:`${a.cacheKey};${p};${c};${h}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:i.dataType}],dispatchGroup:{x:Math.ceil(e4.size(s)/64)},programUniforms:l}),getShaderSource:t=>aP(t,u,i.dims.length,s.length,n,o,"",10===i.dataType?-65504:-1e5,d,p,c,h)}},aK=(t,i)=>{aN(t.inputs),t.compute(aF("MaxPool",t.inputs[0],!1,i))},aZ=t=>{let i,r=t.storage_order,a=t.dilations,n=aL(t);if(0!==r)throw Error("column major storage order is not yet supported for MaxPool");if(0!==n.ceilMode)throw Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:r,dilations:a,...n,cacheKey:""};return{...s,cacheKey:(i=s,`${aU(i)};${i.storageOrder};${i.dilations}`)}},aX=t=>{let i=t.format;return{format:i,...aG,cacheKey:i}},aQ=(t,i)=>{aN(t.inputs),t.compute(aF("GlobalMaxPool",t.inputs[0],!0,i))}}),sn=j(()=>{nm(),n_(),nC(),nS(),aY=(t,i)=>{var r,a;let n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v,w,x,C,S,k,T;((t,i)=>{if(t.length<2||t.length>3)throw Error("DequantizeLinear requires 2 or 3 inputs.");if(3===t.length&&t[1].dims===t[2].dims)throw Error("x-scale and x-zero-point must have the same shape.");if(3===t.length&&t[0].dataType!==t[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(6===t[0].dataType&&t.length>2)throw Error("In the case of dequantizing int32 there is no zero point.");if(0!==t[1].dims.length&&1!==t[1].dims.length&&t[1].dims.length!==t[0].dims.length)throw Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((i,r)=>i===t[2].dims[r]).reduce((t,i)=>t&&i,!0))throw Error("scale and zero-point inputs must have the same shape.")}if(i.blockSize>0){if(0===t[1].dims.length||1===t[1].dims.length&&1===t[1].dims[0])throw Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((r,a)=>a===i.axis||r===t[0].dims[a]).reduce((t,i)=>t&&i,!0))throw Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw Error("For block qunatization the scale input rank must be the same as the x rank.");let r=t[0].dims[i.axis],a=t[1].dims[i.axis];if(i.blockSize<Math.ceil(r/a)||i.blockSize>Math.ceil(r/(a-1)-1))throw Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}})(t.inputs,i),t.compute((r=t.inputs,a=i,n=e4.normalizeAxis(a.axis,r[0].dims.length),o=3===(s=r[0].dataType),u=r[0].dims,l=r[1].dataType,d=e4.size(u),c=(p=3===s||2===s)?[Math.ceil(e4.size(r[0].dims)/4)]:r[0].dims,h=r[1].dims,m=(f=r.length>2?r[2]:void 0)?p?[Math.ceil(e4.size(f.dims)/4)]:f.dims:void 0,y=!1==(g=0===h.length||1===h.length&&1===h[0])&&1===h.length,_=tI(d),$=(b=g&&(!p||4===_))?_:1,v=tB("input",p?12:s,c.length,b&&!p?_:1),w=tB("scale",l,h.length),x=f?tB("zero_point",p?12:s,m.length):void 0,C=tN("output",l,u.length,$),S=[v,w],x&&S.push(x),k=[c,h],f&&k.push(m),T=[{type:12,data:d/$},{type:12,data:n},{type:12,data:a.blockSize},...tT(...k,u)],{name:"DequantizeLinear",shaderCache:{hint:a.cacheKey,inputDependencies:x?["rank","rank","rank"]:["rank","rank"]},getShaderSource:t=>`
      ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}]).declareVariables(...S,C)}
      ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${v.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${1===$?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${v.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${w.getByOffset("0")}`:y?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${w.getByOffset("scale_index")};`:`
            var scale_indices: ${w.type.indices} = output_indices;
            let index = ${w.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${w.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${w.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${x?g?p?`
                let zero_point_input = ${x.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset("0")}`:y?p?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${x.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${x.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${w.indicesToOffset("scale_indices")};
                let zero_point_input = ${x.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices("scale_indices")};`:`let zero_point_value = ${p?o?"i32":"u32":v.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:u,dataType:l}],dispatchGroup:{x:Math.ceil(d/$/64),y:1,z:1},programUniforms:T})}))},aJ=t=>tw({axis:t.axis,blockSize:t.blockSize})}),ss=j(()=>{el(),nm(),nS(),a0=t=>{var i,r,a,n;let s,o,u,l=0,d=0,p=0;6===t.inputs[0].dataType?(l=t.inputs[0].getInt32Array()[0],d=t.inputs[1].getInt32Array()[0],p=t.inputs[2].getInt32Array()[0]):1===t.inputs[0].dataType&&(l=t.inputs[0].getFloat32Array()[0],d=t.inputs[1].getFloat32Array()[0],p=t.inputs[2].getFloat32Array()[0]),c.webgpu.validateInputContent&&((t,i,r)=>{if(t===i||t<i&&r<0||t>i&&r>0)throw Error("Range these inputs' contents are invalid.")})(l,d,p),t.compute((i=l,r=d,a=p,n=t.inputs[0].dataType,o=[s=Math.abs(Math.ceil((r-i)/a))],u=[{type:12,data:s},{type:n,data:i},{type:n,data:a},...tT(o)],{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:t=>{let i=tN("output",n,o.length),r=i.type.value;return`
        ${t.registerUniforms([{name:"outputSize",type:"u32"},{name:"start",type:r},{name:"delta",type:r}]).declareVariables(i)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${r}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}),{inputs:[]})}}),so=j(()=>{nm(),n_(),nC(),nS(),a2=t=>tw({reduction:t.reduction}),a1=(t,i)=>{var r,a;let n,s,o,u,l,d;t.compute((r=t.inputs,a=i,n=r[0].dims,s=r[1].dims,o=Math.ceil(e4.sizeToDimension(s,s.length-1)/1),u=s[s.length-1],l=e4.sizeFromDimension(n,u),d=[{type:12,data:o},{type:12,data:u},{type:12,data:l},...tT(r[1].dims,r[2].dims,n)],{name:"ScatterND",shaderCache:{hint:`${a.cacheKey}_${a.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:t=>{let i=tB("indices",r[1].dataType,r[1].dims.length),s=tB("updates",r[2].dataType,r[2].dims.length,1),o="none"!==a.reduction&&""!==a.reduction?tM("output",r[0].dataType,n.length):tN("output",r[0].dataType,n.length,1);return`
      ${t.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(i,s,o)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${1===r[0].dims.length?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${((t,i,r,a)=>{if("none"!==t&&"i32"!==a&&"u32"!==a&&"f32"!==a)throw Error(`Input ${a} is not supported with reduction ${t}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${i}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(t){case"none":return`${i}=${r};`;case"add":return"i32"===a||"u32"===a?`atomicAdd(&${i}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${s}`;case"max":return"i32"===a||"u32"===a?`atomicMax(&${i}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return"i32"===a||"u32"===a?`atomicMin(&${i}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${s}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${s}`;default:throw Error(`Reduction ${t} is not supported.`)}})(a.reduction,"output[data_offset + i]","value",o.type.value)}
  }

      }`}}),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),su=j(()=>{nm(),n_(),nC(),nS(),a3=(t,i,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${t}) * (${i});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,a4=(t,i,r,a)=>t.rank>a?`
    ${t.indicesSet("input_indices",i,"channel")};
    ${t.indicesSet("input_indices",r,"batch")};
`:"",a6=(t,i)=>{var r,a,n,s,o,u,l,d,p,c,h,f;let m,g,y,_,b,$,v,w,x,C,S,k,T,I,E,z,A=[],O=[],R=[],B=new Uint32Array(m=t.customDataBuffer,m.byteOffset,1)[0];if(0!==i.antialias)throw Error("Only default value (0) for Antialias attribute is supported");((t,i,r,a,n,s)=>{let[o,u,l]=r>10?[1,2,3]:[-1,t.length>1?1:-1,-1],d=t[0].dims.length;if(o>0&&t.length>o&&t[o].dims.length>0)t[o].getFloat32Array().forEach(t=>s.push(t));else if("tf_crop_and_resize"===i.coordinateTransformMode)throw Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&t.length>u&&1===t[u].dims.length&&t[u].dims[0]>0){var p,c,h;let n;if(t[u].getFloat32Array().forEach(t=>a.push(t)),0!==a.length&&a.length!==d&&r>=18&&a.length!==i.axes.length)throw Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");((t,i)=>{if(t.every(t=>t>0||(()=>{throw Error("Resize requires scales input values to be positive")})),t.length>0){if("linear"===i.mode){if(2!==t.length&&3!==t.length&&(4!==t.length||1!==t[0]||1!==t[1])&&(4!==t.length||1!==t[0]||1!==t[3])&&(5!==t.length||1!==t[0]||1!==t[1]))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if("cubic"===i.mode&&2!==t.length&&(4!==t.length||1!==t[0]||1!==t[1])&&(4!==t.length||1!==t[0]||1!==t[3]))throw Error("Resize requires scales input size to be 2 or 4 for cubic mode")}})(a,i),i.axes.length>0&&(p=a,c=i.axes,h=d,c.every(t=>t>=0&&t<h||(()=>{throw Error("Resize requires axes input values to be positive and less than rank")})),n=Array(h).fill(1),c.forEach((t,i)=>n[t]=p[i]),n).forEach((t,i)=>a[i]=t)}if(l>0&&t.length>l&&1===t[l].dims.length&&t[l].dims[0]>0&&(t[l].getBigInt64Array().forEach(t=>n.push(Number(t))),0!==n.length&&n.length!==d&&r>=18&&n.length!==i.axes.length))throw Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(i.axes.length>0){if(0!==a.length&&a.length!==i.axes.length)throw Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(0!==n.length&&n.length!==i.axes.length)throw Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if("u">typeof a&&"u">typeof n&&a.length>0&&n.length>d)throw Error("Resize requires only of scales or sizes to be specified")})(t.inputs,i,B,A,O,R),t.compute((r=t.inputs[0],a=i,n=B,s=A,o=O,u=R,_=r.dims,b=(l=u,d=a.axes,g=Array(p=_.length).fill(0).concat(Array(p).fill(1)),y=0===l.length?g:l.slice(),d.length>0?(d.forEach((t,i)=>{g[t]=y[i],g[i+p]=y[d.length+i]}),g):y),$=((t,i,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(t.forEach(t=>n.push(t)),Math.max(...a)>t.length)throw Error("axes is out of bound");a.forEach((t,i)=>n[t]=r[i])}else r.forEach(t=>n.push(t));else{if(0===i.length)throw Error("Resize requires either scales or sizes.");n=t.map((t,r)=>Math.round(t*i[r]))}return n})(_,s,o,a.axes),v=s.slice(),0===s.length&&(v=_.map((t,i)=>0===t?1:$[i]/t),"stretch"!==a.keepAspectRatioPolicy&&(c=_,h=v,f=a,w=(()=>{switch(f.keepAspectRatioPolicy){case"not_larger":return f.axes.length>0?Math.min(...f.axes.map(t=>h[t]),Number.MAX_VALUE):Math.min(...h,Number.MAX_VALUE);case"not_smaller":return f.axes.length>0?Math.max(...f.axes.map(t=>h[t]),5e-324):Math.max(...h,5e-324);default:throw Error(`Keep aspect ratio policy ${f.keepAspectRatioPolicy} is not supported`)}})(),h.fill(1,0,h.length),x=c.slice(),f.axes.length>0?(f.axes.forEach(t=>h[t]=w),f.axes.forEach(t=>x[t]=Math.round(c[t]*h[t]))):(h.fill(w,0,h.length),x.forEach((t,i)=>x[i]=Math.round(t*h[i]))),$=x)),C=tN("output",r.dataType,$.length),S=tB("input",r.dataType,_.length),k=e4.size($),T=_.length===$.length&&_.every((t,i)=>t===$[i]),I="tf_crop_and_resize"===a.coordinateTransformMode,E=a.extrapolationValue,z=S.type.value,{name:"Resize",shaderCache:{hint:`${a.cacheKey}|${n}|${v.length>0?"cubic"===a.mode?v:v.length:""}|${o.length>0?o:""}|${b.length>0?b:""}|${T}|${"nearest"===a.mode?_.length:_}`,inputDependencies:["rank"]},getShaderSource:t=>{let i,r;return`
      ${T?"":`
      ${i=a.coordinateTransformMode,r=z,`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${r} { `+(()=>{switch(i){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${r}(xResized) / ${r}(xScale);
          } else {
            ${a3("xResized","lengthOriginal","lengthResized",r)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${r}(xResized) + 0.5) / ${r}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${r}(xResized) + 0.5) / ${r}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${a3("xResized","lengthOriginal - 1","lengthResized - 1",r)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${r}(roiStart) * ${r}(lengthOriginal - 1) +
                        (${r}(xResized) * ${r}(roiEnd - roiStart) * ${r}(lengthOriginal - 1)) /
                        ${r}(lengthResized - 1);
                  } else {
                    return 0.5 * ${r}(roiStart + roiEnd) * ${r}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${r}xScale * ${r}(lengthResized);
                  const adjustment = ${r}(lengthResized) / outputWidth;
                  const center = ${r}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${i} is not supported`)}})()+"}"};
      ${(()=>{switch(a.mode){case"nearest":let t,i,r,s,o,u,l,d,p,c,h,f;return`
              ${t=S,i=_,`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${tO("uniforms.input_shape","i",i.length)}) {
          return false;
        }
      }
      return true;
    }`};
              ${r=a.nearestMode,s=n,o=z,`fn getNearestPixelFromOriginal(xOriginal: ${o}, isDownSample: bool) -> ${o} {`+(()=>{switch(r){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(s<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw Error(`Nearest mode ${r} is not supported`)}})()+"}"};
              ${u=S,l=C,d=_,p=$,c=v.length,h=b.length,f=I,`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${l.type.indices}) -> ${u.type.indices} {
      var input_indices: ${u.type.indices};
      for (var i:u32 = 0; i < ${p.length}; i++) {
        var output_index = ${l.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${tO("uniforms.scales","i",c)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${tO("uniforms.roi","i",h)};
          var roi_hi = ${tO("uniforms.roi",`i + ${d.length}`,h)};
          var input_shape_i = ${tO("uniforms.input_shape","i",d.length)};
          var output_shape_i = ${tO("uniforms.output_shape","i",p.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${f} || (original_idx >= 0 && original_idx < ${l.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${l.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${u.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`};
              `;case"linear":let m,g,y,w,x;return`
              ${m=C,g=_,y=$,w=v.length,x=b.length,`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${m.type.indices}) -> array<${m.type.value}, ${y.length}> {
      var original_indices: array<${m.type.value}, ${y.length}>;
      for (var i:u32 = 0; i < ${y.length}; i++) {
        var output_index = ${m.indicesGet("output_indices","i")};
        var scale = ${tO("uniforms.scales","i",w)};
        var roi_low = ${tO("uniforms.roi","i",x)};
        var roi_hi = ${tO("uniforms.roi",`i + ${g.length}`,x)};
        if (scale == 1.0) {
          original_indices[i] = ${m.type.value}(output_index);
        } else {
          var input_shape_i = ${tO("uniforms.input_shape","i",g.length)};
          var output_shape_i = ${tO("uniforms.output_shape","i",y.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`};
              ${(()=>{if(2===_.length||4===_.length)return`${((t,i,r,a,n)=>{let[s,o,u,l]=2===r.length?[-1,0,1,-1]:[0,2,3,1],d=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${t.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${a4(t,l,s,2)}
      return ${t.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${i.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${o}];
      var col:${d} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`})(S,C,_,I,E)}`;if(3===_.length||5===_.length)return`${((t,i,r,a,n)=>{let[s,o,u,l,d]=3===r.length?[-1,0,1,2,-1]:[0,2,3,4,1],p=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${t.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${t.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${a4(t,d,s,3)}
      return ${t.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${i.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${o}];
      var height:${p} = originalIndices[${u}];
      var width:${p} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`})(S,C,_,I,E)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(2===_.length||4===_.length)return`${((t,i,r,a,n,s,o,u,l,d)=>{let[p,c]=2===r.length?[0,1]:[2,3],h=t.type.value,f=o=>{let c=o===p?"row":"col";return`
      fn ${c}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${i.type.indices}) -> ${h} {
        var output_index = ${i.indicesGet("output_indices",o)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[o]},
        ${a[o]}, ${r[o]}, ${s[o]}, ${s[o]} + ${r.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[o]} - 1))) {
          return ${l};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${c}: ${h} = originalIdx + ${h}(i);
          if (${c} < 0 || ${c} >= ${r[o]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${c} = max(0, min(${c}, ${r[o]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",o,`u32(${c})`)};
          data[i + 1] = ${o===p?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${f(p)};
    ${f(c)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${i.type.indices}) -> ${h} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `})(S,C,_,$,v,b,a.cubicCoeffA,I,a.extrapolationValue,a.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${t.registerUniform("output_size","u32").registerUniform("scales","f32",v.length).registerUniform("roi","f32",b.length).declareVariables(S,C)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${T?"output[global_idx] = input[global_idx];":`
        let output_indices = ${C.offsetToIndices("global_idx")};
        var input_indices: ${S.type.indices};
        ${(()=>{switch(a.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${S.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${a.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${2===_.length||4===_.length?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${a.mode}`)}})()};
`}
      }`},getRunData:()=>({outputs:[{dims:$,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},{type:1,data:v},{type:1,data:b},...tT(_,$)]})}),{inputs:[0]})},a8=t=>{let i=t.antialias,r=t.axes,a=t.coordinateTransformMode,n=t.cubicCoeffA,s=0!==t.excludeOutside,o=t.extrapolationValue,u=t.keepAspectRatioPolicy,l=t.mode,d=""===t.nearestMode?"simple":t.nearestMode;return tw({antialias:i,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:s,extrapolationValue:o,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),sl=j(()=>{nm(),n_(),nS(),a5=(t,i)=>{var r,a,n,s;let o,u,l,d,p,c,h,f,m,g,y,_,b;(t=>{if(!t||t.length<3)throw Error("layerNorm requires at least 3 inputs.");let i=t[0],r=t[1],a=t[2];if(i.dataType!==r.dataType||i.dataType!==a.dataType)throw Error("All inputs must have the same data type");if(3!==i.dims.length&&2!==i.dims.length)throw Error("Input must be 2D or 3D");if(3!==r.dims.length&&2!==r.dims.length)throw Error("Skip must be 2D or 3D");let n=i.dims[i.dims.length-1],s=i.dims[i.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw Error("Skip must have the same sequence length as input");if(1!==a.dims.length)throw Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw Error("Gamma must have the same hidden size as input");if(t.length>3){let i=t[3];if(1!==i.dims.length)throw Error("Beta must be 1D");if(i.dims[i.dims.length-1]!==n)throw Error("Beta must have the same hidden size as input")}if(t.length>4){let i=t[4];if(1!==i.dims.length)throw Error("Bias must be 1D");if(i.dims[i.dims.length-1]!==n)throw Error("Bias must have the same hidden size as input")}})(t.inputs);let $=[0];t.outputCount>1&&$.push(-3),t.outputCount>2&&$.push(-3),t.outputCount>3&&$.push(3),t.compute((r=t.inputs,a=i,n=t.outputCount,s=!1,o=a.simplified,u=r[0].dims,l=e4.size(u),d=u.slice(-1)[0],p=s?u.slice(0,-1).concat(1):[],c=!o&&r.length>3,h=r.length>4,f=s&&n>1,m=s&&n>2,g=n>3,_=[{type:12,data:l},{type:12,data:y=tI(d)},{type:12,data:d},{type:1,data:a.epsilon}],b=[{dims:u,dataType:r[0].dataType}],n>1&&b.push({dims:p,dataType:1}),n>2&&b.push({dims:p,dataType:1}),n>3&&b.push({dims:u,dataType:r[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${f};${m};${g}`,inputDependencies:r.map((t,i)=>"type")},getShaderSource:t=>{let i=[tB("x",r[0].dataType,r[0].dims,y),tB("skip",r[1].dataType,r[1].dims,y),tB("gamma",r[2].dataType,r[2].dims,y)];c&&i.push(tB("beta",r[3].dataType,r[3].dims,y)),h&&i.push(tB("bias",r[4].dataType,r[4].dims,y)),i.push(tN("output",r[0].dataType,u,y)),f&&i.push(tN("mean_output",1,p)),m&&i.push(tN("inv_std_output",1,p)),g&&i.push(tN("input_skip_bias_sum",r[0].dataType,u,y));let a=tS(r[0].dataType),n=tS(1,y);return`

      ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}]).declareVariables(...i)}
      var<workgroup> sum_shared : array<${n}, 64>;
      var<workgroup> sum_squared_shared : array<${n}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":a+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${g?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${tz(a,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${tA("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${tA("square_sum",y)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:_})}),{outputs:$})}}),sd=j(()=>{nm(),n_(),nC(),nS(),a9=(t,i)=>{let r=[];if(t.length>i)if(7===t[i].dataType)t[i].getBigInt64Array().forEach(t=>r.push(Number(t)));else if(6===t[i].dataType)t[i].getInt32Array().forEach(t=>r.push(Number(t)));else throw Error(`Input ${i} must be an array of int32 or int64`);return r},a7=(t,i,r,a,n)=>{let s=t;return t<0&&(s+=r[a[i]]),n[i]<0?Math.max(0,Math.min(s,r[a[i]]-1)):Math.max(0,Math.min(s,r[a[i]]))},ne=(t,i)=>{var r=t.inputs,a=i;if(!r||r.length<1)throw Error("too few inputs");if(0!==a.axes.length){if(a.axes.length!==a.starts.length||a.axes.length!==a.ends.length)throw Error("axes, starts and ends must have the same length")}else if(a.starts.length!==a.ends.length)throw Error("starts and ends must have the same length");r.slice(1).forEach((t,i)=>{if(6!==r[i+1].dataType&&7!==r[i+1].dataType)throw Error(`Input ${i} must be an array of int32 or int64`)});let n=((t,i)=>{if(!(t.length>1))return i;{let i=a9(t,1),r=a9(t,2),a=a9(t,3);return 0===a.length&&(a=[...Array(t[0].dims.length).keys()]),tw({starts:i,ends:r,axes:a})}})(t.inputs,i);t.compute(((t,i)=>{let r=t[0].dims,a=e4.size(r),n=i.axes.length>0?e4.normalizeAxes(i.axes,r.length):[...Array(r.length).keys()],s=a9(t,4);s.forEach(t=>0!==t||(()=>{throw Error("step cannot be 0")})),0===s.length&&(s=Array(n.length).fill(1));let o=i.starts.map((t,i)=>a7(t,i,r,n,s)),u=i.ends.map((t,i)=>a7(t,i,r,n,s));if(n.length!==o.length||n.length!==u.length)throw Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let t=0;t<r.length;++t)n.includes(t)||(o.splice(t,0,0),u.splice(t,0,r[t]),s.splice(t,0,1));let l=s.map(t=>Math.sign(t));s.forEach((t,i,r)=>{if(t<0){let a=(u[i]-o[i])/t,n=o[i],l=n+a*s[i];o[i]=l,u[i]=n,r[i]=-t}});let d=r.slice(0);n.forEach((t,i)=>{d[t]=Math.ceil((u[t]-o[t])/s[t])});let p={dims:d,dataType:t[0].dataType},c=tN("output",t[0].dataType,d.length),h=tB("input",t[0].dataType,t[0].dims.length),f=e4.size(d),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],g=[{type:12,data:f},{type:12,data:o},{type:6,data:l},{type:12,data:s},...tT(t[0].dims,d)];return{name:"Slice",shaderCache:{hint:`${l.length}_${o.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:t=>{let i,a,n;return`
      ${t.registerUniforms(m).declareVariables(h,c)}
        ${i=h,a=c,n=r,`fn calculateInputIndices(output_indices: ${a.type.indices}) -> ${i.type.indices} {
          var input_indices: ${i.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${tO("uniforms.input_shape","i",n.length)};
            let steps_i = ${tO("uniforms.steps","i",n.length)};
            let signs_i = ${tO("uniforms.signs","i",n.length)};
            let starts_i = ${tO("uniforms.starts","i",n.length)};
            var output_index = ${a.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${i.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`}
        ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`},getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g})}})(t.inputs,n),{inputs:[0]})},nt=t=>{let i=t.starts,r=t.ends,a=t.axes;return tw({starts:i,ends:r,axes:a})}}),sp=j(()=>{nm(),n_(),nC(),nk(),nS(),ni=(t,i)=>{var r,a;let n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v,w,x;(t=>{if(!t||1!==t.length)throw Error("Softmax op requires 1 input.")})(t.inputs),r=t,a=i,s=(n=r.inputs[0]).dims,o=e4.size(s),u=s.length,d=(l=e4.normalizeAxis(a.axis,u))<s.length-1,c=[],d?((c=Array.from({length:u},(t,i)=>i))[l]=u-1,c[u-1]=l,p=r.compute(tW(n,c),{inputs:[n],outputs:[-1]})[0]):p=n,m=o/(f=(h=p.dims)[u-1]),g=tI(f),y=f/g,_=64,1===m&&(_=256),b=tB("x",p.dataType,p.dims,g),$=tN("result",p.dataType,p.dims,g),v=b.type.value,w="f32"===tS(p.dataType)?`var threadMax = ${v}(-3.402823e+38f);`:`var threadMax = ${v}(-65504.0h);`,x=r.compute({name:"Softmax",shaderCache:{hint:`${g};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:p.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:y}]}),getShaderSource:t=>{let i;return`
      var<workgroup> rowMaxShared : ${v};
      var<workgroup> rowSumShared : ${v};
      var<workgroup> threadShared : array<${v}, ${_}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${v} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${v}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${t.registerUniform("packedCols","i32").declareVariables(b,$)}
      ${t.mainStart(_)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${_};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${w}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${v}(${i="threadShared[0]",4===g?`max(max(${i}.x, ${i}.y), max(${i}.z, ${i}.w))`:2===g?`max(${i}.x, ${i}.y)`:3===g?`max(max(${i}.x, ${i}.y), ${i}.z)`:i});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${v}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${v}(${tA("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${v}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`}},{inputs:[p],outputs:[d?-1:0]})[0],d&&r.compute(tW(x,c),{inputs:[x]})},nr=t=>tw({axis:t.axis})}),sc=j(()=>{nm(),n_(),nS(),na=t=>Array.from(t.getBigInt64Array(),Number),nn=t=>{var i;let r,a,n,s,o,u,l;(t=>{if(!t||2!==t.length)throw Error("Tile requires 2 inputs.");if(1!==t[0].dataType&&10!==t[0].dataType&&6!==t[0].dataType&&12!==t[0].dataType)throw Error("Tile only support float, float16, int32, and uint32 data types");if(7!==t[1].dataType)throw Error("Tile `repeats` input should be of int64 data type");if(1!==t[1].dims.length)throw Error("Tile `repeats` input should be 1-D");if(na(t[1]).length!==t[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")})(t.inputs),t.compute((r=(i=t.inputs)[0].dims,n=((t,i)=>{let r=[];for(let a=0;a<t.length;++a)r.push(t[a]*i[a]);return r})(r,a=(void 0)??na(i[1])),s=e4.size(n),o=i[0].dataType,u=tB("input",o,r.length),l=tN("output",o,n.length),{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:i[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...tT(i[0].dims,n)]}),getShaderSource:t=>`
      const inputShape = ${u.indices(...r)};
      ${t.registerUniform("output_size","u32").declareVariables(u,l)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`}),{inputs:[0]})}}),sh=j(()=>{nm(),n_(),nS(),ns=t=>{t.compute((t=>{let i=t[1].dims,r=t[2].dims,a=t[0].dims,n=t[1].dataType,s=!(e4.areEqual(i,r)&&e4.areEqual(r,a)),o=i,u=e4.size(i);if(s){let t=e3.calcShape(e3.calcShape(i,r,!1),a,!1);if(!t)throw Error("Can't perform where op on the given tensors");o=t,u=e4.size(o)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:i=>((t,i,r,a,n)=>{let s=tN("output_data",n,r.length,4),o=tB("a_data",i[1].dataType,i[1].dims.length,4),u=tB("b_data",i[2].dataType,i[2].dims.length,4),l=tB("c_data",i[0].dataType,i[0].dims.length,4),d,p=(t,i,r)=>`select(${i}, ${t}, ${r})`;if(a){let t=(t,i,r="")=>{let a=`a_data[index_a${i}][component_a${i}]`,n=`b_data[index_b${i}][component_b${i}]`,d=`bool(c_data[index_c${i}] & (0xffu << (component_c${i} * 8)))`;return`
            let output_indices${i} = ${s.offsetToIndices(`global_idx * 4u + ${i}u`)};
            let offset_a${i} = ${o.broadcastedIndicesToOffset(`output_indices${i}`,s)};
            let offset_b${i} = ${u.broadcastedIndicesToOffset(`output_indices${i}`,s)};
            let offset_c${i} = ${l.broadcastedIndicesToOffset(`output_indices${i}`,s)};
            let index_a${i} = offset_a${i} / 4u;
            let index_b${i} = offset_b${i} / 4u;
            let index_c${i} = offset_c${i} / 4u;
            let component_a${i} = offset_a${i} % 4u;
            let component_b${i} = offset_b${i} % 4u;
            let component_c${i} = offset_c${i} % 4u;
            ${t}[${i}] = ${r}(${p(a,n,d)});
          `};d=9===n?`
            var data = vec4<u32>(0);
            ${t("data",0,"u32")}
            ${t("data",1,"u32")}
            ${t("data",2,"u32")}
            ${t("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${t("output_data[global_idx]",0)}
            ${t("output_data[global_idx]",1)}
            ${t("output_data[global_idx]",2)}
            ${t("output_data[global_idx]",3)}
          `}else d=s.setByOffset("global_idx",p(o.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));return`
        ${t.registerUniform("vec_size","u32").declareVariables(l,o,u,s)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`})(i,t,o,s,n),getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...tT(a,i,r,o)]})}})(t.inputs))}}),sf=j(()=>{nE(),nz(),nA(),nO(),nB(),nN(),nM(),nV(),nF(),nK(),nZ(),nX(),nQ(),nY(),nJ(),n0(),n2(),n1(),n3(),n4(),n9(),n7(),se(),st(),si(),n6(),sr(),sa(),sn(),ss(),so(),nI(),su(),n5(),sl(),sd(),sp(),n8(),sc(),nk(),nR(),sh(),no=new Map([["Abs",[ix]],["Acos",[iC]],["Acosh",[iS]],["Add",[ri]],["ArgMax",[im,ig]],["ArgMin",[ih,ig]],["Asin",[ik]],["Asinh",[iT]],["Atan",[iI]],["Atanh",[iE]],["Attention",[ib]],["AveragePool",[aq,aj]],["BatchNormalization",[i$]],["BiasAdd",[iv]],["BiasSplitGelu",[re]],["Cast",[iA,iz]],["Ceil",[iR]],["Clip",[iO]],["Concat",[rc,rh]],["Conv",[rU,rD]],["ConvTranspose",[rH,rG]],["Cos",[iB]],["Cosh",[iN]],["CumSum",[rF,rK]],["DepthToSpace",[rZ,rX]],["DequantizeLinear",[aY,aJ]],["Div",[rr]],["Einsum",[r3,r4]],["Elu",[iD,iM]],["Equal",[ra]],["Erf",[iU]],["Exp",[iL]],["Expand",[r8]],["FastGelu",[r5]],["Floor",[iW]],["FusedConv",[rU,rD]],["Gather",[r7,r9]],["GatherElements",[an,aa]],["GatherBlockQuantized",[ai,ar]],["GatherND",[ae,at]],["Gelu",[ij]],["Gemm",[ao,as]],["GlobalAveragePool",[aH,aV]],["GlobalMaxPool",[aQ,aX]],["Greater",[ru]],["GreaterOrEqual",[rd]],["GridSample",[ah,af]],["GroupQueryAttention",[aT]],["HardSigmoid",[iX,iZ]],["InstanceNormalization",[aE]],["LayerNormalization",[az]],["LeakyRelu",[iq,iM]],["Less",[rl]],["LessOrEqual",[rp]],["Log",[i5]],["MatMul",[aA]],["MatMulNBits",[aO,aR]],["MaxPool",[aK,aZ]],["Mul",[rn]],["MultiHeadAttention",[ab,ag]],["Neg",[iV]],["Not",[iG]],["Pad",[aB]],["Pow",[rs]],["QuickGelu",[i7,iM]],["Range",[a0]],["Reciprocal",[iH]],["ReduceMin",[io]],["ReduceMean",[it]],["ReduceMax",[is]],["ReduceSum",[il]],["ReduceProd",[iu]],["ReduceL1",[ii]],["ReduceL2",[ir]],["ReduceLogSum",[ip]],["ReduceLogSumExp",[ia]],["ReduceSumSquare",[id]],["Relu",[iF]],["Resize",[a6,a8]],["RotaryEmbedding",[aC]],["ScatterND",[a1,a2]],["Sigmoid",[iK]],["Sin",[iQ]],["Sinh",[iY]],["Slice",[ne,nt]],["SkipLayerNormalization",[a5]],["Split",[av,aw]],["Sqrt",[iJ]],["Softmax",[ni,nr]],["Sub",[ro]],["Tan",[i0]],["Tanh",[i1]],["ThresholdedRelu",[i8,iM]],["Tile",[nn]],["Transpose",[tj,tq]],["Where",[ns]]])}),sm=j(()=>{el(),ny(),nS(),nu=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,i){this.repo.set(t,i)}run(t,i,r,a,n){A(t.programInfo.name);let s=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber);let u=[];for(let t of i)u.push({binding:u.length,resource:{buffer:t.buffer}});for(let t of r)u.push({binding:u.length,resource:{buffer:t.buffer}});n&&u.push({binding:u.length,resource:n});let l=s.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:u,label:t.programInfo.name});if("capturing"===this.backend.sessionStatus){let i={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(i)}o.setPipeline(t.computePipeline),o.setBindGroup(0,l),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||"at-passes"===this.backend.queryType)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),O(t.programInfo.name)}dispose(){}build(t,i){A(t.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(t=>{r.features.has(t.feature)&&a.push(`enable ${t.extension};`)});let n=tU(i,this.backend.device.limits),s=t.getShaderSource(n),o=`${a.join(`
`)}
${n.additionalImplementations}
${s}`,u=r.createShaderModule({code:o,label:t.name});e2("verbose",()=>`[WebGPU] ${t.name} shader code: ${o}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:t.name});return O(t.name),{programInfo:t,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(t){let i="number"==typeof t?t:t.x,r="number"==typeof t?1:t.y||1,a="number"==typeof t?1:t.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(i<=n&&r<=n&&a<=n)return[i,r,a];let s=i*r*a,o=Math.ceil(Math.sqrt(s));if(!(o>n))return[o,o,1];if((o=Math.ceil(Math.cbrt(s)))>n)throw Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}}}),sg={};q(sg,{WebGpuBackend:()=>s_});var sy,s_,sb=j(()=>{el(),nm(),ny(),nb(),nx(),sf(),sm(),sy=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},s_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(null===this.currentKernelId)throw Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,i){this.env=t;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:i.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxBufferSize:i.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:i.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:i.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:i.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:i.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=t=>i.features.has(t)&&r.push(t)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await i.requestDevice(a),this.adapterInfo=new sy(i.info||await i.requestAdapterInfo()),this.gpuDataManager=t$(this),this.programManager=new nu(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,e0(t.logLevel,!!t.debug),this.device.onuncapturederror=t=>{t.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${t.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:i,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){"u">typeof this.querySet&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),i={};"at-passes"===this.queryType&&(i.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:2*this.pendingDispatchNumber,endOfPassWriteIndex:2*this.pendingDispatchNumber+1}),this.computePassEncoder=t.beginComputePass(i)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){let t;this.commandEncoder&&(A(),this.endComputePass(),"none"!==this.queryType&&(this.commandEncoder.resolveQuerySet(this.querySet,0,2*this.pendingDispatchNumber,this.queryResolveBuffer,0),t=this.device.createBuffer({size:2*this.pendingDispatchNumber*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,2*this.pendingDispatchNumber*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,"none"!==this.queryType&&t.mapAsync(GPUMapMode.READ).then(()=>{let i=new BigUint64Array(t.getMappedRange()),r=this.pendingQueries.get(t);for(let t=0;t<i.length/2;t++){let a=r[t],n=a.kernelId,s=this.kernels.get(n),o=s.kernelType,u=s.kernelName,l=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,c=i[2*t],h=i[2*t+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let f=Number(c-this.queryTimeBase),m=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(f)||!Number.isSafeInteger(m))throw RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(t=>({dims:t.dims,dataType:eq(t.dataType)})),outputsMetadata:p.map(t=>({dims:t.dims,dataType:eq(t.dataType)})),kernelId:n,kernelType:o,kernelName:u,programName:l,startTime:f,endTime:m});else{let t="";d.forEach((i,r)=>{t+=`input[${r}]: [${i.dims}] | ${eq(i.dataType)}, `});let i="";p.forEach((t,r)=>{i+=`output[${r}]: [${t.dims}] | ${eq(t.dataType)}, `}),console.log(`[profiling] kernel "${n}|${o}|${u}|${l}" ${t}${i}start time: ${f} ns, execution time: ${m-f} ns`)}E("GPU",`${l}::${c}::${h}`)}t.unmap(),this.pendingQueries.delete(t)}),O())}run(t,i,r,a,n,s){var o,u,l;let d,p;A(t.name);let c=[];for(let t=0;t<i.length;++t){let r=i[t].data;if(0===r)continue;let a=this.gpuDataManager.get(r);if(!a)throw Error(`no GPU data for input: ${r}`);c.push(a)}let{outputs:h,dispatchGroup:f,programUniforms:m}=t.getRunData(i),g=0===r.length?h.map((t,i)=>i):r;if(g.length!==h.length)throw Error(`Output size ${g.length} must be equal to ${h.length}.`);let y=[],_=[];for(let t=0;t<h.length;++t){if(!Number.isInteger(g[t])||g[t]<-3||g[t]>=s)throw Error(`Invalid output index: ${g[t]}`);if(-3===g[t])continue;let i=-1===g[t],r=-2===g[t],o=i||r?n(h[t].dataType,h[t].dims):a(g[t],h[t].dataType,h[t].dims);if(y.push(o),0===o.data)continue;let u=this.gpuDataManager.get(o.data);if(!u)throw Error(`no GPU data for output: ${o.data}`);if(i&&this.temporaryData.push(u),r){let t=this.kernelPersistentData.get(this.currentKernelId);t||(t=[],this.kernelPersistentData.set(this.currentKernelId,t)),t.push(u)}_.push(u)}if(c.length!==i.length||_.length!==y.length){if(0===_.length)return O(t.name),y;throw Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}if(m){let t=0,i=[];m.forEach(r=>{let a="number"==typeof r.data?[r.data]:r.data;if(0===a.length)return;let n=10===r.type?2:4,s,o;10===r.type?(o=a.length>4?16:a.length>2?8:a.length*n,s=a.length>4?16:n*a.length):(o=a.length<=2?a.length*n:16,s=16),t=Math.ceil(t/o)*o,i.push(t);let u=10===r.type?8:4;t+=a.length>4?Math.ceil(a.length/u)*s:a.length*n});let r=new ArrayBuffer(t=16*Math.ceil(t/16));m.forEach((t,a)=>{let n=i[a],s="number"==typeof t.data?[t.data]:t.data;if(6===t.type)new Int32Array(r,n,s.length).set(s);else if(12===t.type)new Uint32Array(r,n,s.length).set(s);else if(10===t.type)new Uint16Array(r,n,s.length).set(s);else if(1===t.type)new Float32Array(r,n,s.length).set(s);else throw Error(`Unsupported uniform type: ${eq(t.type)}`)});let a=this.gpuDataManager.create(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(a.buffer,0,r,0,t),this.gpuDataManager.release(a.id),d={offset:0,size:t,buffer:a.buffer}}let b=this.programManager.normalizeDispatchGroupSize(f),$=(o=t,u=i,l=1===b[1]&&1===b[2],p=o.name,o.shaderCache?.hint&&(p+="["+o.shaderCache.hint+"]"),p+=":"+l+`:${((t,i)=>{if(i.length!==t.length)throw Error(`inputDependencies length ${i.length} is not equal to inputTensors length ${t.length}.`);let r=[];for(let a=0;a<t.length;++a){let n=t[a].dataType;switch(i[a]){case"none":r.push("");break;case"type":r.push(`${n}`);break;case"rank":{let i=t[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=t[a].dims.join(",");r.push(`${n};${i}`);break}default:throw Error(`unsupported input dependency: ${i[a]}`)}}return r.join("|")})(u,o.shaderCache?.inputDependencies??Array(u.length).fill("dims"))}`),v=this.programManager.getArtifact($);if(v||(v=this.programManager.build(t,b),this.programManager.setArtifact($,v),e2("info",()=>`[artifact] key: ${$}, programName: ${t.name}`)),m&&v.uniformVariablesInfo){if(m.length!==v.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${m.length} in program "${v.programInfo.name}".`);for(let t=0;t<m.length;t++){let i=m[t],r=i.type,a="number"==typeof i.data?1:i.data.length,[n,s]=v.uniformVariablesInfo[t];if(r!==n||a!==s)throw Error(`Uniform variable ${t} mismatch: expect type ${n} with size ${s}, got type ${r} with size ${a} in program "${v.programInfo.name}".`)}}if(e2("info",()=>`[ProgramManager] run "${t.name}" (key=${$}) with ${b[0]}x${b[1]}x${b[2]}`),"none"!==this.queryType||"capturing"===this.sessionStatus){let t={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:i,outputTensorViews:y};this.pendingKernels.push(t),"capturing"===this.sessionStatus&&this.capturedPendingKernels.get(this.currentSessionId).push(t)}return this.programManager.run(v,c,_,b,d),O(t.name),y}upload(t,i){this.gpuDataManager.upload(t,i)}memcpy(t,i){this.gpuDataManager.memcpy(t,i)}async download(t,i){await this.gpuDataManager.download(t,i)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,i,r,a){let n=no.get(t);if(!n)throw Error(`kernel not implemented: ${t}`);let s={kernelType:t,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(i,s)}releaseKernel(t){let i=this.kernelPersistentData.get(t);if(i){for(let t of i)this.gpuDataManager.release(t.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,i,r){let a=this.kernels.get(t);if(!a)throw Error(`kernel not created: ${t}`);let n=a.kernelType,s=a.kernelName,o=a.kernelEntry,u=a.attributes;if(null!==this.currentKernelId)throw Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=t,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),e2("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),o(i,u[1]),0}catch(t){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${t}`)),1}finally{for(let t of(l&&r.push(this.device.popErrorScope().then(t=>t?`GPU validation error for kernel "[${n}] ${s}": ${t.message}`:null)),this.temporaryData))this.gpuDataManager.release(t.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,i,r,a){let n=this.sessionExternalDataMapping.get(t);n||(n=new Map,this.sessionExternalDataMapping.set(t,n));let s=n.get(i),o=this.gpuDataManager.registerExternalBuffer(r,a,s);return n.set(i,[o,r]),o}unregisterBuffers(t){let i=this.sessionExternalDataMapping.get(t);i&&(i.forEach(t=>this.gpuDataManager.unregisterExternalBuffer(t[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let i=this.gpuDataManager.get(t);if(!i)throw Error(`no GPU data for buffer: ${t}`);return i.buffer}createDownloader(t,i,r){return async()=>{let a=await t_(this,t,i);return e7(a.buffer,r)}}writeTimestamp(t){"inside-passes"===this.queryType&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),"none"!==this.queryType&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:2*this.maxDispatchNumber}),this.queryResolveBuffer=this.device.createBuffer({size:2*this.maxDispatchNumber*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){e2("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){e2("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){e2("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),i=this.capturedPendingKernels.get(this.currentSessionId),r=t.length;this.pendingKernels=[];for(let a=0;a<r;a++){let r=this.getComputePassEncoder(),n=t[a];this.writeTimestamp(2*this.pendingDispatchNumber),r.setPipeline(n.computePipeline),r.setBindGroup(0,n.bindGroup),r.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(2*this.pendingDispatchNumber+1),this.pendingDispatchNumber++,"none"!==this.queryType&&this.pendingKernels.push(i[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||"at-passes"===this.queryType)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),s$={};q(s$,{init:()=>sx});var sv,sw,sx,sC,sS,sk,sT,sI,sE,sz,sA,sO,sR,sB,sN,sM,sD,sP,sU,sL,sW,sj,sq,sG,sV,sH,sF,sK,sZ,sX,sQ,sY,sJ,s0,s2,s1=j(()=>{nm(),ny(),n_(),nv(),sv=class t{constructor(t,i,r,a){this.module=t,this.dataType=i,this.data=r,this.dims=a}getFloat32Array(){if(1!==this.dataType)throw Error("Invalid data type");let t=e4.size(this.dims);return 0===t?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(7!==this.dataType)throw Error("Invalid data type");let t=e4.size(this.dims);return 0===t?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(6!==this.dataType)throw Error("Invalid data type");let t=e4.size(this.dims);return 0===t?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(10!==this.dataType&&4!==this.dataType)throw Error("Invalid data type");let t=e4.size(this.dims);return 0===t?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(i){if(e4.size(i)!==e4.size(this.dims))throw Error("Invalid new shape");return new t(this.module,this.dataType,this.data,i)}},sw=class{constructor(t,i,r){this.module=t,this.backend=i,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=i.adapterInfo;let a=t.PTR_SIZE,n=r/t.PTR_SIZE,s=4===a?"i32":"i64";this.opKernelContext=Number(t.getValue(a*n++,s));let o=Number(t.getValue(a*n++,s));this.outputCount=Number(t.getValue(a*n++,s)),this.customDataOffset=Number(t.getValue(a*n++,"*")),this.customDataSize=Number(t.getValue(a*n++,s));let u=[];for(let i=0;i<o;i++){let i=Number(t.getValue(a*n++,s)),r=Number(t.getValue(a*n++,"*")),o=Number(t.getValue(a*n++,s)),l=[];for(let i=0;i<o;i++)l.push(Number(t.getValue(a*n++,s)));u.push(new sv(t,i,r,l))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,i){let r=i?.inputs?.map(t=>"number"==typeof t?this.inputs[t]:t)??this.inputs,a=i?.outputs??[],n=(t,i,r)=>new sv(this.module,i,this.output(t,r),r),s=(t,i)=>{let r=eG(t,i);if(!r)throw Error(`Unsupported data type: ${t}`);let a=r>0?this.backend.gpuDataManager.create(r).id:0;return new sv(this.module,t,a,i)};return this.backend.run(t,r,a,n,s,this.outputCount)}output(t,i){let r=this.module.stackSave();try{let r=this.module.PTR_SIZE,a=4===r?"i32":"i64",n=this.module.stackAlloc((1+i.length)*r);this.module.setValue(n,i.length,a);for(let t=0;t<i.length;t++)this.module.setValue(n+r*(t+1),i[t],a);return this.module._JsepOutput(this.opKernelContext,t,n)}catch(r){throw Error(`Failed to generate kernel's output[${t}] with dims [${i}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(r)}}},sx=async(t,i,r,a)=>{let n=i.jsepInit;if(!n)throw Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if("webgpu"===t){let t=new(sb(),G(sg)).WebGpuBackend;await t.initialize(r,a),n("webgpu",[t,i=>t.alloc(Number(i)),i=>t.free(i),(r,a,n,s=!1)=>{if(s)e2("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(r)}, dst=${Number(a)}, size=${Number(n)}`),t.memcpy(Number(r),Number(a));else{e2("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(r)}, gpuDataId=${Number(a)}, size=${Number(n)}`);let s=i.HEAPU8.subarray(Number(r>>>0),Number(r>>>0)+Number(n));t.upload(Number(a),s)}},async(r,a,n)=>{e2("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${r}, dataOffset=${a}, size=${n}`),await t.download(Number(r),()=>i.HEAPU8.subarray(Number(a)>>>0,Number(a+n)>>>0))},(r,a,n)=>t.createKernel(r,Number(a),n,i.UTF8ToString(i._JsepGetNodeName(Number(a)))),i=>t.releaseKernel(i),(r,a,n,s)=>{e2("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${n}, kernel=${r}, contextDataOffset=${a}`);let o=new sw(i,t,Number(a));return t.computeKernel(Number(r),o,s)},()=>t.captureBegin(),()=>t.captureEnd(),()=>t.replay()])}else{let t=new tc(r);n("webnn",[t,()=>t.reserveTensorId(),i=>t.releaseTensorId(i),async(i,r,a,n,s)=>t.ensureTensor(i,r,a,n,s),(i,r)=>{t.uploadTensor(i,r)},async(i,r)=>t.downloadTensor(i,r),(i,r)=>t.registerMLContext(i,r),!!r.trace])}}}),s3=j(()=>{el(),nh(),nf(),nm(),np(),nc(),ng(),sC=async t=>{var i,r;i=t.wasm.numThreads,r=eH(t.logLevel),0!==eB()._OrtInit(i,r)&&eD("Can't initialize onnxruntime.")},sS=async(t,i)=>{eB().asyncInit?.();let r=t.webgpu.adapter;if("webgpu"===i){if(typeof navigator>"u"||!navigator.gpu)throw Error("WebGPU is not supported in current environment");if(r){if("object"!=typeof r.limits||"object"!=typeof r.features||"function"!=typeof r.requestDevice)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=t.webgpu.powerPreference;if(void 0!==i&&"low-power"!==i&&"high-performance"!==i)throw Error(`Invalid powerPreference setting: "${i}"`);let a=t.webgpu.forceFallbackAdapter;if(void 0!==a&&"boolean"!=typeof a)throw Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(!(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a})))throw Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if("webnn"===i&&(typeof navigator>"u"||!navigator.ml))throw Error("WebNN is not supported in current environment");{let a=(s1(),G(s$)).init;"webgpu"===i&&await a("webgpu",eB(),t,r),"webnn"===i&&await a("webnn",eB(),t)}},sk=new Map,sT=(t,i)=>{let r=eB(),a=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);0!==r._OrtGetInputOutputMetadata(t,i,s,s+a)&&eD("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let u=r.HEAP32[n/4];if(0===u)return[o,0];let l=r.HEAPU32[n/4+1],d=[];for(let t=0;t<l;t++){let i=Number(r.getValue(n+8+t*a,"*"));d.push(0!==i?r.UTF8ToString(i):Number(r.getValue(n+8+(t+l)*a,"*")))}return[o,u,d]}finally{r.stackRestore(a),0!==n&&r._OrtFree(n)}},sI=t=>{let i=eB(),r=i._malloc(t.byteLength);if(0===r)throw Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return i.HEAPU8.set(t,r),[r,t.byteLength]},sE=async(t,i)=>{let r,a,n=eB();Array.isArray(t)?[r,a]=t:t.buffer===n.HEAPU8.buffer?[r,a]=[t.byteOffset,t.byteLength]:[r,a]=sI(t);let s=0,o=0,u=0,l=[],d=[],p=[];try{if([o,l]=await eW(i),i?.externalData&&n.mountExternalData){let t=[];for(let r of i.externalData){let i="string"==typeof r?r:r.path;t.push(eX("string"==typeof r?r:r.data).then(t=>{n.mountExternalData(i,t)}))}await Promise.all(t)}for(let t of i?.executionProviders??[])if(("string"==typeof t?t:t.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,"string"!=typeof t){let i=t?.context,r=t?.gpuDevice,a=t?.deviceType,s=t?.powerPreference;i?n.currentContext=i:r?n.currentContext=await n.webnnCreateMLContext(r):n.currentContext=await n.webnnCreateMLContext({deviceType:a,powerPreference:s})}else n.currentContext=await n.webnnCreateMLContext();break}s=await n._OrtCreateSession(r,a,o),n.webgpuOnCreateSession?.(s),0===s&&eD("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[t,c]=(t=>{let i=eB(),r=i.stackSave();try{let r=i.PTR_SIZE,a=i.stackAlloc(2*r);0!==i._OrtGetInputOutputCount(t,a,a+r)&&eD("Can't get session input/output count.");let n=4===r?"i32":"i64";return[Number(i.getValue(a,n)),Number(i.getValue(a+r,n))]}finally{i.stackRestore(r)}})(s),h=!!i?.enableGraphCapture,f=[],m=[],g=[],y=[],_=[];for(let i=0;i<t;i++){let[t,r,a]=sT(s,i);0===t&&eD("Can't get an input name."),d.push(t);let o=n.UTF8ToString(t);f.push(o),g.push(0===r?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:eq(r),shape:a})}for(let r=0;r<c;r++){let[a,o,u]=sT(s,r+t);0===a&&eD("Can't get an output name."),p.push(a);let l=n.UTF8ToString(a);m.push(l),y.push(0===o?{name:l,isTensor:!1}:{name:l,isTensor:!0,type:eq(o),shape:u});{if(h&&i?.preferredOutputLocation===void 0){_.push("gpu-buffer");continue}let t="string"==typeof i?.preferredOutputLocation?i.preferredOutputLocation:i?.preferredOutputLocation?.[l]??"cpu",r=n.webnnIsGraphOutput;if("cpu"===t&&r&&r(s,l)){_.push("ml-tensor-cpu-output");continue}if("cpu"!==t&&"cpu-pinned"!==t&&"gpu-buffer"!==t&&"ml-tensor"!==t)throw Error(`Not supported preferred output location: ${t}.`);if(h&&"gpu-buffer"!==t)throw Error(`Not supported preferred output location: ${t}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(t)}}let b=null;return _.some(t=>"gpu-buffer"===t||"ml-tensor"===t||"ml-tensor-cpu-output"===t)&&(u=n._OrtCreateBinding(s),0===u&&eD("Can't create IO binding."),b={handle:u,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(t=>"ml-tensor-cpu-output"===t?"ml-tensor":t).map(t=>eZ(t))}),sk.set(s,[s,d,p,b,h,!1]),[s,f,m,g,y]}catch(t){throw d.forEach(t=>n._OrtFree(t)),p.forEach(t=>n._OrtFree(t)),0!==u&&0!==n._OrtReleaseBinding(u)&&eD("Can't release IO binding."),0!==s&&0!==n._OrtReleaseSession(s)&&eD("Can't release session."),t}finally{n._free(r),0!==o&&0!==n._OrtReleaseSessionOptions(o)&&eD("Can't release session options."),l.forEach(t=>n._free(t)),n.unmountExternalData?.()}},sz=t=>{let i=eB(),r=sk.get(t);if(!r)throw Error(`cannot release session. invalid session id: ${t}`);let[a,n,s,o,u]=r;o&&(u&&0!==i._OrtClearBoundOutputs(o.handle)&&eD("Can't clear bound outputs."),0!==i._OrtReleaseBinding(o.handle)&&eD("Can't release IO binding.")),i.jsepOnReleaseSession?.(t),i.webnnOnReleaseSession?.(t),i.webgpuOnReleaseSession?.(t),n.forEach(t=>i._OrtFree(t)),s.forEach(t=>i._OrtFree(t)),0!==i._OrtReleaseSession(a)&&eD("Can't release session."),sk.delete(t)},sA=async(t,i,r,a,n,s,o=!1)=>{if(!t)return void i.push(0);let u=eB(),l=u.PTR_SIZE,d=t[0],p=t[1],c=t[3],h=c,f,m;if("string"===d&&("gpu-buffer"===c||"ml-tensor"===c))throw Error("String tensor is not supported on GPU.");if(o&&"gpu-buffer"!==c)throw Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if("gpu-buffer"===c){let i=t[2].gpuBuffer;m=eG(ej(d),p);{let t=u.jsepRegisterBuffer;if(!t)throw Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=t(a,s,i,m)}}else if("ml-tensor"===c){let i=t[2].mlTensor;m=eG(ej(d),p);let r=u.webnnRegisterMLTensor;if(!r)throw Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=r(a,i,ej(d),p)}else{let i=t[2];if(Array.isArray(i)){m=l*i.length,f=u._malloc(m),r.push(f);for(let t=0;t<i.length;t++){if("string"!=typeof i[t])throw TypeError(`tensor data at index ${t} is not a string`);u.setValue(f+t*l,eN(i[t],r),"*")}}else{let t=u.webnnIsGraphInput,s=u.webnnIsGraphOutput;if("string"!==d&&t&&s){let o=u.UTF8ToString(n);if(t(a,o)||s(a,o)){let t=ej(d);m=eG(t,p),h="ml-tensor";let r=u.webnnCreateTemporaryTensor,n=u.webnnUploadTensor;if(!r||!n)throw Error('Tensor location "ml-tensor" is not supported without using WebNN.');let s=await r(a,t,p);n(s,new Uint8Array(i.buffer,i.byteOffset,i.byteLength)),f=s}else m=i.byteLength,f=u._malloc(m),r.push(f),u.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,m),f)}else m=i.byteLength,f=u._malloc(m),r.push(f),u.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,m),f)}}let g=u.stackSave(),y=u.stackAlloc(4*p.length);try{p.forEach((t,i)=>u.setValue(y+i*l,t,4===l?"i32":"i64"));let t=u._OrtCreateTensor(ej(d),f,m,y,p.length,eZ(h));0===t&&eD(`Can't create tensor for input/output. session=${a}, index=${s}.`),i.push(t)}finally{u.stackRestore(g)}},sO=async(t,i,r,a,n,s)=>{let o=eB(),u=o.PTR_SIZE,l=sk.get(t);if(!l)throw Error(`cannot run inference. invalid session id: ${t}`);let d=l[0],p=l[1],c=l[2],h=l[3],f=l[4],m=l[5],g=i.length,y=a.length,_=0,b=[],$=[],v=[],w=[],x=o.stackSave(),C=o.stackAlloc(g*u),S=o.stackAlloc(g*u),k=o.stackAlloc(y*u),T=o.stackAlloc(y*u);try{let l;[_,b]=eP(s),R("wasm prepareInputOutputTensor");for(let a=0;a<g;a++)await sA(r[a],$,w,t,p[i[a]],i[a],f);for(let i=0;i<y;i++)await sA(n[i],v,w,t,c[a[i]],g+a[i],f);B("wasm prepareInputOutputTensor");for(let t=0;t<g;t++)o.setValue(C+t*u,$[t],"*"),o.setValue(S+t*u,p[i[t]],"*");for(let t=0;t<y;t++)o.setValue(k+t*u,v[t],"*"),o.setValue(T+t*u,c[a[t]],"*");if(h&&!m){let{handle:r,outputPreferredLocations:s,outputPreferredLocationsEncoded:u}=h;if(p.length!==g)throw Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${p.length}).`);R("wasm bindInputsOutputs");for(let a=0;a<g;a++){let n=i[a];await o._OrtBindInput(r,p[n],$[a])!==0&&eD(`Can't bind input[${a}] for session=${t}.`)}for(let i=0;i<y;i++){let l=a[i];n[i]?.[3]?0!==o._OrtBindOutput(r,c[l],v[i],0)&&eD(`Can't bind pre-allocated output[${i}] for session=${t}.`):0!==o._OrtBindOutput(r,c[l],0,u[l])&&eD(`Can't bind output[${i}] to ${s[i]} for session=${t}.`)}B("wasm bindInputsOutputs"),sk.set(t,[d,p,c,h,f,!0])}o.jsepOnRunStart?.(d),o.webnnOnRunStart?.(d),l=h?await o._OrtRunWithBinding(d,h.handle,y,k,_):await o._OrtRun(d,S,C,g,T,y,k,_),0!==l&&eD("failed to call OrtRun().");let x=[],I=[];R("wasm ProcessOutputTensor");for(let i=0;i<y;i++){let r=Number(o.getValue(k+i*u,"*"));if(r===v[i]){x.push(n[i]);continue}let s=o.stackSave(),l=o.stackAlloc(4*u),d=!1,p,c=0;try{0!==o._OrtGetTensorData(r,l,l+u,l+2*u,l+3*u)&&eD(`Can't access output tensor data on index ${i}.`);let n=4===u?"i32":"i64",s=Number(o.getValue(l,n));c=o.getValue(l+u,"*");let f=o.getValue(l+2*u,"*"),m=Number(o.getValue(l+3*u,n)),g=[];for(let t=0;t<m;t++)g.push(Number(o.getValue(f+t*u,n)));0!==o._OrtFree(f)&&eD("Can't free memory for tensor dims.");let y=g.reduce((t,i)=>t*i,1);p=eq(s);let _=h?.outputPreferredLocations[a[i]];if("string"===p){if("gpu-buffer"===_||"ml-tensor"===_)throw Error("String tensor is not supported on GPU.");let t=[];for(let i=0;i<y;i++){let r=o.getValue(c+i*u,"*"),a=o.getValue(c+(i+1)*u,"*"),n=i===y-1?void 0:a-r;t.push(o.UTF8ToString(r,n))}x.push([p,g,t,"cpu"])}else if("gpu-buffer"===_&&y>0){let t=o.jsepGetBuffer;if(!t)throw Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let i=t(c),a=eG(s,y);if(void 0===a||!eF(p))throw Error(`Unsupported data type: ${p}`);d=!0,x.push([p,g,{gpuBuffer:i,download:o.jsepCreateDownloader(i,a,p),dispose:()=>{0!==o._OrtReleaseTensor(r)&&eD("Can't release tensor.")}},"gpu-buffer"])}else if("ml-tensor"===_&&y>0){let i=o.webnnEnsureTensor,a=o.webnnIsGraphInputOutputTypeSupported;if(!i||!a)throw Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(void 0===eG(s,y)||!eK(p))throw Error(`Unsupported data type: ${p}`);if(!a(t,p,!1))throw Error(`preferredLocation "ml-tensor" for ${p} output is not supported by current WebNN Context.`);let n=await i(t,c,s,g,!1);d=!0,x.push([p,g,{mlTensor:n,download:o.webnnCreateMLTensorDownloader(c,p),dispose:()=>{o.webnnReleaseTensorId(c),o._OrtReleaseTensor(r)}},"ml-tensor"])}else if("ml-tensor-cpu-output"===_&&y>0){let t=o.webnnCreateMLTensorDownloader(c,p)(),i=x.length;d=!0,I.push((async()=>{let a=[i,await t];return o.webnnReleaseTensorId(c),o._OrtReleaseTensor(r),a})()),x.push([p,g,[],"cpu"])}else{let t=new(eV(p))(y);new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(o.HEAPU8.subarray(c,c+t.byteLength)),x.push([p,g,t,"cpu"])}}finally{o.stackRestore(s),"string"===p&&c&&o._free(c),d||o._OrtReleaseTensor(r)}}for(let[i,r]of(h&&!f&&(0!==o._OrtClearBoundOutputs(h.handle)&&eD("Can't clear bound outputs."),sk.set(t,[d,p,c,h,f,!1])),await Promise.all(I)))x[i][2]=r;return B("wasm ProcessOutputTensor"),x}finally{o.webnnOnRunEnd?.(d),o.stackRestore(x),$.forEach(t=>o._OrtReleaseTensor(t)),v.forEach(t=>o._OrtReleaseTensor(t)),w.forEach(t=>o._free(t)),0!==_&&o._OrtReleaseRunOptions(_),b.forEach(t=>o._free(t))}},sR=t=>{let i=eB(),r=sk.get(t);if(!r)throw Error("invalid session id");let a=r[0],n=i._OrtEndProfiling(a);0===n&&eD("Can't get an profile file name."),i._OrtFree(n)},sB=t=>{let i=[];for(let r of t){let t=r[2];!Array.isArray(t)&&"buffer"in t&&i.push(t.buffer)}return i}}),s4=j(()=>{el(),s3(),np(),nd(),sN=()=>!!c.wasm.proxy&&"u">typeof document,sD=!1,sP=!1,sU=!1,sj=new Map,sq=(t,i)=>{let r=sj.get(t);r?r.push(i):sj.set(t,[i])},sG=()=>{if(sD||!sP||sU||!sM)throw Error("worker not ready")},sV=t=>{switch(t.data.type){case"init-wasm":sD=!1,t.data.err?(sU=!0,sW[1](t.data.err)):(sP=!0,sW[0]()),sL&&(URL.revokeObjectURL(sL),sL=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let i=sj.get(t.data.type);t.data.err?i.shift()[1](t.data.err):i.shift()[0](t.data.out)}}},sH=async()=>{if(!sP){if(sD)throw Error("multiple calls to 'initWasm()' detected.");if(sU)throw Error("previous call to 'initWasm()' failed.");if(sD=!0,sN())return new Promise((i,r)=>{sM?.terminate(),ek().then(([a,n])=>{try{(sM=n).onerror=t=>r(t),sM.onmessage=sV,sW=[i,r];let s={type:"init-wasm",in:c};!s.in.wasm.wasmPaths&&(a||eb)&&(s.in.wasm.wasmPaths={wasm:new t.U(t.r(278)).href}),sM.postMessage(s),sL=a}catch(t){r(t)}},r)});try{await eR(c.wasm),await sC(c),sP=!0}catch(t){throw sU=!0,t}finally{sD=!1}}},sF=async t=>{if(sN())return sG(),new Promise((i,r)=>{sq("init-ep",[i,r]);let a={type:"init-ep",in:{epName:t,env:c}};sM.postMessage(a)});await sS(c,t)},sK=async t=>sN()?(sG(),new Promise((i,r)=>{sq("copy-from",[i,r]),sM.postMessage({type:"copy-from",in:{buffer:t}},[t.buffer])})):sI(t),sZ=async(t,i)=>{if(!sN())return sE(t,i);if(i?.preferredOutputLocation)throw Error('session option "preferredOutputLocation" is not supported for proxy.');return sG(),new Promise((r,a)=>{sq("create",[r,a]);let n={type:"create",in:{model:t,options:{...i}}},s=[];t instanceof Uint8Array&&s.push(t.buffer),sM.postMessage(n,s)})},sX=async t=>{if(sN())return sG(),new Promise((i,r)=>{sq("release",[i,r]),sM.postMessage({type:"release",in:t})});sz(t)},sQ=async(t,i,r,a,n,s)=>{if(!sN())return sO(t,i,r,a,n,s);if(r.some(t=>"cpu"!==t[3]))throw Error("input tensor on GPU is not supported for proxy.");if(n.some(t=>t))throw Error("pre-allocated output tensor is not supported for proxy.");return sG(),new Promise((n,o)=>{sq("run",[n,o]),sM.postMessage({type:"run",in:{sessionId:t,inputIndices:i,inputs:r,outputIndices:a,options:s}},sB(r))})},sY=async t=>{if(sN())return sG(),new Promise((i,r)=>{sq("end-profiling",[i,r]),sM.postMessage({type:"end-profiling",in:t})});sR(t)}}),s6=j(()=>{el(),s4(),nm(),ed(),ng(),sJ=(t,i)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw Error(`invalid data location: ${t.location} for ${i()}`)}},s0=t=>{switch(t[3]){case"cpu":return new I(t[0],t[2],t[1]);case"gpu-buffer":{let i=t[0];if(!eF(i))throw Error(`not supported data type: ${i} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=t[2];return I.fromGpuBuffer(r,{dataType:i,dims:t[1],download:a,dispose:n})}case"ml-tensor":{let i=t[0];if(!eK(i))throw Error(`not supported data type: ${i} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=t[2];return I.fromMLTensor(r,{dataType:i,dims:t[1],download:a,dispose:n})}default:throw Error(`invalid data location: ${t[3]}`)}},s2=class{async fetchModelAndCopyToWasmMemory(t){return sK(await eX(t))}async loadModel(t,i){let r;A(),r="string"==typeof t?await this.fetchModelAndCopyToWasmMemory(t):t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await sZ(r,i),O()}async dispose(){return sX(this.sessionId)}async run(t,i,r){A();let a=[],n=[];Object.entries(t).forEach(t=>{let i=t[0],r=t[1],s=this.inputNames.indexOf(i);if(-1===s)throw Error(`invalid input '${i}'`);a.push(r),n.push(s)});let s=[],o=[];Object.entries(i).forEach(t=>{let i=t[0],r=t[1],a=this.outputNames.indexOf(i);if(-1===a)throw Error(`invalid output '${i}'`);s.push(r),o.push(a)});let u=a.map((t,i)=>sJ(t,()=>`input "${this.inputNames[n[i]]}"`)),l=s.map((t,i)=>t?sJ(t,()=>`output "${this.outputNames[o[i]]}"`):null),d=await sQ(this.sessionId,n,u,o,l,r),p={};for(let t=0;t<d.length;t++)p[this.outputNames[o[t]]]=s[t]??s0(d[t]);return O(),p}startProfiling(){}endProfiling(){sY(this.sessionId)}}}),s8={};q(s8,{OnnxruntimeWebAssemblyBackend:()=>s9,initializeFlags:()=>s5,wasmBackend:()=>s7});var s5,s9,s7,oe=j(()=>{el(),s4(),s6(),s5=()=>{("number"!=typeof c.wasm.initTimeout||c.wasm.initTimeout<0)&&(c.wasm.initTimeout=0);let t=c.wasm.simd;if("boolean"!=typeof t&&void 0!==t&&"fixed"!==t&&"relaxed"!==t&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${t}". Reset it to \`false\` and ignore SIMD feature checking.`),c.wasm.simd=!1),"boolean"!=typeof c.wasm.proxy&&(c.wasm.proxy=!1),"boolean"!=typeof c.wasm.trace&&(c.wasm.trace=!1),"number"!=typeof c.wasm.numThreads||!Number.isInteger(c.wasm.numThreads)||c.wasm.numThreads<=0)if("u">typeof self&&!self.crossOriginIsolated)c.wasm.numThreads=1;else{let t=typeof navigator>"u"?W("node:os").cpus().length:navigator.hardwareConcurrency;c.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},s7=new(s9=class{async init(t){s5(),await sH(),await sF(t)}async createInferenceSessionHandler(t,i){let r=new s2;return await r.loadModel(t,i),r}})});el(),el(),el();{let t=(oe(),G(s8)).wasmBackend;s("webgpu",t,5),s("webnn",t,5),s("cpu",t,10),s("wasm",t,10)}Object.defineProperty(c.versions,"web",{value:"1.23.2",enumerable:!0});var ot=t.i(5705),oi=t.i(3462);t.s(["default",0,()=>{let[t,r]=(0,ot.useState)(null),[a,n]=(0,ot.useState)(""),[s,o]=(0,ot.useState)(null),[u,l]=(0,ot.useState)(!1),d=(t,i)=>{if("total"===t){let t=i.match(/total[:\s]*\$?([\d.,]+)/i);return t?t[1]:"Not found"}if("date"===t){let t=i.match(/(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4})/);return t?t[1]:"Not found"}return"vendor"===t&&i.split("\n")[0]||"Not found"},p=async()=>{if(!t)return void console.warn("[WARN] No image selected");console.log("=================================================="),console.log("[START] Running OCR + ONNX pipeline"),console.log("Image URL:",t),console.log("Timestamp:",new Date().toISOString()),console.log("=================================================="),l(!0);try{let i;console.log("\n[1] Starting OCR (Tesseract WASM)...");let r=performance.now(),a=(await oi.default.recognize(t,"eng")).data.text,s=performance.now();console.log(`[1] OCR completed in ${(s-r).toFixed(0)} ms`),console.log("[1] OCR text length:",a.length),console.log("[1] First 200 chars:\n",a.slice(0,200)),n(a);let u=(i=window.location.pathname.replace(/\/[^/]*$/,"/"),"/"===i?"":i),l=`${u}invoice-parser.onnx`;console.log(`
[2] Loading ONNX model ${l}...`);let p=performance.now(),c=await M.create(l,{executionProviders:["wasm"]}),h=performance.now();console.log(`[2] ONNX model loaded in ${(h-p).toFixed(0)} ms`),console.log("[2] Model input names:",c.inputNames),console.log("[2] Model output names:",c.outputNames),console.log("\n[3] Creating dummy input tensor...");let f=new Float32Array(128).fill(0);console.log("[3] Dummy tensor sample:",f.slice(0,6));let m=new I("float32",f,[1,128]);console.log("[3] Tensor shape:",m.dims),console.log("\n[4] Running ONNX inference...");let g=performance.now(),y=await c.run({input:m}),_=performance.now();console.log(`[4] Inference finished in ${(_-g).toFixed(0)} ms`),console.log("[4] Output keys:",Object.keys(y)),console.log("[4] Raw output object:",y),y.output_label?.data&&console.log("[4] output_label tensor:",y.output_label.data),y.output_probability&&console.log("[4] output_probability map:",y.output_probability),console.log("\n[5] Extracting fields from OCR text...");let b={vendor:d("vendor",a),total:d("total",a),date:d("date",a)};console.log("[5] Extracted fields:",b),o(b),console.log("\n[END] Process completed successfully.")}catch(t){console.error("❌ ERROR during OCR/ONNX pipeline:",t)}finally{l(!1),console.log("==================================================")}};return(0,i.jsxs)("div",{className:"mx-auto flex min-h-screen max-w-3xl flex-col p-6",children:[(0,i.jsx)("h1",{className:"mb-6 text-center text-4xl font-bold",children:"📄 Smart Invoice Scanner"}),(0,i.jsxs)("div",{className:"card bg-base-200 p-6 shadow-xl",children:[(0,i.jsx)("h2",{className:"mb-4 text-xl font-semibold",children:"Upload Invoice"}),(0,i.jsx)("input",{type:"file",accept:"image/*",className:"file-input file-input-bordered w-full",onChange:t=>{let i=t.target.files?.[0];i&&r(URL.createObjectURL(i))}}),t&&(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)("h3",{className:"font-semibold",children:"Preview"}),(0,i.jsx)("img",{src:t,alt:"Invoice",className:"mt-2 rounded-xl border shadow",width:350})]}),(0,i.jsx)("button",{className:`btn btn-primary mt-6 ${u?"btn-disabled":""}`,onClick:p,children:u?"Processing...":"Run OCR + AI"})]}),a&&(0,i.jsxs)("div",{className:"card bg-base-200 mt-6 p-6 shadow-xl",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold",children:"OCR Output"}),(0,i.jsx)("pre",{className:"mt-3 whitespace-pre-wrap",children:a})]}),s&&(0,i.jsxs)("div",{className:"card bg-base-200 mt-6 p-6 shadow-xl",children:[(0,i.jsx)("h2",{className:"mb-4 text-xl font-semibold",children:"Extracted Fields"}),(0,i.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[(0,i.jsx)("div",{className:"alert alert-info",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("b",{children:"Vendor:"})," ",s.vendor]})}),(0,i.jsx)("div",{className:"alert alert-success",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("b",{children:"Total:"})," ",s.total]})}),(0,i.jsx)("div",{className:"alert alert-warning",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("b",{children:"Date:"})," ",s.date]})})]})]})]})}],7820)},4063,(t,i,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>t.r(7820)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push(["/"])})}]);