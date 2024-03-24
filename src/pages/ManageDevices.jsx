import React from "react";
import Devices from "../components/tables/Devices";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function ManageDevices() {
  // Your component logic goes here

  return (
    // JSX code for your component's UI goes here
    <div>
      <NavBar />
      <div className="flex justify-center pt-16">
        <div className="relative my-6 w-[600px]">
          <input
            id="id-s01"
            type="search"
            name="id-s01"
            placeholder="Add Device"
            aria-label="Add Device"
            className="peer relative h-10 w-full border-b border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-label="Plus icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </div>
      </div>
      {/* Device Table Component */}
      <Devices />
      <Footer/>
    </div>
  );
}

export default ManageDevices;
