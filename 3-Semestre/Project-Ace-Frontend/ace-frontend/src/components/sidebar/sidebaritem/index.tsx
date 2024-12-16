import React, { ReactElement } from "react";
import "./styles.css";

interface SidebarItemProps {
  Icon: React.ElementType;
  Text: string;
}

const SidebarItem = ({ Icon, Text }: SidebarItemProps): ReactElement => {
  return (
      <div className="Container1">
        <div className="d1"><Icon /></div>
        <div className="d2">{Text}</div>
      </div>
  );
};

export default SidebarItem;
