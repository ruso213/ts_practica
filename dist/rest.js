"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_enum_1 = require("./1-enum");
const commonuser = {
    username: "rusin",
    roles: _1_enum_1.ROLES.ADMIN
};
const checkIfisadmin = () => {
    if (commonuser.roles === "Admin") {
        return true;
    }
    else {
        return false;
    }
};
const rta = checkIfisadmin();
console.log(rta);
