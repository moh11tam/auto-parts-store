import React from 'react';
import { MessageSquare } from 'lucide-react';

export const ExpertHelp = () => {
  return (
    <section className="px-4 sm:px-8 max-w-4xl mx-auto mb-16">
      <div className="bg-[#050C09] border border-emerald-900/80 rounded-3xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        
        <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
          لست متأكدًا من القطعة المناسبة؟
        </h3>
        <p className="text-emerald-100/70 text-xs sm:text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          لا تقلق. أرسل لنا معلومات سيارتك وسنساعدك في الوصول إلى القطعة التي تبحث عنها.
        </p>

        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl transition shadow-lg shadow-emerald-900/30 mb-4">
          <MessageSquare className="w-5 h-5" /> تحدث مع أحد المختصين
        </a>

        <div className="text-xs text-emerald-500/80 font-mono tracking-wider">
          الماركة • الموديل • السنة • المحرك
        </div>
      </div>
    </section>
  );
};