import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const {user, token} = useStateContext(); //Variables a usar

    if (!token) { //Si el usuario no se ha autenticado
        return <Navigate to="/login"/> //Redirige a login
    }

    const onLogout = (ev) => {
        ev.preventDefault()
    }

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
