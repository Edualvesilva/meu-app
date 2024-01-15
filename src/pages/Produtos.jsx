function Produtos() {
    
    const carregarDados = async () => {
        try {
            const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
        } catch (error) {
            console.error("erro: "+error);
        }
    }


    carregarDados();

  return <h2>Produtos</h2>;
}

export default Produtos;
