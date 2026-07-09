

let numeroFizzBuzz = parseInt(prompt("Ejercicio 4:\nIngrese un número:"));

for (let i = 1; i <= numeroFizzBuzz; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}




let nFibonacci = parseInt(prompt("Ejercicio 5:\nIngrese la cantidad de números Fibonacci:"));

let a = 0;
let b = 1;

console.log("Serie Fibonacci:");

for (let i = 0; i < nFibonacci; i++) {

    console.log(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;
}




function esPrimo(numero) {

    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let numeroPrimo = parseInt(prompt("Ejercicio 6:\nIngrese un número:"));

if (esPrimo(numeroPrimo)) {
    console.log(numeroPrimo + " es primo");
}
else {
    console.log(numeroPrimo + " no es primo");
}




let tablaNumero = parseInt(prompt("Ejercicio 7:\nIngrese un número para ver su tabla de multiplicar:"));

console.log("Tabla de multiplicar del " + tablaNumero);

for (let i = 1; i <= 10; i++) {

    console.log(tablaNumero + " x " + i + " = " + (tablaNumero * i));
}



function contarVocales(texto) {

    let contador = 0;
    let vocales = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {

        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

let textoUsuario = prompt("Ejercicio 8:\nIngrese un texto:");

let cantidadVocales = contarVocales(textoUsuario);

console.log("Cantidad de vocales: " + cantidadVocales);




let numeros = [15, 8, 23, 42, 4, 16];

function encontrarMayor(arreglo) {

    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {

        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    return mayor;
}

console.log("El número mayor es: " + encontrarMayor(numeros));



function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {

    if (b === 0) {
        return "No se puede dividir entre cero";
    }

    return a / b;
}

let num1 = parseFloat(prompt("Ejercicio 10:\nIngrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let operacion = prompt(
    "Ingrese la operación:\n" +
    "sumar\n" +
    "restar\n" +
    "multiplicar\n" +
    "dividir"
);

let resultado;

if (operacion === "sumar") {
    resultado = sumar(num1, num2);
}
else if (operacion === "restar") {
    resultado = restar(num1, num2);
}
else if (operacion === "multiplicar") {
    resultado = multiplicar(num1, num2);
}
else if (operacion === "dividir") {
    resultado = dividir(num1, num2);
}
else {
    resultado = "Operación no válida";
}

console.log("Resultado: " + resultado);