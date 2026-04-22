import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL!)
.then(()=>{
    console.log(`Data base connected successfully`)
})
.catch(()=>{
    console.log(`Database is not connnected`)
})

app.listen(PORT, ()=>{
    console.log(`My server is running on port ${PORT}`)
})