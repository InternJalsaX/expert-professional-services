import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { supportedCities } from '../data/initialData';
import { MapPin, X, Check, Search, ShieldCheck } from 'lucide-react';

export const LocationModal: React.FC = () => {
  const { isLocationModalOpen, setIsLocationModalOpen, selectedCity, setSelectedCity, showToast } = useApp();
  const [filterQuery, setFilterQuery] = useState('');

  if (!isLocationModalOpen) return null;

  const currentCityObj = supportedCities.find((c) => c.name.toLowerCase() === selectedCity.toLowerCase()) || supportedCities[0];

  const handleSelectCity = (cityName: string) => {
    setSelectedCity(cityName);
    setIsLocationModalOpen(false);
    showToast(`Location updated to ${cityName}`, 'info');
  };

  const filteredCities = supportedCities.filter(c => 
    c.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    c.activeAreas.some(a => a.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-modal border border-[#E7E2DC] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-[#E7E2DC] flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#DDD0C8]/50 flex items-center justify-center text-[#323232]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#323232]">Select Your City</h3>
              <p className="text-xs text-[#6B6B6B]">We provide verified doorstep services across major metros</p>
            </div>
          </div>
          <button
            onClick={() => setIsLocationModalOpen(false)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-[#323232] hover:bg-[#EAE6E1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-4 border-b border-[#E7E2DC]">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C8C8C]" />
            <input
              type="text"
              placeholder="Search your city or locality..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E7E2DC] rounded-xl text-sm text-[#323232] focus:outline-none focus:border-[#323232] transition-colors"
            />
          </div>
        </div>

        {/* City Grid */}
        <div className="p-5 max-h-80 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
            {filteredCities.map((city) => {
              const isSelected = city.name.toLowerCase() === selectedCity.toLowerCase();
              return (
                <button
                  key={city.id}
                  onClick={() => handleSelectCity(city.name)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium transition-all text-left ${
                    isSelected
                      ? 'bg-[#323232] text-white border-[#323232] shadow-sm'
                      : 'bg-white hover:bg-[#FAF9F6] border-[#E7E2DC] text-[#323232] hover:border-[#DDD0C8]'
                  }`}
                >
                  <span>{city.name}</span>
                  {isSelected && <Check className="w-4 h-4 text-[#DDD0C8]" />}
                </button>
              );
            })}
          </div>

          {/* Active areas in currently selected city */}
          <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#E7E2DC]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] block mb-2">
              Popular Localities in {selectedCity}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentCityObj.activeAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 bg-white border border-[#E7E2DC] rounded-lg text-xs font-medium text-[#404040]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF9F6] border-t border-[#E7E2DC] flex items-center justify-between text-xs text-[#6B6B6B]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#323232]" />
            <span>Guaranteed on-time arrival within 30 minutes</span>
          </div>
          <button
            onClick={() => setIsLocationModalOpen(false)}
            className="font-semibold text-[#323232] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
