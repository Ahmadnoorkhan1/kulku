// eslint-disable-next-line no-unused-vars
import React from "react";
import backIcon from "../assets/Icon.svg";
import suanaIcon from "../assets/icon-sauna.svg";
import washerIcon from "../assets/icon-washer.svg";
import dryer from "../assets/icon-dryer.svg";
import club from "../assets/icon-club.svg";
import roof from "../assets/icon-roof.svg";
import NewReservationsTile from "../components/NewReservationsTile";
import { useNavigate } from "react-router-dom";

const NewReservation = () => {
  const navigation = useNavigate();
  function navigateTo() {
    navigation("/");
  }
  return (
    <>
      <div className="flex min-h-screen flex-col items-start  py-12  bg-[#202024]">
        <div className="px-6 flex justify-between items-center w-full">
          <button
            className="border border-slate-600 rounded-md p-1 bg-transparent"
            onClick={navigateTo}
          >
            <img
              src={backIcon}
              width={32}
              height={32}
              alt="back"
              className=""
            />
          </button>
          <p className=" text-[#32beef] text-sm">Reservations (1/3)</p>
        </div>
        <div className="pt-12 px-6">
          <h1 className="font-semibold text-3xl text-[#f1f1f1]">
            Choose a space
          </h1>
        </div>
        <div className="px-6 py-4">
          <p className="text-[#f1f1f1] text-left">
            Choose a space from the list below.
          </p>
        </div>
        <NewReservationsTile icon={suanaIcon} name={"Suana"} />
        <NewReservationsTile icon={washerIcon} name={"Laundry room"} />
        <NewReservationsTile icon={dryer} name={"Drying room"} />
        <NewReservationsTile icon={club} name={"Clubroom"} />
        <NewReservationsTile icon={roof} name={"Roof terrace"} />
      </div>
    </>
  );
};

export default NewReservation;
