import express from "express"
import patientModel from "../../models/Patients/Patients.js";
const router = express.Router();

router.post("/register", (req, res)=>{
    try {

        res.status(200).json({msg: 'patient REGISTERED SUCCESSFULLY!😊'})
        
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: error})
    }
})

router.get("/getallpatients", (req, res)=>{
    try {

        res.status(200).json({msg: 'ALL PATIENTS ARE HERE😘'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getonepatient", (req, res)=>{
    try {

        res.status(200).json({msg: 'ONE patient IS HERE😍'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.put("/editpatient", (req, res)=>{
    try {

        res.status(200).json({msg: `patient edited successfully!💕`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deleteonepatient", (req, res)=>{
    try {

        res.status(200).json({msg: `patient removed😤`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})    }
})

router.delete("/deleteallpatients", (req, res)=>{
    try {

        res.status(200).json({msg: `all patients removed😤`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})    }
})


export default router