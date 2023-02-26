import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const {user, token} = useStateContext(); //Variables a usar

    if (!token) { //Si el usuario no se ha autenticado
        return <Navigate to="/login"/> //Redirige a login
    }

    //Lleva a una de las rutas hijas
    return (
        <div>
            <Outlet/>
        </div>
    )
}