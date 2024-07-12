import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import "../css/PaymentMethod.css";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export const PaymentMethod = () => {
  const [amount, setAmount] = useState("1");
  const [pixAmount, setPixAmount] = useState(30500);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount((event.target as HTMLInputElement).value);
  };
  const calculetePixInstallment = (pixInstallment: number) => {
    const amountInstallment = pixAmount / pixInstallment;
    amountInstallment.toFixed(2);
    return amountInstallment;
  };
  const controlProps = (item: string) => ({
    checked: amount === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
    checkedIcon: <CheckCircleIcon />,
  });
  return (
    <main>
      <Header title={"João, como você quer pagar ?"} />
      <body>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={amount}
            name="radio-buttons-group"
            value={amount}
            onChange={handleChange}
            className="RadioGroup"
          >
            {amount === "1" ? (
              <fieldset className="RadioContainerSelected">
                <legend className="RadioContainerLegend">Pix</legend>
                <div className="RadioContainerAmount">
                  <p>
                    <b>{1}x </b>
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerCashback">Ganhe 3% de Cashback</p>
                  <span className="span">
                    🤑 R$ 300,00 de volta no seu Pix na hora
                  </span>
                </div>
                <Radio
                  {...controlProps("1")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </fieldset>
            ) : (
              <fieldset className="RadioContainer">
                <legend className="RadioContainerLegend">Pix</legend>
                <div className="RadioContainerAmount">
                  <p>
                    <b>{1}x </b>
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerCashback">Ganhe 3% de Cashback</p>
                  <span className="span">
                    🤑 R$ 300,00 de volta no seu Pix na hora
                  </span>
                </div>
                <Radio
                  {...controlProps("1")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </fieldset>
            )}
            {amount === "2" ? (
              <fieldset className="RadioContainerSelected">
                <legend className="RadioContainerLegendDiv">
                  Pix Parcelado
                </legend>
                <div className="RadioContainerAmount">
                  <p>
                    <b>{2}x </b>
                    {calculetePixInstallment(2).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("2")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </fieldset>
            ) : (
              <fieldset className="RadioContainer">
                <legend className="RadioContainerLegendDiv">
                  Pix Parcelado
                </legend>
                <div className="RadioContainerAmount">
                  <p>
                    <b>{2}x </b>
                    {calculetePixInstallment(2).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("2")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </fieldset>
            )}
            {amount === "3" ? (
              <div className="RadioContainerSelected">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{3}x </b>
                    {calculetePixInstallment(3).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("3")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="RadioContainer">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{3}x </b>
                    {calculetePixInstallment(3).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("3")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            )}
            {amount === "4" ? (
              <div className="RadioContainerSelected">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{4}x </b>

                    {calculetePixInstallment(4).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <span className="span">
                    -3% de juros: Melhor opção de parcelamento
                  </span>
                </div>
                <Radio
                  {...controlProps("4")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="RadioContainer">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{4}x </b>
                    {calculetePixInstallment(4).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <span className="span">
                    -3% de juros: Melhor opção de parcelamento
                  </span>
                </div>
                <Radio
                  {...controlProps("4")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            )}
            {amount === "5" ? (
              <div className="RadioContainerSelected">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{5}x </b>
                    {calculetePixInstallment(5).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("5")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="RadioContainer">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{5}x </b>
                    {calculetePixInstallment(5).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("5")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            )}
            {amount === "6" ? (
              <div className="RadioContainerSelected">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{6}x </b>
                    {calculetePixInstallment(6).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  className="RadioButton"
                  {...controlProps("6")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="RadioContainer">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{6}x </b>
                    {calculetePixInstallment(6).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  className="RadioButton"
                  {...controlProps("6")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            )}
            {amount === "7" ? (
              <div className="RadioContainerSelected">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{7}x </b>
                    {calculetePixInstallment(7).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("7")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="RadioContainer">
                <div className="RadioContainerAmount">
                  <p>
                    <b>{7}x </b>
                    {calculetePixInstallment(7).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="RadioContainerAmountTotal">
                    Total:{" "}
                    {pixAmount.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Radio
                  {...controlProps("7")}
                  sx={{
                    color: "default",
                    "&.Mui-checked": {
                      color: "#03D69D",
                    },
                  }}
                />
              </div>
            )}
          </RadioGroup>
        </FormControl>
      </body>

      <Footer />
    </main>
  );
};
