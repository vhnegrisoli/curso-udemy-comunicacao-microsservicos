# Projeto: Curso Udemy - Comunicação entre Microsserviços

Repositório contendo o projeto desenvolvido do curso Comunicação entre Microsserviços, ministrado por mim para a plataforma Udemy.

## Tecnologias

* **Java 11**
* **Spring Boot**
* **Javascript ES6**
* **Node.js 14**
* **ES6 Modules**
* **Express.js**
* **MongoDB**
* **API REST**
* **PostgreSQL**
* **RabbitMQ**
* **Docker**
* **docker-compose**
* **JWT**
* **Spring Cloud Netflix OpenFeign**
* **Axios**

## Arquitetura Proposta

No curso, desenvolveremos a seguinte aquitetura:

![Arquitetura Proposta](https://github.com/vhnegrisoli/curso-udemy-comunicacao-microsservicos/blob/master/Conte%C3%BAdos/Arquitetura%20Proposta.png)

Teremos 3 APIs:

* **Auth-API**: API de Autenticação com Node.js 14, Express.js, Sequelize, PostgreSQL, JWT e Bcrypt.
* **Sales-API**: API de Vendas com Node.js 14, Express.js, MongoDB, Mongoose, validação de JWT, RabbitMQ e Axios para clients HTTP.
* **Product-API**: API de Produtos com Java 11, Spring Boot, Spring Data JPA, PostgreSQL, validação de JWT, RabbitMQ e Spring Cloud OpenFeign para clients HTTP.

Também teremos toda a arquitetura rodando em containers docker via docker-compose.

## Comandos Docker

Abaixo serão listados alguns dos comandos executados durante o curso para criação dos containers 
dos bancos de dados PostgreSQL, MongoDB e do message broker RabbitMQ:

#### Container Auth-DB

`docker run --name auth-db -p 5432:5432 -e POSTGRES_DB=auth-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11`

#### Container Product-DB

`docker run --name product-db -p 5433:5432 -e POSTGRES_DB=product-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11`

#### Container Sales-DB

`docker run --name sales-db -p 27017:27017 -p 28017:28017 -e MONGODB_USER="admin" -e MONGODB_DATABASE="sales" -e MONGODB_PASS="123456" -v  c:/db tutum/mongodb`

#### Conexão no Mongoshell

`mongo "mongodb://admin:123456@localhost:27017/sales"`

#### Container RabbitMQ

`docker run --name sales_rabbit -p 5672:5672 -p 25676:25676 -p 15672:15672 rabbitmq:3-management`

### Execução docker-compose

`docker-compose up --build`

Para ignorar os logs, adicione a flag `-d`.

## Documentação dos endpoints

#### Auth-API (base URL: http://localhost:8080)

* **POST** - **/api/user/auth**

Headers:
```
Content-Type: application/json
```

Body:
```json
{
    "email": "testeuser1@gmail.com",
    "password": "123456"
}
```
Obs.: todos os endpoints de todas as APIs precisam dos seguintes headers:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVXNlciI6eyJpZCI6MSwibmFtZSI6IlVzZXIgVGVzdCAxIiwiZW1haWwiOiJ0ZXN0ZXVzZXIxQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MzM3OTk5MzUsImV4cCI6MTYzMzg4NjMzNX0.2AWPeoHSYUW_nGeLsx6rEOhm99ZfNZ8pQXPTJ0fwbDU

Content-Type: application/json
```

#### Sales-API (base URL: http://localhost:8082)

* **POST** - **/api/order/create**

Body:
```json
{
  "products": [
    {
      "productId": 1001,
      "quantity": 1
    },
    {
      "productId": 1002,
      "quantity": 1
    },
    {
      "productId": 1003,
      "quantity": 1
    }
  ]
}
```

* **GET** - **/api/orders**
* **GET** - **/api/order/{orderId}**
* **GET** - **/api/orders/products/{productId}**

## Autor

### Victor Hugo Negrisoli
### Desenvolvedor de Software Back-End
