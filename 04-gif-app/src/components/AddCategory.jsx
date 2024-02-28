

import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, seInputValue] = useState('One Punch');

    const onInpuntChange = (event) => {
        seInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        /*para eveitar recargar todo al momento de dar enter utilizamos  preventDefault*/
        event.preventDefault();
    }

    return (
        /*Al utilizar formulario FORM al momento de dar enter recarga todo */
        <form onSubmit={onSubmit}>
            <input type='text'
                placeholder='Buscar Gifs...'
                value={inputValue}
                onChange={onInpuntChange}>
            </input>
        </form>
    )
}
