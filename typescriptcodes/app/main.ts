import { addProduct , productos , searchProduct} from "./product/product.service";
import { createUser , Users,BuyItem} from "../app/product/product.service";
import { ROLES } from "../app/user/user.model";
import { Product } from "./product/product.model";
import { user } from "./user/user.model";
addProduct({
    id : 23455,
    category:{
        id: 3245,
        name : "ropa invernal",
        createat:new Date
    },
    title :"camisa de invierono",
    createat : new Date,
    stock : 1,
    size : "XL",
    

})
addProduct({
    id : 234525,
    title :"camisa de verano",
    createat : new Date,
    stock : 13,
    size : "X",
    category:{
        id: 3245,
        name : "ropa veraniega",
        createat:new Date

    }

})

/* createUser({
    id:23455,
    username:"ruso213",
    role: ROLES.ADMIN
}) */
searchProduct("vera")

BuyItem(23455 ,1233 )
BuyItem(23455 , 1233)

