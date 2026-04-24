import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import APPSide from './app';
import cors from 'cors'
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(APPSide);
app.use(cors())

// not found page if route is not correct
app.use((req, res)=>{
    res.status(404).json({'message':'This Route is not exits'})
})

// database connected
mongoose.connect(process.env.MONGODB_URL!)
.then(()=>{
    console.log(`Data base connected successfully url : http://localhost:${PORT}`)
})
.catch((err)=>{
    console.log(`Database is not connnected ok!!`, err)
})

app.listen(PORT, ()=>{
    console.log(`My server is running on port ${PORT}`)
})