import  express  from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js"

const router = express.Router();                                                                    

// get recipe 
router.get("/", async (req, res) => {
    try {
         const response = await RecipeModel.find({});
         res.json(response);
    }catch(err){
         res.json(err)
    }
});

//create recipe 
 
router.post("/", async (req, res) => {
     const newRecipe = new RecipeModel(req.body);
     try {
         
         const response = await newRecipe.save();
         res.status(201).json(response); // Respond with the saved recipe data
     } catch (err) {
         res.status(500).json({ err}); // Respond with an error message if there's an issue
     }
 });

/* router.post("/", async (req, res) => {
     try {
    const newRecipe = new RecipeModel(req.body);
    await newRecipe.save();
    res.json({ message: "recipe registered successfully" });

         const response = await recipe.save();
         res.json(response);
    }catch(err){
     res.status(500).json(err);
    }
}); */

//saved recipe
router.put("/", async (req, res) => {

     try {
          const recipe= await RecipeModel.findById(req.body.recipeID);
          const user= await userModel.findById(req.body.userID);
          user.savedRecipes.push(recipe);
          await user.save();
          res.json({savedRecipes:user.savedRecipes});
     }catch(err){
          res.json(err)
     }
 });

 router.get("/savedRecipes/ids", async (req, res) => {
     try {
          const user= await userModel.findById(req.body.userID);
          res.json({savedRecipes:user?.savedRecipes});
     }catch(err){
          res.json(err)
     }
 });
 

 router.get("/savedRecipes", async (req, res) => {
     try {
          const user= await userModel.findById(req.body.userID);
          const savedRecipes= await RecipeModel.findById({
               _id:{$in:user.savedRecipes}

          })
          res.json({savedRecipes});
     }catch(err){
          res.json(err)
     }
 });
 

export {router as recipesRouter};