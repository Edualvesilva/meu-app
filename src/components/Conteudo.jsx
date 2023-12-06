import { StyleMain } from "../styles/styles.js";
import Artigo from "./Artigo";

import cursos from "../api/cursos.js";

function Conteudo() {
  /* Função que será chamada a partir do evento acionado por um componente/elemento. */
  const exemplo2 = () => {
    alert("Exemplo 2");
  };

  const exemplo3 = (value) => {
    alert("Exemplo 3 - " + value);
  };
  return (
    <StyleMain>
      <h2>Conteúdo da aplicação</h2>
      <button onClick={exemplo2}>Exemplo 2</button>
      <br />
      <button
        onClick={() => {
          exemplo3("Sou Pai");
        }}
      >
        Exemplo 3 - Acionando o evento/função através do conteudo (pai)
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        magnam quo ducimus dolores, necessitatibus earum sit at rem, qui,
        impedit voluptatibus inventore temporibus pariatur quidem! Accusantium
        architecto veritatis velit rerum?
      </p>
      <div className="artigos">
        {cursos.map((curso) => {
          return (
            <Artigo
              key={curso.id}
              categoria={curso.categoria}
              titulo={curso.titulo}
              preco={curso.preco}
            />
          );
        })}
      </div>
    </StyleMain>
  );
}
export default Conteudo;
