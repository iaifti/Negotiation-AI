import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
