// Empacota os arquivos estáticos já gerados, sem Python ou dependências npm.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.resolve(root, 'dist');
if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
  throw new Error('Diretório de saída fora do projeto.');
}
if (!fs.existsSync(path.join(root, 'index.html'))) {
  throw new Error('index.html ausente. Gere o portal antes do deploy.');
}
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const name of fs.readdirSync(root)) {
  if (/\.(html|pdf)$/i.test(name) && fs.statSync(path.join(root, name)).isFile()) {
    fs.copyFileSync(path.join(root, name), path.join(output, name));
  }
}
for (const name of ['assets', 'conteudos']) {
  fs.cpSync(path.join(root, name), path.join(output, name), { recursive: true });
}
console.log('Portal preparado em dist/: páginas, assets, capítulos e PDFs.');
