import { useEffect, useState } from "react";
function Produtos() {
  /* O State "produtos" é iniciado como um array vazio.
    Posteriormente (após o carregamento dos dados da API),
    ele será preenchida com os objetos/produtos */
  const [produtos, setProdutos] = useState([]);

  /* Gerenciando o efeito colateral do componente para o carregamento dos dados da API. */

  /* Fluxo geral do funcionamento do código abaixo
    1) useEffect é carregado UMA VEZ e APÓS a montagem do page (Produtos)
    2) Em seguida, ele executa a função carregarDados
    3) Ao término dela, atualiza o state (produtos)
    */

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
      } catch (error) {
        console.error("erro: " + error);
      }
    };
    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>
      {produtos.map((produto) => {
        return (
          <section key={produto.id}>
            <h3>{produto.title}</h3>
            <p>{produto.price}</p>
            <p>{produto.description}</p>
          </section>
        );
      })}
    </article>
  );
}

export default Produtos;
