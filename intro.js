//declaracion de variables (guardan informacion)
var num = 1; //variable num: NUMERO negativo o positivo - entero o decimal (punto decima). No llevan comillas
var text ="variable cadena"; // TEXTO - CADENA O STRING
var bool= true; //BOOLEAN - verdadero (true) - falso (false)

console.log(text); //imprimir + (nombre variable).. imprime= variable cadena

var num1 = 1;
var num2 = 2;
var suma = num1 + num2; //hace la suma 1+2
console.log(suma); //imprime 3

var nombre = "Elena de troya";
var mensaje = "Mi nombre es:";
console.log(mensaje+nombre); //simbolo + concatena ambos textos

var combinamosTexto ="ABC";
console.log(combinamosTexto + num1); //ABC1
console.log(combinamosTexto + num1 + num2); //ABC12
console.log(num1 + num2 + combinamosTexto); //3ABC
console.log(combinamosTexto + (num1 + num2)); //ABC3

var order = 10 + 20 / 6; //divide 20/6 y suma 10= 13.333333333333334
console.log(order); 

var orden2 = (10 + 20) / 6; //resuelve el parentesis primero =5
console.log(orden2);

var nombre_completo ="Juana";
nombre_completo += "De Arco"; //nombre-completo = nombre_completo + "DE Arco"
console.log(nombre_completo);

var n = 13;
n += 4; //n = n + 4; -> * / - +.... mantiene el 13 y le suma 4
console.log(n);

