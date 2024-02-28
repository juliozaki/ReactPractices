
const nombre = 'Julio';
const apellido = 'Fuentes';

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = `Columna 
${nombre} 
${apellido}
fin`;

console.log(nombreCompleto);

console.log(nombreCompleto2);

function getSaludo(texto) {
    return 'Se mando el nombre de ' + texto;
}

console.log(`${getSaludo(nombreCompleto)}`);