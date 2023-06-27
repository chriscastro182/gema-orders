import { Schema, model } from "mongoose"

const etapaSchema = new Schema({
  Fecha: { type: Date, required: true },
  Etapa: { type: String, required: true }
});

const orderSchema = new Schema({
  descripcion: { type: String, required: true },
  tecnico: {
    ref: "Technician",
    type: Schema.Types.ObjectId, 
    required: true
  },
  cliente: {
    ref: "Client",
    type: Schema.Types.ObjectId, 
    required: true
  },
  Etapa: { type: [etapaSchema], required: false }
},{
  timestamps: true,
  versionKey: false
}
);

export default model('Order', orderSchema);

