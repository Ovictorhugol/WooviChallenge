import { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import "../css/PixCreditCard.css";
import { PaymentInfo } from "../Components/PaymentInfo";
export const PixCreditCard = () => {
  const [secondsAmount, setSecondsAmount] = useState(8 * 60);

  useEffect(() => {
    setTimeout(() => {
      if (secondsAmount > 0) setSecondsAmount((state) => state - 1);
      else setSecondsAmount(8 * 60);
    }, 1000);
  }, [secondsAmount]);
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#133A6"),
    backgroundColor: "#133A6F",
    "&:hover": {
      backgroundColor: "#133A6F",
    },
  }));
  const getDate = () => {
    const date = new Date();
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  };
  const getTimeout = () => {
    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;
    return (
      <div>
        <span>{minutes.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>
    );
  };

  return (
    <div className="PixCreditCard">
      <Header title={"João, pague a entrada de R$ 15.300,00 pelo Pix"} />
      <img
        className="PixCreditCardImg"
        src="https://s3-alpha-sig.figma.com/img/4f1f/ba49/3120f0dbff05f21b3d9b4374bcd6fad3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iGYj9WuVlDsWL14ShFKYg2QncpTIDLJolDGQ13VFXBtwbCvORDTCRBjgMKkhkEU~F6Dkym~wccCgWF9Ow0cGOaFSPtKRDxJqetfuAX2l~cBpru8oFvFOrS2llQU1F8oquQ2IjanjRFyHuGts88rTQs4CbbS8l9E-7Ri1gE-yw~51OM-cAH~7Olt0qXuIcXmGL1Tun8ZChO6eelMuHaaHe2XAJIY3U~D-gY5mtzadhzl9oeA3YYIowQtT6c6m59im8n62~vto4phN2jzicnP24nA8its1Ur9LvHSD3qc~cu2aRQ2z177yP5GDp9BDbC4yl7ZTJ5tPfwr5ymV4mLu~YQ__"
      />
      <div className="PixCreditCardButtonInfo">
        <ColorButton variant="contained" endIcon={<FileCopyIcon />}>
          Clique para copiar QR CODE
        </ColorButton>
        <div className="PixCreditCardTextTimer">
          <p className="PixCreditCardText">Prazo de pagamento:</p>
          <div className="PixCreditCardTimer">
            <p className="PixCreditCardTimerP">{getDate()}</p>
            <p className="PixCreditCardTimerP"> - </p>
            <p className="PixCreditCardTimerP">
              <b>{getTimeout()}</b>
            </p>
          </div>
        </div>
      </div>
      <PaymentInfo page="" />
      <Footer />
    </div>
  );
};
