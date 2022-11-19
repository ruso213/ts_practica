import { Product } from "./product.model";
/* Omit y Pick type
Estos tipos de datos nos permiten crear nuevas interfaces basadas de otras,
pero omitiendo o seleccionando solo ciertos valores. Estos funcionan de la siguiente forma */


//el omit es para omitir las propiedades que no se ocupa poner
//ejemplo ⬇         ⬇           ⬇           ⬇           ⬇           ⬇
export interface CreateProduct extends Omit<Product, "id"| "createat">{ //es decir no voy a ocupar poner id ni createar

    categoryID:string   
}

export interface UpdatePRODUCTO extends Partial<CreateProduct>{
    
}

//el pick nos sirve para agarrar solo los datos que quiero
//ejemplo ⬇         ⬇           ⬇           ⬇           ⬇           ⬇
type examplePick = Pick<Product, "color" | "stock"> //es decir solo voy a poner color y stock