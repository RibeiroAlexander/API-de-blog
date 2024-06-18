# 📚 Blog API

Bem-vindo à Blog API! Esta API RESTful permite a criação, listagem, atualização e exclusão de posts e comentários em um blog. Desenvolvida utilizando Node.js, Express, Sequelize, dotenv e MySQL.

## 🌟 Funcionalidades

- 📝 **Posts**
  - Criar um novo post
  - Listar todos os posts
  - Atualizar um post existente
  - Excluir um post

- 💬 **Comentários**
  - Criar um novo comentário
  - Listar todos os comentários
  - Atualizar um comentário existente
  - Excluir um comentário

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Passos para configurar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/blog-api.git
   cd blog-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente:**
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=blogdb
   DB_DIALECT=mysql
   ```

4. **Inicialize o banco de dados:**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor:**
   ```bash
   npm start
   ```

   O servidor estará rodando em `http://localhost:3000`.

## 🛤️ Rotas da API

### 📝 Posts

- **Criar um novo post**
  - `POST /posts`
  - Body:
    ```json
    {
      "title": "Título do Post",
      "content": "Conteúdo do post"
    }
    ```

- **Listar todos os posts**
  - `GET /posts`

- **Atualizar um post**
  - `PUT /posts/:id`
  - Body:
    ```json
    {
      "title": "Novo título",
      "content": "Novo conteúdo"
    }
    ```

- **Excluir um post**
  - `DELETE /posts/:id`

### 💬 Comentários

- **Criar um novo comentário**
  - `POST /comments`
  - Body:
    ```json
    {
      "content": "Conteúdo do comentário",
      "postId": 1
    }
    ```

- **Listar todos os comentários**
  - `GET /comments`

- **Atualizar um comentário**
  - `PUT /comments/:id`
  - Body:
    ```json
    {
      "content": "Novo conteúdo"
    }
    ```

- **Excluir um comentário**
  - `DELETE /comments/:id`

## 📄 Estrutura do Projeto

- `models/` - Definição dos modelos Sequelize (Post e Comment).
- `controllers/` - Lógica dos controladores para gerenciar as operações CRUD.
- `routes/` - Definição das rotas para os endpoints da API.
- `migrations/` - Arquivos de migração para criação das tabelas no banco de dados.
- `config/` - Configurações do Sequelize.

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
