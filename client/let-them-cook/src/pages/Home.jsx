import {useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useGetUserID } from "../hooks/useGetUserID";


export const Home = () => {
 
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
 
  const userID= useGetUserID();

  useEffect(() => {
        const fetchRecipes = async () => {
          try {
            const response = await axios.get("http://localhost:3001/recipes");
            setRecipes(response.data)
          // console.log(response.data);
          } catch (error) {
            if (error.response) {
              // The request was made, but the server responded with an error status code
              console.error("Server responded with an error:", error.response.data);
            } else if (error.request) {
              // The request was made, but no response was received
              console.error("No response received from the server:", error.request);
            } else {
              // Something else happened while setting up the request
              console.error("Error:", error.message);
            }
          }
        }; 
        

        const fetchSavedRecipes = async () => {
          try {
          const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/ids/${userID}`);
          //console.log("API Response:", response.data);

           // Ensure that the response data is an array
            if (Array.isArray(response.data.savedRecipes)) {
            setSavedRecipes(response.data.savedRecipes);
            } /* else {
            console.error("Response data is not an array:", response.data.savedRecipes);
            } */
          } catch (error) {
            if (error.response) {
              // The request was made, but the server responded with an error status code
              console.error("Server responded with an error:", error.response.data);
            } else if (error.request) {
              // The request was made, but no response was received
              console.error("No response received from the server:", error.request);
            } else {
              // Something else happened while setting up the request
              console.error("Error:", error.message);
            }
          }
        }
        
      fetchRecipes();
      fetchSavedRecipes();
      }, []);


  const saveRecipe= async(recipeID)=>{
        try {
        const response = await axios.put( "http://localhost:3001/recipes",{
          recipeID,
          userID,
        });
          setSavedRecipes(response.data.savedRecipes)
        // console.log(response.data);
        } catch (error) {
          if (error.response) {
            // The request was made, but the server responded with an error status code
            console.error("Server responded with an error:", error.response.data);
          } else if (error.request) {
            // The request was made, but no response was received
            console.error("No response received from the server:", error.request);
          } else {
            // Something else happened while setting up the request
            console.error("Error:", error.message);
          }
        }
      };

      const isRecipeSaved = (id) => savedRecipes.includes(id);
  
      
  return (
    <>
      <Navbar/>
      <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe)=>(
            <li key={recipe._id}>
            
              <div>
                <h2 className='text-black'>{recipe.name}</h2>
                <button 
                    onClick={()=> saveRecipe(recipe._id)}
                    disabled={isRecipeSaved(recipe._id)}
                  >
                  {isRecipeSaved(recipe._id)? "saved" : "save"}
                </button>
              </div>
              <div className="instructions">
                <p>{recipe.instructions}</p>
              </div>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <p>Cooking Time: {recipe.cookingTime} minutes</p>
            </li>
          )) }
        </ul>
      </div>
    </>
  );
};
 
export default Home