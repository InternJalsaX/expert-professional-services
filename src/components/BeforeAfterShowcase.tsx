import React, { useState } from 'react';
import { transformationsData, TransformationItem } from '../data/transformations';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Phone, Zap } from 'lucide-react';
import { services } from '../data/services';

export const BeforeAfterShowcase: React.FC = () => {
  const { addToCart, setViewMode, setActiveCategory, setSelectedServiceForDetail } = useApp();
  const [activeId, setActiveId] = useState<string>(transformationsData[0].id);

  const currentItem = transformationsData.find((t) => t.id === activeId) || transformationsData[0];
  const matchedService = services.find((s) => s.id === currentItem.serviceId) || services[0];

  const handleBookService = () => {
    addToCart(matchedService);
    setActiveCategory(matchedService.categoryId);
    setViewMode('catalog');
  };

  const handleViewDetails = () => {
    setSelectedServiceForDetail(matchedService);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#E7E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#DDD0C8] shadow-subtle mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#323232]" />
            <span className="text-xs font-bold text-[#323232] uppercase tracking-wider">
              100% Real Transformations
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#323232] tracking-tight">
            Before & After Results Across All 12 Services
          </h2>

          <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2 leading-relaxed">
            See the dramatic difference achieved by our industrial machines, injection-extraction shampooers, and hospital-grade compounds. Select any service below to inspect real results.
          </p>
        </div>

        {/* 12 Service Selection Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {transformationsData.map((item) => {
            const isSelected = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-[#323232] text-white border-[#323232] shadow-sm'
                    : 'bg-[#FAF9F6] text-[#4A4A4A] hover:text-[#323232] border-[#E7E2DC] hover:border-[#DDD0C8]'
                }`}
              >
                <span>{item.title}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#DDD0C8]" />}
              </button>
            );
          })}
        </div>

        {/* Featured Transformation Display Card */}
        <div className="bg-[#FAF9F6] rounded-3xl border border-[#E7E2DC] shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left / Center Image Visual (16:9 comparison photo) */}
          <div className="lg:col-span-8 relative bg-neutral-900 border-b lg:border-b-0 lg:border-r border-[#E7E2DC] flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px]">
            <img
              src={currentItem.beforeAfterImage}
              alt={`${currentItem.title} Before and After Transformation`}
              className="w-full h-full object-cover max-h-[520px]"
              loading="lazy"
            />
            
            <div className="absolute top-4 right-4 bg-emerald-700/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-emerald-500 shadow-sm">
              {currentItem.stats}
            </div>
          </div>

          {/* Right Service Details & Action Box */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            
            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#8C8C8C] block">
                  {currentItem.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#323232] tracking-tight mt-0.5">
                  {currentItem.title}
                </h3>
              </div>

              {/* Before state */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                  <span className="text-xs font-bold uppercase text-[#323232]">Initial Condition:</span>
                </div>
                <p className="text-xs text-[#6B6B6B] pl-4">
                  {currentItem.beforeNote}
                </p>
              </div>

              {/* After result */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span className="text-xs font-bold uppercase text-emerald-900">Expert Result:</span>
                </div>
                <p className="text-xs text-emerald-800 pl-4 font-medium">
                  {currentItem.afterNote}
                </p>
              </div>

              {/* Price & Duration */}
              <div className="pt-2 flex items-baseline justify-between border-t border-[#FAF9F6]">
                <div>
                  <span className="text-[10px] text-[#8C8C8C] uppercase font-bold block">Package Rate</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-[#323232]">
                      ₹X
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#6B6B6B]">
                  {matchedService.duration}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleBookService}
                className="w-full py-3 px-4 rounded-xl bg-[#323232] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide shadow-card flex items-center justify-center gap-2 transition-all"
              >
                <span>Add & Book Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleViewDetails}
                  className="flex-1 py-2 px-3 rounded-xl border border-[#E7E2DC] hover:bg-[#FAF9F6] text-[#323232] text-xs font-semibold transition-colors text-center"
                >
                  View Scope
                </button>
                <a
                  href="https://wa.me/917036065361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors text-center flex items-center justify-center gap-1"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
