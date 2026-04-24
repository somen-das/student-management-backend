import express  from "express";

const app = express();

export default app.use('/register', (req, res)=>{
    res.status(200).json({'message': "register route"})
})