import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { useApp } from '../context/AppContext';
import { Star, Clock, Check, Plus, Minus, Info } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { cart, addToCart, updateQuantity, setSelectedServiceForDetail } = useApp();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = cart.find((item) => item.service.id === service.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(service);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 500);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(service.id, 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(service.id, -1);
  };

  const handleCardClick = () => {
    setSelectedServiceForDetail(service);
  };

  const savings = service.originalPrice - service.price;

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E7E2DC] hover:border-[#DDD0C8] shadow-subtle hover:shadow-card transition-all duration-200 cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Top Badges & Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {service.tag ? (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#DDD0C8]/60 text-[#323232] border border-[#DDD0C8]">
              {service.tag}
            </span>
          ) : (
            <span className="text-[11px] font-semibold text-[#8C8C8C] uppercase tracking-wider">
              Doorstep Service
            </span>
          )}
        </div>

        {/* Title & Image Layout */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-bold text-[#323232] group-hover:text-black transition-colors leading-snug">
              {service.name}
            </h3>
            {service.subtitle && (
              <p className="text-xs text-[#6B6B6B] mt-1 leading-normal line-clamp-2">
                {service.subtitle}
              </p>
            )}
          </div>

          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-[#E7E2DC] flex-shrink-0 bg-[#FAF9F6] relative">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Rating & Duration */}
        <div className="flex items-center gap-3 text-xs mb-3 pb-3 border-b border-[#FAF9F6]">
          <div className="flex items-center gap-1 font-semibold text-[#323232]">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{service.rating}</span>
            <span className="text-[#8C8C8C] font-normal">
              ({service.reviewsCount > 1000 ? `${(service.reviewsCount / 1000).toFixed(0)}K` : service.reviewsCount})
            </span>
          </div>
          <span className="text-[#DDD0C8]">•</span>
          <div className="flex items-center gap-1 text-[#6B6B6B]">
            <Clock className="w-3.5 h-3.5 text-[#8C8C8C]" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Highlights Checklist */}
        <ul className="space-y-1.5 mb-5">
          {service.highlights.slice(0, 4).map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#4A4A4A] leading-relaxed">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing & Interactive Action Row */}
      <div className="pt-3 border-t border-[#E7E2DC] flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-[#8C8C8C] uppercase tracking-wider block font-semibold">
            Starts at
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold text-[#323232]">
              ₹X
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectedServiceForDetail(service)}
            className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-1.5 rounded-lg transition-colors"
            title="Inspect Before and After Transformation"
          >
            Before/After
          </button>

          <button
            onClick={() => setSelectedServiceForDetail(service)}
            className="text-xs font-semibold text-[#6B6B6B] hover:text-[#323232] px-2 py-1.5 rounded-lg hover:bg-[#FAF9F6] transition-colors"
          >
            Details
          </button>

          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 border ${
                justAdded
                  ? 'bg-emerald-600 text-white border-emerald-600 scale-95'
                  : 'bg-white hover:bg-[#323232] text-[#323232] hover:text-white border-[#323232] shadow-sm'
              }`}
            >
              {justAdded ? 'Added' : 'ADD'}
            </button>
          ) : (
            <div className="flex items-center bg-[#323232] text-white rounded-xl px-2 py-1 gap-2 shadow-sm border border-[#323232]">
              <button
                onClick={handleDecrement}
                className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white/20 text-[#DDD0C8] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs sm:text-sm font-bold min-w-4 text-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white/20 text-[#DDD0C8] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
