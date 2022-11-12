import { addProduct , productos , searchProduct ,updateProduct } from "./product/product.service";
import { createUser , Users,BuyItem} from "../app/product/product.service";
import { ROLES } from "./user/user.model";
import { Product } from "./product/product.model";
import { user } from "./user/user.model";
import {Faker, faker} from '@faker-js/faker';

let UID = Math.floor(Math.random() * 9);
/* for (let index = 0; index < 3; index++) {
    
   
} */

addProduct({
    id: UID + 1, 
    description:faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price:parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags:faker.helpers.arrayElements(),
    size:faker.helpers.arrayElement(["X", "M", "L", "XL" , "S"]),
    title:faker.commerce.productName(),
    createat:faker.date.recent(),
    stock: faker.datatype.number({min: 10, max:30}),
    category:{
        id:  faker.datatype.uuid(),
        name:faker.commerce.department(),
        createat:faker.date.recent()
    }
    


})



updateProduct(UID +1 , {
    
    price : 10,
    size : "L"
})


/* createUser({
    id:23455,
    username:"ruso213",
    role: ROLES.ADMIN
}) */
/* searchProduct("vera")
 */
                    /* console.log("____________________________________________________________________________________");

                    BuyItem(UID ,1233 )

                    BuyItem(213 , 1233 )
                    console.log("____________________________________________________________________________________");
 */
/* const chechar =(item:string)=>{
    let a =  item.length

    console.log(a);
} 

chechar("referencia")
 */

