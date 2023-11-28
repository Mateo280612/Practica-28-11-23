function Sumar(a,b){
    return a+b
}  
let inicio1 = performance.now();
let respuesta = Sumar(5,8)
let fin1 = performance.now()
console.log(respuesta)
console.log('Tiempo empleado en milisegundos: '+ (fin1 - inicio1))

let inicio2 = performance.now();
let respuesta2 = Sumar(1000000,1000000)
let fin2 = performance.now()
console.log(respuesta2)
console.log('Tiempo empleado en milisegundos: '+ (fin2 - inicio2))

function SumarArreglo(array){
    let suma=0
    for (let i=0;i<array.length;i++){
        suma+=array[i]
    }
    return suma
}
let inicio3 = performance.now();
let respuesta3 = SumarArreglo([5,8]);
let fin3 = performance.now();
console.log(respuesta3)
console.log('Tiempo empleado en milisegundos: '+ (fin3 - inicio3))

//Puntos de interrupcion

let array2 = ['a','b','c']
function recorrer(array_list){
    console.log('Si ingresé a la función')
    for (let i=0;i<array_list.length;i++){
        console.log('Si ingresé al for')
        console.log(array_list[i])
    }
}
recorrer(array2)


function Par_Impar (num){

    if (num == ' '){
        throw new Error ('El error es que envia un espacio vacio')
    }else{
    if (typeof num !== 'number'){
        throw new Error ('El argumento no es un numero')
    }else{
    if (num % 2 == 0){
        return 'Es par'
    }else{
        return 'Es impar'
    }
}
}
}

try{
    let respuesta4 = Par_Impar(5)
    console.log(respuesta4)
    let respuesta5 = Par_Impar(10)
    console.log(respuesta5)
    let respuesta6 = Par_Impar('abc')
    console.log(respuesta6)
    let respuesta7 = Par_Impar(' ')
    console.log(respuesta7)

}catch(error){
    console.log(error);
    
}

console.log(5+3)

