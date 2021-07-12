![img](https://github.com/padupe/controle_atividades_escolares/blob/Models/Readme/API.png)

# API para Controle de Atividades Escolares

API desenvolvida com base em **Nodejs** para Controle de Atividades realizadas por alunos de uma escola.

## Tecnlogias Utilizadas

---

> _Em ordem alfabética_

- [Docker](https://www.docker.com/ 'Docker'): "Contêinirização"
- [Express](https://expressjs.com/ 'Express'): Framework
- [Nodejs](https://nodejs.org/en/ 'Nodejs'): Eventos voltados para o Backend
- [Prisma](https://www.prisma.io/ 'Prisma'): ORM responsável pela Conexão com o Banco de Dados
- [PostgreSQL](https://www.postgresql.org/ 'PostgreSQL'): Sistema Gerenciador do Banco de Dados

## Dependências

---

> _Em ordem alfabética_

- [bcrypt](https://www.npmjs.com/package/bcrypt 'bcrypt'): Biblioteca para realizar _hash_ de senhas.
- [email-validator](https://www.npmjs.com/package/email-validator 'email-validator'): Módulo para validar endereço de e-mail
- [ESLint](https://eslint.org/ 'ESLint'): "Corretor" de erros de Código/Sintaxe)
- [Jest](https://jestjs.io/ 'Jest'): Estrutura de testes de JavaScript
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken 'jsonwebtoken'): Módulo de Autenticação para Segurança da Aplicação
- [nodemon](https://www.npmjs.com/package/nodemon 'nodemon'): Ferramenta que reinicia automaticamente o servidor quando mudanças são detectadas.
- [Prettier](https://prettier.io/ 'Prettier'): "Formatador" de Código
- [SuperTest](https://www.npmjs.com/package/supertest 'SuperTest'): Módulo para testes de Integração
- [uuidv4](https://www.npmjs.com/package/uuidv4 'uuidv4'): Módulo para criar UUID (_Universally Unique IDentifier_) conforme [RFC1422].
- [winston](https://www.npmjs.com/package/winston 'winston'): Biblioteca para o registro de logging de Aplicações.

## MER

---

![img](https://github.com/padupe/controle_atividades_escolares/blob/Routes/Readme/MER.png)

## Modelos de JSON para uso na Aplicação

---

### Login na Aplicação

Usuário Válido:

```json
{
  "email": "peixoto.pauloeduardo@gmail.com",
  "senha": "Edu@16101990"
}
```

Usuário com _status_ **Inativo**:

```json
{
  "email": "user.block@email.com",
  "senha": "123456"
}
```

### Cadastro de Novo Aluno

```json
{
  "nome": "Antonella Maria",
  "ra": "987654321-X"
}
```

## Comandos úteis no uso da Aplicação

---

### Developmente Server

Iniciar o servidor da Aplicação:

```
    $ yarn dev
```

### Docker

Subir as configurações do contêiner:

```
    $ docker-compose f docker/docker-compose.yml up -d
```

### PostgreSQL (Banco de Dados) / ORM Prisma

Interface Visual no navegador para acessar o Banco de Dados:

```
    $ npx prisma studio
```

Inicar Migration:

```
    $ yarn migrate
```

Carregar os dados de teste no Banco:

```
    $ yarn seed
```

Realizar o _reset_ das Migrations e limpar o Banco de Dados:

```
    $ npx prisma migrate reset
```

---

## Logging

| Level |         Observação         |
| :---: | :------------------------: |
| info  |           Teste            |
| debug |      Dados do Usuário      |
| error | Erros de Banco / Aplicação |

[//]: #
[rfc1422]: https://www.ietf.org/rfc/rfc4122.txt
