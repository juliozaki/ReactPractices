import { Navigate } from 'react-router-dom';



export const PrivateRoute = () => {
    const logged = true;

    return (logged)
        ? children
        : <Navigate to='/login' />
}
