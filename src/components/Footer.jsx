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
    </footer>
  );
}
export default Footer;
