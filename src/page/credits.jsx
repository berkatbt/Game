import React from "react";
import "../index.css";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, Link } from "react-router-dom";



export default function Beranda_Menu() {
  const navigate = useNavigate();
  return (
    <div className="fixed flex flex-col bg-[#CBF3BB] min-w-screen h-screen flex justify-center items-center">

      <span className="p-10  absolute top-7 left-4 rounded-[1000px] shadow-lg bg-[#98F2AD] "><Link to="/beranda_menu">halo</Link></span>

      <div className=" relative w-[2000px] h-[2000px]">
        <span className=" absolute top-25 left-40  rubik-bubbles-regular text-[55px] text-[#CBF3BB] hover:scale-102 stroke-black-500 ">Berkat</span>
        <img src="/Berkat.png" alt="Berkat" className="absolute top-30   right-[1300px] w-210 h-210 z-10" />
        <img src="/rumput.png" alt="rumput"
          className=" absolute top-40  h-200 w-200 z-20"
        />
      </div>
    </div>
  );
}

