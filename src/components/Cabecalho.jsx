import Menu from "./Menu";

/* Importação do módulo CSS como um objeto chamado estilos (o nome é a seu critério) */
import style from "../components/Cabecalho.module.css";
function Cabecalho() {
  return (
    <header>
      <h1>
        <span className={style["destaque-texto"]}>Olá</span>
        <span className={style.sombra}>React!</span>
      </h1>
      <Menu />
    </header>
  );
}

export default Cabecalho;
