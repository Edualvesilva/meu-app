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

function Artigo(props) {
  return (
    <StyledArtigo>
      <h3>Categoria</h3>
      <p>nome</p>
      <p>preco</p>
    </StyledArtigo>
  );
}

export default Artigo;
