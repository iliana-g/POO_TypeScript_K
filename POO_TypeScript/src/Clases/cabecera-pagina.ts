// EJERCICIO 01

export class CabeceraPagina {
    //Propiedades
    public titulo:string;
    public color:string;
    public fuente:string;
    public alineacion_titulo:string;

    //Métodos
    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion_titulo = "";
    }

    //Método para guardar titulo, color y fuente
    obtenerDatos(titulo_pag:string, color_pag:string, fuente_titulo:string):void {
        this.titulo = titulo_pag;
        this.color = color_pag;
        this.fuente = fuente_titulo;
    }

    alinearTitulo(alineacion:string):void {
    this.alineacion_titulo = alineacion;
    }

    mostrarCabecera():void {
        console.log("Título: " + this.titulo);
        console.log("Color: " + this.color);
        console.log("Fuente: " + this.fuente);
        console.log("Alineación: " + this.alineacion_titulo);
    }
}


