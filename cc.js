//condicionales y ciclos
//CONDICIONALES- siempre q se cumpla la condicion, vamos ejecutar el codigo

var bool = true;
if(bool) { //buscamos q la condicion q tenemos en parentesis, sea verdadera
    console.log("variable verdadera");
} else {
    console.log("variable falsa");
}



var n = 3;

if(n > 15) { //otras comparaciones posibles a === b; a !== b; a < b; a <= b; a > b; a >= b
    console.log("Número mayor a 15");
} else {
    console.log("Número menor o igual a 15"); //imprime esto, porq n es meyor a 15 / la condicion no se cumple, es falsa
}

//n = 3
if(n > 15) { //no se cumple - ir a else
    console.log("Numero mayor a 15");

    // if(n > 30) {
    //     console.log("Numero mayor a 30");
    // }    

} else if(n < 5){
    console.log("Numero menor a 5"); //imprimiria esto, pq n(3) es menor a 5
} else {
    console.log("Numero entre 5 y 15"); //si n fuera = 10 imprimiria esto
}



var temperatura = 20;
var estaLLoviendo = false; //no esta lloviendo
if(temperatura >= 18){
    if(!estaLLoviendo) { //la condicion se cumple cuando no esta lloviendo
        console.log("!Este es un gran dia para dar un paseo!");
    }
}
if(temperatura >= 18 && !estaLLoviendo){ //queremos q ambas condiciones se cumplan (&&)- si ambas se cumplen imprime esto
    console.log("!Este es un buen dia para dar un paseo!");
}
if(temperatura >= 18 || !estaLLoviendo){ //queremos q al menos 1 condicion se cumpla (||)
    console.log("Podemos dar un paseo pero con paraguas");
}




//CICLOS - repeticion constante de codigo SIEMPRE y cuando se cumpla una condicion
//se puede usar FOR o WHILE practica% se pueden usar ambas para todo (for se usa mas)

for(var i=0; i<3; i++){ //i=0; 0 < 3? si. imprimir 0. sumar 1 a la i. i= 1
    console.log(i); //imprime 0,1,2
}

for(var x=0; x<5; x++){
    console.log("Hola "+ x); //imprime "hola + x" por 5 veces
}

var y = 0;
while(y < 3){ //se puede tenr mas de una condicion y pueden ser modificadas 
    console.log(y); //imprime 0,1,2
    y++;
}
/*
y = 0;
0 < 3? si
imprime 0
y = 1

y = 1;
1 < 3? si
imprime 1
y = 2

y = 2;
2 < 3? si
imprime 2
y = 3

y = 3;
3 < 3? NO
*/




var inicio = 0;
var final = 10;
while(inicio < final){ //while se va modificando, primero compara 0<10; luego 1<9; 2<8;
    console.log("Inicio:" +inicio+ "; Final:" +final);
    inicio++; //mas 1
    final--; //menos 1
}



var texto = "a";
while(texto !== "aaaa"){
    console.log(texto); //imprime a - aa - aaa
    texto += "a";
}


