import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>
      <Footer />
    </>
  );
}

export default App;
