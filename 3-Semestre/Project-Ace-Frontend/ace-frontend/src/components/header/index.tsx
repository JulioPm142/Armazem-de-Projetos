import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../sidebar";
// import pessoa from "../../img/pessoa.png";
import "./styles.css";

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="header">
      <div className="Container3">
        <FaBars onClick={() => setSidebar(!sidebar)} />
        <Sidebar active={sidebar} close={closeSidebar} />
        {/* <img src={pessoa} alt="" /> */}
      </div>
      </div>
  );
};

export default Header;
