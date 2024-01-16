import { useParams } from "react-router-dom";

function DetalhesProduto() {
  /* Usamos o Hook useParams do React Router DOM para ter acesso aos parâmetros da rota dinâmica neste caso,o parâmetro chamado "id". */
  const { id } = useParams();
  console.log(id);
  return (
    <article>
      <h2>Titulo</h2>
      <p>
        <b>Categoria: </b> categoria...
      </p>
      <p>
        <b>Preço: </b> preco...
      </p>
      <p>Descrição: </p>
      <p>
        <img src="" alt="" />
      </p>
    </article>
  );
}

export default DetalhesProduto;
