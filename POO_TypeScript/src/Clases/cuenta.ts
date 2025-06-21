//------ EJERCICIO 04 -------

export class Cuenta {
    //Atributos
    private nombre:string;
    private cantidad:number;
    private tipo_cuenta:string;
    private numero_cuenta:number;

    //Métodos

    constructor(nombre_cuenta:string, cant:number, tipo:string, num_cuenta:number)
    {
        this.nombre = nombre_cuenta;
        this.cantidad = cant;
        this.tipo_cuenta = tipo;
        this.numero_cuenta = num_cuenta;
    }

    public depositar(deposito:number){
        this.cantidad = this.cantidad + deposito;
        if(deposito<5.0)
        {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else{
            console.log(`El depósito de $${deposito} se ha depositado correctamente.`);
        }
    }

    public retirar(valor:number){
        
        let cantidad_retiro:number = this.cantidad - valor;
        if(valor<5.0)
        {
            console.log("Debes retirar más de $5.00");
        }
        if (valor > this.cantidad)
        {
            console.log("ERROR: Posees fondos insuficientes");
        }
        else
        {
            console.log(`Retiro exitoso de $${cantidad_retiro}`);
        }
    }

    public mostrarDatos(){
        console.log("-------------------------------")
        console.log("      DATOS DE CUENTA     ");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipo_cuenta}`);
        console.log(`N° de cuenta: ${this.numero_cuenta}`);
        console.log("-------------------------------")
    }
}

