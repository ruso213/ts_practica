import { Product } from "./product.model";
import { order } from "../order/order.model";
import { ROLES, user } from "../user/user.model";

export const productos :Product[] = []; 
export const Users : user[] = [
    {
        username : "ruso",
        id : 1233,
        role : ROLES.ADMIN,
        createat: new Date/* UserPurchases: [undefined] */
    }
];
const verificadorId = productos.find(item => item.id === item.id)

export const addProduct = ((item : Product) => {
    if(verificadorId){
        console.log("kpd");

    }else if (!verificadorId){
        
        productos.push(item)

    }
})

export const searchProduct =(item2 : string  )=>{
    let productoFiltrado = productos.filter(item => item.title.includes(item2))
    /* console.log(productoFiltrado) */;
    
    return productoFiltrado
}


export const createUser = (item2:user) =>{
    const Id = item2.id
    if(verificadorId){
        console.log(`ya existe ${Id} username`);

    }else if (!verificadorId){
        Users.push(item2)
        console.log(Users);
        
    }
}   

export function BuyItem (ID:number , idUser : number){
    let BuyProduct = productos.find(item => item.id === ID)    
    let SearchUser = Users.find(item => item.id === idUser)
    if(!BuyProduct){
        console.log("no exite este producto");
        return
    }
    if(SearchUser?.id){
        if (BuyProduct?.stock && BuyProduct?.stock > 0){ //aqui lo que hicimos fue crear una condicional para que ts entienda que si es true se le pueda restar
            
            BuyProduct.stock -= 1
            
            SearchUser.UserPurchases?.push(BuyProduct)
            
            
            console.log(SearchUser);
            console.log(BuyProduct);

            }
        else {
            console.log(`ya no quedan ${BuyProduct?.stock}`);
            
        }
    } 
    
/*     console.log(BuyProduct);
 */
}

