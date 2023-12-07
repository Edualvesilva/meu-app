import { StyleMain } from "../styles/styles.js";
import Artigo from "./Artigo.jsx";

import cursos from "../api/cursos.js";
import { useState } from "react";

function Cursos() {
  /* Criando gerenciador de state para mudanças de categorias. Inicialmente começa como null pois ainda não temos uma escolha/seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null);

  const aplicarFiltro = (event) => {
    /* Capturamos (após o clique) o texto escrito em cada botão */
    const categoriaSelecionada = event.currentTarget.innerText;

    /* E em seguida passamos este texto para o state de categoria */
    setCategoria(categoriaSelecionada);
  };

  const limparFiltro = (categorias) => {
    setCategoria(null);
  };

  /* Gerando um novo array de cursos filtrados */
  const cursosFiltrados = cursos.filter((curso) => {
    /* Se o state categoria for igual a uma das categorias dos cursos, então será retornada a lista de cursos daquela categoria. Senão,será retornada lista completa devido ao state ser null (ou seja, =não há uma categoria para filtrar) */
    return curso.categoria === categoria || categoria === null;
  });

  const quantidade = cursosFiltrados.length;

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
          <button onClick={aplicarFiltro}>Front-End</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Design</button>
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Jogadores mais fodas do mundo</button>
          {categoria && (
            <button onClick={limparFiltro}>🧹 Limpar Filtro</button>
          )}
        </p>
        <p>
          Quantidade de Cursos: <b>{quantidade}</b>
        </p>
        {/* Se quantidade for zero (ou seja, não tem cursos da categoria filtrada), então mostre a mensage, */}
        {quantidade == 0 && (
          <p style={{ color: "red", textAlign: "center" }}>
            Não há cursos desta categoria!
          </p>
        )}
        {/* Renderização Condicional o texto/tag/componente somente será renderizaso/exibido se o state categoria existir (ou seja,não é null,undefined,false) */}
        {categoria && (
          <p>
            Você escolheu: <b>{categoria}</b>
          </p>
        )}
      </div>

      <div className="artigos">
        {cursosFiltrados.map((curso) => {
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
export default Cursos;
