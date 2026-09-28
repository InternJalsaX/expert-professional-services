import React from 'react';
import { useApp } from '../context/AppContext';
import { LeftCategorySidebar } from '../components/LeftCategorySidebar';
import { RightCartSidebar } from '../components/RightCartSidebar';
import { ServiceCard } from '../components/ServiceCard';
import { categories } from '../data/categories';
import { services } from '../data/services';
import { Star, Clock, Sparkles, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

export const CatalogPage: React.FC = () => {
  const {
    activeCategory,
    setActiveCategory,
    cart,
    cartCount,
    total,
    setIsBookingModalOpen,
    setSelectedServiceForDetail,
    addToCart
  } = useApp();

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];
  const categoryServices = services.filter((s) => s.categoryId === activeCategory);

  // Best value promo service for featured banner
  const featuredService =
    services.find((s) => s.id === 'floor-deep-cleaning-machine') || services[0];

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24 lg:pb-12">
      
      {/* Category Pills Navigation on Mobile/Tablet */}
      <div className="lg:hidden sticky top-[57px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E7E2DC] px-4 py-2.5 overflow-x-auto no-scrollbar flex items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#323232] text-white shadow-sm'
                  : 'bg-[#FAF9F6] text-[#6B6B6B] hover:text-[#323232] border border-[#E7E2DC]'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* 3-Column Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Left Column: Category Navigation */}
          <div className="hidden lg:block">
            <LeftCategorySidebar />
          </div>

          {/* Center Column: Main Content */}
          <main className="flex-1 w-full min-w-0 space-y-6">
            
            {/* Top Overview Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E2DC] shadow-subtle">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#6B6B6B]">
                  {currentCategory.name}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#323232] font-semibold bg-[#FAF9F6] px-3 py-1 rounded-full border border-[#E7E2DC]">
                  <div className="flex text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span>4.88</span>
                  <span className="text-[#8C8C8C] font-normal">• 1.8M+ bookings</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
                {currentCategory.name}
              </h1>
              <p className="text-sm text-[#6B6B6B] mt-1 max-w-2xl leading-relaxed">
                {currentCategory.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 inline-flex">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Earliest available slot: <strong>{currentCategory.earliestSlot}</strong></span>
              </div>
            </div>

            {/* Featured Promotional Banner Card (BEST VALUE) */}
            <div className="rounded-3xl bg-gradient-to-br from-[#323232] via-[#282828] to-[#1c1c1c] text-white p-6 sm:p-8 border border-neutral-700 shadow-card relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDD0C8] text-[#323232] text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Best Value Package</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Floor Deep Cleaning Machine
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">
                    Heavy 1.5 HP single-disc rotary machine scrubbing with specialized abrasive pads to restore dulled vitrified, ceramic, and marble floors.
                  </p>

                  <div className="flex items-baseline gap-3 pt-1">
                    <span className="text-xs uppercase text-neutral-400 font-medium">Starting at</span>
                    <span className="text-2xl font-extrabold text-[#DDD0C8]">₹X</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800">
                      Best Value Guarantee
                    </span>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedServiceForDetail(featuredService)}
                      className="px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-100 text-[#323232] font-bold text-xs sm:text-sm tracking-wide shadow-sm transition-all"
                    >
                      View Packages & Details
                    </button>
                    <button
                      onClick={() => addToCart(featuredService)}
                      className="px-5 py-2.5 rounded-xl bg-[#DDD0C8] hover:bg-[#c9b7ad] text-[#323232] font-bold text-xs sm:text-sm tracking-wide shadow-sm transition-all"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>

                {/* Banner Photo */}
                <div className="w-full md:w-56 h-44 sm:h-52 rounded-2xl overflow-hidden border border-neutral-700 relative flex-shrink-0">
                  <img
                    src="/images/floor-machine.jpg"
                    alt="Floor Deep Cleaning Machine Service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-medium">
                    175 RPM Machine
                  </div>
                </div>
              </div>
            </div>

            {/* Service Section Heading & Card Grid */}
            <div id={`category-${activeCategory}`} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#323232] tracking-tight">
                    {currentCategory.name} Packages
                  </h2>
                  <span className="text-xs text-[#6B6B6B]">
                    Showing {categoryServices.length} verified packages in {currentCategory.name}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* Other Popular Categories Quick Section */}
            <div className="pt-6 border-t border-[#E7E2DC] space-y-4">
              <h3 className="text-base font-bold text-[#323232]">
                Explore Other Cleaning Specializations
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories
                  .filter((c) => c.id !== activeCategory)
                  .slice(0, 4)
                  .map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setActiveCategory(c.id);
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className="p-3.5 rounded-2xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] hover:shadow-subtle text-left transition-all group"
                    >
                      <img
                        src={c.bannerImage}
                        alt={c.name}
                        className="w-full h-20 object-cover rounded-xl mb-2.5 border border-[#E7E2DC]"
                      />
                      <span className="text-xs font-bold text-[#323232] group-hover:text-black block line-clamp-1">
                        {c.name}
                      </span>
                      <span className="text-[11px] text-[#8C8C8C] block mt-0.5">
                        {c.count} services
                      </span>
                    </button>
                  ))}
              </div>
            </div>

          </main>

          {/* Right Column: Sticky Cart & Trust */}
          <div className="hidden lg:block">
            <RightCartSidebar />
          </div>

        </div>

      </div>

      {/* Mobile Sticky Bottom Bar (when cart has items) */}
      {cartCount > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E7E2DC] p-3.5 px-4 shadow-modal flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#323232] text-white flex items-center justify-center font-bold text-xs relative">
              <ShoppingBag className="w-5 h-5 text-[#DDD0C8]" />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            </div>
            <div>
              <span className="text-xs text-[#6B6B6B] block">Total Amount</span>
              <span className="text-base font-extrabold text-[#323232]">
                ₹X
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="py-2.5 px-5 rounded-xl bg-[#323232] text-white text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-sm"
          >
            <span>Proceed to Book</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
