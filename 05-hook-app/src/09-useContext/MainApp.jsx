import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />
            <Navbar />
            <hr />

            <Routes>
                <Route path='/' element={<HomePage></HomePage>} />
                <Route path='about' element={<AboutPage></AboutPage>} />
                <Route path='login' element={<LoginPage></LoginPage>} />

                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}
