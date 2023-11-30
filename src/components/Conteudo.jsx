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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo id
          doloremque optio, magni accusamus dolorum iure obcaecati praesentium,
          ab consectetur non odit molestias reprehenderit recusandae ullam
          facilis. Pariatur, nostrum.
        </p>
        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}
export default Conteudo;
