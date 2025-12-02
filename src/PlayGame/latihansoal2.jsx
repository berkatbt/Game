import React from "react";
import { useNavigate } from "react-router-dom";

export default function Soal() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#CBF3BB] p-6">

            {/* Container utama */}
            <div className="bg-white w-full max-w-3xl mx-auto p-8 rounded-2xl shadow-xl mt-10 space-y-20">

                <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
                    Latihan Soal Persen (%)
                </h1>

                {/* === SOAL 6 === */}
                <SoalBox
                    no="6"
                    img="/Soal6.png"
                    text="Dari 80 potong kue, 40% sudah dimakan. Berapa potong kue yang sudah dimakan?"
                />

                <GoogleFormEmbed url="https://docs.google.com/forms/d/e/1FAIpQLSevxQZEaJmLZ3MJ6Do14xIy0tF1CeBW5sUryNiR4lruP8fbKw/viewform?usp=publish-editor" />


                {/* === SOAL 7 === */}
                <SoalBox
                    no="7"
                    img="/Soal7.png"
                    text="Sebuah jus terdiri dari 40% air, 35% buah, dan sisanya gula. Jika total jus 2 liter, berapa ml gula?"
                />

                <GoogleFormEmbed url="https://forms.gle/DLARmWA4fa18CrQcA" />


                {/* === SOAL 8 === */}
                <SoalBox
                    no="8"
                    img="/Soal8.png"
                    text="Harga telur turun 20% lalu naik lagi 25%. Jika harga awal Rp24.000/kg, berapa harga akhirnya?"
                />

                <GoogleFormEmbed url="https://forms.gle/76tkxjHhyUJrteXq7" />


                {/* === SOAL 9 === */}
                <SoalBox
                    no="9"
                    img="/Soal9.png"
                    text="Tabungan memperoleh bunga 5% per tahun majemuk. Jika saldo Rp1.000.000, berapa saldo setelah 2 tahun?"
                />

                <GoogleFormEmbed url="https://forms.gle/msQtC2YvV8jwtomp7" />


                {/* === SOAL 10 === */}
                <SoalBox
                    no="10"
                    img="/Soal10.png"
                    text="Berkat menabung Rp2.400.000 dengan bunga 5% majemuk. Berapa total uang setelah 2 tahun?"
                />

                <GoogleFormEmbed url="https://forms.gle/Mp18jfQJksKDVo4Q6" />

            </div>

                        {/* === Tombol Back === */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate('/PlayGame')}
                    className="px-8 py-3 rounded-full shadow-lg bg-[#98F2AD] text-[#0b3d0b] font-bold hover:scale-105 transition"
                >
                    Kembali
                </button>
            </div>

           
        </div>
    );
}

/* ================= COMPONENT SOAL ================== */
function SoalBox({ no, text, img }) {
    return (
        <div className="space-y-4 bg-green-100 p-5 rounded-xl border-l-4 border-green-600">
            <h1 className="font-bold text-gray-700">Soal {no}</h1>
            <p>{text}</p>

            <img
                src={img}
                alt={`Soal ${no}`}
                className="w-full rounded-lg shadow-md"
            />
        </div>
    );
}

/* ================ GOOGLE FORM EMBED ================= */
function GoogleFormEmbed({ url }) {
    if (!url) return null;

    return (
        <div className="bg-green-100 p-8 rounded-xl flex justify-center">
            <iframe
                src={url}
                className="w-full max-w-3xl rounded-xl"
                height="900"
                frameBorder="0"
            ></iframe>
        </div>
    );
}
