parrafo.setAttribute('class', 'colorRojo')
parrafo.setAttribute('class', 'colorAmarillo')
parrafo.setAttribute('class', 'negritas')
parrafo.setAttribute('class', 'mayusculas')
parrafo.setAttribute('class', '')
parrafo.setAttribute('class', 'completada');
parrafo.setAttribute('class', 'completada colorRojo');


if (!localStorage.getItem('nombre')) {
    console.log('No hay ningun nombre guardado')
} else {
    console.log('Bienvenido, ' + localStorage.getItem('nombre'));
}


let array = [1, 2, 3, 4, 5];
let object = {
    nombre: 'Mario',
    edad: 35
}


localStorage.setItem('numeros', JSON.stringify(array));
localStorage.setItem('persona', JSON.stringify(object));

console.log(localStorage.getItem('numeros'));
console.log(localStorage.getItem('persona'));

console.log(JSON.parse(localStorage.getItem('numeros')));
console.log(JSON.parse(localStorage.getItem('persona')));