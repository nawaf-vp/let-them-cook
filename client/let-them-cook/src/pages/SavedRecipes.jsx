import {useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useGetUserID } from "../hooks/useGetUserID";

const SavedRecipes = () =>  {
  const userID= useGetUserID();
  const [savedRecipes, setSavedRecipes] = useState([]);

 
  useEffect(() => {
      
        const fetchSavedRecipe = async()=>{
          try {
          const response = await axios.get(  `http://localhost:3001/recipes/savedRecipes/${userID}`);
          setSavedRecipes(response.data);
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
        }
        
      fetchSavedRecipe();
      }, [])


 

  return (
    <>
      <Navbar/><br/>
      <div>
        <h1>savedRecipes</h1>
        <ul>
          {savedRecipes.map((recipe)=>(
            <li key={recipe._id}>
            
              <div>
                <h2>{recipe.name}</h2>
               
              </div>
              <div className="instructions">
                <p>{recipe.instructions}</p>
              </div>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
            </li>
          )) }
        </ul>
      </div>
    </>
  )
}


export default SavedRecipes