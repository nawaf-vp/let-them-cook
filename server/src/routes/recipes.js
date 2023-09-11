import  express  from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import {UserModel} from "../models/Users.js"
import { verifyToken } from "./users.js";
const router = express.Router();                                                                    

// get recipe 
router.get("/", async (req, res) => {
    try {
         const response = await RecipeModel.find({});
         res.status(200).json(response);
    }catch(err){
         res.status(500).json(err);
    }
});


//create a new recipe 
 
router.post("/",verifyToken, async (req, res) => {
     const newRecipe = new RecipeModel(req.body);
     try {
         
         const response = await newRecipe.save();
         res.status(201).json(response); // Respond with the saved recipe data
     } catch (err) {
         res.status(500).json({ err}); // Respond with an error message if there's an issue
     }
 });

// Get a recipe by ID
router.get("/:recipeId",verifyToken, async (req, res) => {
     try {
       const result = await RecipesModel.findById(req.params.recipeId);
       res.status(200).json(result);
     } catch (err) {
       res.status(500).json(err);
     }
   });

//save a recipe
router.put("/", async (req, res) => {
     const recipe= await RecipeModel.findById(req.body.recipeID);
     const user= await UserModel.findById(req.body.userID);
     try {
         
          user.savedRecipes.push(recipe);
          await user.save();
          res.status(201).json({savedRecipes:user.savedRecipes});
     }catch(err){
          res.status(500).json(err)
     }
 });

 //to get saved recipes
 router.get("/savedRecipes/ids/:userID", async (req, res) => {
     try {
          const user= await UserModel.findById(req.params.userID);
          res.json({savedRecipes:user?.savedRecipes});
     }catch(err){
          res.json(err)
     }
 });
 

 router.get("/savedRecipes/:userID", async (req, res) => {
     try {
          const user= await UserModel.findById(req.params.userID);
          const savedRecipes= await RecipeModel.findById({
               _id:{$in:user.savedRecipes}

          })
          res.json({savedRecipes});
     }catch(err){
          res.json(err)
     }
 });
 

export {router as recipesRouter};