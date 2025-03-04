import { GiInjustice } from "react-icons/gi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";

const Cases = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-2 mb-26 justify-evenly w-1/2 gap-5 overflow-auto">
      <div className="bg-red-400/20 mt-3 p-4 py-5 gap-4 rounded-2xl flex flex-col items-center">
        <span className="font-medium">Contract dispute</span>
        <GiInjustice className="text-Secondary/80 text-4xl lg:text-5xl" />
        <span>
          Need to negotiate legal terms or resolve a dispute with a lawyer?
        </span>
      </div>
      <div className="bg-red-400/20 mt-3 p-4 py-5 gap-4 rounded-2xl flex flex-col items-center">
        <span className=" font-medium">Deal Talks</span>
        <FaHandshakeAngle className="text-Secondary/80 sm:text-4xl lg:text-5xl" />
        <span>
          Need to Negotiating terms, pricing, or partnerships to secure a
          beneficial business agreement?
        </span>
      </div>
      <div className="bg-red-400/20 mt-3 p-4 py-5 gap-4 rounded-2xl flex flex-col items-center">
        <span className=" font-medium">Price Haggle</span>
        <GiPriceTag className="text-Secondary/80 sm:text-4xl lg:text-5xl " />
        <span>
          Need to Negotiating a lower price for a product or service to get the
          best possible deal?
        </span>
      </div>
    </div>
  );
};

export default Cases;
