import { useState } from "react"
import axios from "axios"
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
//import { Navbar } from "../components"


const CreateRecipe = () => {
  const userID= useGetUserID();
  
  const [recipe, setRecipe] = useState({
     name:"",
     ingredients:[],
     instructions:"",
     imageUrl:"",
     cookingTime:0,
     userOwner:userID,

  });

  const navigate = useNavigate();

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setRecipe({...recipe,[name]: value});
  }

  const  handleIngredientChange=(event,idx)=>{
    const {value}=event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx]=value;
    setRecipe({...recipe,ingredients : ingredients});
  }

  const addIngredient=()=> {
    setRecipe({...recipe,ingredients: [...recipe.ingredients, ""]})
  }


  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/recipes",
         {...recipe} 
        /* {
          headers: { authorization: cookies.access_token },
        } */
      );

      alert("Recipe Created succesfully");
      navigate("/");
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


 
   console.log(recipe);
   console.log(userID)
  return (
    <>
{/*   <Navbar/> */}
   <div className="bg-white  overflow-hidden flex items-center justify-center pt-50">
    <div className="bg-white mt-40   shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-xl lg:w-4/12 md:6/12 w-10/12 ">
      
        <div className="bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-4">
          <img src="Let them cook.png" className="h-11 rounded-1x1" alt="Logo"/>
        </div>
        <form onSubmit={onSubmit} className="p-12 md:p-16">
          {/*   recipe name  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="biryani.png" className="absolute ml-3 " width="24" alt=" recipe logo"/>
                <input 
                  id="name"
                  name="name"
                  type="text"  
                  value={recipe.name}          
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Recipe name"
                  onChange={handleChange} 
                />
               </div>

          {/*   Ingredients  */}
           {/*  <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="ingredients2.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/> */}
              {recipe.ingredients.map( (ingredient ,idx)=>(
                  <input
                     key={idx}
                     type="text"
                     name="ingredients"
                     value={ingredient}
                     onChange={(event)=> handleIngredientChange(event,idx)}
                     placeholder="ingredient name"
                     className="bg-gray-200 mb-5 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full"
                  />

              ))}
                      
                  <button onClick={addIngredient} type="button" className="bg-gray-700 mb-10  hover:bg-amber-400 font-medium p-2 md:p-4 text-white hover:text-black uppercase rounded-lg w-full">
                    add ingredient
                  </button>
              
             {/*   </div> */}

          {/*   instructions  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="cooking_instructions.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/>
            
                <textarea 
                  id="instructions" 
                  value={recipe.instructions}
                  name="instructions"        
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="instructions"
                  rows="4" 
                  onChange={handleChange}
                >
                </textarea>
               </div>

        {/*   image url  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
              <img src="image Url.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/>
            
                <input 
                  type="text"
                  id="imageUrl"
                  value={recipe.imageUrl}
                  name="imageUrl"        
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="image url"
                  onChange={handleChange} 
                />
               </div>
        
        {/*   cooking time   */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="cooking-time.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/>
            
                <input 
                  type="number" 
                  value={recipe.cookingTime}
                  id="cookingTime"
                  name="cookingTime"       
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Cooking Time (minutes)"
                  onChange={handleChange} 
                />
               </div>
        


          <button type="submit" className="bg-gray-700  hover:bg-amber-400 font-medium p-2 md:p-4 text-white hover:text-black uppercase rounded-lg w-full">
            submit
          </button>
          
         
         
        </form>
      </div> 
    </div>
      
  </>
  )
}

export default CreateRecipe







