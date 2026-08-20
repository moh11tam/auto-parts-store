import React from 'react';

export const PromoBanner = () => {
  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-[#050C09] to-[#030705] border border-emerald-900/60 p-8 sm:p-12 text-center sm:text-right shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            لا تبحث عن أي قطعة... ابحث عن القطعة المناسبة.
          </h3>
          <p className="text-emerald-100/70 text-xs sm:text-sm max-w-xl leading-relaxed">
            لأن التفاصيل الصغيرة تصنع الفرق الكبير. اختر القطعة المناسبة لسيارتك بثقة، واترك لنا مهمة تسهيل عملية البحث.
          </p>
        </div>
        <a href="#search" className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-[#030705] font-black py-3.5 px-6 rounded-xl transition whitespace-nowrap shadow-lg shadow-emerald-500/20">
          ابدأ البحث الآن →
        </a>
      </div>
    </section>
  );
};