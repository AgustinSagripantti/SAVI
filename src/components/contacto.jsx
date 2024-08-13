import './contacto.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Datos(){
    return(
        <>
        <div className='datosContainer'>
            <h3 className='tituloContacto'>Contactanos</h3>
            <p className='parrafoContacto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima eligendi, quia cupiditate velit nam? Tenetur totam atque, in consequatur eaque nam officiis voluptatibus. Qui, autem aut. Aut, commodi ratione?</p>
            <div className='info'>
                <i className="fas fa-map-marker-alt"></i>
                <div className='textoInfo'>
                    <h3>Localidad</h3>
                    <h4>Marcos Juarez</h4>
                </div>
            </div>
            <div className='info'>
                <i className="fas fa-envelope"></i>
                <div className='textoInfo'>
                    <h3>Email</h3>
                    <h4>savi@gmail.com</h4>
                </div>
            </div>
            <div className='info'>
                <i className="fas fa-phone"></i>
                <div className='textoInfo'>
                    <h3>Llamada</h3>
                    <h4>3472-556757</h4>
                </div>
            </div>
        </div>
        </>
    )
}

function Formulario(){
    return(
        <>
        <form>
            <input type="text" placeholder='Su Nombre' />
            <input type="text" placeholder='Su Email' />
            <textarea placeholder='Su Mensaje'></textarea>
            <input type="submit" />
        </form>
        </>
    )
}

function Contacto(){
    return(
        <>
        <section id='contacto'>
            <Datos />
            <Formulario />
        </section>
        </>
    )
}

export default Contacto