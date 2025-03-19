import Navbar from "../components/Navbar";
import Userprofile from "../components/Userprofile";

const Usersettings = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="bg-BG flex flex-col pt-20 items-center w-screen h-screen">
        {/* Header */}
        <div className="bg-Primary font-SourceSherif font-extrabold text-2xl md:text-3xl lg:text-3xl w-2/3 p-2 rounded-t-lg">
          User Settings
        </div>

        {/* Main Content Container */}
        <div className="bg-blue-100/18 flex flex-row w-2/3 h-screen lg:h-5/6 rounded-b-4xl pr-6">
          {/* Sidebar */}
          <div className="hidden bg-Primary/10 border-Text/10 w-1/4 p-2 font-Roboto_Mono font-bold text-xl lg:flex flex-col border-4 border-t-0 rounded-b-4xl justify-between items-center">
            <div className="grid grid-col-3 gap-2 pt-8 px-auto">
              <button
                className="text-left p-2 transition-all duration-200 
                    hover:bg-Primary/60 
                    focus:outline-none focus:ring-2 focus:ring-Primary focus:ring-offset-1 
                    rounded-xl"
              >
                Profile
              </button>
              <button
                className="text-left p-2 transition-all duration-200 
                    hover:bg-Primary/60 
                    focus:outline-none focus:ring-2 focus:ring-Primary focus:ring-offset-1 
                    rounded-xl"
              >
                Security
              </button>
              <button
                className="text-left p-2 transition-all duration-200 
                    hover:bg-Primary/60 
                    focus:outline-none focus:ring-2 focus:ring-Primary focus:ring-offset-1 
                    rounded-xl"
              >
                Legal Agreement
              </button>
            </div>
            <div className="flex justify-center pb-14">
              <button
                className="text-Accent text-xl transition-all duration-200  
                    focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 
                    rounded-xl"
              >
                Delete Account
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <Userprofile />
        </div>
      </div>
    </div>
  );
};

export default Usersettings;
