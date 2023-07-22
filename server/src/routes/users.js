import  express  from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => { //req - getting data from . res - used to send data to back to whoever made that API request
  
    const {username, password}= req.body;//defining endpoints in API

    const user = await UserModel.findOne({
                                       username: username
                                       });

    if(user){
        return res.json({message:"user already exists"});
    }                                   
    const hashedPassword= await bcrypt.hash(password, 10);

     // add user to mongoDB
    const newUser =new UserModel({username:username, password:hashedPassword});
    await newUser.save();
    
    res.json({message:"user registerd successfully!"})
})

export { router as userRouter}