Esse projeto seria basicamente uma recriação das páginas e funções principais da Netflix, como a página inicial, a de login, a home de filmes e a página de assistir os filmes em sí.
O projeto foi concluído mas devido ao tempo limite de request da Vercel, não foi possível dar deploy da Home, visto que as requisições das API's eram um pouco demoradas e a build usando Static Props por algum motivo não foram feitas na Vercel também, localmente não tive problemas.
Então no lugar de dar deploy na aplicação pela metade, vou fazer uma versão depois com informações hard coded e todas páginas sendo estáticas, assim dou deploy e será possível ver como era a ideia principal.

Essa aplicação possui sistema de login (Next Auth) com validação de formulário, fazendo a requisição de autorização na API feita com Strapi.
Os filmes e séries, tanto como imagens e vídeos dos mesmos, são adquiridas ao consumir a API do The Movie Database.
Os modais da página, assim como na netflix, ao colocar o mouse em cima(Hover), abre um modal maior e executa um video relacionado ao filme/série.
Ao abrir o modal referente a cada filme ao clicar em "Mais Informações", aparece as informações do filme como Descrição, Relevância e afins, assim como filmes e séries similares.
Tanto os filmes/séries do modal, quanto os similares, são todos disponíveis ao clique, executando assim um vídeo sobre o mesmo (Coloquei pra executar um video referente ao filme/série para simular a experiência da Netflix de assistir a um filme).

No header, do lado superior direito, ao clicar em "Sair da Netflix", executa a função de Sign Out com Next Auth.

Tecnologias utilizadas:
--Next.Js
--Next Auth
--Styled Components
--Swiper JS

Em breve colocarei aqui o link direcionando a versão estática.

-------------------------------------------------------------------

This project would be basically a remake of Netflix's pages and main functions, but due to some Vercel errors and Vercel requests time, i wasn't able to deploy.
In the future i will make a hard coded version of this project, just to show how it would look like.

This app has a login system with Next Auth, form validation, making a call to an API backend made with Strapi.
I used The Movie Database's API to get the data with movies and shows.
The modal boxes, just like netflix's, has hover and click effects, for example when hovering it plays a video related to the movie/show.
When you click "Assistir" it opens a new page where you can watch a youtube video related to the movie/show.
When you click "Mais informações" it opens a bigger modal box, that contains info about the movie/show selected and also shows similar movies/shows(You can click on them too).

In the header, in the upper right, when you click "Sair da Netflix", it calls Next Auth callback function Sign Out.

Built with:
--Next.Js
--Next Auth
--Styled Components
--Swiper JS

Soon i will put here the link redirecting to the static version of this project.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
