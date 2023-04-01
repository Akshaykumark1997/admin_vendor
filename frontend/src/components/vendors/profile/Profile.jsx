import React from "react";

function Profile() {
  return (
    <div className="max-w-[1400px] py-16 mx-auto px-5 sm:px-20 ">
      <div className="flex justify-between flex-col items-center md:flex-row">
        <div className="w-full md:w-[65%] min-[875px]:w-[85%]">
          <h1>Hi, Akshay</h1>
          <hr />
          <div class="bg-slate-100  shadow-sm rounded-sm border-black my-10 ">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 p-4">
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="/image/user.png"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700 p-4">
              <div class="grid lg:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2 text-xs sm:text-sm">Jane</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2 text-xs sm:text-sm">Doe</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email</div>
                  <div class="px-4 py-2 text-xs sm:text-sm break-words">
                    akshaykumar12@gmail.com
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2 text-xs sm:text-sm">+11 998001001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 md:mt-3 md:w-[25%] min-[765px]:w-[85%] md:py-16">
          <div>
            <div className="flex flex-col text-center items-center">
              <img
                src="/image/logo1.png"
                alt=""
                className="md:w-full lg:w-48 min-[760px]:w-88"
              />
              <h6>bussinessName</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
