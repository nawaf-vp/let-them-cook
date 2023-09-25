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
// Save or unsave a recipe
router.put("/", async (req, res) => {
     const { recipeID, userID } = req.body;
   
     try {
       const user = await UserModel.findById(userID);
   
       if (!user) {
         return res.status(404).json({ message: "User not found" });
       }
   
       const recipe = await RecipeModel.findById(recipeID);
   
       if (!recipe) {
         return res.status(404).json({ message: "Recipe not found" });
       }
   
       // Check if the recipe is already saved by the user
       const isSaved = user.savedRecipes.includes(recipeID);
   
       if (isSaved) {
         // Recipe is already saved, so remove it
         user.savedRecipes = user.savedRecipes.filter((savedRecipe) => savedRecipe != recipeID);
       } else {
         // Recipe is not saved, so add it
         user.savedRecipes.push(recipeID);
       }
   
       await user.save();
   
       res.status(200).json({ savedRecipes: user.savedRecipes });
     } catch (err) {
       console.error(err);
       res.status(500).json({ message: "Error saving/unsaving recipe" });
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