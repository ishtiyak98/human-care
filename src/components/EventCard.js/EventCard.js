import React from "react";

const EventCard = ({ event }) => {
  const { name, img } = event;

  return (
    <div className="w-[300px] sm:w-[350px] lg:w-[250px] mx-auto">
      <div className="relative">
        <img className="w-full" src={img} alt="" />
        <button className="block absolute bottom-0 w-full py-4 rounded-b-[10px] text-white  bg-green-600 ">{name}</button>
      </div>
      
    </div>
  );
};

export default EventCard;
