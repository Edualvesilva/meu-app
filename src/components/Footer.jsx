import styled from "styled-components";
const StyledFooter = styled.footer`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Footer() {
  return (
    <StyledFooter>
      <h2>Rodapé da aplicação</h2>
    </StyledFooter>
  );
}
export default Footer;
