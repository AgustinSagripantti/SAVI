import './acercaDe.css'
import logo from '../assets/logo.png'

function Parrafo(){
    return(
        <>
        <div className='textoAcercaDe'>
            <h3 className='tituloAcercaDe'>¿Que es SAVI?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet non, reiciendis excepturi incidunt aperiam voluptatem ab quod, saepe eius repellendus cumque facere. Deserunt quasi doloremque vero sapiente nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptates voluptatibus! Doloribus, veritatis saepe aliquid, voluptatibus itaque accusantium ratione a, accusamus voluptatem deleniti nam sint corporis dicta neque eius ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic iste suscipit asperiores exercitationem, sit architecto cum explicabo debitis officia commodi distinctio eligendi dolore ab reiciendis! Ipsa nobis maxime ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tenetur quibusdam ipsam, labore unde in culpa molestias dolores iusto tempora, pariatur, quasi ex aperiam. Omnis sapiente odio est cum deserunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto aperiam consectetur eos fugit blanditiis assumenda nam debitis officia tempora dolorum et, fuga, vel expedita rerum veritatis ad a cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, vel debitis, error ut fuga aliquid harum labore laborum, eaque non sed perferendis. Blanditiis porro repellat officiis deleniti enim tempore illo.</p>
        </div>
        </>
    )
}

function Vista3D(){
    return(
        <>
        <div>
            <img src={logo} />
        </div>   
        </>
    )
}

function AcercaDe(){
    return(
        <>
        <section id='acercaDe'>
            <Parrafo />
            <Vista3D />
        </section>
        </>
    )
}

export default AcercaDe