import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { services } from '../data/services';
import { categories } from '../data/categories';
import { Search, X, TrendingUp, Clock, ArrowRight, Star, Plus, Check } from 'lucide-react';
import { ServiceItem } from '../types';

export const SearchOverlay: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    setSelectedServiceForDetail,
    addToCart,
    cart,
    setActiveCategory,
    setViewMode
  } = useApp();

  const inputRef = useRef<HTMLInputElement>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Sofa Cleaning',
    'Floor Deep Cleaning Machine',
    'Chimney Deep Cleaning'
  ]);

  const popularSearches = [
    'Sofa Cleaning',
    'Mattress Cleaning',
    'Carpet Cleaning',
    'Dining Chairs Cleaning',
    'Recliner Sofa Cleaning',
    'Chimney Deep Cleaning',
    'Fridge Deep Cleaning',
    'Floor Deep Cleaning Machine',
    'Disinfection Service',
    'Pest Control Service',
    'AC Service',
    'Commercial Sofa Cleaning'
  ];

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredServices = searchQuery.trim()
    ? services.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleSelectQuery = (term: string) => {
    setSearchQuery(term);
    if (!recentSearches.includes(term)) {
      setRecentSearches((prev) => [term, ...prev.slice(0, 4)]);
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForDetail(service);
    setIsSearchOpen(false);
    setViewMode('catalog');
  };

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setIsSearchOpen(false);
    setViewMode('catalog');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-modal border border-[#E7E2DC] overflow-hidden mt-6 sm:mt-12 max-h-[85vh] flex flex-col">
        
        {/* Search Input Box */}
        <div className="p-4 sm:p-5 border-b border-[#E7E2DC] flex items-center gap-3 bg-[#FAF9F6]">
          <Search className="w-5 h-5 text-[#323232] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for sofa cleaning, bathroom cleaning, deep cleaning..."
            className="w-full bg-transparent text-base sm:text-lg text-[#323232] placeholder-[#8C8C8C] focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-full text-neutral-400 hover:text-[#323232]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-3 py-1.5 rounded-lg border border-[#E7E2DC] text-xs sm:text-sm font-semibold text-[#323232] hover:bg-[#EAE6E1] transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-5 space-y-6">
          
          {/* Dynamic Search Results */}
          {searchQuery.trim() !== '' ? (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                  Search Results ({filteredServices.length})
                </span>
                <span className="text-xs text-[#8C8C8C]">Click a service for details</span>
              </div>

              {filteredServices.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm font-medium text-[#6B6B6B]">
                    No cleaning services found for "{searchQuery}".
                  </p>
                  <p className="text-xs text-[#8C8C8C] mt-1">
                    Try searching for "sofa", "deep cleaning", or "bathroom".
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#E7E2DC]">
                  {filteredServices.map((service) => {
                    const isInCart = cart.some((i) => i.service.id === service.id);
                    return (
                      <div
                        key={service.id}
                        className="py-3.5 flex items-center justify-between gap-4 group hover:bg-[#FAF9F6] px-2 rounded-xl transition-colors cursor-pointer"
                        onClick={() => handleSelectService(service)}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-14 h-14 rounded-xl object-cover border border-[#E7E2DC] flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="text-sm font-semibold text-[#323232] group-hover:text-black truncate">
                              {service.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1 text-xs text-[#6B6B6B]">
                              <span className="flex items-center gap-0.5 text-amber-600 font-medium">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                {service.rating}
                              </span>
                              <span>•</span>
                              <span>{service.duration}</span>
                              <span>•</span>
                              <span className="font-semibold text-[#323232]">₹X</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => addToCart(service)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                              isInCart
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-[#323232] text-white hover:bg-black'
                            }`}
                          >
                            {isInCart ? (
                              <>
                                <Check className="w-3.5 h-3.5" /> Added
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" /> Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-2.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#323232]" />
                  <span>Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSelectQuery(term)}
                      className="px-3 py-1.5 rounded-full bg-[#FAF9F6] hover:bg-[#F2ECE6] border border-[#E7E2DC] text-xs font-medium text-[#323232] transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#323232]" />
                    <span>Recent Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSelectQuery(term)}
                        className="px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF9F6] border border-[#E7E2DC] text-xs font-medium text-[#6B6B6B] hover:text-[#323232] transition-colors flex items-center gap-1.5"
                      >
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Quick Links */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-2.5">
                  Browse by Category
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {categories.slice(0, 6).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="p-3 rounded-xl border border-[#E7E2DC] hover:border-[#DDD0C8] bg-white hover:bg-[#FAF9F6] flex items-center justify-between text-left transition-all group"
                    >
                      <span className="text-xs font-semibold text-[#323232] group-hover:text-black">
                        {cat.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#323232] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 bg-[#FAF9F6] border-t border-[#E7E2DC] text-center text-xs text-[#8C8C8C]">
          Press <kbd className="px-1.5 py-0.5 bg-white border border-[#E7E2DC] rounded text-[11px] font-mono">Esc</kbd> anytime to close search
        </div>
      </div>
    </div>
  );
};
