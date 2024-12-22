import mongoose from "mongoose"

let docSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    qualifications: {
        type: String,
        require: true
    },
    experience: {
        type: Number,
        require: true
    }
})

let docModel = mongoose.model("doctors", docSchema, "doctors");

export default docModel