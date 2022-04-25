import React from "react";
import "./HomeBanner.css";
import Header from "../Header/Header";

const HomeBanner = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-banner">
      <Header></Header>

      <div className="lg:mt-[90px]">
        <h1 className="text-5xl font-semibold text-center mb-14">
          I GROW BY HELPING PEOPLE IN NEED
        </h1>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            <input
              className="w-[450px] text-xl py-2 px-2 rounded-l-md focus:outline-none ring-1 ring-green-600"
              type="text"
              name=""
              id=""
            />
            <input
              className="text-xl text-white py-2 px-10 rounded-r-md bg-green-600 ring-1 ring-green-600 hover:bg-green-800 hover:cursor-pointer"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
