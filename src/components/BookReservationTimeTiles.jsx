// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const BookReservationTimeTiles = ({ time, button }) => {
  return (
    <div className=" flex py-2 justify-between w-full px-6">
      <p className="text-[#f1f1f1] text-xl">{time}</p>
      <div>
        <button className="text-[#f1f1f1] bg-transparent border-4 border-cyan-600 p-2 rounded-md w-24">
          {button}
        </button>
      </div>
    </div>
  );
};

export default BookReservationTimeTiles;
