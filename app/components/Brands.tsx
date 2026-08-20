import React from 'react';

export const Brands = () => {
  const brands = [
    "TOYOTA", "NISSAN", "MITSUBISHI", "RENAULT", 
    "PEUGEOT", "VOLKSWAGEN", "MERCEDES-BENZ", "SUZUKI"
  ];

  return (
    <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-16 text-center">
      <h3 className="text-xl sm:text-2xl font-black text-white mb-2">اختر علامتك التجارية</h3>
      <p className="text-emerald-100/60 text-xs sm:text-sm mb-8">تصفح قطع الغيار حسب العلامة التجارية لسيارتك.</p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {brands.map((brand, idx) => (
          <div 
            key={idx}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#050C09] border border-emerald-900/50 hover:border-emerald-500 flex flex-col items-center justify-center p-4 transition duration-300 group shadow-xl cursor-pointer"
          >
            <div className="text-emerald-400 group-hover:scale-110 transition font-black text-sm tracking-wider text-center">
              {brand}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};