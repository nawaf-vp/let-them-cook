//import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <a href="/" className="flex items-center">
            <img src="Let them cook.png" className="h-8 mr-3 rounded-2xl" alt="Logo"/>
            <span className="self-center sm:text-md md:text-xl  font-semibold whitespace-nowrap dark:text-white ">Let them cook</span>
         </a>
   <div className="flex md:order-2 gap-4">
  {!cookies.access_token ? ( 
    <>
       <button onClick={() => {navigate("/login")}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Sign in
      </button>
      <button onClick={() => {navigate("/register")}} type="button" className="text-white bg-amber-400 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-600 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-950 dark:focus:ring-amber-600">
        Sign Up
      </button>
      </> 

     ) : (
      <button  onClick={logout}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ml-3 sm:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Logout
      </button>
      )}; 
      <button data-collapse-toggle="navbar-sticky"  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
    <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
      <Link to="/"  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:text-white dark:hover:text-amber-400" aria-current="page">
          Home
        </Link>
      </li>
      {/* <li>
      <Link to="/createRecepies"  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-400 md:p-0 md:dark:hover:text-amber-400 dark:text-white">
          Create Recipes
        </Link>
      </li>
      <li>
      <Link to="/savedRecipes"  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:text-amber-400">
          Saved Recipes
          </Link>
      </li> */}
      {cookies.access_token && 
      <>
         <li>
      <Link to="/createRecepies"  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-400 md:p-0 md:dark:hover:text-amber-400 dark:text-white">
          Create Recipes
        </Link>
      </li>
      <li>
      <Link to="/savedRecipes"  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:text-amber-400">
          Saved Recipes
          </Link>
      </li>
      </> 

      }


    </ul>
  </div>
  </div>
</nav>

    </>
  )
}

export default Navbar


/* 
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
    </div>
  );
}; */