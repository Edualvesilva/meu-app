import styled from "styled-components";
export const StyledFooter = styled.footer`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;
    /* reference to the parent selector */
    &:hover {
      color: black;
      background-color: pink;
    }
  }
`;

export const StyleCursos = styled.section`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.5rem 0;
  }
  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  .filtros button {
    margin: 0.5rem;
  }
  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;
    }

    .artigos article {
      width: 32%;
    }
  }
`;
