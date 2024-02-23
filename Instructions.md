# Desafio JavaScript

Transformar através do JS (wefit-test/js/main.js) o HTML/DOM de acordo com os prints (/Roteiro-teste-WeFit).

[Repositório dos assets](https://github.com/appswefit/wefit-web-test-assets/tree/main/js-assets).

## Avaliação

- Peso: 2 de 10;

- Pontos avaliados:
  - Domínio das APIs básicas do JavaScript;
  - Resolução do desafio.

> Obs: qualidade de código não será reconhecida como um diferencial neste desafio.

## Desafio de Estruturação de Projeto React + TypeScript + styled-components

O desafio consiste na criação de um site de e-commerce simplificado do zero, onde o candidato terá que criar um fluxo com três módulos/telas.

São elas:

- **Home**: Onde ele terá que fazer uma requisição na API, trazendo assim, a lista de filmes quem podem ser adicionados ao carrinho.
- **Carinho**: Onde ele poderá ver os itens que foram adicionados, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. Por padrão, se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de empty com a opção de voltar para tela inicial.
- **Compra realizada**: Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado. Aqui o usuário também terá a opção de voltar para tela inicial.
[Versão 1o teste]

[Protótipo do Figma](https://www.figma.com/file/0ZyTELvPCSCnib16XG49YP/Teste-Front-React-WeFit---2022?node-id=0%3A1)

> *Obs: os assets podem ser exportados do próprio Figma.

### Sobre a API

Para o desafio, simularemos uma API, onde o candidato poderá baixar o .json com a lista de objetos [aqui](https://github.com/appswefit/wefit-web-test-assets/blob/main/ecommerce-assets/server.json):

Para simular um servidor, recomendamos que o candidato utilize o [json-server](https://github.com/typicode/json-server). Se preferir outra biblioteca, pode ficar à vontade para utilizar. 😄

Se possível, inclua o comando para iniciar o servidor da API no package.json do projeto.

### Avaliação

- Peso: 8 de 10;
- Pontos avaliados:
  - Fidelidade do layout do Figma;
  - Funcionamento da aplicação (ausência de bugs);
  - Qualidade do código:
    - Organização das pastas;
    - Domínio do TypeScript;
    - Domínio do styled-components;
    - Bom nível de Componentização;
    - Aplicação de tecnologias;
      - Ex: aplicar uma biblioteca específica que acelere o desenvolvimento.
    - Aplicação das melhores práticas para isolar comportamento de UI da lógica de Integração;
    - Código legível e de fácil manutenção;
      - Ex: variáveis com nomes claros.
    - Código limpo
      - Ex: evitar console.log ou códigos desnecessários.
