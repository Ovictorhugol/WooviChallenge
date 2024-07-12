import React from "react";
import WooviLogo from "../assets/Logo.svg";
import "../css/Footer.css";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
export const Footer = () => {
  return (
    <footer className="Footer">
      <GppGoodOutlinedIcon />
      <p>Pagamento 100% seguro via:</p>
      <img className="FooterLogo" src={WooviLogo} alt="Woovi Logo" />
    </footer>
  );
};
