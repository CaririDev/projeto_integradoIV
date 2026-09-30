import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('src/index.html', 'utf8');

test('a página apresenta o nome do projeto', () => {
  assert.match(html, /<h1>Empreenda Mais Elas<\/h1>/);
});

test('a página explica o objetivo da plataforma', () => {
  assert.match(html, /plataforma de apoio a mulheres empreendedoras/i);
  assert.match(html, /informação, incentivo e oportunidades/i);
});
