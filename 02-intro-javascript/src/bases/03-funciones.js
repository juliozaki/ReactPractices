
//funciones en JS

let nombre = 'Julio';

//funcion tradicional
function saludo(nombre) {
    return `funcion tradicional: ${nombre}`;
}

console.log(saludo(nombre));

//funcion tradicional una forma mejor

const saludo2 = function (nombre) {
    return `una forma mejor: ${nombre}`;
}

console.log(saludo2(nombre));

//funcion utilizando lamda

const saludo3 = (nombre) => {
    return `funcion utilizando lamda: ${nombre}`;
}

console.log(saludo3(nombre));

//funcion utilizando lamda2

const saludo4 = (nombre) => `funcion utilizando lamda2: ${nombre}`;

console.log(saludo4(nombre));

//funcion utilizando lamda3

const saludo5 = () => `funcion utilizando lamda3`;

console.log(saludo5());

//funcion getUser
const getUser = () => ({
    uuid: 'AB123',
    user: 'juliozaki',
    correo: 'juliozaki@correo.com'
})

console.log(getUser());

//funcion getUsuarioActivo
const getUsuarioActivo = (nombretxt) => ({
    uuid: 'ABC123',
    nombre: nombretxt,
    username: 'juliozaki',
    correo: 'correo@correo.com'
})

console.log(getUsuarioActivo(nombre));