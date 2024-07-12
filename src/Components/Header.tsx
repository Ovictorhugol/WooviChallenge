import React from "react";
import WooviLogo from "../assets/Logo.svg";
import "../css/Header.css";
interface ITitle {
  title: string;
}
export const Header = ({ title }: ITitle) => {
  return (
    <header className="Header">
      <img src={WooviLogo} alt="Woovi Logo" />
      <p className="headerLabel">{title}</p>
    </header>
  );
};
