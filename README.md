# API de Adoção de Pets de Rua

Bem-vindo ao repositório da API de Adoção de Pets de Rua! Esta API é construída usando Node.js, Express, MongoDB e Firebase, com o objetivo de conectar animais adoráveis a famílias amorosas. A API oferece endpoints para criar, listar, atualizar e excluir informações sobre pets disponíveis para adoção.

## Configuração

Antes de começar, você precisará ter o Node.js e o npm instalados. Além disso, certifique-se de ter uma conta no [Railway](https://railway.app/) para configurar o banco de dados MongoDB e na [Firebase](https://firebase.google.com/) para autenticação.

1. Clone este repositório:
   
   ```bash
   git clone https://github.com/seu-usuario/api-adocao-pets.git
2. Instale as dependências:
 ```cd``` ADOTE-AMOR
  ``` npm install ```
3. Execute o servidor:
4. ```npm run dev```

## Endpoints
- GET /: Retorna a lista de pets disponíveis para adoção.
- POST /: Cria um novo pet para adoção.
- DELETE /:id: Remove um pet da lista de adoção.

## Estrutura
```
[
  {
    "_id": "64bfcc0a62285f19ecaefb74",
    "name": "Pit Chichito",
    "foto": "https://storage.googleapis.com/api-adote-com-amor.appspot.com/9577ccdf-c090-4d5a-8565-accd739625cf.jpg",
    "idade": 5,
    "descricao": "Deus",
    "uf": "MG",
    "cidade": "Estiva",
    "adotado": "s",
    "__v": 0
  }
]
