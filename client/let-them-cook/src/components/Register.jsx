//import React from "react";
 import { useNavigate } from "react-router-dom";
 import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Alert from "./Alert";


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false); // State to control the message
  const [messageText, setMessageText] = useState(""); // State to store the message text
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);

   const [ _ , setCookies] = useCookies(["access_token"]); 
   const navigate = useNavigate(); 

   

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessageText("Passwords do not match");
      setShowMessage(true);
      return;
    }
    try { 
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      setMessageText("Success");
      setShowMessage(true);
      navigate("/login")
      
    } catch (error) {
      setMessageText("Failed");
      setShowMessage(true);
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      
      {showMessage && (
        <Alert message={messageText} marginTop="60px" />
      )}

      <div className="bg-white h-screen pt-10 overflow-hidden flex flex-col items-center justify-center">
       <div className="bg-white rounded-xl  lg:h-200 lg:w-4/12 md:6/12 w-10/12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
           <div className="bg-white sm:h-10  sm:w-10 sm:mb-10 lg:h-20 lg:w-20  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
            
           <img src="Let them cook.png" className="h-9 md:h-11 rounded-1x1" alt="Logo"/>
           </div>
      <form className="px-6 md:px-12 py-6 md:py-12" onSubmit={handleSubmit}>
        
      <div className="flex items-center text-lg mb-6 md:mb-8">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                 <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                </svg>
          
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:outline-none w-full" 
            placeholder="Username"
          />
        </div>
        
        <div className="flex items-center text-lg mb-6 md:mb-8  focus:ring-4 focus:outline-none focus:ring-amber-600 dark:focus:ring-amber-600">
        <svg
            className="absolute ml-3 cursor-pointer"
            viewBox="0 0 24 24"
            width="24"
            onClick={togglePasswordVisibility}
          >
            <path
              d={
                showPassword
                  ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-4c-.74 0-1.41-.3-1.91-.78l3.69-3.69c.17.44.22.92.22 1.47 0 2.21-1.79 4-4 4zm-1-5v2h2v-2z"
                  : "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"
              }
            />
          </svg>

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:ring-4 focus:outline-none focus:ring-amber-600 dark:focus:ring-amber-600 w-full" 
            placeholder="Password" 
         />
        </div>

        <div className="flex items-center text-lg mb-6 md:mb-8  focus:ring-4 focus:outline-none focus:ring-amber-600 dark:focus:ring-amber-600">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
            onClick={togglePasswordVisibility}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round" 
              d={
                showPassword
                  ? "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  : "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              }
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round" 
              d={
                !showPassword
                  && "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              }
            />
          </svg>


          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="bg-gray-300 rounded-lg pl-12 py-2 md:py-4 focus:ring-4 focus:outline-none focus:ring-amber-600 dark:focus:ring-amber-600 w-full" 
            placeholder="comfirm Password" 
         />
        </div>

      
        <button type="submit" className="bg-gray-700 hover:bg-amber-400 font-medium p-2 md:p-4 text-white hover:text-black uppercase rounded-lg w-full">
          Create account
        </button>
        <p className="text-sm mt-2 font-light text-gray-900 dark:text-gray-800">
                       Have an account? <a href="/login" className="font-medium mt-5 text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                  </p>
      </form>
    </div>
    </div>
    
    </>
  );
  

};

export default Register


