import { useParams } from "react-router-dom";
import { useEffect } from "react";
function DetalhesProduto() {
  /* Usamos o Hook useParams do React Router DOM para ter acesso aos parâmetros da rota dinâmica neste caso,o parâmetro chamado "id". */
  const { id } = useParams();

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(
          `'https://fakestoreapi.com/products/${id}`
        );
        const dados = await resposta.json();
      } catch (error) {
        console.error("Erro ao carregar produto: " + error);
      }
    };
  }, [id]);
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
