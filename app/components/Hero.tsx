"import client"; // تأكد من وجود هذه السطر إذا كنت تستخدم Next.js App Router ويتطلب مكون تفاعلي
import React, { useState, useEffect } from "react";

export default function Hero() {
  // كود تأثير الكتابة البطيئة للنص المتحرك
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
          // انتظر قليلاً بعد اكتمال الجملة قبل البدء بالمسح أو التكرار
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
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* 1. طبقة الفيديو في الخلفية مع التأكد من شروط التشغيل التلقائي */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* 2. طبقة تغشية سوداء شفافة (Overlay) لإبراز النصوص */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* 3. المحتوى وعنوان الترحيب المتحرك */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg mb-6 min-h-[90px] md:min-h-[120px] flex items-center justify-center">
          <span>{displayedText}</span>
          <span className="animate-pulse text-red-500 ml-1">|</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
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