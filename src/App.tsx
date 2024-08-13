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
                <HeroSlider />
                <Video/>
                <NewMovies/>
              </>
            }
          ></Route>
          <Route path="/Sign-Up" element={<LoginRegister />}></Route>
          <Route path="/Description" element={<Description />}></Route>
          <Route path="/Description/Genre" element={<SelectedGenre />}></Route>
          <Route path="/Genres" element={<Genres />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/WatchNow" element={<WatchLater/>}></Route>
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
}

//Исправить жанры н астранице описания
//приступить к трендам

export default App;
