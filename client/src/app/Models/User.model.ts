import { Companny } from "./Companny.model";
import { Roles } from "./Roles.model";

export class User {
    _id?: String;
    name: String;
    lastname: String;
    password: String;
    email: String;
    empresa: Companny;
    roles: [Roles];
    createdAt: Date;
    updatedAt: Date;
}

