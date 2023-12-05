import Menu from "../Menu";

/* Importação da lib Styled Components */
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: pink;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  return (
    <StyledHeader>
      <h1>Olá React!</h1>
      <hr />
      <Menu />
    </StyledHeader>
  );
}

export default Cabecalho;
