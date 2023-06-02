# Api desafio Full-stack - Project Backend

## Passos necessários para funcionamento

-   Instalar todas as bibliotecas

```shell
yarn install -r package.json
```

<br>
<br>

# Rota de login, email e password são obrigatórios

```shell
POST - /login
```

# Rotas de Usuário

-   Rota de criação de um usuário, name, email, phone e password são obrigatórios

```shell
POST - /users
```

-   Rota de listagem de todos os usuários, não é necessário passar um corpo json

```shell
GET - /users
```

-   Rota de atualização de um usuário, name, email, phone e password são opcionais

```shell
PATCH - /users
```

-   Rota de deleção de usuário, não é necessário passar um corpo json

```shell
DELETE - /users
```

-   Rota de criação de contato, name, email, phone e user(precisa ser passado o UUID de um usuário ja criado, o qual o contato vai ser associado) são campos obrigatórios

```shell
POST - /contacts
```

-   Rota de listagem de todos os contatos, não é necessário passar um corpo json

```shell
GET - /contacts
```

-   Rota de atualização de um usuário, todos os campos são opcionais

```shell
PATCH - /contacts
```

-   Rota de deleção de um contato, não é necessário passar um corpo json

```shell
DELETE - /contacts
```
