import React from 'react';

export const FeaturedProducts = () => {
  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">اختياراتنا المميزة</h3>
        <p className="text-emerald-100/60 text-xs sm:text-sm">اكتشف مجموعة من القطع المختارة بعناية من بين منتجاتنا.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-5 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-full h-40 bg-emerald-950/30 rounded-xl mb-4 flex items-center justify-center text-emerald-600 font-mono text-xs">
                [صورة القطعة]
              </div>
              <span className="text-[10px] text-emerald-500 font-bold block mb-1">متوافق مع: Toyota / Nissan</span>
              <h4 className="font-bold text-white text-sm mb-2">فلتر هوائي أصلي عالي الأداء</h4>
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-semibold mb-4">متوفر الآن ✓</span>
            </div>
            <div>
              <div className="text-emerald-300 font-black text-base mb-4">12,500 دج</div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-[#030705] border border-emerald-900 hover:border-emerald-500 text-white text-xs font-bold py-2 px-3 rounded-xl transition">
                  التفاصيل
                </button>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-3 rounded-xl transition">
                  أضف للسلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition">
          تصفح جميع المنتجات ←
        </a>
      </div>
    </section>
  );
};