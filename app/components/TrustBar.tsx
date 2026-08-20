import React from 'react';
import { Wrench, Target, Zap, MessageSquare } from 'lucide-react';

export const TrustBar = () => {
  const items = [
    { title: "قطع موثوقة", desc: "منتجات مختارة بعناية لتلبية احتياجات سيارتك.", icon: Wrench },
    { title: "توافق دقيق", desc: "ساعدنا في الوصول إلى القطعة المناسبة لسيارتك.", icon: Target },
    { title: "بحث سريع", desc: "اعثر على ما تحتاجه بسهولة وفي وقت أقل.", icon: Zap },
    { title: "دعم مباشر", desc: "نحن هنا لمساعدتك قبل وأثناء عملية الشراء.", icon: MessageSquare },
  ];

  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};