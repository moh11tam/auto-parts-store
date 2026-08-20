import React from 'react';
import { Search, MessageSquare } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="px-4 sm:px-8 max-w-5xl mx-auto mb-20 text-center">
      <div className="bg-gradient-to-b from-emerald-950/40 to-[#050C09] border border-emerald-900/60 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
          جاهز للعثور على قطعتك؟
        </h3>
        <p className="text-emerald-100/70 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          ابدأ البحث الآن واكتشف قطع الغيار المناسبة لسيارتك في خطوات بسيطة.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#search" className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-[#030705] font-black py-3.5 px-8 rounded-xl transition flex items-center gap-2 shadow-lg shadow-emerald-500/20">
            <Search className="w-4 h-4" /> ابحث عن قطعة
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#030705] border border-emerald-900 hover:border-emerald-500 text-emerald-300 font-bold py-3.5 px-8 rounded-xl transition flex items-center gap-2 shadow-md">
            <MessageSquare className="w-4 h-4" /> تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
};