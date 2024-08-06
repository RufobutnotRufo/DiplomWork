import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
