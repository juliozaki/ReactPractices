//import { useCounte } from '../hooks/useCounter';

import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementF = useCallback(
        (param) => {
            setCounter((value) => value + param);
        },
        [],
    );


    /*const increment = () => {
        setCounter(counter + 1);
    }*/

    return (
        <>
            <h1>Use Callback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementF} />
        </>
    )
}
