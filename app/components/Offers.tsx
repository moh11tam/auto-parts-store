import React from 'react';

export const Offers = () => {
  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">عروض تستحق الاكتشاف</h3>
        <p className="text-emerald-100/60 text-xs sm:text-sm">استفد من عروض مختارة على مجموعة من قطع الغيار والإكسسوارات لفترة محدودة.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2].map((offer) => (
          <div key={offer} className="bg-gradient-to-br from-emerald-950/60 to-[#050C09] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-[#030705] font-black text-xs mb-4 shadow-sm">
                خصم يصل إلى 20%
              </span>
              <h4 className="font-black text-white text-lg mb-2">عروض خاصة على فلاتر الزيوت والهواء الأصلية</h4>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">احصل على باقة الصيانة الدورية لسيارتك بأفضل الأسعار لفترة محدودة.</p>
            </div>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 font-bold text-sm inline-flex items-center gap-1 transition">
              اكتشف العرض ←
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};