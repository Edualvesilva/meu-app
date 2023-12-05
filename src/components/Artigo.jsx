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

/* Definindo props para o componente */
function Artigo({ imagem, icone, titulo, descricao, data, children }) {
  return (
    <StyledArtigo>
      <h3>
        <span>{icone}</span>
        {titulo}
      </h3>
      <p> {descricao} </p>
      <time>{data}</time>
      <div className="centralizar">
        <img src={imagem} alt="" />
      </div>

      {children}
    </StyledArtigo>
  );
}

export default Artigo;
