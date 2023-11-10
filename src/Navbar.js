import { Divide as Hamburger } from "hamburger-react";
import Sidebar from "./sidebar";
import { useState } from "react";

function Navbar() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="nav">
      <div className="navbar fixed p-2 w-full h-16 bg-[#60da09] flex items-center">
        <div className="burger">
          <Hamburger
            duration={1}
            color="#f5f5d7"
            rounded
            onToggle={() => {
              setExpanded((curr) => !curr);
            }}
          />
        </div>
      </div>

      <div
        className={`sidebar flex text-center text-xl h-screen w-full justify-center bg-[#60da09]  ${
          expanded ? "hidden" : "block"
        }`}>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default Navbar;
