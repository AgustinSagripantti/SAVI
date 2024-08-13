import './menu.css'
import { useState, useEffect } from 'react';

function Menu () {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <>
            <nav className={`navbar ${isScrolled ? 'navbarScrolled' : ''}`}>
                <div className="navbarLogo">
                    <a href="/"><img src="/src/assets/logo.png" alt="Logo"/></a>
                </div>
                <ul className="navbarLinks">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#acercaDe">Acerca de</a></li>
                    <li><a href="#equipo">Equipo</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu