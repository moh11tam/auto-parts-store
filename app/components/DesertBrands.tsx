import React from 'react';

export const DesertBrands = () => {
  // قائمة بشعارات السيارات الصحراوية الشهيرة في تمنراست والجزائر
  const desertLogos = [
    {
      brand: "TOYOTA",
      model: "Land Cruiser & Hilux 4x4",
      region: "أيقونة الصحراء في تمنراست",
      // شعار تويوتا المبسط والدقيق (الحلقات الثلاث المتداخلة)
      svgLogo: (
        <svg width="45" height="45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <ellipse cx="50" cy="50" rx="42" ry="25" />
          <ellipse cx="50" cy="50" rx="20" ry="38" />
          <ellipse cx="50" cy="50" rx="20" ry="20" />
        </svg>
      )
    },
    {
      brand: "NISSAN",
      model: "Patrol / 4x4",
      region: "ملك المسالك الوعرة والكثبان",
      // شعار نيسان (الشريط الأفقية والدائرة الشهيرة)
      svgLogo: (
        <svg width="45" height="45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <circle cx="50" cy="50" r="42" />
          <path d="M15 50H85" strokeWidth="7" />
          <path d="M35 38H65" strokeWidth="4" />
          <path d="M35 62H65" strokeWidth="4" />
        </svg>
      )
    },
    {
      brand: "MITSUBISHI",
      model: "Pajero / L200",
      region: "صلابة وثبات في الهقار",
      // شعار المعينات الثلاثة (الماس, الماسات الثلاث) لـ ميتسوبيشي
      svgLogo: (
        <svg width="45" height="45" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,15 68,48 50,48" />
          <polygon points="50,15 32,48 50,48" />
          <polygon points="50,48 68,81 50,81" />
          <polygon points="50,48 32,81 50,81" />
        </svg>
      )
    },
    {
      brand: "LAND ROVER",
      model: "Defender / Station",
      region: "القوة التاريخية في الصحراء",
      // شعار لاند روفر (الشكل البيضاوي البارز)
      svgLogo: (
        <svg width="45" height="45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5">
          <rect x="10" y="25" width="80" height="50" rx="25" />
          <path d="M25 50H75" strokeWidth="4" />
          <text x="50" y="56" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">4x4</text>
        </svg>
      )
    }
  ];

  return (
    <section className="px-4 sm:px-8 py-16 max-w-6xl mx-auto border-t border-emerald-900/30">
      <div className="text-center mb-10">
        <h3 className="text-emerald-400 font-bold text-lg sm:text-xl tracking-wider mb-2">
          🇩🇿 موجه خصيصاً لسيارات 4x4 في الصحراء الكبرى (تمنراست)
        </h3>
        <p className="text-emerald-100/60 text-xs sm:text-sm">
          أبرز العلامات التجارية المعتمدة في المسالك الوعرة
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {desertLogos.map((item, idx) => (
          <div 
            key={idx}
            className="bg-[#050C09] border border-emerald-900/50 hover:border-emerald-500/80 rounded-2xl p-6 transition duration-300 flex flex-col items-center text-center group shadow-xl"
          >
            {/* الشعار المرسوم بدقة */}
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-[#030705] transition duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              {item.svgLogo}
            </div>
            
            {/* اسم الماركة وتحته الوصف */}
            <h4 className="font-black text-white text-lg mb-1 tracking-wider">{item.brand}</h4>
            <p className="text-xs text-emerald-400 font-bold mb-1">{item.model}</p>
            <p className="text-[11px] text-zinc-400">{item.region}</p>
          </div>
        ))}
      </div>
    </section>
  );
};