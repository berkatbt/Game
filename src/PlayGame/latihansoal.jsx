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


                {/* === TEMPLATE SOAL === */}
                {/* Gunakan komponen reusable biar rapi */}
                <SoalBox
                    no="1"
                    img="/Soal1.png"
                    text="Ibu membeli 100 buah permen. 25% diberikan kepada Ghea. Berapa banyak permen yang diberikan kepada Ghea?"
                />

                {/* GOOGLE FORM */}
                <GoogleFormEmbed url="https://forms.gle/bHDoVr9em7XrsYu69" />

                <SoalBox
                    no="2"
                    img="/Soal2.png"
                    text="Sebuah kaos harganya Rp50.000. Toko memberi diskon 10%. Berapa harga kaos setelah diskon?"
                />

                <GoogleFormEmbed url="https://forms.gle/jXU3VLpsRo12KeiA6" />

                <SoalBox
                    no="3"
                    img="/soal3.png"
                    text="Tiara hadir 18 hari dari total 20 hari sekolah. Berapa persentase kehadirannya?"
                />

                <GoogleFormEmbed url="https://forms.gle/y1BcXhjVrw45xikC8" />

                <SoalBox
                    no="4"
                    img="/Soal4.png"
                    text="Toko baju menjual 120 buah baju bulan lalu, dan bulan ini meningkat 25%. Berapa banyak baju yang terjual bulan ini?"
                />

                <GoogleFormEmbed url="https://forms.gle/tHYSfA33pnW25KoY7" />

                <SoalBox
                    no="5"
                    img="/Soal5.png"
                    text="Berat Andini 50 kg. Dokter menyarankan mengurangi 8% berat badannya. Berapa kg yang perlu dikurangi Andi?"
                />

                <GoogleFormEmbed url="https://forms.gle/GMLRJeb6LcEBoN4a6" />
            </div>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate('/latihansoal2')}
                    className="px-8 py-3 rounded-full shadow-lg bg-[#98F2AD] text-[#0b3d0b] font-bold hover:scale-105 transition"
                >
                    Gaskeun
                </button>
            </div>
        </div>
    );
}

/* ====================== COMPONENT SOAL ======================= */
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

/* ==================== GOOGLE FORM COMPONENT =================== */
function GoogleFormEmbed({ url }) {
    if (!url) return null;

    return (
        <div className="bg-green-100 p-8 rounded-xl flex justify-center">
            <iframe
                src={url}
                className="w-full max-w-3xl rounded-xl"
                height="900"
                frameBorder="0"
            >
            </iframe>
        </div>
    );
}
