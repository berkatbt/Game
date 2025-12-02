import React from "react";
import { useNavigate } from "react-router-dom";


export default function PengenalanPersen() {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-[#CBF3BB] flex justify-center items-start p-6">
            <button onClick={() => navigate('/PlayGame')} className="p-5 absolute top-7 left-4 rounded-[1000px] shadow-lg bg-[#98F2AD] z-50 cursor-pointer"><span className="rubik-bubbles-regular text-[20px] text-[#CBF3BB] hover:scale-102 stroke-black-500">Kembali</span></button>
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
      <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
          Pengenalan Persen (%)
        </h1>

        {/* Apa itu Persen */}
        <section className="bg-green-100 p-5 rounded-xl border-l-4 border-green-600 mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Persen?</h2>
          <p className="text-gray-700 mb-2">
            <strong className="text-green-700">Persen (%)</strong> adalah cara untuk menyatakan sebagian dari
            keseluruhan dengan membandingkannya terhadap <strong className="text-green-700">100</strong>.
            Artinya, persen menunjukkan berapa banyak dari setiap 100 bagian.
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>25% = 25 dari 100</li>
            <li>50% = setengah</li>
            <li>100% = seluruhnya</li>
          </ul>
        </section>

        {/* Bentuk Dasar */}
        <section className="bg-green-100 p-5 rounded-xl border-l-4 border-green-600 mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Bentuk Dasar Persen</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>25% → 25/100 → 0,25</li>
            <li>50% → 50/100 → 0,5</li>
            <li>75% → 75/100 → 0,75</li>
          </ul>
        </section>

        {/* Rumus Perhitungan */}
        <section className="bg-green-100 p-5 rounded-xl border-l-4 border-green-600 mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-3">Cara Menghitung Persen</h2>

          <p className="font-semibold text-gray-800">1. Mencari persen dari suatu nilai</p>
          <div className="bg-green-200 border-l-4 border-green-500 p-3 rounded-lg font-semibold my-2">
            nilai × (persen / 100)
          </div>
          <p className="text-gray-700 mb-4">Contoh: 20% dari 150 = 150 × 20/100 = 30</p>

          <p className="font-semibold text-gray-800">2. Mencari persen suatu bagian dari total</p>
          <div className="bg-green-200 border-l-4 border-green-500 p-3 rounded-lg font-semibold my-2">
            (bagian / total) × 100%
          </div>
          <p className="text-gray-700 mb-4">Contoh: 10 dari 40 siswa = 10/40 × 100% = 25%</p>

          <p className="font-semibold text-gray-800">3. Mencari total jika bagian & persennya diketahui</p>
          <div className="bg-green-200 border-l-4 border-green-500 p-3 rounded-lg font-semibold my-2">
            total = bagian / (persen / 100)
          </div>
          <p className="text-gray-700 mb-2">Contoh: 15 adalah 30% dari ...? = 15 / 0,3 = 50</p>
        </section>
      </div>
    </div>
  );
}
