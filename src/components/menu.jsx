import "./menu.css"
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

function Menu() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbarScrolled" : ""} `}>
        <div className="navbarLogo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <button onClick={handleClick} className="menu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul
          onClick={handleClick}
          className={`navbarLinks ${isMenuOpen ? "visible" : "invisible"}`}
        >
          <li>
            <button
              onClick={handleClick}
              className={`back ${isMenuOpen ? "visible" : "invisible"}`}
            >
              <i className="fa-xl fa-solid fa-arrow-left"></i>
            </button>
          </li>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#acercaDe">Acerca de</a>
          </li>
          <li>
            <a href="#equipo">Equipo</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
