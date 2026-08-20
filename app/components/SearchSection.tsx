import React from 'react';
import { Search } from 'lucide-react';

export const SearchSection = () => {
  return (
    <section id="search" className="px-4 sm:px-8 max-w-4xl mx-auto mb-16">
      <div className="bg-[#050C09] border border-emerald-900/60 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl text-center">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
          ابحث عن القطعة التي تحتاجها
        </h2>
        <p className="text-emerald-100/60 text-xs sm:text-sm mb-8">
          أدخل اسم القطعة أو رقم OEM للوصول إلى المنتج الذي تبحث عنه بسرعة.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="ابحث باسم القطعة أو رقم OEM..." 
            className="flex-1 bg-[#030705] border border-emerald-900/80 rounded-2xl px-5 py-4 text-white placeholder-emerald-800/80 outline-none focus:border-emerald-500 transition text-sm shadow-inner"
          />
          <button className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-[#030705] font-black py-4 px-8 rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
            بحث <Search className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-emerald-500/70 mt-6 font-medium">
          أو اختر سيارتك للعثور على القطع المتوافقة
        </p>
      </div>
    </section>
  );
};