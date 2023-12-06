import styled from "styled-components";
const StyledArtigo = styled.article`
  background-color: orange;
  padding: 1rem;
  margin: 0.5rem 0;
  h3 {
    color: lightblue;
    border-bottom: 1px solid;
  }

  p {
    font-size: 1.1rem;
  }

  .centralizar {
    text-align: center;
  }
`;

const formataPreco = (valor) => {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

function Artigo(props) {
  return (
    <StyledArtigo>
      {/* O Componente filho (Artigo) recebe
      atráves da prop 'handleClick' a referência à
      função exemplo 3 existente no componente pai (Conteudo) */}
      <h3 onClick={props.handleClick}>Categoria: {props.categoria}</h3>
      <p>Nome do Curso: {props.titulo} </p>
      <p>Preço: {formataPreco(props.preco)}</p>
    </StyledArtigo>
  );
}

export default Artigo;
