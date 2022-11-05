import { Product } from "../product/product.model";
import { basemodel } from "../basemodel";

export enum ROLES{
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}
export interface user extends basemodel {
    username : string;
    role : ROLES
    UserPurchases?: [
        Product /* | undefined */
    ]  
}

