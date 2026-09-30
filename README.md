# Empreenda Mais Elas

O **Empreenda Mais Elas** é uma plataforma de apoio a mulheres empreendedoras.
Este repositório contém uma versão base simples, com uma página textual e um
processo de integração contínua configurado com GitHub Actions.

## Objetivo do projeto

A proposta é reunir informação, incentivo e oportunidades para mulheres que
desejam iniciar ou fortalecer seus negócios. A página atual é um ponto de
partida para futuras funcionalidades, como conteúdos educativos, divulgação de
negócios, rede de apoio e ferramentas de planejamento.

## Requisitos

- Node.js 20 ou superior;
- npm, instalado junto com o Node.js;
- Git, para versionar e enviar as alterações ao GitHub.

## Como executar

Instale as dependências:

```bash
npm ci
```

Execute as verificações disponíveis:

```bash
npm run lint
npm test
npm run build
```

O comando `npm run build` gera a pasta `dist/`, contendo a página pronta para
ser publicada.

## Integração contínua

O workflow está em `.github/workflows/ci.yml`. Ele é executado em cada `push`
para a branch `main` e em cada `pull request` direcionado para essa branch.

O processo realiza as seguintes etapas:

1. baixa o código do repositório;
2. configura o Node.js 20;
3. instala as dependências com `npm ci`;
4. executa o lint com `npm run lint`;
5. executa os testes com `npm test`;
6. gera o build com `npm run build`.

Esse processo funciona como uma barreira de qualidade: uma alteração só é
considerada válida quando mantém a estrutura esperada, passa pelos testes e
consegue gerar a versão de distribuição.

## O que é integração contínua?

Integração contínua é uma prática de desenvolvimento em que as alterações do
código são verificadas automaticamente assim que são enviadas para um
repositório. A verificação pode executar testes, analisar a qualidade do código
e confirmar se o projeto continua compilando.

Para quem está aprendendo a programar, isso é importante porque apresenta um
retorno rápido sobre cada alteração. Em vez de descobrir um erro somente no
final do trabalho, a pessoa estudante consegue identificar o problema logo após
enviar o código, corrigi-lo e acompanhar sua evolução. A prática também ajuda
na colaboração, pois reduz o risco de uma alteração quebrar o trabalho das
outras pessoas.

No Empreenda Mais Elas, a integração contínua ajuda a preservar a qualidade da
plataforma e a confiança de suas futuras usuárias, especialmente quando novas
funcionalidades forem adicionadas.
