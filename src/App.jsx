function App() {
  // Comentário de uma linha CTRL;
  /* Comentário de várias linhas */
  return (
    <>
      <header>
        <h1>Olá React!</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </nav>
      </header>
      <main>
        <section>
          <h2>Conteúdo da aplicação</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            magnam quo ducimus dolores, necessitatibus earum sit at rem, qui,
            impedit voluptatibus inventore temporibus pariatur quidem!
            Accusantium architecto veritatis velit rerum?
          </p>
          <article>
            <h3>Artigo 1</h3>
            <p>Conteúdo do artigo 1</p>
          </article>

          <article>
            <h3>Artigo 2</h3>
            <p>Conteúdo do artigo 2</p>
          </article>

          <article>
            <h3>Artigo 3</h3>
            <p>Conteúdo do artigo 3</p>
          </article>
        </section>
      </main>
      <hr />
      <footer>
        <h2>Rodapé da aplicação</h2>
      </footer>
    </>
  );
}

export default App;
