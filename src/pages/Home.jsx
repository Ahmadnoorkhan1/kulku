// eslint-disable-next-line no-unused-vars
import React from "react";
import backIcon from "../assets/Icon.svg";
import suanaIcon from "../assets/icon-sauna.svg";
import washerIcon from "../assets/icon-washer.svg";
import dryer from "../assets/icon-dryer.svg";
import plusIcon from "../assets/plusIcon.svg";
import { useNavigate } from "react-router-dom";
import HomePageTiles from "../components/homePageTiles";
const Home = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/new-reservation");
  };
  return (
    <>
      <div className="flex min-h-screen justify-between flex-col items-start  pt-12  bg-[#202024]">
        <div className="flex items-start flex-col px-6 w-full">
          <div className="">
            <button className="border border-slate-600 rounded-md p-1 bg-transparent">
              <img
                src={backIcon}
                width={32}
                height={32}
                alt="back"
                className=""
              />
            </button>
          </div>
          <div className="pt-12 ">
            <h1 className="font-semibold text-3xl text-[#f1f1f1]">
              My reservations
            </h1>
          </div>
          <div className=" py-4">
            <p className="text-[#f1f1f1]">09-04-2012</p>
          </div>
          <HomePageTiles
            icon={suanaIcon}
            name={"Suana"}
            time={"16:00 - 17:00"}
          />
          <div className="px-6 py-4">
            <p className="text-[#f1f1f1]">09-04-2012</p>
          </div>
          <HomePageTiles
            icon={washerIcon}
            name={"Laundry room"}
            time={"15:00 - 16:00"}
          />
          <HomePageTiles
            icon={dryer}
            name={"Drying room"}
            time={"16:00 - 17:00"}
          />
        </div>
        {/* <div className="bg-[#26262b] p-1 w-full ">
            <div className="border-l-4 border-slate-600 flex items-center justify-between ">
                <div className="flex items-center">
                <img src={suanaIcon} className="p-6" />
                <div className="flex flex-col items-start">
                    <p className="text-[#f1f1f1]">Suana</p>
                    <p className="text-[#f1f1f1]">16:00 - 17:00</p>
                </div>
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
        </div> */}

        <button
          className="flex w-full items-center bg-[#32beef] gap-2 px-6 text-[#f1f1f1] text-xl rounded-none"
          onClick={navigateTo}
        >
          <img src={plusIcon} alt="Make a reservation" width={42} height={42} />
          Make a new reservation
        </button>
      </div>
    </>
  );
};

export default Home;
