import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
//import { Message } from './Message';


export const SimpleFormCustomHook = () => {


    const { formState, onInputChange, onBtnResetClick } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    return (
        <>
            <h1>Simple Form con Custom Hook</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                className='btn btn-primary'
                onClick={onBtnResetClick}>
                Borrar
            </button>

            {
                //(username == 'juliozaki2') && <Message />
            }
        </>
    )
}
