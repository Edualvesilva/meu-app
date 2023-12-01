import { StyleMain } from "../styles/styles.js";
import Artigo from "./Artigo";

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
