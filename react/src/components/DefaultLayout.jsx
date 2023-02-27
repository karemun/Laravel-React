import {Link, Navigate, Outlet} from "react-router-dom";
import axiosClient from "../axios-client";
import {useStateContext} from "../context/ContextProvider";
import {useEffect} from 'react'

export default function DefaultLayout() {
    const {user, token, setUser, setToken} = useStateContext(); //Variables a usar

    if (!token) { //Si el usuario no se ha autenticado
        return <Navigate to="/login"/> //Redirige a login
    }

    //Al salir de la cuenta
    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({}),
                setToken(null)
            })
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({data}) => {
                setUser(data)
            })
    }, [])
    

    //Lleva a una de las rutas hijas
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
