'use client'
import { useRef, useState } from "react";

import Image from 'next/image';

const images = Array.from({ length: 16 }, (_, i) =>
    `/journey/${String(i + 1).padStart(2, '0')}.jpg`
);


type ValentineContentProps = {
    name: string;
};
export default function ContainerPage({ name }: ValentineContentProps) {
    const [page, setPage] = useState<"wellcome" | "trip" | "love">("wellcome");

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);

    };

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            {/* Audio */}
            <audio ref={audioRef} src="/valenine.mp3" loop />
            {
                page === "wellcome" &&
                <div className="max-w-xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center space-y-6">

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-pink-600">
                        💖 Happy Valentine 💖
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-700">
                        Gửi đến bé iu :
                        <span className="mx-2 font-semibold text-pink-500">
                            {name}
                        </span>
                        của anh 💌
                    </p>

                    {/* Quote */}
                    <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 text-pink-600 italic">
                        “Yêu không phải là nhìn nhau,
                        mà là cùng nhìn về một hướng.”
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <button
                            onClick={() => {
                                setPage("trip");
                                toggleMusic();
                            }}
                            className="
                        px-6 py-3
                        rounded-full
                        border border-pink-500
                        text-pink-500 font-semibold
                        hover:bg-pink-500 hover:text-white
                        transition
                        "
                        >
                            💖 Nhận yêu thương
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-sm text-gray-500">
                        Made with ❤️ for T A Tus
                    </p>
                </div>
            }
            {
                page === "trip" &&
                <div className="max-w-xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center space-y-6">

                    <h1 className="text-4xl font-bold text-center text-pink-600 mb-20">
                        💖 Hành Trình Của Chúng Ta 💖
                    </h1>

                    <div className="relative max-w-3xl mx-auto space-y-24">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-pink-300 -translate-x-1/2" />

                        {images.map((src, i) => (
                            <div
                                key={i}
                                className={`relative flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                {/* Heart marker */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-2xl">
                                    ❤️
                                </div>

                                {/* Image card */}
                                <div className="w-full sm:w-[45%] bg-white rounded-2xl shadow-lg p-3">
                                    <Image
                                        src={src}
                                        alt={`journey-${i + 1}`}
                                        width={500}
                                        height={500}
                                        className="rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <button
                            onClick={() => {
                                setPage("love")
                            }}
                            className="
                        px-6 py-3
                        rounded-full
                        border border-pink-500
                        text-pink-500 font-semibold
                        hover:bg-pink-500 hover:text-white
                        transition
                        "
                        >
                            💖 Tiếp theo
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-sm text-gray-500">
                        Made with ❤️ for T A Tus
                    </p>
                </div>
            }
            {
                page === "love" && <div className="max-w-xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-pink-600">
                        💝 Gửi đến em iu 💝
                    </h2>

                    <div className="text-left text-gray-700 leading-relaxed space-y-4">
                        <p>
                            Valentine này, anh không biết nên bắt đầu từ đâu,
                            chỉ biết rằng giữa rất nhiều người ngoài kia,
                            việc được gặp và quen em là một điều rất đặc biệt đối với anh.
                            Giữa những bộn bề của cuộc sống, thật may mắn khi vẫn có em luôn đồng hành, động viên và ủng hộ anh hết mình.
                        </p>

                        <p>
                            Cảm ơn em vì đã xuất hiện, không ồn ào nhưng đủ sâu,
                            không phô trương nhưng đủ để trái tim thấy ấm.
                            Cảm ơn em vì những lúc vui có nhau,
                            và cả những lúc mệt mỏi vẫn chọn ở lại, lắng nghe và sẻ chia.
                        </p>

                        <p>
                            Valentine không chỉ là một ngày,
                            mà là lời nhắc rằng yêu thương cần được trân trọng mỗi ngày.
                            Mong rằng dù thời gian có trôi nhanh đến đâu,
                            chúng ta vẫn luôn dành cho nhau sự chân thành, thấu hiểu
                            và một chút dịu dàng như những ngày đầu tiên.
                        </p>

                        <p>
                            Cảm ơn em vì đã xuất hiện theo cách rất nhẹ nhàng,
                            đủ để làm những ngày bình thường của anh trở nên dễ chịu hơn.
                            Cảm ơn vì những lúc em cười,
                            và cả những lúc em im lặng,
                            anh vẫn cảm nhận được sự ấm áp rất riêng từ em.
                        </p>
                        <p>
                            Môt lời chúc nho nhỏ Anh muốn dành tặng riêng đến bé iu
                            chúc bé ui của anh luôn luôn mạnh khoẻ, hạnh phúc.
                            Chúc cho nụ cười của bé mãi nở trên môi, ngày càng đáng yêu xinh đẹp và nhứo rằng anh luôn luôn bên cạnh bé.
                        </p>

                        <p className="text-center font-semibold text-pink-500">
                            💖 Chúc một Valentine thật ấm áp, ngọt ngào
                            và đầy yêu thương 💖
                        </p>
                        <p className="text-center font-semibold text-red-500">
                            💖 Anh yêu em 💖
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setPage("wellcome")
                        }}
                        className="text-pink-500 hover:underline"
                    >
                        ⬅ Quay lại
                    </button>
                </div>

            }
        </main>
    );
}
