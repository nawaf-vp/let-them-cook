//import React, { useEffect } from "react"
import PropTypes from "prop-types";
import { useState } from "react";
//import {  useNavigate } from "react-router-dom";



const Alert = ({ message }) => {
    // State to control the visibility of the alert
    const [isVisible, setIsVisible] = useState(true);

    // Function to close the alert
    const closeAlert = () => {
      setIsVisible(false);
    };


  return (
    isVisible && (
    <div role="alert" 
         className="fixed top-0 right-0
          z-50 rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
         style={{ zIndex: 9999 }} // Set a high z-index value to ensure it's on top
     >
  <div className="flex items-start gap-4">
    {message === "Success" ?
    <span className="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
       >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
       :
    <span className="text-red-600">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none" 
       viewBox="0 0 24 24" 
       strokeWidth={1.5} 
       stroke="currentColor" 
       className="w-6 h-6">
           <path 
             strokeLinecap="round" 
             strokeLinejoin="round" 
             d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
             />
      </svg>

    </span>
}
    <div className="flex-1">
      <strong className="block font-medium text-gray-900">
      {message === "Success" ?  "Success"  :  "Failed" }
      </strong>

      { message === "Success" || message === "Failed" ? 
       (<p className="mt-1 text-sm text-gray-700">Registration {message}</p>)
      :
      (<p className="mt-1 text-sm text-gray-700">{message}</p>)
      
        }

      <div className="mt-4 flex gap-2">
        <a
           
          href= {message === "Success" ?  "/login": "/register"}
          className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-black hover:bg-amber-600"
        >
          <span className="text-sm">{message === "Success" ?  "Login"  :  "Try agian" }</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>

        <button
          onClick={closeAlert}
          className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-300"
        >
          <span className="text-sm" >later</span>
        </button>
      </div>
    </div>

    <button 
       onClick={closeAlert}
       className="text-gray-500 transition hover:text-gray-600">
      <span className="sr-only">Dismiss popup</span>
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</div>
    )
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired, // Ensure that 'message' is a required string prop
};

export default Alert