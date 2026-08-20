import React from 'react';
import { Car } from 'lucide-react';

export const CarFilter = () => {
  return (
    <section id="car-filter" className="px-4 sm:px-8 max-w-5xl mx-auto mb-16">
      <div className="bg-[#050C09] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-right">
        <h3 className="text-lg sm:text-xl font-black text-white mb-2 flex items-center gap-2">
          <Car className="w-5 h-5 text-emerald-400" /> اختر سيارتك، وسنساعدك في العثور على القطعة المناسبة
        </h3>
        <p className="text-emerald-100/60 text-xs sm:text-sm mb-6">
          حدد الماركة والموديل وسنة الصنع لتصفح القطع المتوافقة مع سيارتك.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <select className="bg-[#030705] border border-emerald-900/80 rounded-xl p-3.5 text-white text-sm outline-none focus:border-emerald-500 transition">
            <option>اختر الماركة</option>
          </select>
          <select className="bg-[#030705] border border-emerald-900/80 rounded-xl p-3.5 text-white text-sm outline-none focus:border-emerald-500 transition">
            <option>اختر الموديل</option>
          </select>
          <select className="bg-[#030705] border border-emerald-900/80 rounded-xl p-3.5 text-white text-sm outline-none focus:border-emerald-500 transition">
            <option>اختر السنة</option>
          </select>
          <select className="bg-[#030705] border border-emerald-900/80 rounded-xl p-3.5 text-white text-sm outline-none focus:border-emerald-500 transition">
            <option>اختر نوع المحرك</option>
          </select>
        </div>

        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30">
          🚗 عرض القطع المتوافقة
        </button>
      </div>
    </section>
  );
};