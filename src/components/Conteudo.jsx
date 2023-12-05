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
        >
          <h4>Volumes</h4>
          <ul>
            <li>A Sociedade do Anel</li>
            <li>As Duas Torres</li>
            <li>O Retorno do Rei</li>
          </ul>
        </Artigo>

        <Artigo
          icone="🚬"
          titulo="Breaking bad"
          descricao="Melhor série do mundo"
          data={data[1]}
          imagem={imagem2}
        >
          <h4>Defuntos da Serie</h4>
          <ul>
            <li>Hank</li>
            <li>Saul GoodMan</li>
            <li>Walter White</li>
          </ul>
        </Artigo>
        <Artigo
          icone="🕷🕸"
          titulo="Homem Aranha"
          descricao="Herói e Tals"
          data={data[2]}
          imagem={imagem3}
        >
          <section>
            <h4>Assuntos</h4>
            <details>
              <summary>Estrutura</summary>
              <p>Spider-man issue 0</p>
            </details>

            <details>
              <summary>Filmes</summary>
              <p>Spider-man 1 - Tobey Maguire</p>
            </details>
          </section>
        </Artigo>
      </div>
    </StyleMain>
  );
}
export default Conteudo;
