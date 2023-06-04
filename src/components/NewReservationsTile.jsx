// eslint-disable-next-line no-unused-vars
import React from "react";
import forwardIcon from "../assets/forwardIcon.svg";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewReservationsTile = ({ icon, name }) => {
  const navigate = useNavigate();
  function naviagteTo() {
    navigate("/book-reservation");
  }
  return (
    <div
      className="bg-[#26262b] w-full rounded-md flex py-6 my-1"
      onClick={naviagteTo}
    >
      <div className="flex flex-col px-6 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <div className="border-2 border-[#32beef] rounded-md p-2">
              <img src={icon} alt="suana" width={34} height={42} />
            </div>
            <p className="ps-4 text-[#f1f1f1] text-xl font-semibold">{name}</p>
          </div>
          <div className="me-2">
            <img
              src={forwardIcon}
              width={8}
              height={8}
              alt="back"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReservationsTile;
