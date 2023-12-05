# Fundamentos de React

## 06-props

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
