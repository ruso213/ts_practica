"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "Admin";
    ROLES["SELLER"] = "Seller";
    ROLES["CUSTOMER"] = "Customer";
    ROLES["RANDI"] = "Randie";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
const RusoUser = {
    username: "ruso",
    roles: ROLES.ADMIN
};
