import React, { useState } from "react";

const EventCard = ({ event }) => {
  const { name, img } = event;
  const bgColor = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];
  const randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];

  

  return (
    <div className="w-[300px] sm:w-[350px] lg:w-full mx-auto">
      <div className="relative">
        <img className="w-full" src={img} alt="" />
        <button style={{backgroundColor: randomColor}} className="block absolute bottom-0 w-full py-4 rounded-b-[10px] text-white bg-green-600">{name}</button>
      </div>
      
    </div>
  );
};

export default EventCard;
