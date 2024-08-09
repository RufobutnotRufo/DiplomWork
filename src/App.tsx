import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import LoginRegister from "./Pages/loginRegister/LoginRegister";
import { MyContextProvider } from "./UseContext";
import HeroSlider from "./HeroSlider/HeroSlider";
import RecentlyUpdated from "./RecentlyUpdated/RecentlyUpdated";
import Description from "./Pages/loginRegister/Description/Description";


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
                <Description />
              </>
            }
          ></Route>
          <Route path="/Sign-Up" element={<LoginRegister />}></Route>
          {/* <Route path="/Description" element={<Description />}></Route> */}
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
