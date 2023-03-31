import React from "react";

function Registration() {
  return (
    <div className="w-full">
      <div className="py-10 px-5 sm:p-10 max-w-[1500px] mx-auto box-border">
        <div className="flex justify-center px-2 sm:px-4 md:px-2 my-12">
          <div className="w-full xl:w-2/3 lg:w-3/4 flex h-[700px] rounded-lg px-2 shadow-lg border">
            <div
              className="w-full h-auto bg-text hidden md:block md:w-1/3 bg-contain bg-center bg-no-repeat rounded-l-lg bg-white"
              style={{ backgroundImage: `url('/image/registration.jpg')` }}
            />
            <div className="w-full sm:w-11/12 md:w-3/5 bg-white py-5 px-2 lg:px-5 my-auto rounded-lg lg:rounded-l-none mx-auto">
              <h3 className="pt-4 md:text-2xl text-lg font-bold text-center">
                Hi, Welcome back
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-3 text-grey-700 border-2 border-solid rounded border-gray-300 focus:border-red-600 focus:outline-none md:w-3/4 w-full h-10 "
                  />
                </div>
                <div className="mb-4 md:flex md:justify-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" px-3 text-grey-700 border-2 border-solid border-gray-300 focus:border-red-600 rounded focus:outline-none md:w-3/4 w-full h-10"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-center">
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-3 text-grey-700 border-2 border-solid rounded border-gray-300 focus:border-red-600 focus:outline-none md:w-3/4 w-full h-10 "
                  />
                </div>
                <div className="mb-4 md:flex md:justify-center">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="px-3 text-grey-700 border-2 border-solid rounded border-gray-300 focus:border-red-600 focus:outline-none md:w-3/4 w-full h-10 "
                  />
                </div>
                <div className="mb-4 md:flex md:justify-center">
                  <input
                    type="text"
                    placeholder="password"
                    className="px-3 text-grey-700 border-2 border-solid rounded border-gray-300 focus:border-red-600 focus:outline-none md:w-3/4 w-full h-10 "
                  />
                </div>
                <div className="mb-4 md:flex md:justify-center">
                  <input
                    type="text"
                    placeholder="Bussiness Name"
                    className="px-3 text-grey-700 border-2 border-solid rounded border-gray-300 focus:border-red-600 focus:outline-none md:w-3/4 w-full h-10 "
                  />
                </div>
                <div className="mb-4 md:flex md:justify-center">
                  <label
                    htmlFor="logo"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <input
                      type="file"
                      id="logo"
                      className="hidden px-3 pt-1 text-grey-700 border-2 border-solid rounded border-gray-300 focus:border-red-600 focus:outline-none md:w-3/4 w-full h-10 "
                    />
                    Choose image
                  </label>
                </div>

                <div className="my-6 text-center">
                  <button
                    type="submit"
                    className="md:w-3/4 w-full h-10 bg-[#007cff] rounded-md text-white"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
