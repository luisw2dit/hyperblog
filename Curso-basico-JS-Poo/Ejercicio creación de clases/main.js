class Studen { constructor ( {  name,
                                email,      
                                usernaime,
                                twiter = undefined,
                                instagram = undefined,
                                facebook = undefined,
                                approvedCourses =[],
                                learninPaths =[], } )

                            { this.name;
                              this.email,
                              this.usernaime;

                              this.socialMedia = {twiter,
                                                  instragram,
                                                  facebook,};

                                this.approvedCourses = approvedCourses,
                                this.learninPaths = learninPaths,
                                    };
                                }

const juan2 = new Student ({
    name: "JuanDC",
    username: "JuanDC",
    email: "juanito@.com",
    twiter:"fjuandc",
})

class learninPaths {constructor({
                    name,
                    courses = [], }) {
                        this.name = name;
                        this.courses = courses;
                    }
    }

const escuelaweb = new learninPaths ({
    name: "escuela de Desarrollo Web",
    courses: [
        "Curso Definitvo de HTML y CSS",
        "Curso Práctico de HTML Y CSS",
    ],
});

const escuelaData = new learninPaths ({
name: "Escuela de Data Science",
courses: [
    "Curso DataBusiness",
    "Curso Dataviz",
    ],
})


const escuelaVgs = new learninPaths({
    name:"Escuela de videojuegos",
    courses: [
        "Curso de Unity",
        "Curso de Unreal",
    ],
}) 

class Course {
    constructor ({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name () {
        return this._name;
    }


    set name (nuevoNombrecito){
        if (nuevoNombrecito === "Curso Malito de Programación Basica");
        console.error ("Burro .... NO");
        } else {
            this._name = nuevoNombrecito;

        }
}

class FreeStudent extends Student {
    constructor(props){
        super(props); 
    }

    class BasicStudent extends Student {
        constructor(props){
            super(props); 
        }

        
        class ExperStudent extends Student {
            constructor(props){
                super(props); 
            }

}















