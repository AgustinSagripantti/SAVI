import './equipo.css'
import integrante from '../assets/integrante.png'

function Integrante({ imagen, nombre }){
    return(
        <>
        <div className='card'>
            <img src={imagen}/>
            <h3>{nombre}</h3>
        </div>
        </>
    )
}

function Equipo(){
    const integrantes = [
        { imagen: integrante, nombre: 'Agustin' },
        { imagen: integrante, nombre: 'Julian' },
        { imagen: integrante, nombre: 'Bruno' },
        { imagen: integrante, nombre: 'Pablo' },
        { imagen: integrante, nombre: 'Simon' },
        { imagen: integrante, nombre: 'Dani' },
      ];

    return(
        <>
        <section id='equipo'>
            <h2 className='tituloEquipo'>EQUIPO</h2>
            <p className='parrafoEquipo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quas dolorem rerum commodi quisquam sapiente earum totam, corrupti, voluptatem quidem reiciendis rem quaerat numquam adipisci recusandae magnam repellendus distinctio quae?</p>
            <div className='cardsContainer'>
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