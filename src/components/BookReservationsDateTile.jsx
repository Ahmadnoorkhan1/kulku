// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const BookReservationsDateTile = ({ date, day }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={
        selected
          ? "bg-[#32beef] flex h-24 flex-col py-5 px-3 rounded-md w-24"
          : "bg-[#26262b] flex h-24 flex-col py-5 px-3 rounded-md w-24"
      }
      onClick={() => setSelected(!selected)}
    >
      <p className="text-[#f1f1f1] text-2xl">{date}</p>
      <p className="text-[#f1f1f1] text-base">{day}</p>
    </div>
  );
};

export default BookReservationsDateTile;
