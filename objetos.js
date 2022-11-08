//almacenan mas info q las listas, es mas especifico, ej pc y caracteristicas o 
//usuario + sus datos... Almacenan mas de 1 propiedad

var estudiante1 = {
    nombre: "Elena",
    apellido: "De Troya",
    id: 1234,
    cursos: ["Fundamentos de la web", "Python"],
    graduado: false
};

var auto1 = { //se pone como despues de cada dato (como si estuviese escrito hacia el lado)
    marca: "Nissan",
    modelo: "versa",
    color: "blanco",
    placas: "ABC1234"
};

console.log(auto1.modelo);
console.log(estudiante1.cursos);

auto1.modelo = "Todo terreno"; //modificamos propiedad del objeto
console.log(auto1.modelo);

auto1.año = 1999; //agregamos una nueva propiedad al objeto
console.log(auto1.año);

estudiante1.apellido = "Salas"; //modificA apellido estudiante1
console.log(estudiante1.apellido);