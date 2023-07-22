import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({  //schema is the structure of the model
    username: { type:String, required:true, unique:true}, //usernames should be unique
    password: { type:String, required:true},  // there are similar passwords in DB
});

export const UserModel = mongoose.model("users",UserSchema) // generate model from the schema ,the name "users" called by DB 