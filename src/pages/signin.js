import React from "react";
import { useHistory } from 'react-router-dom';

function Signin() {
  const history = useHistory();

  const onSignup = () => {
    history.push('/signup');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    history.push('/dashboard');
  }
  return (
    <div className="flex flex-row sign-left-panel min-h-screen">
      <div className="flex-1 m-auto hidden md:block">
        <img className="m-auto object-bottom" src="../assets/mainpic.png" alt="Highpoint" />
      </div>
      <div className="flex-1 bg-white">
        <div className="flex flex-col">
          <div className="flex-1 m-auto mt-32 mb-10 md:mb-0 md:m-0 md:mt-10 md:ml-2">
            <img className="m-auto md:m-0 md:w-1/5 md:h-1/5 w-full h-full" src="../assets/full-logo.png" alt="Highpoint" />
          </div>
          <div className="flex-1 text-left ml-10 mt-6 mb-6 hidden md:block">
            <p className="text-lg font-bold">Get Started with Highpoint</p>
            <p className="text-sm text-gray-900"><span className="border-bottom pb-3">And easily</span> send digital rewards to your borrowers</p>
          </div>
          <div className="flex-1 flex-grow mt-3 md:mt-12">
            <div className=" flex flex-col text-left mx-10">
              <form>
                <div className="hidden md:block md:mb-0">
                  <h1 className="text-lg font-bold">Sign In</h1>
                  <span className="text-sm text-gray-900">and easily send rewards to your borrowers</span>
                </div>
                <div className="my-5 md:my-3">
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Email" />
                </div>
                <div className="my-5 md:my-3">
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Password" />
                </div>
                <div className="flex justify-between my-5 md:my-3">
                  <div></div>
                  <span class="text-sm hover:underline cursor-pointer">Forgot password?</span>
                </div>

                <div className="">
                  <button className="mt-4 mb-3 w-full bg-black hover:bg-gray-800 text-white py-2 transition duration-100" onClick={(e) => onSubmit(e)}>Sign in</button>
                </div>
              </form>
              <div className="flex flex-row">
                <div className="flex-1">
                  <p className="text-sm text-gray-900">You are not a Highpoint user yet? <span className="cursor-pointer text-sm text-blue-600" onClick={() => onSignup()}> Sign Up</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;