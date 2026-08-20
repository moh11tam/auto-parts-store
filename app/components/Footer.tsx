import React from 'react';
import { MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-emerald-900/40 bg-[#030705] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* العمود الأول: الشعار */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">⚙️</span>
              <span className="font-black text-base text-white tracking-wider">AUTO PARTS</span>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed max-w-sm">
              قطع غيار موثوقة. اختيار أسهل. قيادة بثقة.
            </p>
            <div className="space-y-2 text-emerald-100/80">
              <p>📍 العنوان: اتكها فراغة حاليا</p>
              <p>📞 الهاتف: اتركها فارغة حاليا</p>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold pt-2 transition">
                <MessageSquare className="w-4 h-4" /> WhatsApp: تواصل معنا
              </a>
              <p className="pt-2 text-zinc-500">🕐 ساعات العمل: اتركها فارغة حاليا</p>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-emerald-400 transition">الرئيسية</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">قطع الغيار</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">اختر سيارتك</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">الأقسام</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">من نحن</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">تواصل معنا</a></li>
            </ul>
          </div>

          {/* العمود الثالث: الأقسام */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">الأقسام</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-emerald-400 transition">المحرك</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">الفرامل</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">الكهرباء</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">التبريد</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">التعليق والتوجيه</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">الزيوت والفلاتر</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">الإكسسوارات</a></li>
            </ul>
          </div>

          {/* العمود الرابع: معلومات إضافية */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">الدعم الفني</h4>
            <p className="leading-relaxed mb-4">فريقنا مستعد للإجابة عن استفساراتك ومساعدتك في العثور على القطعة المناسبة لسيارتك بدقة.</p>
            <span className="inline-block px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-mono text-[10px]">
              دعم فوري 24/7
            </span>
          </div>

        </div>

        {/* الخط السفلي */}
        <div className="border-t border-emerald-900/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p>© 2026 AUTO PARTS — جميع الحقوق محفوظة.</p>
          <p className="text-emerald-400/90 font-mono font-bold tracking-wider">
            صُمم وطُوّر بواسطة MOH WEB
          </p>
        </div>
      </div>
    </footer>
  );
};