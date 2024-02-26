# Desafio de E-commerce

Este é um desafio de criação de um e-commerce utilizando React/Next.js, TypeScript e styled-components.

## Como rodar o projeto

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/kevin-almeida9/e-commerce-poc.git
   ```

2. **Instalar dependências:**

   ```bash
   yarn
   ```

3. **Adicionar o arquivo `.env.local` na raiz do projeto seguindo o exemplo abaixo:**

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:5000/
   ```

   Por padrão, o servidor da API será executado na porta 5000.

4. **Rodar o projeto:**
   - Para rodar o projeto e a API ao mesmo tempo:

     ```bash
     yarn run-project
     ```

   - Ou, alternativamente, pode-se iniciar separadamente a API e o servidor Next.js:
     - Para iniciar a API:

       ```bash
       yarn serve
       ```

     - Para iniciar o servidor Next.js:

       ```bash
       yarn dev
       ```

Certifique-se de ter todas as dependências necessárias instaladas e de seguir corretamente os passos acima para executar o projeto com sucesso.
