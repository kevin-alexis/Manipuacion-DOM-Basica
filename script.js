
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*agrega un escuchador de eventos (escucha cada vez que suceda cierto evento,
cada vez que pase, ejecuta el codigo que te diga)*/

// Sintaxis: Variable.addEventListener('evento', funcion que queremos ejecutar)

/*aqui la funcion no se le pone los parentesis, mientras que en html si
porque primero addEventListener se encarga de ponerle los ()*/


//btn.addEventListener('click', btnOnClick);

//el input guarda todo como string, entonces se hace una concatenación, asi que para sumar
//hay que pasarlo a numeros

/*function btnOnClick(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}*/


// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     console.log({event});
//     event.preventDefault(); //para que no ejecute lo que debe ejecutar nuestro evento, en este caso para que no se recargue la pagina
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
