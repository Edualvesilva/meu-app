import Artigo from "./Artigo";
function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          magnam quo ducimus dolores, necessitatibus earum sit at rem, qui,
          impedit voluptatibus inventore temporibus pariatur quidem! Accusantium
          architecto veritatis velit rerum?
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}
export default Conteudo;
