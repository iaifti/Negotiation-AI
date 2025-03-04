import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Homepage from "../components/Homepage";

const Dashboard = () => {
  return (
    <div className="bg-BG min-h-screen w-full flex flex-col">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
};

export default Dashboard;
