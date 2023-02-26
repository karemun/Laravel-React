import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound';
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

//Se crean las rutas
const router = createBrowserRouter([
    { /* Dirige a Default, que a su ves dirige a una de las dos vistas */
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/users' /> //Redirige a /users
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <Users/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
])

export default router;
