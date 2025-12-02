import { div, footer } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PlayGame() {
  const navigate = useNavigate();
    return (
      <div className="relative h-[300px] overflow-y-scroll overflow-x-hidden h-screen fixed flex flex-col bg-[#CBF3BB] min-w-screen h-screen flex justify-center items-center flex-grow">
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
                 <img
          //animasi framer motion
          

          src="/Matematix.png"
          alt="judul_halaman_home"
          className="absolute bottom-126.5 left-177.5"/>
          <img src="/Jejakkaki.png" alt="" className=" absolute top-90 left-400 w-100 h-150 rotate-180 scale-x-[-1]
"/>

        <div>
          <img src="/awan.png" alt="" className="absolute top-320 left-19 z-0 h-100 w-87  animate-[float_3s_ease-in-out_infinite]" />
          <img src="/bunga.png" alt="" className="absolute top-190 left-400 z-0 h-150 w-90 z-20" />
          <img src="/hitung.png" alt="" className="absolute top-615 left-410 z-0 h-90 w-65 z-20" />
        </div>

          <div className="w-full justify-center mt-10">

            
               <img src="/rumput.png" alt="rumput"
                className="absolute top-50 left-380 z-2 h-200 w-200 "
               /> 
                              <img src="/rumput.png" alt="rumput"
                className="absolute top-50 left-312 z-2 h-200 w-200 "
               /> 
            <div onClick={() => navigate("/pengenalan")} className="  absolute bg-green-300 px-10 py-13 rounded-xl shadow-lg border border-green-300 w-160 left-320 top-250">
                {/* Kegiatan 1 */}
                <h1 onClick={() => navigate("/pengenalan")} className="absolute  bottom-11 left-5 rubik-bubbles-regular text-[40px] text-[#CBF3BB]  stroke-black-500 transition">
                Kegiatan Belajar 1
                </h1>
                <p className=" absolute bottom-4 opacity-50 left-6 text-green-900 text-[20px] -mt-1  font-bold">Pengenalan Persen %</p>
              
            </div>
            
                           <img src="/rumput.png" alt="rumput"
                className="absolute top-250 right-310  z-2 h-200 w-200 "
               /> 
                              <img src="/rumput.png" alt="rumput"
                className="absolute top-250 right-259 z-2 h-200 w-200 "
               /> 

            {/* Kegiatan 2 */}
            <div onClick={() => navigate("/latihansoal")} className="  absolute bg-green-300 px-10 py-13 rounded-xl shadow-lg border border-green-300 w-160 right-320 top-450">
              <h1 className="absolute  bottom-11 left-60 rubik-bubbles-regular text-[40px] text-[#CBF3BB]  stroke-black-500 transition">
                Kegiatan Belajar 2
                </h1>
                <p className=" absolute bottom-4 opacity-50 left-128 text-green-900 text-[20px] -mt-1  font-bold">Latihan Soal</p>
            </div>

            
                           <img src="/rumput.png" alt="rumput"
                className="absolute top-450 left-380 z-2 h-200 w-200 "
               /> 
                              <img src="/rumput.png" alt="rumput"
                className="absolute top-450 left-312 z-2 h-200 w-200 "
               /> 
            {/* Kegiatan 3 */}
            <div onClick={() => navigate("/Startquiz")} className=" absolute bg-green-300 px-10 py-13 rounded-xl shadow-lg border border-green-300 w-160 left-320 top-650">
              <h1 className="absolute  bottom-11 left-5 rubik-bubbles-regular text-[40px] text-[#CBF3BB]  stroke-black-500 transition">
                Kegiatan Belajar 3
                </h1>
                <p className=" absolute bottom-4 opacity-50 left-6 text-green-900 text-[20px] -mt-1  font-bold">Quiz</p>
            </div>


          </div>
          <footer className=" absolute top-750 left-0 w-full bg-gray-900">
      <div className="max-w-7xl mx-auto py-10 px-5 flex justify-center items-center">
        <p className="text-gray-400 text-sm">
          &copy; 2024 Matematix. All rights reserved.
        </p>
      </div>

    </footer>
      </div>
      
      
    );

}
