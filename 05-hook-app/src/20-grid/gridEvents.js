import { useReducer } from 'react';
import { gridUseReducer } from './gridUseReducer';
import useHead from './useHead';


const init = () => {

    return (
        {
            columns: useHead(),
            data: []
        }
    );

}

export const gridEvents = () => {

    const [tableGrid, dispatch] = useReducer(gridUseReducer, [], init);

    const onAllData = () => {
        const action = {
            type: '[All Data]',
            payload: '-'
        }

        console.log('Estoy en el gridEvents - onAllData');

        dispatch(action);
    }

    console.log('Salí de gridEvents');

    return {
        tableGrid,
        onAllData
    }

}

