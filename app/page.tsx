'use client';

import { useState } from "react";
import ContainerPage from "./components/contentContiner/page";


export default function Home() {
  const [start, setStart] = useState<1 | 2 | 3>(1);
  const [valueName, setValueName] = useState('');

  const handlechangeTab = () => {
    setStart(2);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const nameSuccess = "Trần thị hồng";
    e.preventDefault(); // ⛔ không reload trang
    if(valueName.trim().toLowerCase() === nameSuccess.trim().toLowerCase()) {
       setStart(3);
    }else {
      setValueName('');
      alert("Mời bé hãy nhập đúng tên");
    }
  };

  return (
    <div>
      {start !== 3 && <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex min-h-screen w-full max-w-3xl text-center flex-col items-center py-32 px-16">
          <h2 className="text-4xl font-bold animate-bounce text-rose-400 mb-16">
            Xin chào bé iu của anh
          </h2>

          {
            start === 1 &&
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
              <button
                onClick={handlechangeTab}
                className="
              px-6 py-3
              rounded-full
              bg-gradient-to-r from-pink-500 to-red-500
              text-white font-semibold
              shadow-lg
              hover:scale-105
              hover:shadow-pink-400/50
              active:scale-95
              transition-all duration-300
            "
              >
                💖 Love 💖
              </button>
            </div>
          }

          {
            start === 2 &&
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
              <form className="space-y-4 max-w-sm" onSubmit={handleSubmit}>
                <input
                  value={valueName}
                  onChange={(e) => setValueName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md border-pink-500 text-pink-500"
                  placeholder="Hãy nhập tên của bé iu"
                />

                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
                >
                  Bắt đầu
                </button>
              </form>
            </div>
          }

        </main>
      </div>
      }
      {
        start === 3 && <ContainerPage name={valueName} />
      }
    </div>
  )
}
