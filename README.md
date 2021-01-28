## Restaurant Search (projeto DIO)

Projeto desenvolvido durante o bootcamp React Web Developer da Digital Innovation One (DIO)

O projeto consiste em um aplicação web que busca restaurantes próximos da localização do usuário (conforme obtida pelo navegador com autorização do usuário). 

Os restaurantes são exibidos em uma lista e um carrossel de fotos, além de marcadores no mapa.

Clicando sobre um restaurante da lista uma janela é exibida contendo mais informações e fotos do restaurante

O usuário ainda pode utilizar um campo de busca para filtrar os restaurantes por de acordo com nome ou tipo de comida

## Tecnologias e ferramentas utilizadas

- JavaScript
- ReactJS
- material-ui
- styled-components
- Redux
- react-lottie
- react-slick
- react-rating-stars-component
- google-maps-react



## Para executar o projeto :computer:

- clone este repositório 

  ```
  git clone https://github.com/davi-santos5/dio-restaurant-search.git
  ```

- instale as dependências

  ````
  yarn add
  ````

- crie um arquivo `.env` e insira uma chave de API do Google (poderá obter uma no [Google Cloud Platfrom](https://console.cloud.google.com/)) conforme abaixo:

  ```
  REACT_APP_GOOGLE_API_KEY=suaChaveAqui
  ```
  
- execute o projeto

  ```
  yarn start
  ```



Ou acesse a aplicação: [Restaurant Search]((https://restaurant-search-dio.netlify.app/))

![demo](./src/assets/demo.gif)

