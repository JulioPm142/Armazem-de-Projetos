import React, { useEffect, useState } from "react";
import "./styles.css";
import { FaTimes, FaUserPlus, FaIdCard,FaChartBar,FaSignOutAlt} from "react-icons/fa";
import SidebarItem from "./sidebaritem";
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png";

interface SidebarProps {
  active: boolean;
  close: () => void;
}

// useEffect(() => {}, [])// 


const Sidebar: React.FC<SidebarProps> = ({ active, close }) => {
const [userPermissao, setUserPermissao] = useState<string | null>(null)
useEffect(() => {
  const userPermissaoo = localStorage.getItem("role");
  setUserPermissao(userPermissaoo)
},[])

  if (userPermissao == "ADMIN") {
    return (
      <div className="sidebar">
        {/* <div className="sidebaropacity"></div> */}
        <div className={`Container2 ${active ? "active" : ""}`}>
          <FaTimes onClick={close} />

          <img className="logo" src={logo} alt=""></img>
          <div className="Content">
            <Link to="/cadastroCLI">
              <SidebarItem Icon={FaUserPlus} Text="Cadastro" />
            </Link>

            <Link to="/cadastroadm">
              <SidebarItem Icon={FaUserPlus} Text="Cadastro de Usuário" />
            </Link>

            <Link to="/ControleTitulosFIN">
              <SidebarItem Icon={FaIdCard} Text="Controle de Títulos" />
            </Link>

            <Link to="/relatoriomenu">
              <SidebarItem Icon={FaChartBar} Text="Relatórios" />
            </Link>

            <Link to="/">
              <SidebarItem Icon={FaSignOutAlt} Text="Sair" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (userPermissao == "COMERCIAL") {
    return (
      <div className="sidebar">
        <div className={`Container2 ${active ? "active" : ""}`}>
          <FaTimes onClick={close} />

          <img className="logo" src={logo} alt=""></img>
          <div className="Content">
            <Link to="/cadastroCLI">
              <SidebarItem Icon={FaUserPlus} Text="Cadastro" />
            </Link>
            <Link to="/ControleTitulosFIN">
              <SidebarItem Icon={FaIdCard} Text="Controle de Títulos" />
            </Link>
            <Link to="/">
              <SidebarItem Icon={FaSignOutAlt} Text="Sair" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (userPermissao == "FINANCEIRO") {
    return (
      <div className="sidebar">
        <div className={`Container2 ${active ? "active" : ""}`}>
          <FaTimes onClick={close} />

          <img className="logo" src={logo} alt=""></img>
          <div className="Content">
            <Link to="/ControleTitulosFIN">
              <SidebarItem Icon={FaIdCard} Text="Controle de Títulos" />
            </Link>

            <Link to="/relatoriomenu">
              <SidebarItem Icon={FaChartBar} Text="Relatórios" />
            </Link>
            
            <Link to="/">
              <SidebarItem Icon={FaSignOutAlt} Text="Sair" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <>
    </>;
  };
};

export default Sidebar;
