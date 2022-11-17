import { fokemon , Electricity} from "../typscript_POO/2-herencia";

const Raichu = new Electricity("raichu" , "electrocutar en area", "rusin")

abstract class  fokemonWithOwner extends fokemon{
    constructor(
        name : string,
        hability: string,
        private owner : string
    ){
        super(name , hability)
    }

}