import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "../css/PixCreditCardInfo.css";
import { PaymentInfo } from "../Components/PaymentInfo";
export const PixCreditCardInfo = () => {
  const [secondsAmount, setSecondsAmount] = useState(8 * 60);
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#133A6"),
    backgroundColor: "#133A6F",
    "&:hover": {
      backgroundColor: "#8dbbfb",
    },
  }));
  useEffect(() => {
    setTimeout(() => {
      if (secondsAmount > 0) setSecondsAmount((state) => state - 1);
      else setSecondsAmount(8 * 60);
    }, 1000);
  }, [secondsAmount]);
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
  const [installments, setInstallments] = useState("1");
  const handleChange = (event: SelectChangeEvent) => {
    setInstallments(event.target.value as string);
  };
  return (
    <div>
      <Header title="João, pague o restante em 1x no cartão" />
      <div className="PixCreditCardInfoInput">
        <TextField
          required
          id="outlined-text"
          label="Nome Completo"
          defaultValue=" "
          size="small"
          sx={{
            width: 500,
            maxWidth: "90%",
          }}
          margin="normal"
        />

        <TextField
          required
          id="outlined-number"
          label="CPF"
          defaultValue=" "
          size="small"
          sx={{
            width: 500,
            maxWidth: "90%",
          }}
          margin="normal"
        />

        <TextField
          required
          id="outlined-number"
          label="Número do cartão"
          defaultValue=" "
          size="small"
          sx={{
            width: 500,
            maxWidth: "90%",
          }}
          margin="normal"
        />
        <FormControl
          sx={{
            width: 500,
            maxWidth: "90%",
          }}
        >
          <div className="PixCreditCardInfoInputRow">
            <TextField
              required
              id="outlined-number"
              label="Vencimento"
              defaultValue=" "
              size="small"
              sx={{
                width: 225,
                maxWidth: "45%",
              }}
              margin="normal"
            />
            <TextField
              required
              id="outlined-number"
              label="CVV"
              defaultValue=" "
              size="small"
              sx={{
                width: 225,
                maxWidth: "45%",
              }}
              margin="normal"
            />
          </div>
        </FormControl>
        <FormControl
          sx={{
            width: 500,
            maxWidth: "90%",
          }}
        >
          <InputLabel id="test-select-label">Parcela</InputLabel>
          <Select
            labelId="test-select-label"
            label="Label"
            value={installments}
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            onChange={handleChange}
          >
            <MenuItem value={1}>1x de R$ 15.300,00</MenuItem>
            <MenuItem value={2}>2x de R$ 15.300,00</MenuItem>
            <MenuItem value={3}>3x de R$ 10.196,66</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            width: 500,
            maxWidth: "90%",
          }}
        >
          <div className="PixCreditCardInfoButton">
            <ColorButton
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              Pagar
            </ColorButton>
            <div className="PixCreditCardInfoTextTimer">
              <p className="PixCreditCardInfoText">Prazo de pagamento:</p>
              <div className="PixCreditCardInfoTimer">
                <p className="PixCreditCardInfoTimerP">{getDate()}</p>
                <p className="PixCreditCardInfoTimerP">-</p>
                <p className="PixCreditCardInfoTimerP">{getTimeout()}</p>
              </div>
            </div>
          </div>
        </FormControl>
      </div>
      <div className="PixCreditPaymentInfo">
        <PaymentInfo page="info" />
      </div>
      <Footer />
    </div>
  );
};
