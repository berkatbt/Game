import React from "react";
import "../index.css";
import TiltedCard from "../components/TiltedCard.jsx";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";




export default function Credits() {
  const navigate = useNavigate();
  return (
    <div className="relative  overflow-hidden h-screen fixed flex flex-col bg-[#CBF3BB] min-w-screen h-screen flex justify-center items-center">

      <button onClick={() => navigate('/beranda_menu')} className="p-5 absolute top-7 left-4 rounded-[1000px] shadow-lg bg-[#98F2AD] z-50 cursor-pointer"><span className="rubik-bubbles-regular text-[20px] text-[#CBF3BB] hover:scale-102 stroke-black-500">Kembali</span></button>
      <img src="/rumput.png" alt="rumput"
        className=" absolute h-20 w-20 ml-[-20px] ml-[-1699px] top-[-51px] z-0"
      />
      <img src="/rumput.png" alt="rumput"
        className=" absolute h-20 w-20 ml-[-20px] ml-[-1760px] top-[-51.2px] z-0"
      />
      <img src="/rumput.png" alt="rumput"
        className=" absolute h-20 w-20 ml-[-20px] ml-[-1750px] top-[97px] z-0 rotate-180"
      />
      <img src="/rumput.png" alt="rumput"
        className=" absolute h-20 w-20 ml-[-20px] ml-[-1815px] top-[97px] z-0 rotate-180"
      />

      <div className=" ">
        



<TiltedCard
  imageSrc="/Pendiri.png"
  captionText="Founder & Lead Developer"
  containerHeight="900px"
  containerWidth="500px"
  imageHeight="1000px"
  imageWidth="1000px"
  rotateAmplitude={12}
  scaleOnHover={1}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <div className="relative">
      {/* Nama */}
      <span className="absolute top-30 left-196 rubik-bubbles-regular text-[55px] text-[#CBF3BB] hover:scale-105 stroke-black-500 transition">
        Berkat (Backend)
      </span>

      <span className="absolute top-30 left-5 rubik-bubbles-regular text-[55px] text-[#CBF3BB] hover:scale-105 stroke-black-500 transition">
        Rendy (Frontend and Backend)
      </span>

      {/* Instagram Icon */}

    </div>
    
  }
/>

        <a
        href="https://instagram.com/Jamallbee._"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-225 left-5 text-[white] hover:text-pink-500 hover:scale-125 transition-all duration-300"
      >
        <FaInstagram size={29} />
      </a>
 
      </div>
    </div>
  );
}

