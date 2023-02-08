# Supergym

Um app para personais trainers enviarem seus treinos de qualquer lugar. Ainda estamos em faze de idealização do projeto, então temos apenas uma estrutura inicial.

## Instalação

Antes de tudo, acesse a pasta correta do [server](https://github.com/rafael-jordao/supergym/tree/main/server)

```bash
cd server
```

Em seguida, nós inicializaremos a aplicação utilizando o [Docker](https://www.docker.com/), então siga os comandos abaixo:

```bash
docker compose up -d
```

Serão criados 2 containers: API e Banco de dados.

## Ip Address do Docker Container

Provavelmente você está encontrando um erro de conexão com o banco de dados, para resolver esse problema você deve inserir o Ip Address do container e não o da sua máquina local no nosso arquivo [data-source.ts](https://github.com/rafael-jordao/supergym/blob/main/server/src/database/data-source.ts). 

Para descobrir o Ip Address do seu container é necessário rodar o script:

```bash
docker ps
```

Dessa forma você verá quais containers estão em execução. Confira o ID do container do Postgres e em seguida rode o comando:

```bash
docker inspect -f \
'{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
00000000000
```

No lugar dos 00000000000 voce substitui pelo ID do container e dessa forma você terá o numero do Ip Address do seu container.

Substitua no host o seu Ip pelo do Ip do container docker no [data-source.ts](https://github.com/rafael-jordao/supergym/blob/main/server/src/database/data-source.ts) e a aplicação será inicializada com sucesso.


## Testes unitários

Para garantia de qualidade de código e menos dor de cabeça para o time de desenvolvimento, estaremos utilizando a biblioteca de testes unitários [JestJS](https://jestjs.io/pt-BR/docs/getting-started)