import { Product , } from "./product.model";
import { order } from "../order/order.model";
import { ROLES, user } from "../user/user.model";
import {  CreateProduct, UpdatePRODUCTO} from "../product/product.dst";
export const productos :Product[] = []; 
export const Users : user[] = [
    {
        username : "ruso",
        id : 1233,
        role : ROLES.ADMIN,
        createat: new Date, 
        
    }
];

export const addProduct = (items : Product) => {
 const verificadorId = productos.find(item => item.id === items.id)
   
    if(verificadorId){
        console.log(`ya existe el producto ${items.id}`);

    }else if (!verificadorId){
        
        productos.push(items)
        console.log(productos);
        
        
    }
}

export const searchProduct =(item2 : string  )=>{
    let productoFiltrado = productos.filter(item => item.title.includes(item2))
    /* console.log(productoFiltrado) */;
    
    return productoFiltrado
}


export const createUser = (item2:user) =>{
    const verificadorId = productos.find(item => item.id === item2.id)
    
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
    if(SearchUser ){
        if (BuyProduct?.stock && BuyProduct?.stock > 0){ //aqui lo que hicimos fue crear una condicional para que ts entienda que si es true se le pueda restar
            

            if(!SearchUser.UserPurchases){//aqui lo que hacemos es esta condicional para que en caso de que userpurchases
                //sea undefined y si es undefined lo combertimos en una array por que en la interfaz ponemos k sea un array
                SearchUser.UserPurchases = []//ya que lo convertimos en array le pusheamos el producto comprado
                SearchUser.UserPurchases.push(BuyProduct)
                BuyProduct.stock -= 1
                console.log(SearchUser);
                
            }else if(SearchUser.UserPurchases){
                
                SearchUser.UserPurchases.push(BuyProduct)
                console.log(SearchUser);
                
            }
        }
        else {
            console.log(`ya no quedan ${BuyProduct?.stock}`);
            
        }
    }   else{
        console.log("no existe el id");
        
        }
}
export const updateProduct = (id: number, changes: UpdatePRODUCTO ): Product => {
    const index = productos.findIndex(item => item.id === id);
    const prevData = productos[index];
    productos[index] = {
      ...prevData,
      ...changes
    }
    return productos[index];
  }
 /* 
export const updateProduct = (idProduct: number , update: ) : Product=>{
    const Index = productos.findIndex(item => item.id === idProduct)
    console.log(Index);
    
    const ObjectIndex = productos[Index]
    console.log(ObjectIndex);
    
    productos[Index] = {
        ...ObjectIndex,
        ...update
    }
    return productos[Index]
    
    
} */