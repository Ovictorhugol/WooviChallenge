import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../css/PaymentInfo.css";
import { useState } from "react";
import { FormControl } from "@mui/material";
interface IPayment {
  page: string;
}
export const PaymentInfo = ({ page }: IPayment) => {
  const [pixAmount, setPixAmount] = useState(30500);
  const calculetePixInstallment = (pixInstallment: number) => {
    const amountInstallment = pixAmount / pixInstallment;
    amountInstallment.toFixed(2);
    return amountInstallment;
  };
  return (
    <FormControl
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <div className="PaymentInfo">
        <div className="PaymentInfoList">
          <li className="PaymentInfoListOption">
            <div className="PaymentInfoListOptionIcon">
              {page === "info" ? (
                <CheckCircleIcon sx={{ color: "#03D69D", fontSize: 15 }} />
              ) : (
                <PanoramaFishEyeIcon sx={{ color: "#03D69D", fontSize: 15 }} />
              )}

              <p> 1 entrada no Pix</p>
            </div>
            <p className="PaymentInfoListOptionIconTotal">
              {calculetePixInstallment(2).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </li>
          <li className="PaymentInfoListOption">
            <div className="PaymentInfoListOptionIcon">
              {page === "info" ? (
                <PanoramaFishEyeIcon sx={{ color: "#03D69D", fontSize: 15 }} />
              ) : (
                <PanoramaFishEyeIcon sx={{ color: "#E5E5E5", fontSize: 15 }} />
              )}

              <p> 2ª no cartão</p>
            </div>
            <p className="PaymentInfoListOptionIconTotal">
              {calculetePixInstallment(2).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </li>
        </div>

        <div className="PaymentInfoCET">
          <div>
            <p> CET: 0,5%</p>
          </div>
          <p>
            Total:
            {calculetePixInstallment(1).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="PaymentInfoHelp">
          <p>
            <b>Como funciona?</b>
          </p>
          <KeyboardArrowUpIcon />
        </div>
      </div>
      <div className="PaymentInfoId">
        <p className="PaymentInfoIdP">Identificador:</p>
        <p className="PaymentInfoIdNumber">2c1b951f356c4680b13ba1c9fc889c47</p>
      </div>
    </FormControl>
  );
};
