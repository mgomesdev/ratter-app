## [Rater App](https://rater-app.vercel.app/) - Desafio Técnico Front-end

![Rater App](/docs/images/splash-screen.png 'Rater App')

### Wiki

-   [Introdução](https://github.com/mgomesdev/ratter-app/blob/main/docs/wiki/INTRODUCAO.md)
-   [Arquitetura](https://github.com/mgomesdev/ratter-app/blob/main/docs/wiki/ARQUITETURA.md)
-   [Padrôes e Normas](https://github.com/mgomesdev/ratter-app/blob/main/docs/wiki/PADROES-E-NORMAS.md)
-   [Ambientes](https://github.com/mgomesdev/ratter-app/blob/main/docs/wiki/AMBIENTES.md)
-   [Links Úteis](https://github.com/mgomesdev/ratter-app/blob/main/docs/wiki/LINKS-UTEIS.md)

### Processos

-   [Planejamento](https://github.com/mgomesdev/ratter-app/blob/main/docs/processos/PLANEJAMENTO.md)
-   [Considerações Finais](https://github.com/mgomesdev/ratter-app/blob/main/docs/processos/CONSIDERACOES-FINAIS.md)

---

### ⚡ Instalação

1. Clone o repositório para sua máquina local usando o seguinte comando:

    > git clone https://github.com/mgomesdev/rater-app.git

2. Navegue até o diretório do projeto:

    > cd rater-app

3. Instale as dependências

    > npm install ou yarn

4. Crie um arquivo .env.local na raiz do projeto e configure as variaveis de ambiente seguindo o arquivo `.env.example` que se encontra na raiz do projeto.

    - `REACT_APP_TMDB_ACCESS_TOKEN_AUTH=<token here>`
    - `REACT_APP_TMDB_IMAGE_URL=https://image.tmdb.org/t/p/`
    - `REACT_APP_TMDB_API_URL=https://api.themoviedb.org/3`

> **Obs**: você precisará criar uma conta no [**TMDB**](https://developer.themoviedb.org/docs/getting-started) e gerar um `token de api` para conseguir fazer requisições na api deles ou se preferir, navegue pelo [**Ratter App**](https://rater-app.vercel.app/) da produção.

5. Inicie um servidor local para visualizar o ratter app.

    > yarn start ou npm run start

6. Abra o navegador e visualize o Ratter APP na porta 3000 🎉
    > http://localhost:3000
