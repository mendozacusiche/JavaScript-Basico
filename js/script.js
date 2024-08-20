class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return ` ${this.nombre} - ${this.peso} kg. - ${this.edad} años `;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, edad, peso);
        this.raza = raza;
    }

    informacion() {
        return  `${this.nombre} - ${this.peso} kg. - ${this.edad} años \
                - ${this.raza} `;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, edad, peso);
        this.sexo = sexo;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años \
        - ${this.sexo} `;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, edad, peso);
        this.color = color;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años \
        - ${this.color} `;
    }
}

let perro1 = new Perro('Manolo',12,3,'caniche');
let gato1 = new Gato('Mini',5,2,'hembra');
let Conejo1 = new Conejo('Deysi',3,1,'blanco');
let animales = [perro1, gato1, Conejo1];

function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales'); 
    
    for(let animal of animales){
        let item  = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}