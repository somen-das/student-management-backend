import express  from "express";

const app = express();

export default app.use('/api/register', (req, res)=>{
    res.status(200).json({'message': "register route"})
})