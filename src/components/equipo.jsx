import "./equipo.css"
import integrante from "../assets/integrante.png"

function Integrante({ imagen, nombre }) {
  return (
    <>
      <div className="card">
        <img src={imagen} />
        <h3>{nombre}</h3>
      </div>
    </>
  )
}

function Equipo() {
  const integrantes = [
    { imagen: integrante, nombre: "Agustin" },
    { imagen: integrante, nombre: "Julian" },
    { imagen: integrante, nombre: "Bruno" },
    { imagen: integrante, nombre: "Pablo" },
    { imagen: integrante, nombre: "Simon" },
    { imagen: integrante, nombre: "Daniel" },
  ]

  return (
    <>
      <section id="equipo">
        <h2 className="tituloEquipo">EQUIPO</h2>
        <p className="parrafoEquipo">
          Detrás de este sistema se encuentra un equipo multidisciplinario de
          jóvenes profesionales apasionados por la tecnología y la agricultura
          sostenible. Combinando conocimientos en electrónica, agronomía y
          programación
        </p>
        <div className="cardsContainer">
          {integrantes.map((integrante, index) => (
            <Integrante
              key={index}
              imagen={integrante.imagen}
              nombre={integrante.nombre}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Equipo
