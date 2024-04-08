import { NavLink } from "react-router-dom"
import LogoTarget from "../../assets/logo.png"
import { HeaderContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoTarget} alt="" />
      <nav>
        <NavLink to="/ex-01" title="Exercício 01">Exercício 01</NavLink>
        <NavLink to="/ex-02" title="Exercício 02">Exercício 02</NavLink>
        <NavLink to="/ex-03" title="Exercício 03">Exercício 03</NavLink>
        <NavLink to="/ex-04" title="Exercício 04">Exercício 04</NavLink>
        <NavLink to="/ex-05" title="Exercício 05">Exercício 05</NavLink>
      </nav>
    </HeaderContainer>
  )
}