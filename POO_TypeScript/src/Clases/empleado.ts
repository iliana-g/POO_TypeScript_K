import { Persona } from "./persona";

export class Empleado extends Persona {

    public sueldo:number;

    //Métodos
    constructor(nombre_p:string, apellido_p:string, direccion_p:string, tel:string, 
        edad_p:string, sueldo_empleado:number) 
        {
            //llamando a constructor de clase padre
        super(nombre_p, apellido_p, direccion_p, tel, edad_p);
            this.sueldo = sueldo_empleado;
        }

    public cargarSueldo(nuevo_sueldo:number):void {
        this.sueldo = nuevo_sueldo;
    }

    public imprimirSueldo():void {
        console.log("Sueldo: $" + this.sueldo);
    }

    public mostrarDatos():void {
        console.log("   DATOS   ");
        console.log("Nombre: " + this.nombre + " " + this.apellido);
        console.log("Dirección: " + this.direccion);
        console.log("Teléfono: " + this.telefono);
        console.log("Edad: " + this.edad);
    }
}
