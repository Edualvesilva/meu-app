# Fundamentos de React

## 12-nevegação-usando-rotas

O React suporta a navegação/links como Single Page Application (SPA) usando uma biblioteca adicional chamada **React Router DOM**.

Portanto, é necessário instalar esta dependência:

`npm install react-router-dom`

## 10-gerenciamento-de-estados-dos-componentes

`Estado` ou `state` é uma propriedade especial de um componente que pode ser alterada ao longo do tempo. Por exe,plo, um componente que exibe um contador de **likes** precisa de um gerenciamento de `states` para controlar a quantidade de **likes** recebidos.

o uso de `states` permite ao React reagir às mudanças de renderização dos componentes.

### Exemplos de mudança que podem ser gerenciadas por states

- Captura de dados de formulário
- Visibilidade de componentes
- Filtros e buscas de dados
- Contadores
- Temas/estilos
- Vida de um jogador num jogo

---

## 07-props

São parâmetros/argumentos com valores/expressões passados para os componentes React, normalmente usados para injeção de dados dinâmicos. As `props` funcionam como objetos, e cada `prop` criada por você passa a ter propriedades deste objeto.

As `props` são criadas manualmente, embora também exista uma `prop` especial chamada `children` que permite ler/transmitir o conteúdo que fica entre as tags de abertura/fechamento de um componente.

---

## 00-projeto-resetado

## Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx

- npm run dev -- --host 0.0.0.0 --open

`npm install styled-components`

## 05-styled-components

Biblioteca (ou lib) muito comum para estilização CSS in JS de componentes.

para utilização, crie componentes estlizados usando a sintaxe:

```javascript
const StyledNome = Styled.tag`propriedades: valordapropriedade`;
```
