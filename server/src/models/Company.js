import { Schema, model } from "mongoose"


const companySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    logo: { type: String, required: true },
  },{
    timestamps: true,
    versionKey: false
  });

  export default model('Company', companySchema);