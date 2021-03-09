import React from 'react'
import {Redirect} from 'react-router-dom'


const InvoiceForm = () => {

    // crear una propiedad del estado para cada input
    // crear una propiedad del estado para si tengo o no que redirigir.

    
    // guardar()
    // 1. hacer el post
    // Si todo ha ido bien -> poner el estado de redirect a true

    return (
        <div>
            {false && <Redirect to="/"/>}
            
            Crearemos un formulario con 3 inputs:
            - cliente (texto)
            - importe 
            - fecha

            Botón guardar: que hará en axios.post correspondiente (haría llamada a guardar())
            Botón cancelar: que hará el redirect
            formulario
        </div>
    )
}

export default InvoiceForm
