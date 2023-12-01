import Menu from "./Menu";

/* Importação da lib Styled Components */
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: black;
  color: white;
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
