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
function Artigo() {
  return (
    <StyledArtigo>
      <h3>Artigo </h3>
      <p>Conteúdo do artigo </p>
    </StyledArtigo>
  );
}

export default Artigo;
