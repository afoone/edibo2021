export const ACTION_SET_USUARIO = "set_usuario"

// Funciones que nos devuelven las acciones
export const setUsuario = (usuario) => {
    return {
        type: ACTION_SET_USUARIO,
        payload: usuario
    }
}