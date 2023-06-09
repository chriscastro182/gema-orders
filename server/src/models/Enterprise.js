import { Schema, model } from "mongoose"


const enterpriseSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    logo: { type: String },
  },{
    timestamps: true,
    versionKey: false
  });

  export default model('Enterprise', enterpriseSchema);