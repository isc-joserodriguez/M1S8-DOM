let parrafo = document.createElement('p');
let texto = document.createTextNode(`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta ipsum culpa adipisci eligendi ad
            neque laborum, sapiente in, unde, nesciunt quaerat delectus vel blanditiis laudantium nostrum debitis!
            Eligendi, placeat!
`);
parrafo.appendChild(texto)
document.getElementById('divisor').appendChild(parrafo);


divisor.innerHTML = `
<h1>Hola</h1>
`

divisor.innerHTML = divisor.innerHTML + `
<a href="#">Hola</a>
`

const boton = document.getElementById("boton");

boton.addEventListener('click',  function (evento) {
    console.log('hola, di click');
});

function presionar() {
    console.log('hola, di click, HTML');
}