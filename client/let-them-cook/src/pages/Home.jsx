import {useEffect,useState} from 'react'
//import Navbar from '../components/Navbar'
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
    <div className="text-gray-600 font-body">
      <div className="grid md:grid-cols-3 lg:grid-cols-4">

    {/*   <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" className="hover:text-gray-700">Let them Cook</a>
            </h1>
            <div className="px-4 cursor-pointer md:hidden" id="burger">
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <ul className="text-sm mt-6 hidden md:block" id="menu">
            <li className="text-gray-700 font-bold py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-primary"
                ><span>Home</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="px-4 flex justify-end border-r-4 border-white"
                ><span>About</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="px-4 flex justify-end border-r-4 border-white"
                ><span>Contact</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
      <main
        className="bg-gray-100 px-16 py-8 mt-11 md:col-span-3 lg:col-span-4 min-h-screen"
      >
        
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Little ones</h3>
        </header>
        <div className="">
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div /* className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" */>
           
           {/* recipe 1 */}
           <ul  className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" >
              {recipes.map((recipe) => (
              <li key={recipe._id}>
                <div className="card rounded-xl shadow-xl py-4 px-2 hover:scale-105 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name} 
                  className="w-full h-32 sm:h-48 rounded-md object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">{recipe.name}</span>
                  <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                </div>

                <div className='flex items-start justify-between gap-4'>
               {/* cookingTime */}
                <div className="badge text-gray-900 sm:text-sm ">
                  <svg
                    className="w-5 inline-block fill-yellow-500 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span> mins</span>
                </div>
                <div
                  className="button flex  justify-end "
                  onClick={() => saveRecipe(recipe._id)}
                >
                {isRecipeSaved(recipe._id)?
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6 fill-rose-600"
                    >
                    <path 
                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  :
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-6 h-6"
                  >
                      <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  }
                </div>
                </div>
                </div>
              </li>
              ))}
            </ul>
            
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>
          <div className="mt-8">
            {/*  cards */} 
          </div>
          <div className="flex justify-center">
            <div
              className="
                btn
                bg-secondary-100
                text-secondary-200
                hover:shadow-inner
                transform
                hover:scale-125
                hover:bg-opacity-50
                transition
                ease-out
                duration-300
              "
            >
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
</div>
     {/*  <Navbar/>
      <div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Little</h3>
        </header>
      <div className="">
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
        <main
        className="bg-gray-100 px-16 py-6 md:col-span-2 lg:col-span-3 min-h-screen"
      >
        <ul>
          {recipes.map((recipe)=>(
            <li key={recipe._id}>

              <div className="">
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Latest Recipes
              </h4>
              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                <div className="card hover:shadow-lg">
                  <img
                    src={recipe.imageUrl} 
                    alt={recipe.name}
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                      <span className="font-bold">{recipe.name}</span>
                      <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                      <svg
                        className="w-5 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span> {recipe.cookingTime} mins</span>
                  </div>
                </div>
              </div>
            </div>
            </li>
            ))}
            
          
         </ul>
         </main>
        </div>
      </div> */}
    </>
  );
};
 

export default Home;




                      {/*    <div>
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
                            <p>Cooking Time: {recipe.cookingTime} minutes</p> */}