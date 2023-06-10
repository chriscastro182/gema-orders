import { Schema, model } from "mongoose"

const applianceSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    guarantee: {
        type: String,
        required: true
    },
    voltage: {
        type: String,
        required: true
    },
    roomTemperature: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
}
);


export default model('Appliance', applianceSchema);