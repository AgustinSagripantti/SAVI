import "./acercaDe.css"
import logo from "../assets/logo.png"
import { Model } from "./Model"
import modelo from "../assets/savimodel.stl?url"

function Parrafo() {
  return (
    <>
      <div className="textoAcercaDe">
        <h3 className="tituloAcercaDe">
          ¿Que es <span>SAVI</span>?
        </h3>
        <p>
          SAVI se enfoca en resolver el problema del desperdicio de
          fertilizantes y herbicidas en la agricultura, que no solo genera
          costos innecesarios para los agricultores, sino que también daña el
          medio ambiente. La solución propuesta es implementar un sistema de
          bajo costo basado en la tecnología NDVI (Índice de Vegetación de
          Diferencia Normalizada), que permite evaluar la salud de las plantas y
          optimizar la aplicación de productos químicos.El sistema incorpora un
          GPS que permite realizar un mapeo del campo, identificando las zonas
          con mayores y menores valores de NDVI. Esto posibilita una aplicación
          aún más precisa de agroquímicos, aplicando menos en áreas donde las
          plantas están saludables y más en zonas donde se detecta estrés o
          enfermedades. De esta manera, se maximiza la eficiencia de los
          productos y se minimiza el impacto ambiental.
        </p>
      </div>
    </>
  )
}

function Vista3D() {
  return (
    <>
      <div>
        <Model url={modelo}></Model>
      </div>
    </>
  )
}

function AcercaDe() {
  return (
    <>
      <section id="acercaDe">
        <Parrafo />
        <Vista3D />
      </section>
    </>
  )
}

export default AcercaDe
