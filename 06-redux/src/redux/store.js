import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'

// {
//     user: userReducer,
//     notification: notificationReducer
// }

// Ejemplo de estado global (store)
// {
//     user: {},
//     notification: []
// }

// combino los reducers
const rootReducer = combineReducers(
    {
        user: userReducer
    }
)



export default createStore(rootReducer)