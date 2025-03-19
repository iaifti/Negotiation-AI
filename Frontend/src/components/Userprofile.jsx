import React from "react";

const Userprofile = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-10 p-2 sm:pl-8 items-center">
        {/* Profile Info */}
        <div className="flex gap-6 mt-12 items-center">
          <div className="bg-Accent w-10 h-10 lg:w-20 lg:h-20 xl:w-22 xl:h-22 rounded-full"></div>
          <div className="flex flex-col gap-1 text-lg">
            <span className="font-bold text-md lg:text-xl">John Doe</span>
            <span className="text-xs lg:text-sm">Unknown, MO</span>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-5 xl:gap-10 font-SourceSherif">
          <div className="flex flex-col lg:flex-row gap-5 xl:gap-20 ">
            <input
              type="text"
              placeholder="John"
              className="bg-Text/5 py-3 px-8 rounded-2xl focus:outline-none focus:ring-0 focus:transparent w-full min-w-0"
            />
            <input
              type="text"
              placeholder="Doe"
              className="bg-Text/5 py-3 px-8 rounded-2xl focus:outline-none focus:ring-0 focus:transparent w-full min-w-0"
            />
          </div>
          <input
            type="text"
            placeholder="JohnDoe@Domain.com"
            className="bg-Text/5 py-3 px-8 rounded-2xl focus:outline-none focus:ring-0 focus:transparent w-full min-w-0"
          />
          <div className="flex flex-col lg:flex-row gap-5 xl:gap-20">
            <input
              type="text"
              placeholder="Unknown, MO"
              className="bg-Text/5 py-3 px-8 rounded-2xl focus:outline-none focus:ring-0 focus:transparent w-full min-w-0"
            />
            <input
              type="text"
              placeholder="(123)-456-7890"
              className="bg-Text/5 py-3 px-8 rounded-2xl focus:outline-none focus:ring-0 focus:transparent w-full min-w-0"
            />
          </div>
          {/* Save Button */}
          <div className="flex justify-center w-full">
            <button className="bg-Primary text-text font-SourceSherif font-bold py-2 px-5 rounded-3xl w-fit border-2 cursor-pointer hover:bg-Primary/90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
