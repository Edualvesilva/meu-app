function Footer() {
  /* Style no JS é um Objeto por isso stylw={{}} */
  const ExemploEstilos = {
    backgroundColor: "lightcyan",
    padding: "2%",
    color: "red",
    border: "solid black 4px",
  };

  /* Por isso podemos chamar assim: */
  return (
    <footer style={ExemploEstilos}>
      <h2 style={{ textAlign: "center" }}>Rodapé da aplicação</h2>
      <p className="destaque-texto">Fundamentos do React</p>
      <p>
        {/* Classname porque class é para Orientação a Objeto em JS */}
        Experimentando <b className="sombra">Classes</b>
      </p>
    </footer>
  );
}
export default Footer;
