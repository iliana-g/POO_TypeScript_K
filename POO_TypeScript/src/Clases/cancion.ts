//----- EJERCICIO 02 -----

export class Cancion{
    //Atributos:
    public titulo:string;
    public genero:string;
    private autor:string;

    //Métodos
    constructor (titulo_cancion:string, genero_cancion:string){
        this.titulo = titulo_cancion;
        this.genero = genero_cancion;
    }

    mostrarDatos(){
        console.log("   DATOS DE CANCIÓN");
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }

}
