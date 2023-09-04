import { useState } from "react"


const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
     name:"",
     ingredients:"",
     in:"",
     im:"",
     cook:"",

  })
  return (
    <>
  
   <div className="bg-white h-screen overflow-hidden flex items-center justify-center">
    <div className="bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-xl lg:w-4/12 md:6/12 w-10/12 ">
      
        <div className="bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-4">
          <img src="Let them cook.png" className="h-11 rounded-1x1" alt="Logo"/>
        </div>
        <form className="p-12 md:p-24">
          {/*   recipe name  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <img src='client\let-them-cook\public\biryani.svg'/>
                <input 
                  id="name"
                  type="text"            
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Recipe name" 
                />
               </div>
          {/*   Ingredients  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3860 4824 c-187 -50 -341 -208 -379 -392 -26 -123 -8 -231 60 -363
48 -94 48 -109 -8 -203 l-37 -63 -81 39 c-129 61 -242 79 -373 58 -80 -13
-124 -2 -205 53 -34 24 -78 49 -97 57 -19 7 -36 14 -38 16 -2 1 3 28 12 60 70
283 -25 507 -267 624 -159 76 -392 110 -454 64 -38 -28 -77 -100 -114 -214
-27 -79 -33 -115 -37 -217 -4 -104 -1 -132 17 -191 24 -78 86 -171 146 -216
l39 -30 -30 -8 c-16 -5 -59 -4 -96 2 -142 21 -256 4 -385 -60 -99 -49 -185
-125 -246 -218 -58 -87 -71 -98 -161 -132 -41 -15 -95 -39 -118 -53 -107 -62
-205 -176 -253 -293 -42 -100 -63 -125 -156 -174 -146 -79 -263 -211 -306
-347 l-17 -53 -78 0 c-99 0 -149 -22 -178 -80 -19 -37 -20 -58 -20 -370 0
-312 1 -333 20 -370 28 -55 68 -74 170 -80 l84 -5 13 -94 c32 -236 129 -472
283 -683 50 -69 191 -215 260 -271 l45 -37 -183 0 c-163 0 -187 -2 -222 -20
-45 -23 -80 -80 -80 -130 0 -50 35 -107 80 -130 39 -20 55 -20 1850 -20 1795
0 1811 0 1850 20 45 23 80 80 80 130 0 50 -35 107 -80 130 -35 18 -59 20 -222
20 l-183 0 45 37 c69 56 210 202 260 271 154 212 247 437 283 687 l13 90 85 5
c101 6 141 25 169 80 19 37 20 58 20 370 0 453 7 442 -265 450 l-161 5 26 260
26 260 92 152 c51 84 104 161 119 173 21 16 40 20 107 20 158 0 274 47 382
154 162 162 198 375 99 584 -98 207 -359 334 -566 276 -12 -3 -22 10 -37 54
-87 238 -359 381 -602 316z m219 -310 c100 -50 140 -153 100 -260 -42 -115
-35 -180 23 -229 71 -60 150 -43 231 50 48 53 67 67 110 80 202 60 361 -174
228 -336 -47 -57 -90 -72 -221 -79 -129 -7 -197 -30 -276 -95 -35 -29 -116
-136 -126 -167 -2 -5 -31 19 -66 51 -67 64 -197 137 -263 147 -22 4 -39 8 -39
10 0 2 18 36 39 77 79 151 79 267 -3 430 -28 56 -46 105 -46 126 0 60 23 114
67 158 68 68 153 81 242 37z m-1752 -80 c108 -52 129 -118 91 -292 l-12 -54
-40 7 c-62 9 -150 53 -187 91 -32 33 -34 40 -37 113 -3 53 1 97 12 134 l16 56
53 -15 c28 -8 76 -26 104 -40z m270 -692 c27 -10 75 -38 108 -61 87 -61 176
-86 295 -82 191 7 214 5 260 -15 l45 -20 -406 -271 c-322 -216 -422 -287 -482
-348 -88 -88 -158 -188 -207 -297 l-35 -78 -787 0 c-434 0 -788 4 -788 8 0 25
78 93 151 132 142 77 218 161 275 305 41 102 96 152 218 200 146 56 205 106
309 265 30 46 106 96 176 117 49 14 69 14 157 4 152 -19 270 9 379 87 27 19
70 44 95 53 61 24 175 25 237 1z m1211 -381 c92 -47 152 -143 152 -245 0 -56
-35 -447 -46 -513 l-5 -33 -699 0 c-403 0 -700 4 -700 9 0 17 87 126 137 173
28 25 246 177 486 337 313 208 447 292 474 296 21 4 45 7 53 9 31 4 109 -13
148 -33z m532 -1241 l0 -150 -2020 0 -2020 0 0 150 0 150 2020 0 2020 0 0
-150z m-284 -511 c-4 -34 -18 -99 -32 -146 -64 -222 -160 -379 -333 -546 -184
-177 -401 -285 -651 -323 -140 -21 -1302 -20 -1443 1 -492 74 -898 459 -1002
950 -8 39 -15 82 -15 98 l0 27 1741 0 1742 0 -7 -61z"/>
<path d="M1818 3219 c-43 -22 -78 -81 -78 -129 0 -50 35 -107 80 -130 21 -11
53 -20 70 -20 76 0 150 74 150 150 0 50 -35 107 -80 130 -49 25 -94 25 -142
-1z"/>
</g></svg>
                <input 
                   id="ingredients"
                  type="text"            
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Ingredients" 
                />
               </div>
          {/*   instructions  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                 <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                </svg>
                <textarea 
                  id="instructions" 
                  name="instructions"        
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="instructions" 
                >
                </textarea>
               </div>

        {/*   image url  */}
            <div className="flex items-center text-md mb-6 md:mb-8">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                 <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                </svg>
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
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                 <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                </svg>
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
    {/* 
      <h2>Create recipe</h2>
     <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"/>
      
      <label htmlFor="ingredients">ingredients</label>
    
      <label htmlFor="instructions">instructions</label>
      <textarea id="instructions" name="instructions"/>
      <label htmlFor="imageurl">image url</label>
      <input type="text" id="imageUrl" name="imageUrl"/>
      <label htmlFor="cookingTime">Cooking Time (minutes)</label>
      <input type="number" id="cookingTime"/>

     </form> */}  
  </>
  )
}

export default CreateRecipe







