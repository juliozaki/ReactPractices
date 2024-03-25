import { useContext } from 'react';
import { UserContext } from './context/UserContext';


export const HomePage = () => {

    const { user, setUser } = useContext(UserContext);
    console.log('HomePage');

    return (
        <>
            <h1>HomePage</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
