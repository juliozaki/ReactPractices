//import React from 'react'

import { useState } from 'react';


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    //const { username, email, password } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onBtnResetClick = () => {
        setFormState(initialForm);
    }

    return {
        formState,
        onInputChange,
        onBtnResetClick
    }
}
