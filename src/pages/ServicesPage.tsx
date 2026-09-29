import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { RightCartSidebar } from '../components/RightCartSidebar';
import { BeforeAfterShowcase } from '../components/BeforeAfterShowcase';
import {
  Sparkles,
  Search,
  Filter,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Clock,
  Star
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const {
    activeCategory,
    setActiveCategory,
    cartCount,
    setIsBookingModalOpen
  } = useApp();

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [localSearch, setLocalSearch] = useState<string>('');

  // Filtered services
  const displayedServices = services.filter((s) => {
    const matchesCategory =
      selectedCategoryFilter === 'all' || s.categoryId === selectedCategoryFilter;
    const matchesSearch =
      localSearch.trim() === '' ||
      s.name.toLowerCase().includes(localSearch.toLowerCase()) ||
      s.description.toLowerCase().includes(localSearch.toLowerCase()) ||
      s.highlights.some((h) => h.toLowerCase().includes(localSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24 lg:pb-16">
      
      {/* 1. TOP HEADER BANNER */}
      <section className="bg-white border-b border-[#E7E2DC] pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#DDD0C8] text-xs font-bold text-[#323232] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#323232]" />
                <span>Dedicated Services & Transformations</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#323232] tracking-tight">
                Our 12 Professional Cleaning Services
              </h1>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1.5 max-w-2xl leading-relaxed">
                Industrial single-disc scrubbing, deep injection fabric extraction, and hospital-grade sanitization. Transparent ₹X rates with our 100% satisfaction guarantee.
              </p>
            </div>

            {/* Direct Helpline Badge */}
            <div className="flex items-center gap-2 bg-[#FAF9F6] p-3 rounded-2xl border border-[#E7E2DC] self-start md:self-auto">
              <div className="w-8 h-8 rounded-xl bg-[#323232] text-white flex items-center justify-center font-bold text-xs">
                MP
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#323232] block">M. Pranay Helpline</span>
                <a href="tel:7036065361" className="text-emerald-700 font-bold hover:underline">
                  +91 7036065361
                </a>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search services (e.g. sofa, carpet, chimney, floor machine)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E7E2DC] focus:border-[#323232] rounded-xl text-xs sm:text-sm text-[#323232] placeholder-[#8C8C8C] focus:outline-none transition-colors"
              />
              {localSearch && (
                <button
                  onClick={() => setLocalSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setSelectedCategoryFilter('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedCategoryFilter === 'all'
                    ? 'bg-[#323232] text-white border-[#323232] shadow-sm'
                    : 'bg-white text-[#6B6B6B] hover:text-[#323232] border-[#E7E2DC]'
                }`}
              >
                All 12 Services
              </button>

              {categories.map((cat) => {
                const isSelected = selectedCategoryFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryFilter(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                      isSelected
                        ? 'bg-[#323232] text-white border-[#323232] shadow-sm'
                        : 'bg-white text-[#6B6B6B] hover:text-[#323232] border-[#E7E2DC]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="ml-1 opacity-70">({cat.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROMINENT BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="py-4">
        <BeforeAfterShowcase />
      </section>

      {/* 3. MAIN SERVICES CATALOG & CART LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Services Grid */}
          <main className="flex-1 w-full min-w-0 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#E7E2DC]">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#323232] tracking-tight">
                  Available Service Packages ({displayedServices.length})
                </h2>
                <span className="text-xs text-[#6B6B6B]">
                  Click "Before/After" on any service card to inspect verified results before booking.
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Transparent ₹X Pricing</span>
              </div>
            </div>

            {displayedServices.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-[#E7E2DC] shadow-subtle space-y-3">
                <p className="text-sm font-bold text-[#323232]">
                  No services matching "{localSearch}".
                </p>
                <p className="text-xs text-[#6B6B6B]">
                  Try searching for "sofa", "carpet", "chimney", "floor", or select "All 12 Services".
                </p>
                <button
                  onClick={() => {
                    setLocalSearch('');
                    setSelectedCategoryFilter('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#323232] text-white text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayedServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            )}

            {/* Assurance Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E7E2DC] shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#323232]">Zero Advance Payment Required</h4>
                  <p className="text-xs text-[#6B6B6B]">
                    Book your date & slot today. Inspect the cleaning quality in person, then pay by Cash or UPI.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/917036065361"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold whitespace-nowrap transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

          </main>

          {/* Right Column: Sticky Cart Sidebar */}
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
