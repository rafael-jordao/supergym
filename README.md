# Supergym

Um app para personais trainers enviarem seus treinos de qualquer lugar. Ainda estamos em fase de idealização do projeto, então temos apenas uma estrutura inicial.

## Instalação

Antes de tudo, acesse a pasta correta do [server](https://github.com/rafael-jordao/supergym/tree/main/server)

```bash
cd server
```

Instale as dependências

```bash
npm install
```

Em seguida, nós inicializaremos a aplicação utilizando o [Docker](https://www.docker.com/), então siga os comandos abaixo:

```bash
docker compose up -d
```

Serão criados 2 containers: app_supergym e db_supergym.

Aplicação inicializada 🚀.

## Testes unitários

Para garantia de qualidade de código e menos dor de cabeça para o time de desenvolvimento, estaremos utilizando a biblioteca de testes unitários [JestJS](https://jestjs.io/pt-BR/docs/getting-started)

Crie os testes dentro da pasta [__tests__](https://github.com/rafael-jordao/supergym/tree/main/server/src/__tests__) e utilize o script abaixo para realizar os testes unitários.

```bash
npm run test
```

Fique à vontade para contribuir 😉.