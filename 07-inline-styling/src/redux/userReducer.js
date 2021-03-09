// El reducer es una función que dado un estado y una acción nos devuelve el nuevo estado

// Estado inicial: {}
// Al hacer el setter: {
//     username: "pepito",
//     name: "Pepito perez"
// }

import {ACTION_SET_USUARIO} from './actions'

const userReducer = (state = {}, action) => {

    switch (action.type) {
        case ACTION_SET_USUARIO:
           return {...action.payload}
        default:
            return state
    }
}

export default userReducer;