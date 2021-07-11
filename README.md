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
- [Postgre](https://www.postgresql.org/ 'Postgre'): Sistema Gerenciador do Banco de Dados

## Dependências

---

> _Em ordem alfabética_

- [bcrypt](https://www.npmjs.com/package/bcrypt 'bcrypt'): Biblioteca para realizar _hash_ de senhas.
- [email-validator](https://www.npmjs.com/package/email-validator 'email-validator'): Módulo para validar endereço de e-mail
- [ESLint](https://eslint.org/ 'ESLint'): "Corretor" de erros de Código/Sintaxe)
- [Jest](https://jestjs.io/ 'Jest'): Estrutura de testes de JavaScript
- [nodemon](https://www.npmjs.com/package/nodemon 'nodemon'): Ferramenta que reinicia automaticamente o servidor quando mudanças são detectadas.
- [Prettier](https://prettier.io/ 'Prettier'): "Formatador" de Código
- [SuperTest](https://www.npmjs.com/package/supertest 'SuperTest'): Módulo para testes de Integração
- [uuidv4](https://www.npmjs.com/package/uuidv4 'uuidv4'): Módulo para criar UUID (_Universally Unique IDentifier_) conforme [RFC1422].
- [winston](https://www.npmjs.com/package/winston 'winston'): Biblioteca para o registro de logging de Aplicações.

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

---

## Logging

| Level |         Observação         |
| :---: | :------------------------: |
| info  |           Teste            |
| debug |      Dados do Usuário      |
| error | Erros de Banco / Aplicação |

[//]: #
[rfc1422]: https://www.ietf.org/rfc/rfc4122.txt
