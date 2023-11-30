import estileira from "./Cabecalho.module.css";
function Artigo() {
  return (
    <>
      <h3>Artigo </h3>
      <p className={`${estileira["artigo-colorido"]}`}>Conteúdo do artigo</p>
    </>
  );
}

export default Artigo;
