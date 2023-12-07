import { StyleMain } from "../styles/styles.js";
import Artigo from "./Artigo";

import cursos from "../api/cursos.js";
import { useState } from "react";

function Conteudo() {
  /* Criando gerenciador de state para mudanças de categorias. Inicialmente começa como null pois ainda não temos uma escolha/seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null);

  const aplicarFiltro = (event) => {
    /* Capturamos (após o clique) o texto escrito em cada botão */
    const categoriaSelecionada = event.currentTarget.innerText;

    /* E em seguida passamos este texto para o state de categoria */
    setCategoria(categoriaSelecionada);
  };

  return (
    <StyleMain>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        magnam quo ducimus dolores, necessitatibus earum sit at rem, qui,
        impedit voluptatibus inventore temporibus pariatur quidem! Accusantium
        architecto veritatis velit rerum?
      </p>

      <div className="filtros">
        <p>
          <b>Filtrar por: </b>
          <button onClick={aplicarFiltro}>Front-end</button>
          <button onClick={aplicarFiltro}>Back-end</button>
          <button onClick={aplicarFiltro}>Design</button>
        </p>

        {/* Renderização Condicional o texto/tag/componente somente será renderizaso/exibido se o state categoria existir (ou seja,não é null,undefined,false) */}
        {categoria && (
          <p>
            Você escolheu: <b>{categoria}</b>
          </p>
        )}
      </div>

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
