/* eslint-disable */

import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function ScreenLoding() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/beranda_menu');
    }, 3000) // 5000 milliseconds = 5 seconds;

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
/* eslint-disable */
  return (
    
    <div className="fixed flex flex-col bg-[#CBF3BB] min-w-screen h-screen flex justify-center items-center">
      <div>
      <motion.img src="/Matematix.png" alt="gambar_loding_screen" className="-top-10 "/>

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
 