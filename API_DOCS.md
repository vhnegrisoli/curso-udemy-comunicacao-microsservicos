# Documentação dos endpoints

## Auth-API (base URL: http://localhost:8080)

### **POST** - **/api/user/auth** - Gera um token de acesso

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

Resposta:

```json
{
    "status": 200,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVXNlciI6eyJpZCI6MSwibmFtZSI6IlVzZXIgVGVzdCAxIiwiZW1haWwiOiJ0ZXN0ZXVzZXIxQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MzM3OTk5MzUsImV4cCI6MTYzMzg4NjMzNX0.2AWPeoHSYUW_nGeLsx6rEOhm99ZfNZ8pQXPTJ0fwbDU"
}
```

Obs.: todos os endpoints de todas as APIs precisam dos seguintes headers:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVXNlciI6eyJpZCI6MSwibmFtZSI6IlVzZXIgVGVzdCAxIiwiZW1haWwiOiJ0ZXN0ZXVzZXIxQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MzM3OTk5MzUsImV4cCI6MTYzMzg4NjMzNX0.2AWPeoHSYUW_nGeLsx6rEOhm99ZfNZ8pQXPTJ0fwbDU

Content-Type: application/json
```

## Product-API (base URL: http://localhost:8081)

### **POST** - **/api/product** - Cria um novo produto

Body:

```json
{
    "name": "Superman - As Quatro Estações",
    "quantity_available": 3,
    "supplierId": 1000,
    "categoryId": 1000
}
```

Resposta:

```json
{
    "id": 1,
    "name": "Superman - As Quatro Estações",
    "supplier": {
        "id": 1000,
        "name": "Panini Comics"
    },
    "category": {
        "id": 1000,
        "description": "Comic Books"
    },
    "quantity_available": 3,
    "created_at": "09/10/2021 16:38:43"
}
```

### **PUT** - **/api/product/{id}** - Atualiza um produto

Body:

```json
{
    "name": "Superman - As Quatro Estações 2",
    "quantity_available": 3,
    "supplierId": 1000,
    "categoryId": 1000
}
```

Resposta (parâmetro id = 1001):

```json
{
    "id": 1001,
    "name": "Superman - As Quatro Estações 2",
    "supplier": {
        "id": 1000,
        "name": "Panini Comics"
    },
    "category": {
        "id": 1000,
        "description": "Comic Books"
    },
    "quantity_available": 3,
    "created_at": null
}
```

### **DELETE** - **/api/product/{id}** - Remove um produto

Resposta (parâmetro id = 2):

```json
{
    "status": 200,
    "message": "The product was deleted."
}
```

### **GET** - **/api/product** - Busca todos os produtos

Resposta:

```json
[
    {
        "id": 1001,
        "name": "Crise nas Infinitas Terras",
        "supplier": {
            "id": 1000,
            "name": "Panini Comics"
        },
        "category": {
            "id": 1000,
            "description": "Comic Books"
        },
        "quantity_available": 9,
        "created_at": "09/10/2021 14:11:15"
    },
    {
        "id": 1002,
        "name": "Interestelar",
        "supplier": {
            "id": 1001,
            "name": "Amazon"
        },
        "category": {
            "id": 1001,
            "description": "Movies"
        },
        "quantity_available": 4,
        "created_at": "09/10/2021 14:11:15"
    },
    {
        "id": 1003,
        "name": "Harry Potter E A Pedra Filosofal",
        "supplier": {
            "id": 1001,
            "name": "Amazon"
        },
        "category": {
            "id": 1002,
            "description": "Books"
        },
        "quantity_available": 2,
        "created_at": "09/10/2021 14:11:16"
    },
    {
        "id": 1,
        "name": "Superman - As Quatro Estações",
        "supplier": {
            "id": 1000,
            "name": "Panini Comics"
        },
        "category": {
            "id": 1000,
            "description": "Comic Books"
        },
        "quantity_available": 3,
        "created_at": "09/10/2021 16:38:43"
    }
]
```

### **GET** - **/api/product/{id}** - Busca um produto pelo ID

Resposta (parâmetro id = 1001):

```json
{
    "id": 1001,
    "name": "Crise nas Infinitas Terras",
    "supplier": {
        "id": 1000,
        "name": "Panini Comics"
    },
    "category": {
        "id": 1000,
        "description": "Comic Books"
    },
    "quantity_available": 9,
    "created_at": "09/10/2021 14:11:15"
}
```

### **GET** - **/api/product/name/{name}** - Busca um produto pelo nome sem case sensitive

Resposta (parâmetro name = ter):

```json
[
    {
        "id": 1001,
        "name": "Crise nas Infinitas Terras",
        "supplier": {
            "id": 1000,
            "name": "Panini Comics"
        },
        "category": {
            "id": 1000,
            "description": "Comic Books"
        },
        "quantity_available": 9,
        "created_at": "09/10/2021 14:11:15"
    },
    {
        "id": 1002,
        "name": "Interestelar",
        "supplier": {
            "id": 1001,
            "name": "Amazon"
        },
        "category": {
            "id": 1001,
            "description": "Movies"
        },
        "quantity_available": 4,
        "created_at": "09/10/2021 14:11:15"
    },
    {
        "id": 1003,
        "name": "Harry Potter E A Pedra Filosofal",
        "supplier": {
            "id": 1001,
            "name": "Amazon"
        },
        "category": {
            "id": 1002,
            "description": "Books"
        },
        "quantity_available": 2,
        "created_at": "09/10/2021 14:11:16"
    }
]
```

### **GET** - **/api/product/category/{categoryId}** - Busca um produto pelo ID da categoria

Resposta (parâmetro categoryId = 1000):

```json
[
    {
        "id": 1001,
        "name": "Crise nas Infinitas Terras",
        "supplier": {
            "id": 1000,
            "name": "Panini Comics"
        },
        "category": {
            "id": 1000,
            "description": "Comic Books"
        },
        "quantity_available": 9,
        "created_at": "09/10/2021 14:11:15"
    },
    {
        "id": 1,
        "name": "Superman - As Quatro Estações",
        "supplier": {
            "id": 1000,
            "name": "Panini Comics"
        },
        "category": {
            "id": 1000,
            "description": "Comic Books"
        },
        "quantity_available": 3,
        "created_at": "09/10/2021 16:38:43"
    }
]
```

### **GET** - **/api/product/supplier/{supplierId}** - Busca um produto pelo ID do fornecedor

Resposta (parâmetro supplierId = 1001):

```json
[
    {
        "id": 1002,
        "name": "Interestelar",
        "supplier": {
            "id": 1001,
            "name": "Amazon"
        },
        "category": {
            "id": 1001,
            "description": "Movies"
        },
        "quantity_available": 4,
        "created_at": "09/10/2021 14:11:15"
    },
    {
        "id": 1003,
        "name": "Harry Potter E A Pedra Filosofal",
        "supplier": {
            "id": 1001,
            "name": "Amazon"
        },
        "category": {
            "id": 1002,
            "description": "Books"
        },
        "quantity_available": 2,
        "created_at": "09/10/2021 14:11:16"
    }
]
```


### **POST** - **/api/product/check-stock** - Verifica o estoque de um array de produtos

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

Resposta:

```json
{
    "status": 200,
    "message": "The stock is ok!"
}
```

### **GET** - **/api/product/{productId}/sales** - Busca o produto com todos os IDs dos pedidos realizados por ele

Resposta:

```json
{
    "id": 1001,
    "name": "Superman - As Quatro Estações 2",
    "supplier": {
        "id": 1000,
        "name": "Panini Comics"
    },
    "category": {
        "id": 1000,
        "description": "Comic Books"
    },
    "sales": [
        "6161cd32560fbede60d48efc",
        "6161cd32560fbede60d48efe",
        "6161d007560fbede60d48f01"
    ],
    "quantity_available": 3,
    "created_at": "09/10/2021 14:11:15"
}
```

## Sales-API (base URL: http://localhost:8082)

### **POST** - **/api/order/create** - Cria um pedido

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

Resposta:

```json
{
    "status": 200,
    "createdOrder": {
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
        ],
        "user": {
            "id": 1,
            "name": "User Test 1",
            "email": "testeuser1@gmail.com"
        },
        "status": "PENDING",
        "createdAt": "2021-10-09T17:23:18.450Z",
        "updatedAt": "2021-10-09T17:23:18.450Z",
        "_id": "6161d007560fbede60d48f01",
        "__v": 0
    }
}
```

### **GET** - **/api/orders** - Busca todos os pedidos

Resposta:

```json
{
    "status": 200,
    "orders": [
        {
            "_id": "6161cd32560fbede60d48efc",
            "products": [
                {
                    "productId": 1001,
                    "quantity": 2
                },
                {
                    "productId": 1002,
                    "quantity": 1
                },
                {
                    "productId": 1003,
                    "quantity": 1
                }
            ],
            "user": {
                "id": "a1sd1as5d165ads1s6",
                "name": "User Test",
                "email": "usertest@gmail.com"
            },
            "status": "APPROVED",
            "createdAt": "2021-10-09T17:11:14.453Z",
            "updatedAt": "2021-10-09T17:11:14.453Z",
            "__v": 0
        },
        {
            "_id": "6161cd32560fbede60d48efe",
            "products": [
                {
                    "productId": 1001,
                    "quantity": 4
                },
                {
                    "productId": 1003,
                    "quantity": 2
                }
            ],
            "user": {
                "id": "asd1as9d1asd1asd1as5d",
                "name": "User Test 2",
                "email": "usertest2@gmail.com"
            },
            "status": "REJECTED",
            "createdAt": "2021-10-09T17:11:14.489Z",
            "updatedAt": "2021-10-09T17:11:14.489Z",
            "__v": 0
        }
    ]
}
```

### **GET** - **/api/order/{orderId}** - Busca um pedido pelo ID

Resposta (parâmetro orderId = 6161cd32560fbede60d48efc):

```json
{
    "status": 200,
    "existingOrder": {
        "_id": "6161cd32560fbede60d48efc",
        "products": [
            {
                "productId": 1001,
                "quantity": 2
            },
            {
                "productId": 1002,
                "quantity": 1
            },
            {
                "productId": 1003,
                "quantity": 1
            }
        ],
        "user": {
            "id": "a1sd1as5d165ads1s6",
            "name": "User Test",
            "email": "usertest@gmail.com"
        },
        "status": "APPROVED",
        "createdAt": "2021-10-09T17:11:14.453Z",
        "updatedAt": "2021-10-09T17:11:14.453Z",
        "__v": 0
    }
}
```

### **GET** - **/api/orders/products/{productId}** - Busca todos os pedidos de um produto

Resposta (parâmetro productId = 1001):

```json
{
    "status": 200,
    "salesIds": [
        "6161cd32560fbede60d48efc",
        "6161cd32560fbede60d48efe",
        "6161d007560fbede60d48f01"
    ]
}
```
