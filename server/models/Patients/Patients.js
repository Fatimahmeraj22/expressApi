import mongoose from "mongoose"

let patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
})

let patientModel = mongoose.model("patients", patientSchema, "patients");

export default patientModel