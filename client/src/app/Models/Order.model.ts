import { Client } from "./Client.model";
import { Etapa } from "./Etapa.model";
import { Technician } from "./Technician.model";

export interface Order {
    _id?: String,
    descripcion: String,
    createdAt: Date,
    updatedAt: Date,
    cliente: Client,
    tecnico: Technician,
    etapas: [Etapa]
}