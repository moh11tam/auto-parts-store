"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "هل يمكنني البحث برقم القطعة؟", a: "نعم، يمكنك استخدام رقم OEM أو رقم القطعة إذا كان متوفرًا." },
    { q: "كيف أتأكد أن القطعة مناسبة لسيارتي؟", a: "يمكنك اختيار الماركة والموديل والسنة ونوع المحرك للتحقق من التوافق، أو التواصل معنا للمساعدة." },
    { q: "هل جميع المنتجات متوفرة؟", a: "حالة التوفر تظهر داخل صفحة كل منتج ويتم تحديثها من لوحة إدارة المتجر." },
    { q: "هل يمكنني التواصل قبل الطلب؟", a: "بالتأكيد، يمكنك التواصل معنا إذا كنت بحاجة إلى مساعدة في اختيار القطعة." },
    { q: "هل يمكنني طلب قطعة غير موجودة في الموقع؟", a: "يمكنك التواصل معنا وإرسال تفاصيل القطعة التي تبحث عنها، وسنحاول مساعدتك في العثور عليها." },
    { q: "هل توجد خدمة توصيل؟", a: "تعتمد خيارات التوصيل على موقع المتجر وسياسة الخدمة، وستظهر التفاصيل أثناء إتمام الطلب أو عند التواصل معنا." },
  ];

  return (
    <section className="px-4 sm:px-8 max-w-4xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">أسئلة قد تبحث عن إجاباتها</h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-[#050C09] border border-emerald-900/40 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-5 text-right flex justify-between items-center text-white font-bold text-sm hover:text-emerald-400 transition"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-4 h-4 text-emerald-500 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIdx === idx && (
              <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-emerald-900/30 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};