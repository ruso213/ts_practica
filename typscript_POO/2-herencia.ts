interface fokemongo {         //las interfaces tambien se pueden añadir a las clases en los constructores
    name : string,            //de esta forma podemos tener varias clases padres con los mismo atripbutos
    habilidad: string         //necesarios en caso de ocuparlos
}

export abstract class fokemon implements fokemongo{
    constructor(
        public name: string,  //el cual nos funciona para que se pueda heredar a clases hijas
        public habilidad: string  //el cual nos funciona para que se pueda heredar a clases hijas
                                     //y no se pueda editar desde fuera con un "this.name = "algo""
    ){}

    SayName(){
        console.log(`Hola soy ${this.name}`);
        
    }
    Skills(){
        console.log(`impact ${this.habilidad}`);
        
    }
    get _Name(){
        return this.name
    }
    get _Hability(){
        return this.habilidad
    }
}

export class Electricity extends fokemon{
    constructor(                //TEXTO 1
        name : string      ,    //este constructor es una funcion que resive los parametros "name" y "habilidades"
        habilidads : string  ,  //para luego pasarselos a "super(name ,  habilidads );" el cual va a acceder a la
        private owner : string, //clase padre que es "fokemon" para luego poder acceder a sus funciones de "fokemon"
    ){
        super(name ,  habilidads );
    }
    skillAttack(attacks : number){

        if(attacks < 4){
            for (let index = 0; index < attacks; index++) {
                    console.log(`${this._Name} ataco ${attacks} veces con ${this._Hability}`);
                    //TEXTO 2
                    //estos this hacen referencia a la clase padre "fokemon" y no a la "electricity"
                    //ya que en realidad electrycity no tiene las propiedades "name" y "habilidades"
                    //por lo ya explicado en el "TEXTO 1"
                    //por eso utilizamos "_Name" y "_Hability" por que estos son metodos GET los cuales

                
            }
        }
    }
}
const crickochu = new Electricity("crickochu" , "focotrueno" , "ruso")   

crickochu.SayName()
crickochu.Skills()
crickochu.skillAttack(3)
