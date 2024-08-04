import React from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
function NavSm() {
  const redirectToPlatStore = () => {
    // navigate(`https://play.google.com/store/apps/details?id=com.bt.bms&hl=en`);
    window.location.href = 'https://play.google.com/store/apps/details?id=com.bt.bms&hl=en';
  }
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div className="float-left">
          <h3 className="text-xl font-bold text-black">It All Starts Here!</h3>
          <span className="text-red-500 text-xs flex items-center cursor-pointer hover:text-white">
            Ahemdabad <BiChevronDown />
          </span>
        </div>
        <div className="flex w-35 h-8 float-end gap-5">
          <button className="text-xs text-black border-2 px-2 py-2 rounded-md" onClick={redirectToPlatStore}>Use App</button>
          <BiSearch className="w-8 h-8 me-2 fill-black"/>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
      />
    </div>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-59 h-10">
            <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
             alt="logo" 
             className="w-full h-full bg-white" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md border-2">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return <>
    <nav className="bg-white h-13">
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>

      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      
      <div className="md:hidden lg:hidden">
        <NavSm />
      </div>
    </nav>
  </>
  
};

export default Navbar;