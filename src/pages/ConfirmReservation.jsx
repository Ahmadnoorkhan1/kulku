// eslint-disable-next-line no-unused-vars
import React from "react";
import backIcon from "../assets/Icon.svg";
import suanaIcon from "../assets/icon-sauna.svg";
import { useNavigate } from "react-router-dom";

const ConfirmReservation = () => {
  const navigate = useNavigate();

  function naviagteBack() {
    navigate("/book-reservation");
  }
  return (
    <>
      <div className="flex min-h-screen h-full flex-col items-start  py-12  bg-[#202024]">
        <div className="px-6 flex justify-between items-center w-full">
          <button
            className="border border-slate-600 rounded-md p-1 bg-transparent"
            onClick={naviagteBack}
          >
            <img
              src={backIcon}
              width={32}
              height={32}
              alt="back"
              className=""
            />
          </button>
          <p className=" text-[#32beef] text-sm">Reservations (3/3)</p>
        </div>
        <div className="pt-12 px-6">
          <h1 className="font-semibold text-3xl text-[#f1f1f1]">
            Reservations
          </h1>
        </div>
        <div className="px-6 py-4">
          <p className="text-[#f1f1f1] text-left">
            See the reservation details below. Confirm the reservation by
            pressing {'"Confirm"'}.
          </p>
        </div>
        <div className="px-6 w-full">
          <div className="bg-[#26262b] w-full rounded-md flex p-6">
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <div className="border-2 border-[#32beef] rounded-md p-2">
                  <img src={suanaIcon} alt="suana" width={34} height={42} />
                </div>
                <p className="ps-4 text-[#f1f1f1] text-xl font-semibold">
                  Sauna
                </p>
              </div>
            </div>
          </div>
          <hr className="w-full h-1 border-slate-600" />
          <div className="bg-[#26262b] w-full flex p-6">
            <p className="text-[#f1f1f1]">March 9, 2021 (Monday)</p>
          </div>
          <hr className="w-full h-1 border-slate-600" />
          <div className="bg-[#26262b] w-full flex p-6">
            <p className="text-[#f1f1f1]">at 16:00 - 17:00</p>
          </div>
          <hr className="w-full h-1 border-slate-600" />
          <div className="bg-[#26262b] w-full flex p-6 rounded-b-md">
            <p className="text-[#f1f1f1]">2.20 €</p>
          </div>
        </div>
        <p className="px-6 py-4 text-[#f1f1f1] text-left">
          The reservation can be cancelled 24 hours prior. No refunds for
          cancellations.
        </p>
        <div className="px-6 flex w-full items-center">
          <button className="w-full bg-[#32beef] gap-2 px-6 text-[#f1f1f1] text-xl">
            Pay and Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmReservation;
