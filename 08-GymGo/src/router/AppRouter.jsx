
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { Index } from '../home/pages/Index';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={
                    //<PublicRoute>
                    <LoginPage />
                    //</PublicRoute>
                }>
                </Route>

                <Route path='/index' element={
                    //<PrivateRoute>
                    <Index />
                    //</PrivateRoute>
                }>
                </Route>

                <Route path='/*' element={
                    //<PrivateRoute>
                    <Index />
                    //</PrivateRoute>
                }>
                </Route>
            </Routes>
        </>
    );
}
