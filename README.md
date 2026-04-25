# Projeto Fullstack com JWT, bcrypt e Mongoose

## Estrutura

- `backend/`: API Node.js com Express, Mongoose, JWT e bcrypt
- `frontend/`: interface simples em HTML, CSS e JavaScript

## Funcionalidades

- Cadastro de usuário
- Login com JWT
- Senha criptografada com bcrypt
- Middleware de autenticação
- Middleware de autorização por role
- CRUD de usuários protegido para admin
- Endpoint de perfil autenticado

## Estrutura do backend

```bash
backend/
  src/
    config/
    controllers/
    middlewares/
    models/
    routes/
  server.js
```

## Como executar

### 1. Entre na pasta do backend

```bash
cd backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie o arquivo `.env`

Use o `.env.example` como base:

```bash
cp .env.example .env
```

### 4. Inicie o projeto

```bash
node server.js
```


