import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        /*<>
            <Link to='/'>Home</Link>
            <hr />
            <Link to='about'>About</Link>
            <hr />
            <Link to='Login'>Login</Link>
        </>*/
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Home</Link>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}
