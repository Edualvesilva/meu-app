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
`;

/* Definindo props para o componente */
function Artigo(props) {
  return (
    <StyledArtigo>
      <h3>
        <span>{props.icone}</span>
        {props.titulo}
      </h3>
      <p> {props.descricao} </p>
      <time>{props.data}</time>
    </StyledArtigo>
  );
}

export default Artigo;
