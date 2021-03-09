import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'


const InvoiceForm = () => {

    // crear una propiedad del estado para cada input
    // crear una propiedad del estado para si tengo o no que redirigir.
    const [redirect, setRedirect] = useState(false)

    
    // guardar()
    // 1. hacer el post
    // Si todo ha ido bien -> poner el estado de redirect a true

    const cancelar = () => {
        setRedirect(true)
    }

    return (
        <div>
            {redirect && <Redirect to="/"/>}
            
            Crearemos un formulario con 3 inputs:
            - cliente (texto)
            - importe 
            - fecha

            Botón guardar: que hará en axios.post correspondiente (haría llamada a guardar())
            Botón cancelar: que hará el redirect
            formulario
<i className="reply icon" onClick={cancelar}></i>
            <button className="ui negative button" onClick={cancelar}>Cancelar</button>
        </div>
    )
}

export default InvoiceForm
