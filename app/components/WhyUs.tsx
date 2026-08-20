import React from 'react';
import { Target, Search, Layers, MessageSquare } from 'lucide-react';

export const WhyUs = () => {
  const reasons = [
    { title: "اختيار أدق", desc: "أدوات بحث تساعدك على الوصول إلى القطعة المناسبة لسيارتك.", icon: Target },
    { title: "بحث أسهل", desc: "ابحث باسم القطعة أو رقمها أو حسب سيارتك.", icon: Search },
    { title: "تشكيلة متنوعة", desc: "مجموعة واسعة من قطع الغيار والإكسسوارات في مكان واحد.", icon: Layers },
    { title: "مساعدة عند الحاجة", desc: "إذا لم تكن متأكدًا من القطعة، تواصل معنا وسنساعدك.", icon: MessageSquare },
  ];

  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">لماذا تختار AUTO PARTS؟</h3>
        <p className="text-emerald-100/60 text-xs sm:text-sm">لأننا نؤمن أن شراء قطع الغيار يجب أن يكون واضحًا وسريعًا وموثوقًا.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((item, idx) => (
          <div key={idx} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-6 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4 shadow-inner">
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};