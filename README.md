# :running: + :racehorse: === Centauro - Teste de Frontend :checkered_flag:


**Proposta:**
Desenvolver uma aplicação *client-side* que, ao consultar a GitHub API, apresente os repositórios mais populares de um determinado usuário. A aplicação desenvolvida deve funcionar nos navegadores mais recentes do mercado, além de ser responsiva.

Este teste irá testar suas capacidades com JavaScript, React e seu player de store favorito, nosso time utiliza mobx, mas fique a vontade para utilizar o que você se sentir mais a vontade(redux, context, etc...), assim como suas habilidades para interagir eficientemente com APIs.

**API de apoio:** https://developer.github.com/v3/

## Requisitos
- Como um usuário, eu quero buscar por um usuário do GitHub, para que possa ver os repositórios mais populares desse usuário

- Como um usuário, eu quero ver os detalhes do usuário que busquei (nº de seguidores, nº de seguidos, avatar, e-mail e bio), para que possa saber mais sobre o usuário

- Como um usuário, eu quero ver a listagem dos repositórios do usuário que busquei, ordenados em ordem decrescente pelas estrelas (do repositório), para que possa ver quais são os repositórios favoritados do usuário

- Como um usuário, eu quero alterar a ordem da listagem de repositórios, para que possa analisá-la em ordem crescente (por exemplo)

- Como um usuário, eu quero ver uma página detalhada de cada repositório (nome, descrição, nº de estrelas, linguagem principal e *link* para o repositório) na listagem, para que eu possa entender o conteúdo de cada repositório e acessar os que me interessar

## Definition of Done
- **Ser responsivo!** Deve atender dispositivos com a resolução no mínimo de 320 x 480;
- **É obrigatório o uso de rotas.**
- **É obrigatório o uso de store.**

## Critérios de Avaliação
- *Organização:* o projeto está bem estruturado, documentado e faz uso de Git?
- *Tecnologia:* utiliza as tecnologias mais recentes (e estáveis) do mercado?
- *Coerência:* os requisitos foram atendidos?
- *Boas práticas:* o projeto segue boas práticas de desenvolvimento, incluindo segurança e otimização?
- *Qualidade:* possui testes automatizados e integração contínua?

#### Pontos Extras
- Uso de CSS-in-JS (Aphrodite, Styled Components ou Emotion)
- Documentação
- Layout bonito
    - Tabelão com tudo faz voltar 5 casas
- Hospedar a aplicação (Heroku, Firebase, GH pages, etc).

## Observação

A performance e a adequação dos recursos serão considerados durante o processo de avaliação. Alem disso, a avaliação ocorrerá em todos os componentes do projeto (JavaScript, HTML e CSS).

As APIs a serem consumidas são:

**1. Detalhes de um usuário -** https://api.github.com/users/{username}

**2. Repositórios de um usuário -** https://api.github.com/users/{username}/repos

**3. Detalhes de um repositório -** https://api.github.com/repos/{full_name}

## Processo de submissão

O desafio deve ser entregue pelo GitHub. As URLs devem constar no README.

Qualquer dúvida em relação ao desafio, responderemos por e-mail.

Bom trabalho!
