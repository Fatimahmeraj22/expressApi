import express from "express"
import "./utils/dbConnect.js"
import config from "config"
import docRouter from "./controllers/doctors/index.js"
import patRouter from "./controllers/patients/index.js"

const app = express();

app.use(express.json())

const PORT = config.get("PORT")

app.get("/", (req, res)=>{
    try {

        res.status(200).json({msg: "HELLO WORLD"})
        
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: error})
    }
})

app.use("/api", docRouter)
app.use("/api", patRouter)

app.listen(PORT, ()=>{
    console.log(`your port is runninsg at ${PORT}`);
    
})