import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Search, MapPin, Calendar, ShoppingBag, Menu, Sparkles, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    viewMode,
    setViewMode,
    selectedCity,
    setIsLocationModalOpen,
    setIsSearchOpen,
    searchQuery,
    bookings,
    cartCount,
    total,
    setIsBookingModalOpen
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const upcomingBookingsCount = bookings.filter((b) => b.status === 'Upcoming').length;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E2DC] shadow-subtle py-2.5'
          : 'bg-white border-b border-[#EAE6E1] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <button
              onClick={() => setViewMode('landing')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#323232] flex items-center justify-center text-[#DDD0C8] shadow-sm transition-transform group-hover:scale-105">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-[#323232] leading-tight">
                  Expert
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#737373]">
                  Professional Services
                </span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 pl-4 border-l border-[#E7E2DC]">
              <button
                onClick={() => setViewMode('landing')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'landing'
                    ? 'text-[#323232] bg-[#FAF9F6]'
                    : 'text-[#6B6B6B] hover:text-[#323232]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setViewMode('catalog')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'catalog'
                    ? 'text-[#323232] bg-[#DDD0C8]/40 font-semibold'
                    : 'text-[#6B6B6B] hover:text-[#323232]'
                }`}
              >
                Services
              </button>
            </nav>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-xl hidden sm:block">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="relative cursor-pointer group"
            >
              <div className="w-full flex items-center gap-3 px-4 py-2.5 bg-[#FAF9F6] hover:bg-[#F5F2EB] border border-[#E7E2DC] group-hover:border-[#DDD0C8] rounded-full transition-all duration-200 shadow-inner">
                <Search className="w-4 h-4 text-[#8C8C8C] group-hover:text-[#323232] transition-colors" />
                <span className="text-sm text-[#737373] group-hover:text-[#404040] select-none truncate">
                  {searchQuery || "Search for sofa cleaning, bathroom cleaning, deep cleaning..."}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Quick Contact & WhatsApp for M. Pranay */}
            <a
              href="https://wa.me/917036065361"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 transition-colors"
              title="Chat with M. Pranay on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>WhatsApp: 7036065361</span>
            </a>

            {/* City Selector */}
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-[#F2ECE6] border border-[#E7E2DC] text-xs sm:text-sm font-medium text-[#323232] transition-all"
              title="Change your service location"
            >
              <MapPin className="w-3.5 h-3.5 text-[#323232]" />
              <span className="font-semibold">{selectedCity}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
            </button>

            {/* My Bookings */}
            <button
              onClick={() => setViewMode('bookings')}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                viewMode === 'bookings'
                  ? 'bg-[#323232] text-white shadow-sm'
                  : 'bg-white hover:bg-[#FAF9F6] border border-[#E7E2DC] text-[#323232]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden lg:inline">My Bookings</span>
              {upcomingBookingsCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#DDD0C8] text-[#323232] text-xs font-bold flex items-center justify-center">
                  {upcomingBookingsCount}
                </span>
              )}
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden p-2 rounded-xl border border-[#E7E2DC] bg-[#FAF9F6] text-[#323232]"
              aria-label="Search services"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[#E7E2DC] bg-[#FAF9F6] text-[#323232]"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-[#E7E2DC] mt-3 flex flex-col gap-2 animate-fadeIn">
            <button
              onClick={() => {
                setViewMode('landing');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                viewMode === 'landing' ? 'bg-[#FAF9F6] text-[#323232] font-semibold' : 'text-[#6B6B6B]'
              }`}
            >
              Home Overview
            </button>
            <button
              onClick={() => {
                setViewMode('catalog');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                viewMode === 'catalog' ? 'bg-[#FAF9F6] text-[#323232] font-semibold' : 'text-[#6B6B6B]'
              }`}
            >
              Browse All Services & Packages
            </button>
            <button
              onClick={() => {
                setViewMode('bookings');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                viewMode === 'bookings' ? 'bg-[#FAF9F6] text-[#323232] font-semibold' : 'text-[#6B6B6B]'
              }`}
            >
              My Bookings ({upcomingBookingsCount} upcoming)
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
