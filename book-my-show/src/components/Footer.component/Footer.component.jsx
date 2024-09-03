import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex px-24 bg-slate-900 justify-between">
          <div className="flex h-20 flex-row gap-4 items-center">
            <img
              className="h-11 w-auto"
              src="https://in.bmscdn.com/webin/common/icons/hut.svg"
              alt="Logo"
            />
            <p className="text-white font-bold text-lg">List your Show</p>
            <p className="text-white text-sm">
              Got a show, event, activity or a great experience? Partner with us
              & get listed on BookMyShow
            </p>
          </div>
          <div className="flex items-center ">
          <button className="bg-red-400 w-36 h-10 text-white rounded-sm"><a href="https://in.bookmyshow.com/list-your-show">Contact today!</a></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
