/*export function App() {

    return (<h1>Hola Mundo!!</h1>);
}*/

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

export const FirstApp = () => {

    return (
        <>
            <code>{getSaludo('JSON')} {JSON.stringify(NewMessage2)}</code>
            <h1>{NewMessage}</h1>
            <p>Ya voz Migue</p>
        </>
    );
}
