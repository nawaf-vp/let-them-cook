import mongoose from "mongoose";


const RecipeSchema= new mongoose.Schema({  //schema is the structure of the model
    name: 
        { type:String, required:true,}, 
    ingredients:
        [{ type:String, required:true}],  // there is an array for ingredients for recipe in DB
    instruction:
        { type:String, required:true},
    imageUrl:
        { type:String, required:true},
    cookingTime:
        { type:Number, required:true},
    userOwner:
        { type:mongoose.Schema.Types.ObjectId, ref: "users",required:true}
    });

export const RecipeModel = mongoose.model("recipes",RecipeSchema) // generate model from the schema ,the name "recipes" called by DB 