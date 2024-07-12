import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Routes";
import "./css/App.css";
function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
