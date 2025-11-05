import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ScreenLoding from "./page/screen_loding.jsx"; 
import Beranda_Menu from "./page/beranda_menu.jsx";
import Credits from "./page/credits.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenLoding />} />
        <Route path="/beranda_menu" element={<Beranda_Menu/>} />
        <Route path="/credits" element={<Credits/>}/>
      </Routes>
    </Router>
  );
}

export default App;
