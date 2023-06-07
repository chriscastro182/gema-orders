import { Schema, model } from "mongoose"

const technicianSchema = new Schema({
    numemployee: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    user: {
        ref: "User",
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
}
);


export default model('Technician', technicianSchema);