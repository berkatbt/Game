import React from "react";
import "../index.css";
import { motion } from "framer-motion";



export default function Beranda_Menu() {
  return (
    <div className="fixed flex flex-col bg-[#CBF3BB] min-w-screen h-screen flex justify-center items-center">
      <div className="">
        <motion.img
          //animasi framer motion
          initial={{ y: -10 }}
          animate={{ y: -300 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
          src="/Matematix.png"
          alt="judul_halaman_home"
          className=""/>
      </div>

      <div className="relative size-1 flex flex-col items-center">
        <motion.button
          className="mt-1 bg-[#98F2AD] px-20 py-4 rounded-[20px] text-xl font-bold  hover:scale-102 transition duration-300 shadow-xl"
          initial={{ y: 700 }}
          animate={{ y: -300 }}
          transition={{ delay: 1, type: 'spring', stiffness: 70 }}
        ><span className="rubik-bubbles-regular text-[55px] text-[#CBF3BB] stroke-black-500">Play</span></motion.button>
        <motion.button
          className="mt-2 bg-[#98F2AD] px-20 py-4 rounded-[20px] hover:scale-102 transition duration-300 shadow-xl"
          initial={{ y: 400 }}
          animate={{ y: -280 }}
          transition={{ delay: 2, type: 'spring', stiffness: 60 }}
        ><span className="rubik-bubbles-regular text-[55px] text-[#CBF3BB] hover:scale-102 stroke-black-500">Credits</span></motion.button>
      </div>





      <div className="flex flex-col items-center mb-[-250px] ">
        <div className="flex flex-row mt-4 min-w-screen h-50 items-end">
          <img src="/rumput.png" alt="rumput"
            className=" h-200 w-200 ml-[-120px] z-10 mb-[-20px]"
          />

          <img src="/dino_1.png" alt="dino"
            className="relative ml-[-670px] z-0  mb-[-20px]"
          />

          <img src="/rumput.png" alt="rumput"
            className=" h-200 w-200 ml-[-20px] ml-[960px]"
          />
        </div>
      </div>

    </div>

  );
}