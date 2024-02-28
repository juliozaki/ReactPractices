/*export function App() {

    return (<h1>Hola Mundo!!</h1>);
}*/
import { useState } from 'react';
import PropTypes from 'prop-types';

export const HelloWorldApp = ({ title, numero }) => {
    return (
        <>
            <div>Hello World App</div>
            <h1>Soy una PROP con cadena y número:  {title}, {numero}</h1>
        </>
    );
}

const NewMessage = 'First App!!!';
const NewMessage2 = {
    mensaje: 'Hola',
    nombre: 'Julio',
    apellido: 'Fuentes'
};

const getSaludo = (tipo) => {
    return `Esta es una cadena ${tipo}: `;
}

export const FirstApp = ({ valor }) => {

    ///usar UseState para refrescar los valores en tiempo real
    ///este es un ejemplo con un evento de botón para incrementar
    ///un contador
    const [counter, setCounter] = useState(valor);

    const eventAdd = (event) => {
        //console.log(event);
        let boton = event.target.getAttribute('id');
        //console.log(boton);
        if (boton == 'btn1') {
            setCounter((i) => i + 1);
        }
        if (boton == 'btn2') {
            setCounter((i) => i - 1);
        }
        if (boton == 'btn3') {
            setCounter((i) => i = valor);
        }
    }

    return (
        <>
            <code>{getSaludo('JSON')} {JSON.stringify(NewMessage2)}</code>
            <h1>{NewMessage}</h1>
            <p>Counter: {counter} </p>

            <button id='btn1' onClick={eventAdd}>
                +1
            </button>
            <button id='btn2' onClick={eventAdd}>
                -1
            </button>
            <button id='btn3' onClick={eventAdd}>
                Reset
            </button>
        </>
    );
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    numero: PropTypes.number
};

HelloWorldApp.defaultProps = {
    title: 'No hay título'
};