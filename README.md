Trabalho1-Topicos

Esse é o reposítorio destinado à primeira entrega da matéria Tópicos de Redes 3.

Temos na primeira tela duas pastas e 5 documentos.
Os documentos são: 
	- nodemon.json : É um documento instalado com o nodemon (uma dependência), ela tem como objetivo diminuir a necessidade de ficar iniciando e fechando o servidor para a hora dos testes.
  - package.json : Os dados básicos e é onde está documentado todas as dependências utilizadas. Assim quando baixar serve para sabermos quais dependências deve-se instalar para o funcionamento correto.
  - README.md : Este é o primeiro documento lido por alguém quando entra na pasta. Ou seja é o guia para entender o código.
  - yarn.lock : "The purpose of a lock file is to lock down the versions of the dependencies specified in a package.json file. This means that in a yarn.lock file, there is an identifier for every dependency and sub dependency that is used for a project." (Explicação pesquisada.)
	-gitignore

As Pastas: 
 - src: Nesta pasta se encontra todos os nossos códigos. Ela possui 3 documentos js e três pastas.
 - node_modules: Ela é instalada junto com uma das depêndencias.
 
 A pasta src:
- app : Dentro dessa pasta temos outras duas, o "models" e o "controllers". Sendo o primeiro o modelo que as várias devem seguir no banco de dados. O "controllers"  temos o documento que contêm nossos quatro CRUDS, sendo estes as funções que o usúrio da api pode acessar.
  - config : Conexão do nosso código ao localhost:27017
  - datapbase : Encontra nossa utilização do mongoose como banco de dados para nossa API.
  - app.js : Serve como "estrutura" para nossas funções.
  - routes.js : Este dosucmento entra as rotas utilizadas pela nossa API, assim tem as quatro funções desenvolvidas. 
  - server.js : Cuida do servidor, que fica ouvindo a porta 3000 que é utilizada pelo nosso app.
