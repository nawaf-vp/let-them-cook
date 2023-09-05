import { useState } from "react"
//import { Navbar } from "../components"


const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
     name:"",
     ingredients:[],
     instructions:"",
     imageUrl:"",
     cookingTime:0,
     userOwner:0,

  });

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setRecipe({...recipe,[name]: value});
  }

  const addIngredient=()=> {
    setRecipe({...recipe,ingredients: [...recipe.ingredients, ""]})
  }
  return (
    <>
{/*   <Navbar/> */}
   <div className="bg-white h-screen overflow-hidden flex items-center justify-center pt-20">
    <div className="bg-white mt-40 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-xl lg:w-4/12 md:6/12 w-10/12 ">
      
        <div className="bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-4">
          <img src="Let them cook.png" className="h-11 rounded-1x1" alt="Logo"/>
        </div>
        <form className="p-12 md:p-24">
          {/*   recipe name  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="biryani.png" className="absolute ml-3 " width="24" alt=" recipe logo"/>
                <input 
                  id="name"
                  type="text"            
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Recipe name" 
                />
               </div>

          {/*   Ingredients  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="ingredients2.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/>
                <input 
                   id="ingredients"
                  type="text"            
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Ingredients" 
                />
               </div>
          {/*   instructions  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="cooking_instructions.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/>
            
                <textarea 
                  id="instructions" 
                  name="instructions"        
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="instructions"
                  rows="4" 
                >
                </textarea>
               </div>

        {/*   image url  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
              <img src="image Url.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/>
            
                <input 
                  type="text"
                  id="imageUrl"
                  name="imageUrl"        
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="image url" 
                />
               </div>
        
        {/*   cooking time   */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src="cooking-time.png" className="absolute ml-3 " width="24" alt=" ingredient logo"/>
            
                <input 
                  type="number" 
                  id="cookingTime"
                  name="cookingTime"       
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Cooking Time (minutes)" 
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







