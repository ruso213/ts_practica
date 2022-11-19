import { ProductServiceMemory , CreaterUser ,AMZN ,user2} from "./product/product.service";
import { ROLES } from "./user/user.model";
import { Product } from "./product/product.model";
import { user } from "./user/user.model";
import {Faker, faker} from '@faker-js/faker';

AMZN.add({
    title: "productoIDK",
    categoryID:"a",
    image:faker.image.imageUrl(),
    color:faker.color.human(),
    stock: 12,
    description: faker.commerce.productDescription(),
    price:123,
    isNew: true,
    tags:[]
})
user2.adduser({
    username:"ruso213",
    role:ROLES.ADMIN
})
console.log(user2._USERNAMES)
user2.buy("productoIDK" , "2")
