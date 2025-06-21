import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Cancion } from './Clases/cancion.ts'
import { Cuenta } from './Clases/cuenta.ts'
import { Calculadora } from './Clases/calculadora.ts'
import { CabeceraPagina } from './Clases/cabecera-pagina.ts'
import { Empleado } from './Clases/empleado.ts'

console.log("------------- EJERCICIO 01 -----------");
let cabecera01 = new CabeceraPagina();
cabecera01.obtenerDatos("Titulo de Página", "Azul", "Comic sans");
cabecera01.alinearTitulo("Centrado");
cabecera01.mostrarCabecera();

console.log("------------- EJERCICIO 02 -----------");
let calcu_prueba = new Calculadora(); //objeto tiene acceso a todo, instancia
console.log("Sumando: ",calcu_prueba.sumar(3,2));        // = 6
console.log("Restando: ", calcu_prueba.dividir(18,3));     // = 6
console.log("Multiplicando: ", calcu_prueba.multiplicar(2,12)); // = 24
console.log("Elevando a una Potencia: ", calcu_prueba.elevarPotencia(5,6));// 
console.log("Factorial de 5!: ", calcu_prueba.factorialNum(5));   

console.log();
console.log("------------- EJERCICIO 03 -----------");
let cancion01 = new Cancion("Peligrosamente Dark", "Pop acústico"); //Se ejecuta el constructor
cancion01.setAutor = "Silvana Estrada";
cancion01.mostrarDatos();
//encapsulamiento se usa get y set

console.log();
console.log("------------- EJERCICIO 04 -----------");
let cuenta1 = new Cuenta("Kenia Paiz", 650, "Ahorro", 1);
cuenta1.depositar(15);
cuenta1.retirar(3);
cuenta1.retirar(650);
cuenta1.mostrarDatos();

console.log();
console.log("------------- EJERCICIO 05 -----------");
let empleado1 = new Empleado("María", "Del Cid", "Calle el Matazano", "7550-1601", "23", 500);
empleado1.mostrarDatos();
empleado1.mayorEdad();
empleado1.imprimirSueldo();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
