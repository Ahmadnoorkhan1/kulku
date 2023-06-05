// eslint-disable-next-line no-unused-vars
import React from "react";
import backIcon from "../assets/Icon.svg";
import { useNavigate } from "react-router-dom";
import BookReservationsDateTile from "../components/BookReservationsDateTile";
import BookReservationTimeTiles from "../components/BookReservationTimeTiles";

const BookReservation = () => {
  const navigate = useNavigate();
  function naviagteBack() {
    navigate("/new-reservation");
  }
  function naviagteTo() {
    navigate("/confirm-reservation");
  }
  let dates = [
    { date: "9.3.", day: "MON" },
    { date: "10.3.", day: "TUE" },
    { date: "11.3.", day: "WED" },
    { date: "12.3.", day: "THU" },
    { date: "13.3.", day: "FRI" },
    { date: "14.3.", day: "SAT" },
    { date: "15.3.", day: "SUN" },
    { date: "16.3.", day: "MON" },
    { date: "17.3.", day: "TUE" },
    { date: "18.3.", day: "WED" },
    { date: "19.3.", day: "THU" },
    { date: "20.3.", day: "FRI" },
    { date: "21.3.", day: "SAT" },
    { date: "22.3.", day: "SUN" },
  ];
  let time = [
    {
      time: "15:00 - 16:00",
      button: "Book",
    },
    {
      time: "16:00 - 17:00",
      button: "Book",
    },
    {
      time: "17:00 - 18:00",
      button: "Book",
    },
    {
      time: "18:00 - 19:00",
      button: "-",
    },
    {
      time: "19:00 - 20:00",
      button: "Valitse",
    },
    {
      time: "21:00 - 22:00",
      button: "Valitse",
    },
    {
      time: "21:00 - 22:00",
      button: "Varattu",
    },
  ];
  return (
    <>
      <div className="flex min-h-screen flex-col items-start  pt-4  bg-[#202024] ">
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
          <p className=" text-[#32beef] text-sm">Reservations (2/3)</p>
        </div>
        <div className="pt-4 px-6">
          <h1 className="font-semibold text-3xl text-[#f1f1f1]">
            Date and time
          </h1>
        </div>
        <div className="px-6 py-4">
          <p className="text-[#f1f1f1] text-left">
            Choose a date and time for your reservation. You can make a
            reservation up to 6 weeks in advance.
          </p>
        </div>
        <div className="px-6 py-4">
          <p className="text-[#f1f1f1] text-left font-bold">
            Sauna reservation cost is x.xx € / h.
          </p>
        </div>
        <hr className="w-full h-1 border-slate-600" />
        <div className="px-6 py-4">
          <p className="text-[#f1f1f1] text-left text-sm font-semibold">
            Select a date
          </p>
        </div>
        <div className=" overflow-x-auto flex ps-6 h-28 my-4 gap-2 w-full">
          {dates.map((item, key) => (
            <BookReservationsDateTile
              date={item.date}
              day={item.day}
              key={key}
            />
          ))}
        </div>
        <div className="px-6 py-4">
          <p className="text-[#f1f1f1] text-left text-sm font-semibold">
            Select time(s)
          </p>
        </div>
        <div className=" overflow-y-auto flex flex-col gap-2 h-80 w-full">
          {time.map((item, key) => (
            <>
              <BookReservationTimeTiles
                time={item?.time}
                button={item?.button}
                key={key}
              />
              <hr />
            </>
          ))}
        </div>
        <div className="flex w-full items-center fixed" style={{ top: "92%" }}>
          <button
            className="w-full bg-[#32beef] gap-2 px-6 text-[#f1f1f1] text-xl rounded-none"
            onClick={naviagteTo}
          >
            Book now
          </button>
        </div>
      </div>
    </>
  );
};

export default BookReservation;
