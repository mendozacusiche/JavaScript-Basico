// expreciones de clases

class Papel{
    constructor (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

// clase anonima 
let Papel_A = class{
    constructor (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

// clase nombrada

let Papel_B = class Papel_x {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}