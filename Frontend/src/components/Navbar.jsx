import { MdOutlineAdd } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" text-black p-4 w-full h-20 flex justify-between items-center font-Roboto">
      {/* left section of the navbar */}
      <div className="flex justify-between items-center ">
        <div className="bg-Accent w-12 h-12 rounded-full mx-4"> </div>
        <span className="font-extrabold text-2xl">Negotiation AI</span>
      </div>

      {/* right section of the navbar */}
      <div className="mr-10">
        <button className="bg-Accent/45 py-0.5 px-4 rounded-2xl font-medium flex justify-center items-center transition-transform transform hover:scale-90 hover:bg-Accent/75 cursor-pointer">
          <MdOutlineAdd className="pr-1 text-2xl" />
          Invite
        </button>
      </div>
    </div>
  );
};

export default Navbar;
