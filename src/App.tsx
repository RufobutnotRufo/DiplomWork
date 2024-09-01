import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import LoginRegister from "./Pages/loginRegister/LoginRegister";
import { MyContextProvider } from "./UseContext";
import HeroSlider from "./HeroSlider/HeroSlider";
import RecentlyUpdated from "./RecentlyUpdated/RecentlyUpdated";
import Description from "./Pages/loginRegister/Description/Description";
import SelectedGenre from "./Pages/loginRegister/SelectedGenre/SelectedGenre";
import Genres from "./Pages/loginRegister/Genres/Genres";
import Movies from "./Pages/loginRegister/Movies/Movies";
import WatchLater from "./Pages/loginRegister/WatchLater/WatchLater";
import Video from "./VideoComp/Video";
import NewMovies from "./NewMovies/NewMovies";
import Footer from "./Footer/Footer";
import Store from "./Pages/loginRegister/Store/Store";
import BusketPage from "./Pages/loginRegister/BusketPage/BusketPage";
import AdverisingVideo from "./AdvertisingVideo/AdvertisingVideo";
import OurCinema from "./OurCinema/OurCinema";

function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <Header />
        <RecentlyUpdated />
        <Routes>
          <Route
            path="/"
            element={
              <>
               <AdverisingVideo/>
                <HeroSlider />
                <Video />
                <NewMovies />
                <OurCinema />
              </>
            }
          ></Route>
          <Route path="/Sign-Up" element={<LoginRegister />}></Route>
          <Route path="/Description" element={<Description />}></Route>
          <Route path="/Description/Genre" element={<SelectedGenre />}></Route>
          <Route path="/Genres" element={<Genres />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/WatchNow" element={<WatchLater />}></Route>
          <Route path="/Store" element={<Store />}></Route>
          <Route path="/Busket" element={<BusketPage />}></Route>
        </Routes>
        <Footer />
      </MyContextProvider>
    </BrowserRouter>
  );
}

//Исправить жанры н астранице описания
//приступить к трендам

export default App;
