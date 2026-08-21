import React from 'react';
import { Search, Car } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative px-4 sm:px-8 py-28 lg:py-36 max-w-5xl mx-auto text-center overflow-hidden rounded-2xl my-6">
      {/* 1. طبقة الفيديو في الخلفية */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* 2. طبقة تغشية داكنة لضمان وضوح النصوص فوق الفيديو */}
      <div className="absolute inset-0 -z-10 bg-[#030705]/80 backdrop-blur-[2px]"></div>
      
      <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-800/60 text-emerald-400 text-xs font-bold tracking-wide mb-6 shadow-inner">
        ⚡ مرحبًا بك في عالم AUTO PARTS
      </span>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-md">
        قوة سيارتك تبدأ من <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">القطعة الصحيحة.</span>
      </h1>

      <p className="text-emerald-100/90 max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed drop-shadow">
        اكتشف مجموعة واسعة من قطع غيار السيارات والإكسسوارات، وابحث بسهولة عن القطعة المناسبة لسيارتك حسب الماركة والموديل ورقم القطعة.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="#search" className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-[#030705] font-black py-3.5 px-8 rounded-xl transition flex items-center gap-2 shadow-lg shadow-emerald-500/20">
          <Search className="w-5 h-5" /> ابحث عن قطعة
        </a>
        <a href="#car-filter" className="bg-[#050C09]/90 border border-emerald-900/80 hover:border-emerald-500 text-emerald-300 font-bold py-3.5 px-8 rounded-xl transition flex items-center gap-2 shadow-md">
          <Car className="w-5 h-5" /> اختر سيارتك
        </a>
      </div>

      <div className="text-xs sm:text-sm text-emerald-400 font-mono tracking-wider drop-shadow">
        جودة موثوقة • توافق دقيق • اختيار أسهل
      </div>
    </section>
  );
};