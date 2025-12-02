import React, { useState, useEffect } from "react";
import { soalList } from "../datasoal.js";
import { useNavigate } from "react-router-dom";


export default function Quiz() {
    const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [jawabanUser, setJawabanUser] = useState(null);
  const [skor, setSkor] = useState(0);
  const [finish, setFinish] = useState(false);
  const [salah, setSalah] = useState(false);

  const soal = soalList[index];

  useEffect(() => {
    const savedIndex = localStorage.getItem("quiz_index");
    const savedSkor = localStorage.getItem("quiz_skor");

    if (savedIndex !== null) setIndex(Number(savedIndex));
    if (savedSkor !== null) setSkor(Number(savedSkor));
  }, []);

  function pilihanJawaban(pilihan) {
    setJawabanUser(pilihan);

    let skorBaru = skor;

    if (pilihan === soal.jawaban) {
      skorBaru = skor + 1;
      setSkor(skorBaru);
      setSalah(false);
    } else {
      setSalah(true);
    }


    localStorage.setItem("quiz_index", index + 1);
    localStorage.setItem("quiz_skor", skorBaru);

    setTimeout(() => {
      if (index + 1 < soalList.length) {
        setIndex(index + 1);
        setJawabanUser(null);
        setSalah(false);
      } else {
        setFinish(true);
      }
    }, 600);
  }

  if (finish) {

    localStorage.removeItem("quiz_index");
    localStorage.removeItem("quiz_skor");

    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#CBF3BB]">
        <h1 className="text-3xl font-bold mb-4">Kuis Selesai!</h1>
        <p className="text-xl mb-6">Score kamu: {skor} / {soalList.length}</p>

        <button
          onClick={() => navigate('/PlayGame')}
          className="px-8 py-3 mt-4 rounded-full shadow-lg bg-[#98F2AD] text-[#0b3d0b] font-bold hover:scale-105 transition"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-[#CBF3BB]">
      <h2 className="text-2xl font-bold mb-6 text-center">{soal.soal}</h2>

      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {soal.pilihan.map((p, i) => (
          <button
            key={i}
            onClick={() => pilihanJawaban(p)}
            className={`p-4 rounded-xl text-lg font-semibold border
              ${jawabanUser === p ? "bg-green-300" : "bg-white"}
            `}
          >
            {p}
          </button>
        ))}
      </div>

      {salah && (
        <p className="mt-4 text-red-600 font-semibold">
          Jawaban Salah! Jawaban yang benar adalah: {soal.jawaban}
        </p>
      )}

      <p className="mt-6 text-gray-600">
        Soal {index + 1} dari {soalList.length}
      </p>
    </div>
  );
}
