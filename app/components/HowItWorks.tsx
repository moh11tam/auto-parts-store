import React from 'react';

export const HowItWorks = () => {
  const steps = [
    { num: "01", title: "ابحث", desc: "ابحث عن القطعة باسمها أو رقم OEM." },
    { num: "02", title: "تحقق", desc: "تأكد من توافقها مع سيارتك ومواصفاتها." },
    { num: "03", title: "اختر", desc: "اختر القطعة المناسبة وأضفها إلى سلتك." },
    { num: "04", title: "اطلب", desc: "أرسل طلبك وسنتولى بقية التفاصيل." },
  ];

  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">العثور على قطعتك أصبح أسهل</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-6 relative overflow-hidden shadow-md">
            <span className="text-emerald-500/20 font-black text-5xl absolute left-4 top-4 font-mono select-none">
              {step.num}
            </span>
            <div className="relative z-10">
              <span className="text-emerald-400 font-mono text-sm font-bold block mb-2">{step.num} —</span>
              <h4 className="font-bold text-white text-base mb-1">{step.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};