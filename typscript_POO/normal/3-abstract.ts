import { fokemon , Electricity} from "../normal/2-herencia";

const Raichu = new Electricity("raichu" , "electrocutar en area", "rusin")

class  fokemonWithOwner extends fokemon{
    constructor(
        name : string,
        hability: string,
        private owner? : string
    ){
        super(name , hability)
    }

}

 
const instance1 = new fokemonWithOwner("idk", "rayito" ,"ruso" )

const instance2 = new fokemonWithOwner("idk", "rayito", "ruso")
