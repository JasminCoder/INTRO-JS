//
function hello_word(){
    console.log("Hellow World");
    console.log("Como estás");
}

hello_word(); //llama a la funcion
/*hello_word(); //si la llamo mas de una vez, imprimira mas de una vez (segun la cantidad de veces q la llame)
hello_word();
hello_word();*/


/*agregar a la lista (push)
function agregarLista(){
    agregarLista.push("a");
}
var lista = ["a"];
agregarLista();
agregarLista();
agregarLista();
agregarLista();
console.log(lista);*/



function hola_mundo(nombre){ //nombre = Elena; PARAMETRO
    console.log("Hola "+nombre);
}
hola_mundo("Elena");
hola_mundo("Juana");



function hola(nombre, apellido){ //nombre = "Elena", apellido = "De Troya"
    console.log("Hola "+nombre+" "+apellido);
}
hola("Elena", "De Troya");

//RETURN regresa algo y CONSOLE.LOG solo lo imprime 