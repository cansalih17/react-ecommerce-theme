import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="px-10 py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-semibold text-primaryColor mb-4">
            Create an Account
          </h2>
          <p className="text-bodyTextColor mb-12">
            Welcome! Please fill in the following fields to create your account.
          </p>
          <div className="w-full md:w-[512px] text-start">
            <div className="flex flex-col mb-6">
              <label
                className="block uppercase text-xs text-primaryColor font-semibold mb-2"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                className="w-full bg-grayBackgroundColor text-bodyTextColor border border-borderColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="full-name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label
                className="block uppercase text-xs text-primaryColor font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-grayBackgroundColor text-bodyTextColor border border-borderColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="example@example.com"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label
                className="block uppercase text-xs text-primaryColor font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-grayBackgroundColor text-bodyTextColor border border-borderColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-primaryColor text-white py-3 px-8 rounded-full text-lg">
                Register account
              </button>
            </div>
            <div className="text-bodyTextColor mt-10 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primaryColor font-semibold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
