import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineArrowDown } from 'react-icons/ai';


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" text-gray-800 font-medium py-8 px-4 sm:px-4 lg:px-24">
        <div className="flex justify-between lg:items-center">
          <div className="">
            <img src={logo} alt="" width={250}/>
          </div>

          <div className="lg:hidden" onClick={()=>{setOpen(!open)}}>
              {
                open ? <AiOutlineArrowDown size={"2em"} className="hover:text-green-600" /> :  <HiOutlineMenuAlt3 size={"2em"} className="hover:text-green-600" />
              }
          </div>

          <div className={`absolute top-[80px] right-0 lg:static ${open ?'bg-slate-100 w-full py-4' :'hidden'} lg:inline-block`}>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
              <Link to={"/"} className="mb-2  hover:text-green-600 hover:cursor-pointer">Home</Link>
              <Link to={"/"} className="mb-2  hover:text-green-600 hover:cursor-pointer">Donation</Link>
              <Link to={"/"} className="mb-2  hover:text-green-600 hover:cursor-pointer">Events</Link>
              <Link to={"/"} className="mb-2  hover:text-green-600 hover:cursor-pointer">Blog</Link>
              <Link to={"/register"} className="w-28 text-center bg-green-600 px-6 py-2 mb-2 rounded-lg text-white hover:bg-green-800 hover:cursor-pointer">Register</Link>
              <Link to={"/admin"} className="w-28 text-center bg-green-600 px-6 py-2 mb-2 rounded-lg text-white hover:bg-green-800 hover:cursor-pointer">Admin</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
