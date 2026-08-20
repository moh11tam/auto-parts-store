"use client";
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, PhoneCall } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-emerald-900/40 bg-[#030705]/95 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* الشعار */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            ⚙️
          </div>
          <div>
            <span className="font-black text-lg tracking-wider bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent block">
              AUTO PARTS
            </span>
            <span className="text-[10px] text-emerald-500/80 tracking-widest block uppercase font-mono">
              CAR PARTS & ACCESSORIES
            </span>
          </div>
        </div>

        {/* القائمة للشاشات الكبيرة */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-emerald-100/80">
          <a href="#" className="hover:text-emerald-400 transition">الرئيسية</a>
          <a href="#" className="hover:text-emerald-400 transition">قطع الغيار</a>
          <a href="#" className="hover:text-emerald-400 transition">اختر سيارتك</a>
          <a href="#" className="hover:text-emerald-400 transition">الأقسام</a>
          <a href="#" className="hover:text-emerald-400 transition">من نحن</a>
          <a href="#" className="hover:text-emerald-400 transition">تواصل معنا</a>
        </nav>

        {/* الأزرار على اليسار */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="#search" className="flex items-center gap-2 bg-[#050C09] border border-emerald-900/60 hover:border-emerald-500 text-emerald-300 px-4 py-2 rounded-xl text-sm font-bold transition shadow-md">
            <Search className="w-4 h-4" />
            ابحث عن قطعة
          </a>
          <a href="#cart" className="relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition shadow-lg shadow-emerald-900/30">
            <ShoppingCart className="w-4 h-4" />
            السلة
          </a>
        </div>

        {/* زر الهامبرغر للهواتف */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-emerald-400 p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* قائمة الجوال المنسدلة */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#030705] border-b border-emerald-900/60 p-6 flex flex-col gap-4 text-center shadow-2xl">
          <a href="#" className="text-emerald-100 hover:text-emerald-400 py-2">الرئيسية</a>
          <a href="#" className="text-emerald-100 hover:text-emerald-400 py-2">قطع الغيار</a>
          <a href="#" className="text-emerald-100 hover:text-emerald-400 py-2">اختر سيارتك</a>
          <a href="#" className="text-emerald-100 hover:text-emerald-400 py-2">الأقسام</a>
          <a href="#" className="text-emerald-100 hover:text-emerald-400 py-2">من نحن</a>
          <a href="#" className="text-emerald-100 hover:text-emerald-400 py-2">تواصل معنا</a>
          <div className="flex flex-col gap-3 pt-4 border-t border-emerald-900/40">
            <a href="#search" className="bg-[#050C09] border border-emerald-900 text-emerald-300 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <Search className="w-4 h-4" /> ابحث عن قطعة
            </a>
            <a href="#cart" className="bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" /> السلة
            </a>
          </div>
        </div>
      )}
    </header>
  );
};