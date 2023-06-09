import { User } from "./User.model";

export interface Technician{
    _id?: String,
    numemployee: String,
    phone: String,
    user: User,
    createdAt: Date,
    updatedAt: Date,
}