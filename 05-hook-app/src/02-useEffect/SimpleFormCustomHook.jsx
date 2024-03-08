import { useEffect, useState } from 'react';
//import { Message } from './Message';


export const SimpleFormCustomHook = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

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

            {
                //(username == 'juliozaki2') && <Message />
            }
        </>
    )
}
