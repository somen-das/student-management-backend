import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import APPSide from './app';

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(APPSide);

// not found page if route is not correct
app.use((req, res)=>{
    res.status(404).json({'message':'This Route is not exits'})
})

// database connected
mongoose.connect(process.env.MONGODB_URL!)
.then(()=>{
    console.log(`Data base connected successfully url : http://localhost:${PORT}`)
})
.catch(()=>{
    console.log(`Database is not connnected ok!!`)
})

app.listen(PORT, ()=>{
    console.log(`My server is running on port ${PORT}`)
})