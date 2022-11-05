import { user , ROLES } from "./1-enum";

const commonuser :user = {
    username : "rusin",
    roles : ROLES.ADMIN
}
const checkIfisadmin = () =>{
    if (commonuser.roles === "Admin"){
    return true    
    }else{
        return false
    }
} 

const rta = checkIfisadmin()
console.log(rta);
