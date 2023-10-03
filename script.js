class Ninja {
    constructor (nombreAtr, saludAtr, ) {
        this.nombre = nombreAtr;
        this.salud = saludAtr;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log("Hola " + this.nombre);
    }
    showStats(){
    console.log("Nombre:" + this.nombre);
    console.log("Salud:" + this.salud);
    console.log("Velocidad:" + this.velocidad);
    console.log("Fuerza:" + this.fuerza);
    }
    drinkSake(){
        this.salud = this.salud + 10;
    }
}
var ninja1 = new Ninja(" Ninja Alex", 100)
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor (nombreAtr){
        super(nombreAtr,200)
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
   speakWisdom(mensaje){
    console.log(mensaje);
   }
   showStats(){
    super.showStats();
    console.log("sabiduria" = 10);
   }
    drinkSake(){
        super.drinkSake(); 
        console.log(`${this.nombre} bebió sake y su salud aumentó a ${this.salud}`);
    }
}

var Sensei1 = new Sensei("Master Splinter");
Sensei1.sayName();
Sensei1.showStats();
Sensei1.drinkSake();
Sensei1.showStats();
Sensei1.speakWisdom("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
