import React from 'react';
import { Search, Car } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative px-4 sm:px-8 py-20 max-w-5xl mx-auto text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#030705] to-[#030705]"></div>
      
      <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-bold tracking-wide mb-6 shadow-inner">
        ⚡ مرحبًا بك في عالم AUTO PARTS
      </span>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
        قوة سيارتك تبدأ من <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">القطعة الصحيحة.</span>
      </h1>

      <p className="text-emerald-100/70 max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
        اكتشف مجموعة واسعة من قطع غيار السيارات والإكسسوارات، وابحث بسهولة عن القطعة المناسبة لسيارتك حسب الماركة والموديل ورقم القطعة.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="#search" className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-[#030705] font-black py-3.5 px-8 rounded-xl transition flex items-center gap-2 shadow-lg shadow-emerald-500/20">
          <Search className="w-5 h-5" /> ابحث عن قطعة
        </a>
        <a href="#car-filter" className="bg-[#050C09] border border-emerald-900/80 hover:border-emerald-500 text-emerald-300 font-bold py-3.5 px-8 rounded-xl transition flex items-center gap-2 shadow-md">
          <Car className="w-5 h-5" /> اختر سيارتك
        </a>
      </div>

      <div className="text-xs sm:text-sm text-emerald-500/80 font-mono tracking-wider">
        جودة موثوقة • توافق دقيق • اختيار أسهل
      </div>
    </section>
  );
};