import React from 'react';

export const Testimonials = () => {
  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">ماذا يقول عملاؤنا؟</h3>
        <p className="text-emerald-100/60 text-xs sm:text-sm">ثقة عملائنا هي أفضل ما يمكن أن نقدمه.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-amber-400 text-sm mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-xs text-emerald-100/80 leading-relaxed mb-6">
                &quot;تجربة ممتازة، وجدت القطعة التي أبحث عنها بسهولة وكان التواصل سريعًا.&quot;
              </p>
            </div>
            <div className="text-xs text-emerald-500 font-bold font-mono">
              — عميل موثوق
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};