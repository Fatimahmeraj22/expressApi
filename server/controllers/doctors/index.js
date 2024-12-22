import express from "express"
import docModel from "../../models/Doctors/Doctors.js";

const router = express.Router();

router.post("/register", async (req, res)=>{
    try {
          
        let userData = req.body;
        await docModel.create(userData)
        res.status(200).json({msg: 'DOCTOR REGISTERED SUCCESSFULLY!😊'})
        
    } catch (error) {
        console.log(error);
        res.status(200).json({msg: error})
    };
})

router.get("/getalldoctors", async (req, res)=>{
    try {
        
        let getDocs = await docModel.find({});
        console.log(getDocs);
        
        res.status(200).json(getDocs)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.get("/getonedoctor", async (req, res)=>{
    try {
 
        let getDoc = await docModel.findOne({name: "fatimah"})
        console.log(getDoc);
        
        res.status(200).json(getDoc)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.put("/editdoctor/:qualifications", async (req, res)=>{
    try {

        let docParams = req.params.qualifications;
        console.log(docParams);
        let userData = req.body
        await docModel.updateOne({email: docParams}, {$set: {qualifications: userData}}, {new: true})
        res.status(200).json("updates successfully!👍")
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deleteonedoctor", (req, res)=>{
    try {

        res.status(200).json({msg: `doctor removed😤`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})    }
})

router.delete("/deletealldoctors", (req, res)=>{
    try {

        res.status(200).json({msg: `all doctors removed😤`})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})    }
})

export default router