import styled from "styled-components";
import Artigo from "./Artigo";

const StyleMain = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.5rem 0;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;
    }

    .artigos article {
      width: 32%;
    }
  }
`;
function Conteudo() {
  return (
    <StyleMain>
      <h2>Conteúdo da aplicação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        magnam quo ducimus dolores, necessitatibus earum sit at rem, qui,
        impedit voluptatibus inventore temporibus pariatur quidem! Accusantium
        architecto veritatis velit rerum?
      </p>
      <div className="artigos">
        <Artigo />
        <Artigo />
        <Artigo />
      </div>
    </StyleMain>
  );
}
export default Conteudo;
