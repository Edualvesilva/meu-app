import { StyledMenu } from "../styles/styles.js";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </StyledMenu>
  );
}

export default Menu;
