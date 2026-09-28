import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, Clock, Check, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const {
    selectedServiceForDetail,
    setSelectedServiceForDetail,
    cart,
    addToCart,
    updateQuantity
  } = useApp();

  if (!selectedServiceForDetail) return null;

  const service = selectedServiceForDetail;
  const cartItem = cart.find((item) => item.service.id === service.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const savings = service.originalPrice - service.price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-modal border border-[#E7E2DC] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header with Photo Banner */}
        <div className="relative h-48 sm:h-56 bg-[#FAF9F6] border-b border-[#E7E2DC] overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <button
            onClick={() => setSelectedServiceForDetail(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#323232] backdrop-blur-md shadow-sm transition-transform hover:scale-105"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {service.tag && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DDD0C8] text-[#323232] shadow-sm">
              {service.tag}
            </span>
          )}

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
              {service.name}
            </h2>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-neutral-200">
              <span className="flex items-center gap-1 font-semibold text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                {service.rating} ({service.reviewsCount.toLocaleString('en-IN')} reviews)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {service.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-1.5">
              Service Overview
            </h4>
            <p className="text-sm text-[#404040] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Real On-Site Before vs After Transformation */}
          {service.beforeAfterImage && (
            <div className="rounded-2xl overflow-hidden border border-[#DDD0C8] bg-black shadow-subtle">
              <div className="px-3.5 py-2 bg-[#FAF9F6] border-b border-[#E7E2DC] flex items-center justify-between">
                <span className="text-xs font-bold text-[#323232] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#323232]" />
                  <span>Real On-Site Result (Before vs After)</span>
                </span>
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  100% Verified Quality
                </span>
              </div>
              <img
                src={service.beforeAfterImage}
                alt={`${service.name} Before and After Comparison`}
                className="w-full h-auto object-cover max-h-72"
              />
            </div>
          )}

          {/* Inclusions & Exclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* What's Included */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                  What's Included
                </h4>
              </div>
              <ul className="space-y-2">
                {service.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-emerald-900 leading-normal">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Excluded */}
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-neutral-300 text-neutral-700 flex items-center justify-center">
                  <X className="w-3 h-3 stroke-[2.5]" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                  What's Not Included
                </h4>
              </div>
              <ul className="space-y-2">
                {service.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#6B6B6B] leading-normal">
                    <span className="text-red-500 font-bold">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How It Works (4 Steps) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-3">
              How It Works
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.processSteps.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#E7E2DC] bg-[#FAF9F6]/60 flex items-start gap-3"
                >
                  <span className="text-xs font-extrabold text-[#323232] bg-[#DDD0C8]/60 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                    {stepItem.step}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-[#323232]">{stepItem.title}</h5>
                    <p className="text-[11px] text-[#6B6B6B] mt-0.5 leading-snug">{stepItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Professional Guarantee Notice */}
          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#DDD0C8] flex items-center gap-3 text-xs text-[#323232]">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <span className="font-bold block">100% Satisfaction Guarantee</span>
              <span className="text-[#6B6B6B]">Not completely satisfied? We will re-clean free of cost within 24 hours.</span>
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E7E2DC] flex items-center justify-between gap-4 flex-shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C8C8C] block">
              Package Estimate
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-black text-[#323232]">
                ₹X
              </span>
            </div>
          </div>

          <div>
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(service)}
                className="px-6 sm:px-8 py-3 rounded-xl bg-[#323232] hover:bg-black text-white font-bold text-sm tracking-wide shadow-sm flex items-center gap-2 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            ) : (
              <div className="flex items-center bg-[#323232] text-white rounded-xl px-3 py-2 gap-3 shadow-sm border border-[#323232]">
                <button
                  onClick={() => updateQuantity(service.id, -1)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/20 text-[#DDD0C8] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold min-w-5 text-center">
                  {quantity} in cart
                </span>
                <button
                  onClick={() => updateQuantity(service.id, 1)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/20 text-[#DDD0C8] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
