import { Product , } from "./product.model";
import { order } from "../order/order.model";
import {  ROLES, user , userfin } from "../user/user.model";
import {  CreateProduct, UpdatePRODUCTO} from "../product/product.dst";
import {Faker, faker} from '@faker-js/faker';



export class ProductServiceMemory {
    private products:Product[] = []
    
    get _PRODUCTS(){
        return this.products
    }
    
    

    add(DATA:CreateProduct) {
        const IDS =  Math.floor(Math.random() * 9).toString()
        const CREATEAT = faker.date.recent()
        const checker = this.products.find((item) => item.id === IDS )
        
        if(checker){
            
            console.log("es el mismo id");
            this.add(DATA) 

            return

        }else{
            const newPoduct : Product = {
                ...DATA,
                id: IDS,
                createat: CREATEAT ,
            }
            
            this.products.push(newPoduct) 
        }
        
    }


}

export class CreaterUser{
    protected UsersDates :user[] = []

    get _USERNAMES(){
        return this.UsersDates
    }

    adduser(DATA:userfin){
        
        const IDS = "2"
        const CREATEAT = faker.date.recent()
        const checker = this.UsersDates.find((item) => item.id === IDS )
        
        if(checker){
                
            console.log("es el mismo id");
            this.adduser(DATA) 

            return

        }else{
            const NewUser : user = {
                ...DATA,
                id: IDS,
                createat: CREATEAT ,
            }
            
            this.UsersDates.push(NewUser) 
        }

    }

    buy(title:string , idUSER:string){
        const searchProduct = AMZN._PRODUCTS.find(item => item.title === title)
        const searchUser = this.UsersDates.find(item => item.id === idUSER )

        if(searchProduct){
            
            if(searchUser){
                if(!searchUser.UserPurchases){
                    searchUser.UserPurchases = []
                    searchUser.UserPurchases.push(searchProduct)
                    searchProduct.stock -= 1
                    console.log(searchUser);
                    
                }else if(searchUser.UserPurchases){
                    searchUser.UserPurchases.push(searchProduct)
                    console.log(searchUser);                    
                    searchProduct.stock -= 1
                }
            }
            
            
        }else{
            console.log("no existe el producto " + title );
            
        }   

        
    }

}
export const AMZN = new ProductServiceMemory()

export const user2 = new CreaterUser()

