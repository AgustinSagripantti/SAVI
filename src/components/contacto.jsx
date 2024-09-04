import "./contacto.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { useForm } from "react-hook-form"
import axios from "axios"
import Alert from "@mui/material/Alert"
import CheckIcon from "@mui/icons-material/Check"
import { useState } from "react"
import Snackbar from "@mui/material/Snackbar"

function Datos() {
  return (
    <>
      <div className="datosContainer">
        <h3 className="tituloContacto">Contactanos</h3>
        <p className="parrafoContacto">
          Si nuestro sistema le interesó y desea obtener información más
          detallada, le invitamos a completar el formulario de contacto. Un
          miembro de nuestro equipo se pondrá en comunicación con usted a la
          brevedad para brindarle la asistencia que necesite.
        </p>
        <div className="info">
          <i className="fas fa-map-marker-alt"></i>
          <div className="textoInfo">
            <h3>Localidad</h3>
            <h4>Marcos Juarez</h4>
          </div>
        </div>
        <div className="info">
          <i className="fas fa-envelope"></i>
          <div className="textoInfo">
            <h3>Email</h3>
            <h4>savi@gmail.com</h4>
          </div>
        </div>
        <div className="info">
          <i className="fas fa-phone"></i>
          <div className="textoInfo">
            <h3>Llamada</h3>
            <h4>3472-556757</h4>
          </div>
        </div>
      </div>
    </>
  )
}

function Formulario() {
  const { register, handleSubmit } = useForm()
  const [open, setOpen] = useState(false)

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3001/contact", { data })
      setOpen(true)
    } catch (e) {
      console.log(`error mail ${e}`)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Nombre"
        />
        <input
          type="text"
          {...register("mail", { required: true })}
          placeholder="Email"
        />
        <textarea
          {...register("text", { required: true })}
          placeholder="Mensaje"
        ></textarea>
        <input className="submit" type="submit" />

        <Snackbar
          open={open}
          autoHideDuration={3000}
          message="Email Enviado"
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            variant="filled"
            icon={<CheckIcon fontSize="inherit" />}
            severity={"success"}
          >
            Email Enviado
          </Alert>
        </Snackbar>
      </form>
    </>
  )
}

function Contacto() {
  return (
    <>
      <section id="contacto">
        <Datos />
        <Formulario />
      </section>
    </>
  )
}

export default Contacto
