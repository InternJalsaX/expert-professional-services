import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { supportedCities } from '../data/initialData';
import { categories } from '../data/categories';

export const Footer: React.FC = () => {
  const { setViewMode, setActiveCategory, setSelectedCity } = useApp();

  return (
    <footer className="bg-[#323232] text-neutral-300 pt-12 pb-8 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-neutral-700/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#DDD0C8] text-[#323232] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block leading-tight">
                  Expert
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDD0C8]">
                  Professional Services
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              India's premier deep cleaning and home hygiene platform. Industrial rotary machine scrubbing, upholstery steam extraction, and verified background-checked professionals.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#DDD0C8]">Contact Person:</span>
                <span className="text-white font-semibold">M. Pranay</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DDD0C8]" />
                <a href="tel:7036065361" className="hover:text-white transition-colors">7036065361</a>
                <span>/</span>
                <a href="tel:6300631794" className="hover:text-white transition-colors">6300631794</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <a href="https://wa.me/917036065361" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  WhatsApp Available: +91 7036065361
                </a>
              </div>
            </div>
          </div>

          {/* Quick Services (12 Services) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              All 12 Official Services
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {categories.map((c) => (
                <div key={c.id}>
                  <button
                    onClick={() => {
                      setActiveCategory(c.id);
                      setViewMode('catalog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white text-neutral-400 transition-colors text-left truncate block w-full"
                  >
                    {c.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Service Cities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Operating Metros
            </h4>
            <ul className="space-y-2 text-xs">
              {supportedCities.map((city) => (
                <li key={city.id}>
                  <button
                    onClick={() => {
                      setSelectedCity(city.name);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {city.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Guarantee */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Our Guarantee
            </h4>
            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#DDD0C8]" />
                <span>100% Satisfaction</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Every booking is protected by our free 24-hr re-clean warranty and insurance coverage.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© 2026 Expert Professional Services Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Safety Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
