//----- EJERCICIO 02 -----

export class Calculadora //Primera letra de clase en mayúscula
{
    //métodos:
    public sumar(n1:number,n2:number): number
    {
        return n1 + n2;
    }

    public restar(n1:number, n2:number): number{
        return n1 - n2;
    }

    public multiplicar(a: number, b:number):number
    {
        return a*b;
    }

    public dividir(a:number, b:number):number{
        let division:number = 0;
        if(b===0)
        {
            console.log("ERROR, no se puede dividir sobre 0")
            return 0;
        }
        else
        {
        division = a/b;
        }
        return division;
    }

    public elevarPotencia(n_base:number, n_exponente:number):number{
        return Math.pow(n_base, n_exponente);
    }

    public factorialNum(numero:number):number{
        let calc_factorial:number = 0;
        if(numero === 0 || numero === 1)
        {
            return 1;
        }
        for(let i=1; i<numero; i++){
            calc_factorial = numero*i;
        }
        return calc_factorial;
    }
}
//No usar todos los atributos es una mala práctica
//instanciar clase --> crear objetos de la clase
