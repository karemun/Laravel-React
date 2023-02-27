import { Navigate, Outlet } from "react-router-dom";
import {useStateContext} from '../context/ContextProvider';

export default function GuestLayout() {
    const {token} = useStateContext() //Variables a usar

    if(token) { //Si el usuario ya se autentico
        return <Navigate to="/" /> //Redirige a /users
    }

    //Lleva a una de las rutas hijas
    return (
        <div>
            <Outlet/>
        </div>
    )
}
