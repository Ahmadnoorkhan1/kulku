/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import forwardIcon from "../assets/forwardIcon.svg";
import { useNavigate } from "react-router-dom";
const HomePageTiles = ({ icon, name, time }) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/reservations");
  };
  return (
    <div className="bg-[#26262b] p-1 w-full my-2" onClick={navigateTo}>
      <div className="border-l-4 border-slate-600 flex items-center justify-between ">
        <div className="flex items-center">
          <img src={icon} className="p-6" />
          <div className="flex flex-col items-start">
            <p className="text-[#f1f1f1]">{name}</p>
            <p className="text-[#f1f1f1]">{time}</p>
          </div>
        </div>
        <div className="me-2">
          <img src={forwardIcon} width={8} height={8} alt="back" className="" />
        </div>
      </div>
    </div>
  );
};

export default HomePageTiles;
