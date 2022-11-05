//la sobrecarga de una funcion 
//hay varias formas para evitar la sobrecarga de funciones 

function parseStr(input:string):string[]; //aqui estamos diciendole que si el input es un string 
                                          //nos va a retornar una array de string

function parseStr(input:string[]):string;//aqui estamos diciendole que si el input es un array de string 
                                         //nos va a retornar un string

//y ya esto nos sirve para que typescript nos pueda ayudar con su autocompletado y sepa que cada funcion dependiendo
//de lo que entre va a salir determinado tipo de dato para ayudarnos en el eutocompletado en cambio si no hacemos esto
//typscript no sabra como autocompletarnos por que no tiene un valor de tipo definido 

function parseStr (input: string | string[] ): string | string[]{
    if(Array.isArray(input)){
        return input.join(" ")
    }else{
        return input.split("")
    }
}

const rta1 = parseStr(["hola" , "como" , "estas"])

console.log(rta1);
const rta2 = parseStr("buenos dias")

console.log(rta2);


//2da forma
//con unknow 
function parseStr2(input:string):string[]; 
function parseStr2(input:string[]):string;

function parseStr2 (input:unknown ): unknown{
    if(Array.isArray(input)){
        return input.join("")
    }else if(typeof input === "string"){
        return input.split("")
    }
}

const rta3 = parseStr2(["hola" , "como" , "estas"])

console.log(rta1);
const rta4 = parseStr2("")

console.log(rta2);

const parseStr32 =  (...param : string[])=>{
    let paramrsre = param.filter(item => item.length > 6)
    console.log(paramrsre);
    
    
}
parseStr32('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')