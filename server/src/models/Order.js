import { Schema, model } from "mongoose"

const etapaSchema = new Schema({
  Fecha: { type: Date, required: true },
  Etapa: { type: String, required: true }
});

const mySchema = new Schema({
  descripcion: { type: String, required: true },
  tecnico: { type: String, required: true },
  cliente: { type: String, required: true },
  Etapa: { type: [etapaSchema], required: false }
});

const MyModel = mongoose.model('MyModel', mySchema);

module.exports = MyModel;
