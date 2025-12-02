import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ScreenLoding from "./page/screen_loding.jsx"; 
import Beranda_Menu from "./page/beranda_menu.jsx";
import Credits from "./page/credits.jsx";
import PlayGame from "./page/Play_Game.jsx";
import PengenalanPersen from "./PlayGame/pengenalan.jsx";
import Soal from "./PlayGame/latihansoal.jsx";
import Soal2 from "./PlayGame/latihansoal2.jsx";
import ScrollToTop from "./page/ScrollToTop";
import Quiz from "./PlayGame/Quiz";
import Startquiz from "./PlayGame/Startquiz";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ScreenLoding />}/>
        <Route path="/beranda_menu" element={<Beranda_Menu />}/>
        <Route path="/credits" element={<Credits />}/>
        <Route path="/PlayGame" element={<PlayGame />}/>
        <Route path="/pengenalan" element={<PengenalanPersen/>}/>
        <Route path="/latihansoal" element={<Soal />}/>
        <Route path="/latihansoal2" element={<Soal2 />}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/Startquiz" element={<Startquiz/>}/>
      </Routes>
    </Router>
  );
}

export default App;
