/*ARREGLOS O LISTAS para guaradar varios datos en una sola variable [] */

var lunComida = 100;
var lunTransporte = 5;
var marComida = 45;
var marTransporte = 10;

var gastos = [100, 5, 45, 10]; //una sola lista guardamos mas de un valor

var hobbies = [
    "Hacer ejercicios", //0
    "Leer",             //1
    "Ver series",      //2
    "Comer"            //3
];

var animales = [
    "Perro",
    "Dragon",
    "Pez"
];

console.log("El primer hobbie de la lista es: " + hobbies [0]);
console.log("El segundo hobbie de la lista es: " + hobbies [1]);
console.log("El ultimo hobbie de la lista es: "+hobbies.length-1); //ultimo elemento de la lista

console.log("El gasto en tranporte del martes fue: " + gastos [3]);



//agregar o eliminar elementos
console.log("Tengo " +animales.length+ " animalitos");
animales.push("mariposa"); //agrega un alemento a la lista
console.log("Tengo " +animales.length+ " animalitos");
animales.pop(); //elemina un elemento
console.log("Tengo " +animales.length+ " animalitos");



//saber la cantidad total de gastos
//var total_gastos = gastos [0] + gastos[1] + gastos[2];
var total_gastos = 0;
for(var i=0; i<gastos.length; i++){
    total_gastos += gastos[i];
}
console.log("Total de gastos: "+total_gastos);



//imprimir todos mis hobbies
for(i=0; i<hobbies.length; i++){
    console.log(hobbies[i]);
}



//imprimir la lista de animales al reves
for(var i=animales.length-1; i>-1; i-=1){
    console.log(animales[i]);
}
