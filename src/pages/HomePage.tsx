import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/categories';
import { services } from '../data/services';
import { customerReviews } from '../data/initialData';
import { ServiceCard } from '../components/ServiceCard';
import { TrustSection } from '../components/TrustSection';
import { BeforeAfterShowcase } from '../components/BeforeAfterShowcase';
import {
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Calendar,
  Smile,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setViewMode, setActiveCategory, setIsSearchOpen, setSearchQuery } = useApp();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const mostBooked = services.filter((s) =>
    ['sofa-cleaning-3seater', 'floor-deep-cleaning-machine', 'ac-service', 'chimney-deep-cleaning'].includes(s.id)
  );

  const faqs = [
    {
      q: 'Do I need to supply any cleaning equipment or chemicals?',
      a: 'Not at all. Our verified Expert cleaning team arrives fully equipped with industrial single-disc floor scrubbers, vacuum machines, ladders, microfiber tools, and hospital-grade eco-friendly cleaning compounds.'
    },
    {
      q: 'How long does a full home deep cleaning take?',
      a: 'A typical 2 BHK to 3 BHK apartment takes between 3.5 to 5 hours. We dispatch a specialized 2 to 4 member team depending on the square footage to ensure thorough detailing without keeping you waiting all day.'
    },
    {
      q: 'Are the cleaning agents safe for kids and pets?',
      a: 'Yes, 100%. We strictly utilize non-toxic, biodegradable Bayer and Diversey cleaning formulations that leave zero hazardous residue or irritating chemical odors.'
    },
    {
      q: 'What if I am not satisfied with any area cleaned?',
      a: 'We offer an ironclad 100% Satisfaction Guarantee. Inspect the premises during final handover. If any spot is missed, we will re-clean it immediately or send a technician back within 24 hours free of cost.'
    },
    {
      q: 'Can I reschedule my booking?',
      a: 'Yes, you can easily reschedule to any available date or time slot directly through "My Bookings" with zero penalty up to 2 hours prior to the appointment.'
    }
  ];

  const handleSearchClick = (keyword?: string) => {
    if (keyword) {
      setSearchQuery(keyword);
    }
    setIsSearchOpen(true);
  };

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setViewMode('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 bg-gradient-to-b from-[#F5F1EE] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E7E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD0C8] shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#323232] tracking-wide uppercase">
                  Top Rated Doorstep Hygiene in 6 Metros
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#323232] tracking-tight leading-[1.1]">
                Your home. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#323232] via-[#4A4A4A] to-[#6B6B6B]">
                  Professionally cleaned.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] max-w-xl leading-relaxed">
                Reliable, background-verified cleaning professionals for every corner of your home. Heavy machine floor scrubbing, upholstery shampooing, and spot descaling.
              </p>

              {/* Large Hero Search Bar */}
              <div className="p-2 sm:p-2.5 bg-white rounded-2xl border border-[#DDD0C8] shadow-card max-w-xl">
                <div
                  onClick={() => handleSearchClick()}
                  className="flex items-center gap-3 px-3 py-2 cursor-pointer rounded-xl hover:bg-[#FAF9F6] transition-colors"
                >
                  <Search className="w-5 h-5 text-[#323232] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#8C8C8C] flex-1 select-none truncate">
                    What do you need cleaned today?
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewMode('catalog');
                    }}
                    className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#323232] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <span>Browse</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Popular Search Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#6B6B6B]">
                <span className="font-semibold text-[#323232]">Popular:</span>
                {['Sofa Cleaning', 'Mattress Cleaning', 'Floor Machine', 'Chimney Deep Clean', 'AC Service'].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearchClick(term)}
                    className="px-2.5 py-1 rounded-lg bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] hover:bg-[#FAF9F6] text-[#4A4A4A] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              {/* Direct Booking Helpline Callout */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#DDD0C8] flex flex-wrap items-center justify-between gap-3 shadow-subtle max-w-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    MP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#323232] block">M. Pranay — Expert Professional Services</span>
                    <span className="text-[11px] text-[#6B6B6B]">Direct Helpline: 7036065361 / 6300631794</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:7036065361"
                    className="px-3 py-1.5 rounded-xl border border-[#323232] bg-[#323232] text-white text-xs font-bold hover:bg-black transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917036065361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E7E2DC]/80 max-w-lg">
                <div>
                  <span className="text-xl sm:text-2xl font-black text-[#323232] block">1.8M+</span>
                  <span className="text-xs text-[#8C8C8C]">Homes Cleaned</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-[#323232] block">4.88 ★</span>
                  <span className="text-xs text-[#8C8C8C]">Customer Rating</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-[#323232] block">100%</span>
                  <span className="text-xs text-[#8C8C8C]">Verified Partners</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#DDD0C8] shadow-card bg-white p-3">
                <img
                  src="/images/hero-clean.webp"
                  alt="Professional Home Cleaning"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
                
                {/* Floating Rating Pill */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-subtle border border-[#E7E2DC] flex items-center gap-2 text-xs font-bold text-[#323232]">
                  <div className="flex text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span>4.88 Star Quality Standard</span>
                </div>

                {/* Floating Assurance Pill */}
                <div className="absolute bottom-6 right-6 bg-[#323232]/95 text-white backdrop-blur-md px-4 py-2.5 rounded-xl shadow-subtle flex items-center gap-2.5 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#DDD0C8]" />
                  <span>Free 24hr Re-clean Warranty</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BEFORE & AFTER SHOWCASE FOR ALL 12 SERVICES */}
      <BeforeAfterShowcase />

      {/* POPULAR CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
              Complete Services Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
              Explore Cleaning Categories
            </h2>
          </div>
          <button
            onClick={() => setViewMode('catalog')}
            className="text-xs sm:text-sm font-bold text-[#323232] hover:text-black flex items-center gap-1 group"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group p-4 rounded-2xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] hover:shadow-card transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-28 rounded-xl overflow-hidden mb-3 bg-[#FAF9F6] border border-[#E7E2DC]">
                  <img
                    src={cat.bannerImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#323232] group-hover:text-black leading-snug">
                  {cat.name}
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-[#FAF9F6] flex items-center justify-between text-[11px] text-[#8C8C8C]">
                <span>{cat.count} options</span>
                <span className="text-[#323232] font-semibold group-hover:underline">Explore</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS (3 Simple Steps) */}
      <section className="bg-white py-14 sm:py-20 border-y border-[#E7E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
              Seamless 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
              How Expert Professional Services Works
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2">
              Book in under 60 seconds with instant slot confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] text-center space-y-3 relative">
              <span className="inline-block text-2xl font-black text-[#323232] bg-[#DDD0C8]/50 px-3 py-1 rounded-xl">
                01
              </span>
              <h3 className="text-lg font-bold text-[#323232]">Choose a service</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Select from transparent packages for full apartments, sofas, bathrooms, or kitchens with upfront fixed pricing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] text-center space-y-3 relative">
              <span className="inline-block text-2xl font-black text-[#323232] bg-[#DDD0C8]/50 px-3 py-1 rounded-xl">
                02
              </span>
              <h3 className="text-lg font-bold text-[#323232]">Pick your time</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Choose any date and preferred time slot that suits your routine. Same-day emergency slots available.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] text-center space-y-3 relative">
              <span className="inline-block text-2xl font-black text-[#323232] bg-[#DDD0C8]/50 px-3 py-1 rounded-xl">
                03
              </span>
              <h3 className="text-lg font-bold text-[#323232]">Relax while we clean</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Our equipped, background-verified specialists arrive with heavy machinery and handle complete deep cleaning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MOST BOOKED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
              Customer Favorites
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
              Most Booked Cleaning Services
            </h2>
          </div>
          <button
            onClick={() => setViewMode('catalog')}
            className="text-xs sm:text-sm font-bold text-[#323232] hover:text-black flex items-center gap-1 group"
          >
            <span>Explore All 24 Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mostBooked.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <TrustSection />

      {/* CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
            Real Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
            Loved by 1.8M+ Discerning Households
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-[#E7E2DC] shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#404040] leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#FAF9F6]">
                <h4 className="text-xs font-bold text-[#323232]">{rev.name}</h4>
                <p className="text-[11px] text-[#8C8C8C]">{rev.location}</p>
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mt-1 inline-block">
                  Verified Booking • {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7E2DC] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#323232] hover:text-black"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#323232] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#6B6B6B] leading-relaxed border-t border-[#FAF9F6]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
