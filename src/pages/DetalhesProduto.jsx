import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import imagemLoading from "../assets/loading.svg";
function DetalhesProduto() {
  const [produto, setProduto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();
        setProduto(dados);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar produto: " + error);
      }
    };
    carregarDados();
  }, [id]);

  return (
    <article>
      {loading ? (
        <p style={{ textAlign: "center" }}>
          <img src={imagemLoading} alt="Carregando.." />
        </p>
      ) : (
        <div>
          <h2>{produto.title}</h2>
          <p>
            <b>Categoria: </b> {produto.category}
          </p>
          <p>
            <b>Preço: </b> {produto.price}
          </p>
          <p>Descrição: {produto.description}</p>
          <p>
            <img style={{ width: "300px" }} src={produto.image} alt="" />
          </p>
        </div>
      )}
    </article>
  );
}

export default DetalhesProduto;
