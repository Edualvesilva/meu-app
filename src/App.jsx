import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalhesProduto from "./pages/DetalhesProduto";
function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={DetalhesProduto} path="/produtos/:id" />
            <Route Component={Contato} path="/contato" />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
