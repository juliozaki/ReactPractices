import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'juliozaki',
        email: 'juliozaki@hotmail.com'
    });

    const { username, email } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        //console.log('useEffect');
    },
        []
    );

    useEffect(() => {
        //console.log('formState change');
    },
        [formState]
    );

    useEffect(() => {
        //console.log('email change');
    },
        [email]
    );

    return (
        <>
            <h1>Simple Form</h1>
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

            {
                (username == 'juliozaki2') && <Message />
            }
        </>
    )
}
