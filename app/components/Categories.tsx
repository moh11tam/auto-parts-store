import React from 'react';
import { Wrench, ShieldCheck, Zap, Thermometer, Compass, Droplet, Battery, Sparkles } from 'lucide-react';

export const Categories = () => {
  const categories = [
    { name: "المحرك", desc: "قطع ومكونات مصممة للحفاظ على أداء المحرك بكفاءة.", icon: Wrench },
    { name: "الفرامل", desc: "كل ما تحتاجه لنظام فرامل أكثر كفاءة وأمانًا.", icon: ShieldCheck },
    { name: "الكهرباء والإضاءة", desc: "بطاريات، شمعات، حساسات ومكونات كهربائية متنوعة لسيارتك.", icon: Zap },
    { name: "التبريد والتكييف", desc: "مكونات تساعد على الحفاظ على درجة الحرارة المناسبة وأداء نظام التبريد.", icon: Thermometer },
    { name: "التعليق والتوجيه", desc: "قطع تساعد على تحسين الثبات والتحكم وتجربة القيادة.", icon: Compass },
    { name: "الزيوت والفلاتر", desc: "زيوت وفلاتر لمختلف احتياجات الصيانة الدورية.", icon: Droplet },
    { name: "البطاريات", desc: "بطاريات وحلول طاقة لتلبية احتياجات سيارتك.", icon: Battery },
    { name: "الإكسسوارات", desc: "أضف لمسة عملية ومميزة إلى سيارتك مع مجموعة من الإكسسوارات.", icon: Sparkles },
  ];

  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">استكشف قطع الغيار</h3>
        <p className="text-emerald-100/60 text-xs sm:text-sm">كل ما تحتاجه لسيارتك، مرتب في أقسام واضحة لتصل إلى ما تبحث عنه بسهولة.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-[#050C09] border border-emerald-900/40 hover:border-emerald-500/70 rounded-2xl p-6 transition duration-300 flex flex-col justify-between shadow-md group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition">
                <cat.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-base mb-2">{cat.name}</h4>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{cat.desc}</p>
            </div>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 text-xs font-bold flex items-center gap-1 transition">
              استكشف القسم ←
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};