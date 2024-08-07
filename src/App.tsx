import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import LoginRegister from "./Pages/loginRegister/LoginRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/Sign-Up" element={<LoginRegister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
