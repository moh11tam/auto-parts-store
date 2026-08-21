"use client";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const fullText = "قوة سيارتك تبدأ من القطعة الصحيحة";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed]);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 text-white">
      {/* تأثير إضافي خفيف في الخلفية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none"></div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-6 min-h-[90px] md:min-h-[120px] flex items-center justify-center">
          <span>{displayedText}</span>
          <span className="animate-pulse text-red-500 ml-1">|</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
          اكتشف أفضل قطع الغيار الأصلية والمضمونة لجميع أنواع السيارات بأفضل الأسعار.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#search"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            ابحث عن قطعتك الآن
          </a>
        </div>
      </div>
    </section>
  );
}