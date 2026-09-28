import React from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import {
  Home,
  LayoutGrid,
  Armchair,
  Bath,
  UtensilsCrossed,
  Sparkles,
  Wrench,
  Truck,
  ShieldAlert,
  Star,
  Clock,
  CheckCircle2,
  Bed,
  Flame,
  Refrigerator,
  Bug,
  Wind,
  Building2,
  Phone
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Armchair: <Armchair className="w-4 h-4" />,
  Bed: <Bed className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  UtensilsCrossed: <UtensilsCrossed className="w-4 h-4" />,
  Flame: <Flame className="w-4 h-4" />,
  Refrigerator: <Refrigerator className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4" />,
  Bug: <Bug className="w-4 h-4" />,
  Wind: <Wind className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  Home: <Home className="w-4 h-4" />
};

export const LeftCategorySidebar: React.FC = () => {
  const { activeCategory, setActiveCategory } = useApp();

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    const element = document.getElementById(`category-${catId}`);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-4">
        
        {/* Category Header Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E7E2DC] shadow-subtle">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold text-[#323232] tracking-tight">Home Cleaning</h2>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#DDD0C8]/50 text-[#323232] uppercase">
              Verified
            </span>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-1.5 text-xs text-[#323232] font-semibold mb-3">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>4.88</span>
            <span className="text-[#6B6B6B] font-normal">• 1.8M+ bookings</span>
          </div>

          {/* Earliest Available Slot */}
          <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E2DC] flex items-center gap-2.5 text-xs text-[#323232]">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold text-[#8C8C8C] block leading-none mb-0.5">
                Earliest Available
              </span>
              <span className="font-semibold text-emerald-800 truncate block">Today, 2:30 PM</span>
            </div>
          </div>
        </div>

        {/* Categories Navigation List */}
        <div className="bg-white rounded-2xl p-2.5 border border-[#E7E2DC] shadow-subtle overflow-hidden">
          <nav className="space-y-1">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleSelectCategory(category.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left relative group ${
                    isActive
                      ? 'bg-[#323232] text-white shadow-sm font-semibold'
                      : 'text-[#4A4A4A] hover:bg-[#FAF9F6] hover:text-[#323232]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`flex-shrink-0 transition-colors ${
                        isActive ? 'text-[#DDD0C8]' : 'text-[#8C8C8C] group-hover:text-[#323232]'
                      }`}
                    >
                      {iconMap[category.iconName] || <Home className="w-4 h-4" />}
                    </span>
                    <span className="truncate">{category.name}</span>
                  </div>

                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-[#474747] text-[#DDD0C8]' : 'text-[#8C8C8C] group-hover:text-[#323232]'
                    }`}
                  >
                    {category.count}
                  </span>

                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#DDD0C8] rounded-r-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Direct Helpline Card */}
        <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#DDD0C8] text-xs text-[#323232] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B6B6B]">Direct Helpline</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div>
            <span className="font-bold text-sm block">M. Pranay</span>
            <span className="text-[11px] text-[#6B6B6B]">Expert Professional Services</span>
          </div>
          <div className="space-y-1 pt-1 font-semibold text-xs">
            <a href="tel:7036065361" className="flex items-center gap-1.5 hover:text-black transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#323232]" />
              <span>7036065361</span>
            </a>
            <a href="tel:6300631794" className="flex items-center gap-1.5 hover:text-black transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#323232]" />
              <span>6300631794</span>
            </a>
          </div>
          <a
            href="https://wa.me/917036065361"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors shadow-sm block text-center"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </aside>
  );
};
