import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import LoginRegister from "./Pages/loginRegister/LoginRegister";
import { MyContextProvider } from "./UseContext";
import HeroSlider from "./HeroSlider/HeroSlider";
import RecentlyUpdated from "./RecentlyUpdated/RecentlyUpdated";


function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
      <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <RecentlyUpdated/>
              </>
            }
          ></Route>
          <Route path="/Sign-Up" element={<LoginRegister />}></Route>
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
