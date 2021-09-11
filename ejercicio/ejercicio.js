/**
 * ? 1. Referencia al Boton y a nuestro input
 * ? 2. Agregar el evento
 * ? 3. Leer el valor de nuestro input
 * ? 4. Guardar el valor en el localStorage
 * ? 5. Agregarlo en el documento html
 * ? 6. Obtener los datos de nuestro localStorage
 */

const InputElementRef = document.getElementById('input_message')
const BotonElementRef = document.getElementById('btn_agregar')
const ListaRef = document.getElementById('Lista')

BotonElementRef.addEventListener('click', function() {
    localStorage.setItem('Mensaje', InputElementRef.value)

    // TODO Agregar un nuevo elemento en nuestro document html
    const listItem = document.createElement('li')
    listItem.innerHTML = InputElementRef.value

    ListaRef.appendChild(listItem)
})

window.onload = () => {
    const mensaje = localStorage.getItem('Mensaje')

    const listItem = document.createElement('li')
    listItem.innerHTML = mensaje

    ListaRef.appendChild(listItem)
}