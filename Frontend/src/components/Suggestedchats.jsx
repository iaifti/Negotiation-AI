import { useState } from "react";
import { BsFillBarChartFill, BsFillTrash3Fill } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
import { FaPenToSquare, FaBars } from "react-icons/fa6";
// import { MdMoreVert } from "react-icons/md";

// Reusable ChatItem component
const ChatItem = ({ title }) => {
  return (
    <div className="bg-amber-50 px-5 mt-3 justify-between flex h-10 items-center rounded-3xl gap-8 cursor-pointer">
      <div>{title}</div>
      <div className="flex justify-around gap-3 items-center">
        <div
          className="text-lg text-gray-500/40 transform transition duration-300 hover:scale-110 hover:text-gray-500/70"
          title="View Stats"
        >
          <BsFillBarChartFill />
        </div>
        <div
          className="text-lg text-gray-500/60 transform transition duration-300 hover:scale-110 hover:text-gray-500/90"
          title="Preview"
        >
          <VscOpenPreview />
        </div>
        <div
          className="pb-0.5 text-md text-Secondary/70 transform transition duration-300 hover:scale-110 hover:text-red-700"
          title="Delete"
        >
          <BsFillTrash3Fill />
        </div>
      </div>
    </div>
  );
};

const Suggestedchats = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example data for chat items
  const chatItems = [
    { id: 1, title: "Increase Pay" },
    { id: 2, title: "Hiring Pac..." },
    { id: 3, title: "Contract Terms" },
    { id: 4, title: "Increase Pay" },
    { id: 5, title: "Hiring Pac..." },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 left-5 text-xl sm:hidden z-50 bg-amber-50 p-1 rounded-md shadow"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed ${
          isOpen
            ? "top-20 left-2 bg-Secondary translate-x-0"
            : "top-20 left-0 md:ml-5 lg:ml-10 bg-Primary/30 -translate-x-full"
        } min-h-full w-64 transition-transform duration-500 ease-in-out p-5 md:translate-x-0 md:relative md:w-72 lg:rounded-2xl rounded-2xl shadow-lg`}
      >
        {/* Header section */}
        <div className="flex pt-10 md:py-3 pb-2 justify-center ">
          {/* Chats + input icon */}
          <div className="flex items-baseline gap-2 ">
            <span className="text-2xl font-Roboto_Mono">Chats</span>
            <div className="opacity-75 text-1.5xl" title="Edit">
              <FaPenToSquare />
            </div>
          </div>
          {/* More icon */}
          {/* <div className="text-2xl ml-auto mr-2.5 text-Accent" title="More options"><MdMoreVert /></div> */}
        </div>

        {/* Chat items list */}
        <div className="flex flex-col gap-2 md:pb-12 font-SourceSherif text-Text/80">
          {chatItems.map((item) => (
            <ChatItem key={item.id} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestedchats;
