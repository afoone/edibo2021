# REDUX

1. Instalar redux y react-redux

`npm i -s redux react-redux`

2. Crear un reducer "vacío"

```javascript
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "set_usuario":
            // veremos como crear o sustituir el elemento
            return state
    
        default:
            return state
    }
}

export default userReducer;
```

3. Crear un store

```javascript
import {createStore} from 'redux'
import userReducer from './userReducer'

export default createStore(userReducer)
```

4. Usar el store en la aplicación
   
Importamos provider y el store:
```javascript
import {Provider} from 'react-redux'
import store from './redux/store'
```

El provider envuelve todos elementos de la aplicaicón desde donde se quiere usar
```javascript
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
```

5. Buena práctica: usar ya el combineReducers

```javascript
const rootReducer = combineReducers(
    {
        user: userReducer
    }
)
```

6. Para lanzar una acción

```javascript
import { useDispatch } from "react-redux";
``` 

```javascript
  // Lanzar una acción para cambiar el usuario
  const dispatch = useDispatch();
  dispatch({
    type: "set_usuario",
    payload: {
      username: "pepito",
      name: "Pepito Pérez"
    }
  })
  ```


Redux no va a "reaccionar" si el estado resultante no es un nuevo objeto, por lo que el reducer ha de crear un nuevo objeto:

```javascript
        case "set_usuario":
            // veremos como crear o sustituir el elemento
            return {...action.payload}
```


Como leer el estado:

```javascript
import { useSelector } from "react-redux";
```

```javascript

    


