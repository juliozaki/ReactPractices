

import { useState } from 'react';

export const AddCategory = ({ onNewCategoriy }) => {

    const [inputValue, seInputValue] = useState('');

    const onInpuntChange = (event) => {
        seInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        /*para eveitar recargar todo al momento de dar enter utilizamos  preventDefault*/
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        //setcategories(categoria => [inputValue.trim(), ...categoria]);
        onNewCategoriy(inputValue.trim());
        seInputValue('');
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
