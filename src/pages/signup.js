import React from "react";
import { useHistory } from 'react-router-dom';

function Signup() {
  const history = useHistory();

  const onSignin = () => {
    history.push('/signin');
  }

  return (
    <div className="flex flex-row sign-left-panel min-h-screen">
      <div className="flex-1 m-auto hidden md:block">
        <img className="m-auto object-bottom" src="../assets/mainpic.png" alt="Highpoint" />
      </div>
      <div className="flex-1 bg-white">
        <div className="flex flex-col">
          <div className="flex-1 m-auto mt-10 md:m-0 md:mt-10 md:ml-2">
            <img className="m-auto md:m-0 md:w-1/5 md:h-1/5 w-full h-full" src="../assets/full-logo.png" alt="Highpoint" />
          </div>
          <div className="flex-1 text-left ml-10 mt-3 hidden md:block">
            <p className="text-lg font-bold">Get Started with Highpoint</p>
            <p className="text-sm text-gray-900"><span className="border-bottom pb-3">And easily</span> send digital rewards to your borrowers</p>
          </div>
          <div className="flex-1 flex-grow mt-3 md:mt-8">
            <div className=" flex flex-col text-left mx-10">
              <form>
                <div>
                  <h1 className="text-lg font-bold">Sign Up</h1>
                  <span className="text-sm text-gray-900">and easily send rewards to your borrowers</span>
                </div>
                <div className="mt-5">
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="firstname" placeholder="First Name*" />
                </div>
                <div className="my-3">
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="lastname" placeholder="Last Name*" />
                </div>
                <div className="my-3">
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="companyname" placeholder="Company Name*" />
                </div>
                <div className="my-3">
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Email*" />
                </div>
                <div className="my-3">
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Password" />
                </div>
                <div className="">
                  <button className="mt-4 mb-3 w-full bg-black hover:bg-gray-800 text-white py-2 transition duration-100" onClick={() => onSignin()}>Create Account</button>
                </div>
              </form>
              <div className="flex flex-row">
                <div className="flex-1">
                  <p className="text-sm text-gray-900">By signing Up/ accept Highpoint</p>
                  <span className="cursor-pointer text-sm text-blue-600">Term of service</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Already a Highpoint user?</p>
                  <span className="cursor-pointer text-sm text-blue-600" onClick={() => onSignin()}>Login to Highpoint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Signup;