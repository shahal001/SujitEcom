import React, { useState } from "react";
import {Link}  from "react-router-dom"

const Signup = () => {
    
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);

   

   const handleFileInputChange = (event) => {
    const file = event.target.file[0];
    setAvatar(file)
   }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
        </div>
        <form className="mt-8 space-y-6" >
          <div className="rounded-md shadow-sm space-y-5">
            <div>
            <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                onChange={(event)=>setName(event.target.value)}
              />
            </div>
            <div className="">
            <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(event)=>setEmail(event.target.value)}
              />
            </div>
            <div className=" fla-space-x-2">
            <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
               onChange={(event)=>setPassword(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="avatar" className="sr-only">
                Avatar
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept=".jpg,.jpeg,.heic,.png"
                className="sr-only"
               onChange={handleFileInputChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3a1 1 0 011-1h14a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 7a1 1 0 011-1h3a1 1 0 110 2H4a1 1 0 01-1-1zm8-5a1 1 0 00-2 0v3a1 1 0 102 0V5zm3.707 7.293a1 1 0 00-1.414-1.414L15 11.586V8a1 1 0 00-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign Up
            </button>
            
          </div>
          <div className="flex justify-center ">
          <h3>Already hane an account?  <Link className="text-blue-600 pl-2" to="/login" >Login</Link></h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
