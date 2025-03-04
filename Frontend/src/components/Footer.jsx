import { BsFillBarChartFill } from "react-icons/bs";
import { IoMdChatbubbles } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-Text text-white flex flex-row items-end justify-around p-8">
      <span>Negotiation AI</span>
      <div className="flex flex-row items-baseline gap-0.5">
        <BsFillBarChartFill className="text-Secondary text-lg pt-1" />
        <span>Reports</span>
      </div>
      <div className="flex flex-row items-baseline gap-1">
        <IoMdChatbubbles className="text-Secondary text-lg pt-0.5" />
        <span>Chats</span>
      </div>
      <div className="flex flex-row items-baseline gap-1.5">
        <span>Follow Us</span>
        <FaDiscord className="text-Secondary text-lg pt-1" />
        <GrInstagram className="text-Secondary text-lg pt-1" />
      </div>
    </div>
  );
};

export default Footer;
