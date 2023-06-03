# Api desafio Full-stack - Project Backend

## Passos necessários para funcionamento

-   Para esse projeto iremos utilizar o PostgreSQL, é necessario instalar em sua maquina e logo após criar um usuário. Logo apos criar um arquivo .env contendo as mesma informações do .env.example, trocando as pelo usuario, senha, host, porta e uma database com o seguinte nome

```shell
api-desafio1
```

-   Depois de criado o database é necessario gerar as migrations

```shell
 yarn typeorm migration:generate ./src/migrations/createTables -d ./src/data-source.ts
```

-   E logo depois iremos executalas, para que possa ser criados as tabelas onde serão armazenadas as informações da aplicação

```shell
 yarn typeorm migration:run -d src/data-source.ts
```

-   Instalar todas as bibliotecas do projeto

```shell
yarn install -r package.json
```

-   E para rodar a aplicação

```shell
yarn dev
```

<br>
<br>

# Rota de login, email e password são obrigatórios

```shell
POST - /login
```

# Rotas de Usuário

-   Rota de criação de um usuário, name, email, phone e password são obrigatórios e todos em formato de string("")

```shell
POST - /users
```

-   Rota de listagem de todos os usuários, não é necessário passar um corpo json

```shell
GET - /users
```

-   Rota de atualização de um usuário, name, email, phone e password são opcionais e todos em formato de string("")

```shell
PATCH - /users
```

-   Rota de deleção de usuário, não é necessário passar um corpo json

```shell
DELETE - /users
```

-   Rota de criação de contato, name, email, phone e user(precisa ser passado o UUID de um usuário ja criado, o qual o contato vai ser associado) são campos obrigatórios e todos em formato de string("")

```shell
POST - /contacts
```

-   Rota de listagem de todos os contatos, não é necessário passar um corpo json

```shell
GET - /contacts
```

-   Rota de atualização de um usuário, todos os campos são opcionais e todos em formato de string("")

```shell
PATCH - /contacts
```

-   Rota de deleção de um contato, não é necessário passar um corpo json

```shell
DELETE - /contacts
```
