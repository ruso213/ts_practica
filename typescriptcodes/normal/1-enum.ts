export enum ROLES {
    ADMIN = "Admin",
    SELLER = "Seller",
    CUSTOMER = "Customer",
    RANDI = "Randie"
}

export type user = {
    username : string;
    roles : ROLES;
}

const RusoUser: user = {
    username: "ruso",
    roles : ROLES.ADMIN
} 