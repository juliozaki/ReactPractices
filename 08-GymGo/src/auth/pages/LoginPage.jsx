import { AuthLayout } from '../layout/AuthLayout';
import { HeadLogin } from '../components/HeadLogin';
import { FooterLogin } from '../components/FooterLogin';


export const LoginPage = () => {
    return (
        <>
            <AuthLayout>

                <HeadLogin />

                <div className="d-flex justify-content-center align-items-center">
                    <form
                        className="form-outline form-white"
                        style={{ padding: "15px 15px 15px 15px" }}
                    >
                        <label
                            style={{ fontSize: "19px", textAlign: "left" }}
                            className="row form-label"
                        >
                            Email:
                            <input
                                type="email"
                                id="typeEmail"
                                className="form-control form-control-lg"
                                placeholder="ingresa tú correo"
                            />
                        </label>
                        <label
                            style={{ fontSize: "19px", textAlign: "left" }}
                            className="row form-label"
                        >
                            Contraseña:
                            <input
                                type="password"
                                id="typePass"
                                className="form-control form-control-lg"
                                placeholder="ingresa tú contraseña"
                            />
                        </label>

                        <button
                            className="btn btn-outline-light btn-lg px-5 mb-4"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>

                <FooterLogin />

            </AuthLayout>
        </>
    )
}
