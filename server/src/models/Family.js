import { Schema, model } from "mongoose"

const familySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
}
);


export default model('Family', familySchema);