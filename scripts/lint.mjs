import fs from 'node:fs';

const file = 'src/index.html';
const html = fs.readFileSync(file, 'utf8');
const requiredContent = [
  '<!doctype html>',
  '<html lang="pt-BR">',
  '<title>Empreenda Mais Elas</title>',
  'mulheres empreendedoras'
];

const missing = requiredContent.filter((content) => !html.includes(content));

if (missing.length > 0) {
  console.error(`Lint falhou. Conteúdo ausente: ${missing.join(', ')}`);
  process.exit(1);
}

if (html.includes('TODO')) {
  console.error('Lint falhou. Remova marcações TODO antes de concluir o build.');
  process.exit(1);
}

console.log('Lint concluído: estrutura e conteúdo mínimos encontrados.');
