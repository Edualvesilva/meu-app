import { StyleMain } from "../styles/styles.js";
import Artigo from "./Artigo";

/* Importando assets de imagem */
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";
const data = ["10-09-2010", "09-06-2007", "01-01-1969"];

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
        <Artigo
          icone="🧨"
          titulo="Senhor dos Anéis"
          descricao="Um dos filmes criados"
          data={data[0]}
          imagem={imagem1}
        />
        <Artigo
          icone="🚬"
          titulo="Breaking bad"
          descricao="Melhor série do mundo"
          data={data[1]}
          imagem={imagem2}
        />
        <Artigo
          icone="🕷🕸"
          titulo="Homem Aranha"
          descricao="Herói e Tals"
          data={data[2]}
          imagem={imagem3}
        />
      </div>
    </StyleMain>
  );
}
export default Conteudo;
