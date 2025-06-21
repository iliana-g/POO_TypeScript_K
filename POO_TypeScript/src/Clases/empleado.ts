import { Persona } from "./Persona"; // si estás usando módulos

export class Empleado extends Persona {
    public sueldo: number;

    constructor(
    nombre_p: string,
    apellido_p: string,
    direccion_p: string,
    tel: string,
    edad_p: string,
    sueldo: number
    ) {
    super(nombre_p, apellido_p, direccion_p, tel, edad_p);
    this.sueldo = sueldo;
    }

    public cargarSueldo(nuevoSueldo: number): void {
    this.sueldo = nuevoSueldo;
    }

    public imprimirSueldo(): void {
    console.log("Sueldo: $" + this.sueldo);
    }

    public mostrarDatos(): void {
    console.log("Nombre: " + this.nombre + " " + this.apellido);
    console.log("Dirección: " + this.direccion);
    console.log("Teléfono: " + this.telefono);
    console.log("Edad: " + this.edad);
    }
}
