import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Startquiz() {
    const navigate = useNavigate();
    return (
            
            <div className="min-h-screen flex flex-col justify-center items-center bg-[#CBF3BB] px-4 py-10">
                
            <div className=" py-5 centered ">
            <img src="/Burung.png" alt="" className="absolute bottom-123 left-390 w-90 h-120 z-2 "/>
             <h1 className=" -mt-[100px]"><span className="rubik-bubbles-regular text-[80px] text-[#CBF3BB] stroke-black-500"><strong className="text-green-600">Selamat Datang di Quiz DINO Matematix </strong></span></h1>
            </div>
            <p className="text-sm text-gray-500  ">Jika ingin memulai Tekan tombol dibawah ini untuk <strong  >bermain</strong></p>

            <button onClick={() => navigate ("/Quiz")} className="mt-4 bg-green-300 shadow-xl px-10 py-2 rounded-xl hover-scale-105"><span className="rubik-bubbles-regular text-[20px] text-[#CBF3BB] hover:scale-102 stroke-black-500">Mulai</span></button>
            </div>
            

            
    )

}
