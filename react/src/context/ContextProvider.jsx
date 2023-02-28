import {createContext, useContext, useState} from 'react'

//Valores iniciales
const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState('');
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));//useState(localStorage.getItem('ACCESS_TOKEN'));

    const setNotification = (message) => {
        _setNotification(message); //Se muestra el mensaje
        setTimeout(() => {
            _setNotification(''); //Se elimina despues de 5 segundos
        }, 5000); //5 segundos
    }

    const setToken = (token) => {
        _setToken(token) //Le pasa un token de parametro
        if(token) { //Si existe
            localStorage.setItem('ACCESS_TOKEN', token) //Almacena el token que mantiene autentificado al usuario
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
