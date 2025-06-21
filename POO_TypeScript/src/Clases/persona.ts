
//------ EJERCICIO 05 -------
export class Persona {
    
    //Atributos
    public nombre:string;
    public apellido:string;
    public direccion:string;
    public telefono:string;
    public edad:string;

    //Métodos
    constructor(nombre_p:string, apellido_p:string, direccion_p:string; tel:string, edad_p:string){
        this.nombre = nombre_p;
        this.apellido = apellido_p;
        this.direccion = direccion_p;
        this.telefono = tel;
        this.edad = edad_p;
    }

    public mayorEdad(): void {
    let edad_num:number = parseInt(this.edad);
        if (edad_num >= 18) {
            console.log("Sí es mayor de edad.");
        } else {
            console.log("No es mayor de edad.");
        }
    }

    // Método abstracto
    public abstract mostrarDatos(): void;
}

//this => forma en que se accede al atributo y métodos de la clase; this hace referencia a la clase
//this.algo -->> el algo hace referenciaa que un atributo de la _clase_ se llama algo.
//En typescript si o si debe haber un constructor.
//Solo se puede usar un constructor --> no puede haber sobrecarga
//parámetro es cuando pedimos a la persona/objeto que nos envíe algo

//finalidad de clase: buscar cosas en común entre objetos.