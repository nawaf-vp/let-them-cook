import  { useState } from 'react'

import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="bg-white h-screen overflow-hidden flex items-center justify-center">
       <div className="bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-xl lg:w-4/12 md:6/12 w-10/12 ">
           <div className="bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            
           <img src="Let them cook.png" className="h-11 rounded-1x1" alt="Logo"/>
           </div>
           <form className="p-12 md:p-24" onSubmit={handleSubmit}>
             
               <div className="flex items-center text-lg mb-6 md:mb-8">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                 <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                </svg>
                <input 
                 type="text"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)} 
                  className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                  placeholder="Username" 
                />
               </div>
                <div className="flex items-center text-lg mb-6 md:mb-8">
                  <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                    <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
                  </svg>
                  <input 
                   type="password"
                   id="password"
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}
                   className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none focus:ring focus:ring-gray-400 w-full" 
                   placeholder="Password" />
                </div>
          <button type="submit" className="bg-gray-700  hover:bg-amber-400 font-medium p-2 md:p-4 text-white hover:text-black uppercase rounded-lg w-full">
            Login
          </button>
          <p className="text-sm mt-2 font-light text-gray-900 dark:text-gray-800">
                      Don’t have an account? <a href="/register" className="font-medium mt-5 text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
    </form>
  </div>
 </div>
     
    </>
  );
};

export default Login 

