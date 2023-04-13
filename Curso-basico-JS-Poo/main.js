const natalia ={
name: "Natalia",
age: 20,
cursosAprobados: [
    "Curso Definitivo de HTML y CSS ",
    "Curso Práctico de HTML y CSS",
],

// Crear metodo, crear un nuevo curso
aprobarCurso(nuevoCursito)
{this.cursosAprobados.push (nuevoCursito);   } 


}


// CREAR PROTOTIPO - Es crear un molde  = new

function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados  
}

Student.prototype.aprobarCurso = function (nuevoCursito)
{this.cursosAprobados.push(nuevoCursito); }

const juanita = new Student (
    "Juanita Alejandra",
    15,

    [
        "Curso de Introducción a la producción de Videojuegos",
        "Curso de Creacion de Personajes",
    ],

);

// Hacer que Natalia apruebe otro curso 

natalia.cursosAprobados.push("Curso de Responsive Design");

// CREAR CLASE

class Student2 { 
    constructor (name, age, cursosAprobados)
    {this.name = name
        this.age = age;
        this.cursosAprobados = cursosAprobados;}

aprobarCurso(nuevoCursito)
{this.cursosAprobados.push(nuevoCursito);}


}




