import { Schema, model } from "mongoose"


const permissionSchema = new Schema({
    description: { type: String, required: true },
    slug: { type: String, required: true }
  });

const rolSchema = new Schema({
    rol: { type: String, required: true },
    permissions: { type: [permissionSchema]}
  },{
    versionKey: false
  });

  export default model('Role', rolSchema);