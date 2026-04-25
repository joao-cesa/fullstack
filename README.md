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
npm run dev
```

ou

```bash
npm start
```

## Usuário admin

O sistema permite cadastrar usuários com role `admin` diretamente pela rota de registro ou pelo frontend.

## Rotas principais

### Públicas

- `POST /api/users/register`
- `POST /api/users/login`

### Protegidas

- `GET /api/users/me`
- `GET /api/users` (admin)
- `GET /api/users/:id` (admin)
- `PUT /api/users/:id` (admin)
- `PATCH /api/users/:id/password` (admin)
- `DELETE /api/users/:id` (admin)

## Observação

O frontend estático é servido pelo backend na rota raiz.
