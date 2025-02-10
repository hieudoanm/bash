import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const main = () => {
  const scripts = readdirSync('scripts');
  const contents = scripts.map((script: string) => {
    const name = script.replace('.bash', '');
    const content = readFileSync(`scripts/${script}`, 'utf-8');
    return `## ${name}\n\n\`\`\`bash\n${content}\`\`\``;
  });
  const markdown = `# Bash

${contents.join('\n\n')}
`;
  writeFileSync('README.md', markdown);
};

main();
