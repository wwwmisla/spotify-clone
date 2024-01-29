# Imersão Front-End

## Aula 04: CSS Grid, Media Queries e Manipulação do DOM com JavaScript

### CSS GRID, MEDIA QUERIES E MANIPULAÇÃO DO DOM COM JAVASCRIPT
PARTICIPE E VÁ MAIS FUNDO

### Introdução

Nesta aula, iremos utilizar o CSS Grid no projeto, para os cards da página inicial, aprendendo as medias queries, além de introduzir o JavaScript com o conceito DOM e o método promises.

#### Nesta aula, você vai:
- Criar os cards da página inicial;
- Aprender a usar o CSS Grid Layout;
- Utilizar media queries para responsividade;
- Instalar do Node.js;
- Introduzir o JavaScript no projeto;
- Utilizar o conceito DOM;
- Conhecer o método Promises do JavaScript.

Fique até o final da aula e descubra insights e orientações exclusivas para impulsionar o seu aprendizado de forma eficaz com o uso do ChatGPT.

#### Link do projeto:
- [Pasta assets](https://drive.google.com/drive/folders/1VveWX0Lcxf6CV6NgNiJLNcp1gAbl6H05);
- [Código da aula 4](https://github.com/RodrigoHarder/imersao-frontend/tree/main/spotify-imersao-alura-aula-04);
- Acesse o projeto completo [aqui](https://github.com/alura-cursos/spotify-imersao/tree/main).

### Links importantes para você acompanhar a aula
- [Guia de Mergulho da Imersão Front-End!](https://grupoalura.notion.site/Imers-o-Front-End-Guia-de-Mergulho-53f23a8a959e43608524e08b22c585b9);
- [ChatGPT](https://chat.openai.com/);
- [Landing page do Spotify](https://open.spotify.com/intl-pt);
- [Código estrutura HTML](https://github.com/alura-cursos/spotify-imersao/blob/main/spotify-imersao/index.html);
- [Código main-content CSS](https://github.com/alura-cursos/spotify-imersao/blob/main/spotify-imersao/src/styles/main-content.css);
- [Código media-query.css](https://github.com/alura-cursos/spotify-imersao/blob/main/spotify-imersao/src/styles/media-query.css);
- [Download do Node.js](https://nodejs.org/en/download);
- [Pasta api.artists](https://github.com/alura-cursos/spotify-imersao/blob/main/spotify-imersao/api-artists/artists.json);
- [Pasta script.js](https://github.com/alura-cursos/spotify-imersao/blob/main/spotify-imersao/script.js).

### Desafios desta aula
Deseja ir além? Experimente este desafio:
- Teste fazer mais cards se baseie na página do Spotify e aprenda muito mais;
- Crie um arquivo API JSON diferente e explore mais.

### Mergulhe mais profundo 
#### Aprofunde-se nos seguintes tópicos:
- [Guia de JavaScript](https://www.alura.com.br/artigos/javascript?_gl=1*8hyiy2*_ga*MTY3NTIzMTcyNC4xNjk5NzM1NjE0*_ga_1EPWSW3PCS*MTcwNjU1NjIyNS4zNi4xLjE3MDY1NTc2NzQuMC4wLjA.*_fplc*MXgwaE5ZdyUyRmhTSWgyVzU0RFVZcCUyRlg1MlUwQURmMiUyRlhZd29YSFYlMkJvcktJbVRWVzJFdEdod2xueHglMkI4N0VCczNjRldRM2JqQ3pkRm9aUXU2c1Z1RW5CVkJzanBVUE1hODljUEdQNyUyQjA1dE5pdDFoTFdTQjFrNSUyQm54UTAzalElM0QlM0Q.);
- [Guia de propriedades CSS Grid](https://www.alura.com.br/artigos/css-grid-guia-propriedades-grid-container-grid-item?_gl=1*8hyiy2*_ga*MTY3NTIzMTcyNC4xNjk5NzM1NjE0*_ga_1EPWSW3PCS*MTcwNjU1NjIyNS4zNi4xLjE3MDY1NTc2NzQuMC4wLjA.*_fplc*MXgwaE5ZdyUyRmhTSWgyVzU0RFVZcCUyRlg1MlUwQURmMiUyRlhZd29YSFYlMkJvcktJbVRWVzJFdEdod2xueHglMkI4N0VCczNjRldRM2JqQ3pkRm9aUXU2c1Z1RW5CVkJzanBVUE1hODljUEdQNyUyQjA1dE5pdDFoTFdTQjFrNSUyQm54UTAzalElM0QlM0Q.);
- [Flexibilidade em páginas mobile com media queries](https://www.alura.com.br/artigos/flexibilidade-em-paginas-para-dispositivos-moveis-com-media-queries?_gl=1*tquj15*_ga*MTY3NTIzMTcyNC4xNjk5NzM1NjE0*_ga_1EPWSW3PCS*MTcwNjU1NjIyNS4zNi4xLjE3MDY1NTc2NzQuMC4wLjA.*_fplc*MXgwaE5ZdyUyRmhTSWgyVzU0RFVZcCUyRlg1MlUwQURmMiUyRlhZd29YSFYlMkJvcktJbVRWVzJFdEdod2xueHglMkI4N0VCczNjRldRM2JqQ3pkRm9aUXU2c1Z1RW5CVkJzanBVUE1hODljUEdQNyUyQjA1dE5pdDFoTFdTQjFrNSUyQm54UTAzalElM0QlM0Q.);
- [O que é o DOM?](https://www.alura.com.br/artigos/o-que-e-o-dom?_gl=1*1w4nqx8*_ga*MTY3NTIzMTcyNC4xNjk5NzM1NjE0*_ga_1EPWSW3PCS*MTcwNjU1NjIyNS4zNi4xLjE3MDY1NTc2NzQuMC4wLjA.*_fplc*MXgwaE5ZdyUyRmhTSWgyVzU0RFVZcCUyRlg1MlUwQURmMiUyRlhZd29YSFYlMkJvcktJbVRWVzJFdEdod2xueHglMkI4N0VCczNjRldRM2JqQ3pkRm9aUXU2c1Z1RW5CVkJzanBVUE1hODljUEdQNyUyQjA1dE5pdDFoTFdTQjFrNSUyQm54UTAzalElM0QlM0Q.);
- [O que é o método Promisses do JavaScript e quando usar?](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?_gl=1*zjru7z*_ga*MTY3NTIzMTcyNC4xNjk5NzM1NjE0*_ga_1EPWSW3PCS*MTcwNjU1NjIyNS4zNi4xLjE3MDY1NTc2NzQuMC4wLjA.*_fplc*MXgwaE5ZdyUyRmhTSWgyVzU0RFVZcCUyRlg1MlUwQURmMiUyRlhZd29YSFYlMkJvcktJbVRWVzJFdEdod2xueHglMkI4N0VCczNjRldRM2JqQ3pkRm9aUXU2c1Z1RW5CVkJzanBVUE1hODljUEdQNyUyQjA1dE5pdDFoTFdTQjFrNSUyQm54UTAzalElM0QlM0Q.);
- [O que é JSON?](https://www.alura.com.br/artigos/o-que-e-json?_gl=1*2ptszh*_ga*MTY3NTIzMTcyNC4xNjk5NzM1NjE0*_ga_1EPWSW3PCS*MTcwNjU1NjIyNS4zNi4xLjE3MDY1NTc2NzQuMC4wLjA.*_fplc*MXgwaE5ZdyUyRmhTSWgyVzU0RFVZcCUyRlg1MlUwQURmMiUyRlhZd29YSFYlMkJvcktJbVRWVzJFdEdod2xueHglMkI4N0VCczNjRldRM2JqQ3pkRm9aUXU2c1Z1RW5CVkJzanBVUE1hODljUEdQNyUyQjA1dE5pdDFoTFdTQjFrNSUyQm54UTAzalElM0QlM0Q.);
- [Criador de imagem IA gratuito: Microsoft Bing](https://www.bing.com/images/create?cc=br);
- [Criador de imagem IA paga: Midjourney](https://www.midjourney.com/);
- [Criador de imagem IA open-source: Stable Diffusion](https://stability.ai/);
- [Utilize o Stable Diffusion na plataforma paga: Clipdrop](https://clipdrop.co/).
  
### Como compartilhar seu Projeto
#### Compartilhe seu codespace com outras pessoas pelo VScode:
- Na barra Atividades, clique no ícone Extensões;
- Na caixa de pesquisa, digite Live Share;
- Se o botão Instalar for exibido ao lado da extensão, clique nele para instalar a extensão no codespace;
- Se a extensão estiver cinza na lista, clique nela com o botão direito do mouse e clique em Habilitar;
- Na Barra de Atividades, clique no ícone do Live Share;
- Clique em Compartilhar (Você pode clicar em Tornar somente leitura se quiser impedir que os convidados façam alterações nos arquivos que você compartilha com eles);
- Envie o link na área de transferência para qualquer pessoa que você queira ingressar na sessão do Live Share;
- Importante: considerando o nível de acesso que as sessões do Live Share podem conceder aos convidados, você só deve compartilhar com pessoas em que confia e considerar as implicações do que está compartilhando. Para saber mais confira [Recursos de segurança do Live Share](https://learn.microsoft.com/en-us/visualstudio/liveshare/reference/security).

#### Compartilhe sua pasta do VS Code para um novo repositório no GitHub:
- Ter uma conta no GitHub;
- Vincular sua conta do GitHub com o VS Code;
- Criar uma pasta e adicionar arquivos;
- Não precisa acessar o GitHub pra criar um repositório nem abrir um terminal;
- Depois de criada a pasta no computador, abra ela no VS Code;
- Clique em Source Control;
- Clique na segunda opção: Publish to GitHub;
- Escolha se o repositório será privado ou público;
- Escolha os arquivos que serão enviados e pronto;
- No GitHub, adicione #ImersãoFrontEnd e #Alura;
- Agora é só compartilhar marcando a Alura nas redes sociais!

#### Divulgue seu projeto
Mostre o seu projeto para o mundo compartilhando no LinkedIn e Instagram! Marque a Alura (@AluraOnline). Vamos adorar ver os seus projetos e acompanhar a sua evolução! Lembre-se de utilizar a hashtag #ImersaoFrontEnd para que o seu projeto alcance ainda mais pessoas.

Estamos ansiosos para mergulhar em aprendizado junto com você! Bom mergulho e até a próxima aula.

### QUEM SÃO OS MERGULHADORES?
#### INSTRUTORES E INSTRUTORAS DA ALURA NESSA IMERSÃO

- Guilherme Lima;
- Fernanda Degolin;
    - Desenvolvedora Front-end na Globo.
- Mayara Cardoso.
    - Desenvolvedora Front-end no Itaú.
