import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";

const Header = () => {
  return (
    <>
      <nav className=" text-gray-800 font-normal  py-4 px-4 sm:px-4 lg:px-24">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="" width={250}/>
          </div>
          <div className="flex items-center space-x-5 lg:space-x-8">
            <Link to={"/"} className="hover:text-green-600 hover:cursor-pointer">Home</Link>
            <div className="hover:text-green-600 hover:cursor-pointer">Donation</div>
            <div className="hover:text-green-600 hover:cursor-pointer">Events</div>
            <div className="hover:text-green-600 hover:cursor-pointer">Blog</div>
            <Link to={"/register"} className="lg:w-28 text-center bg-green-600 py-2 rounded-lg text-white hover:bg-green-800 hover:cursor-pointer">Register</Link>
            <Link to={"/admin"} className="lg:w-28 text-center bg-green-600 px-6 py-2 rounded-lg text-white hover:bg-green-800 hover:cursor-pointer">Admin</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
