import { Navigate } from 'react-router-dom';


export const PublicRoute = () => {
    const { logged } = true;

    return (!logged)
        ? children
        : <Navigate to='/index' />
}
