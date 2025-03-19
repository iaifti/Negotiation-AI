import Navbar from "../components/Navbar";
import Userprofile from "../components/Userprofile";

const Usersettings = () => {
  return (
    <>
      <Navbar />
      <div className="bg-BG flex flex-col pt-20 items-center w-full h-screen ">
        {/* Header */}
        <div className="bg-Primary font-SourceSherif font-extrabold text-2xl md:text-3xl lg:text-4xl w-2/3 p-2 rounded-t-lg">
          User Settings
        </div>

        {/* Main Content Container */}
        <div className="bg-blue-100/18 flex flex-row w-2/3 md:h-auto lg:h-4/5 rounded-b-4xl pr-6">
          {/* Sidebar */}
          <div className="hidden bg-Primary/10 border-Text/10 w-1/4 p-2 font-Roboto_Mono font-bold text-xl lg:flex flex-col border-4 border-t-0 rounded-b-4xl justify-between items-center">
            <div className="flex flex-col gap-8 pt-8 pl-6 items-start w-full overflow-hidden">
              <button className="focus:outline-1 focus:ring-2 focus:text-Primary focus:rounded-2xl focus:p-1">
                Profile
              </button>
              <button className="focus:outline-1 focus:ring-2 focus:text-Primary focus:rounded-2xl focus:p-1">
                Security
              </button>
              <button className="text-left focus:outline-1 focus:ring-2 focus:text-Primary focus:rounded-2xl focus:p-1">
                Legal Agreement
              </button>
            </div>
            <div className="flex justify-center pb-14">
              <button className="text-Accent text-xl">Delete Account</button>
            </div>
          </div>

          {/* Profile Section */}
          <Userprofile />
        </div>
      </div>
    </>
  );
};

export default Usersettings;
