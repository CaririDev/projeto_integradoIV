# Relato do entregável de integração contínua

## Compreensão dos requisitos

A equipe compreendeu que o entregável não consistia apenas em criar um arquivo
YAML. Era necessário configurar um processo reproduzível, executá-lo a cada
alteração e explicar seu funcionamento para pessoas que não participaram do
desenvolvimento. Por isso, o projeto base do Empreenda Mais Elas foi organizado
com uma página textual, scripts locais e um workflow do GitHub Actions.

## a) Configuração do arquivo YAML

O workflow foi criado em `.github/workflows/ci.yml`. Ele é acionado por dois
eventos: `push` para a branch `main` e `pull_request` direcionado para a `main`.
Essa escolha permite verificar tanto alterações já enviadas quanto propostas de
alteração antes da integração ao código principal.

As ações definidas foram:

- `actions/checkout@v4`: disponibiliza o código do repositório no runner;
- `actions/setup-node@v4`: configura o Node.js 20 e o cache do npm;
- `npm ci`: instala exatamente as dependências registradas no lockfile;
- `npm run lint`: verifica a estrutura e os conteúdos mínimos da página;
- `npm test`: verifica o nome e o objetivo da plataforma;
- `npm run build`: gera `dist/index.html`, representando a versão pronta para
  publicação.

O job roda em `ubuntu-latest`, um ambiente limpo e reproduzível fornecido pelo
GitHub Actions. A permissão `contents: read` limita o workflow à leitura do
conteúdo necessário para executar as verificações.

## b) Tarefa automatizada e contribuição para a integração contínua

Foi implementado um pipeline com três verificações: lint, testes e build. O
lint impede que a página perca elementos essenciais. Os testes confirmam que o
nome do projeto e sua finalidade continuam presentes. O build confirma que a
página pode ser preparada para distribuição.

Esse processo contribui para a integração contínua porque cada alteração passa
automaticamente por essas etapas. Se uma verificação falhar, o problema aparece
na execução do workflow antes que a alteração seja incorporada à branch
principal. Isso reduz falhas acumuladas e dá retorno rápido para a equipe.

## c) Organização do README

O README foi estruturado em uma sequência acessível:

1. apresentação do Empreenda Mais Elas;
2. objetivo da plataforma;
3. requisitos necessários;
4. comandos para instalação e execução;
5. explicação das etapas do workflow;
6. definição de integração contínua em linguagem simples;
7. orientação sobre as evidências que devem ser capturadas.

Essa ordem começa pelo contexto do projeto, passa pela reprodução prática e
termina com a explicação conceitual. Assim, uma pessoa estudante da UFCA ou
qualquer outra pessoa da comunidade consegue entender o propósito da plataforma
e repetir o processo sem depender de conhecimento prévio da equipe.

### Componente extensionista

Integração contínua é uma forma de verificar automaticamente o código sempre
que uma alteração é enviada ao repositório. Ela pode executar testes, procurar
problemas de qualidade e confirmar se a aplicação continua sendo construída.

Para quem está aprendendo a programar, essa prática é importante porque mostra
rapidamente o resultado de cada mudança. Se algo deixar de funcionar, o erro é
encontrado perto do momento em que foi criado, quando ainda é mais fácil
entender e corrigir o problema. Além disso, a integração contínua ajuda as
pessoas a trabalharem juntas com mais segurança, pois cria uma verificação
comum para todo o código.

## Evidências

As evidências técnicas são os arquivos `.github/workflows/ci.yml`, `README.md`
e os scripts em `scripts/`. A evidência visual deve ser obtida na aba **Actions**
do GitHub após o primeiro envio do projeto, mostrando a execução bem-sucedida
das etapas de lint, testes e build.
