import React, { useState } from "react";
import Profile from "../profile/Profile";
import Service from "../service/Service";

function Home() {
  const [tabs, setTabs] = useState({ profile: true, service: false });
  const handleProfile = () => {
    setTabs({ profile: true, service: false });
  };
  const handleService = () => {
    setTabs({ profile: false, service: true });
  };
  return (
    <>
      <div className="border-b-2 max-w-[1500px] mx-auto ">
        <div className="flex pt-10 pb-2 px-20 sm:gap-x-10 gap-x-6  justify-center sm:justify-normal">
          <div>
            <button
              className="text-white py-1 px-3 bg-[#007cff] active:bg-slate-200 active:text-black"
              onClick={handleProfile}
            >
              Profile
            </button>
          </div>
          <div>
            <button
              className="text-white py-1 px-3 bg-[#007cff] active:bg-slate-200 active:text-black"
              onClick={handleService}
            >
              Services
            </button>
          </div>
        </div>
      </div>
      {tabs.profile && (
        <>
        <Profile/>
        </>
      )}
      {tabs.service && (
        <>
            <Service/>
        </>
      )}
    </>
  );
}

export default Home;
