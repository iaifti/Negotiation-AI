import { TbGavel } from "react-icons/tb";
import Cases from "./Cases";
import Suggestedchats from "./Suggestedchats";

const Homepage = () => {
  return (
    //entire page below the navbar.
    <div className="flex flex-col text-Text">
      <div className="flex flex-col sm:flex-row">
        {/*chats section of the page */}
        <div className="lg:w-1/4">
          <Suggestedchats />
        </div>

        {/*Chat box area */}
        <div className="mt-10 flex flex-col items-center gap-6 w-full font-Roboto_Mono">
          <span className="font-medium">
            Hi, {"{"}User Name{"}"}
          </span>
          <div className="bg-Primary/50 flex flex-row p-2 lg:p-3 px-5 gap-3 items-baseline rounded-4xl px-auto">
            <span className="font-medium text-xs lg:text-lg">
              Let the negotiations begin
            </span>
            <TbGavel />
          </div>
          <div className="bg-blue-100/55 w-7/8 md:w-7/8 rounded-3xl mx-auto py-2.5">
            <input
              type="text"
              placeholder="I want to raise my pay ..."
              className="placeholder-Text/40 w-full p-1 pl-6 rounded-lg focus:outline-none focus:ring-0 focus:transparent"
            />
          </div>
          <div className="flex flex-col mt-8 font-medium text-xl md:text-2xl leading-10">
            <span className="">Don't know where to start?</span>
            <span>Select a situation:</span>
          </div>
          <Cases />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
