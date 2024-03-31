function hola(name:string){
    console.log(`binevenido ${name}`);
    
}
hola("oscar")


let myname:string = "Oscar";
let edad:number = 18;

function Saludar(myname:string):string{
    
    return `bienvenido ${myname}`;

}

const Myedad=(edad:number):number =>{
    return edad;

}
Myedad(12);

// ------------------------------------------

let numero: number = 10;
let string: string = "hello world";
let isTrue: boolean = true;

let listaofNumber: number[] = [1,2,3,4,5];
let tupla: [string,number]= ["oscar",18];

enum Colores {Rojo,Verde,Azul};
let colors: Colores = Colores.Verde;
let cualquierdato: any = "cualquier expresion"


// ----------------------------------------
// funcion que no devuelve nada: void
 function saludos():void{
        console.log(`hola`);
        

 }
// variable que pueden ser indefinaidas o nulas
 let nulo: null = null;
 let undefine: undefined = undefined;
//  -------------------------------------------------------->




