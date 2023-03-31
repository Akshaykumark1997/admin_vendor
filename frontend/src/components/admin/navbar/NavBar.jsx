import React from "react";

function NavBar() {
  const menus = [
    {
      name: "Dashboard",
      src: "/image/Chart.png",
    },
    {
      name: "Add Vendors",
      src: "/image/folder.png",
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="bg-dark-purple h-screen p-5  pt-8 md:w-72 w-24 ">
          <div className="md:pl-6 pl-2 md:text-2xl text-lg text-white">
            <h1>Admin</h1>
          </div>
          <ul className="pt-12">
            {menus.map((ele, index) => (
              <li className="flex rounded-md p-4 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center">
                <img
                  src={ele.src}
                  alt="text"
                  className="hover:bg-light-white"
                />
                <span className="hidden md:block px-2">{ele.name}</span>
              </li>
            ))}
          </ul>
          <ul className="pt-12">
            <li className="flex rounded-md p-4 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center">
              <img src="/image/logout.svg" alt="text" className="hover:bg-light-white w-6" />
              <span className="hidden md:block px-2">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
