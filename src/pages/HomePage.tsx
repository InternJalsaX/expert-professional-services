import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { customerReviews } from '../data/initialData';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  Award,
  Users,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Cpu,
  BadgePercent,
  HeartHandshake
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setViewMode, setActiveCategory } = useApp();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need to supply any cleaning equipment, machines, or chemicals?',
      a: 'No, not at all. Our verified Expert cleaning team arrives with industrial single-disc floor scrubbers (175 RPM), injection-extraction upholstery shampooers, HEPA vacuum systems, ladders, and hospital-grade eco-safe compounds. You do not need to provide anything except access to water and electricity.'
    },
    {
      q: 'Why should I choose Expert Professional Services instead of a local house maid or freelance cleaner?',
      a: 'Local house maids only do superficial surface wiping with domestic brooms and mops. They cannot extract trapped dust mites from mattresses, dissolve hardened kitchen chimney grease, or strip deep-seated floor grout dirt. Expert Professional Services uses 1.5 HP rotary floor machines, high-pressure jet pumps, and hospital-grade chemicals handled by background-verified full-time technicians with a 100% satisfaction guarantee.'
    },
    {
      q: 'Are the cleaning formulations safe for babies, pregnant women, and pets?',
      a: 'Yes, 100%. We strictly utilize certified Bayer, Diversey, and 3M biodegradable formulations. Our compounds leave zero toxic chemical fumes, zero pungent smells, and zero hazardous chemical residues. Your home remains safe to occupy immediately after service.'
    },
    {
      q: 'What is your 100% Satisfaction Guarantee and 24-Hour Free Re-clean policy?',
      a: 'We invite you to inspect every corner before final handover and payment. If you notice any area that does not meet our high standards, our specialists re-clean it on the spot. If you notice an issue within 24 hours, we dispatch a technician back to your doorstep free of cost.'
    },
    {
      q: 'How does your ₹X transparent pricing work?',
      a: 'We believe in 100% honesty. You receive a clear, upfront quote of ₹X before work commences. Our technicians are strictly prohibited from demanding surprise doorstep fees, extra chemical charges, or transportation add-ons.'
    },
    {
      q: 'Can I reschedule or cancel my booking without penalty?',
      a: 'Yes. You can reschedule to any date or time slot, or cancel your booking with zero fees directly up to 2 hours before the scheduled appointment.'
    }
  ];

  const handleExploreServices = (categoryId?: string) => {
    if (categoryId) {
      setActiveCategory(categoryId);
    }
    setViewMode('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION - BRAND INTRODUCTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 bg-gradient-to-b from-[#F7F4F0] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E7E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD0C8] shadow-subtle">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#323232] tracking-wide uppercase">
                  Doorstep Deep Cleaning & Hygiene Specialist
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#323232] tracking-tight leading-[1.12]">
                Expert Professional Services. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#323232] via-[#525252] to-[#737373]">
                  Industrial-Grade Deep Cleaning for Discerning Homes.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#525252] max-w-2xl leading-relaxed">
                Led by <strong>M. Pranay</strong>, Expert Professional Services delivers precision home and commercial hygiene. We replace superficial sweeping with heavy single-disc rotary machine scrubbing, injection-extraction upholstery shampooing, and hospital-grade sanitization.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleExploreServices()}
                  className="px-6 sm:px-8 py-3.5 rounded-2xl bg-[#323232] hover:bg-black text-white text-sm sm:text-base font-bold tracking-wide transition-all shadow-card flex items-center gap-2 group"
                >
                  <span>Explore All 12 Services & Transformations</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="tel:7036065361"
                  className="px-5 py-3.5 rounded-2xl bg-white hover:bg-[#FAF9F6] border border-[#DDD0C8] text-[#323232] text-sm sm:text-base font-bold transition-all shadow-subtle flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#323232]" />
                  <span>Call 7036065361</span>
                </a>
              </div>

              {/* Founder Verified Helpline Callout */}
              <div className="p-4 rounded-2xl bg-white border border-[#DDD0C8] shadow-subtle max-w-xl flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DDD0C8] text-[#323232] flex items-center justify-center font-black text-sm">
                    MP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#323232] block">
                      M. Pranay — Founder & Operations Lead
                    </span>
                    <span className="text-[11px] text-[#6B6B6B]">
                      Direct Helplines: +91 7036065361 / +91 6300631794
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/917036065361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Trust Stats Bar */}
              <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#E7E2DC] max-w-lg">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#323232] block">1.8M+</span>
                  <span className="text-xs text-[#737373] font-medium">Homes Restored</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#323232] block">4.88 ★</span>
                  <span className="text-xs text-[#737373] font-medium">Verified Rating</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#323232] block">100%</span>
                  <span className="text-xs text-[#737373] font-medium">In-House Staff</span>
                </div>
              </div>

            </div>

            {/* Right Visual Assurance Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#DDD0C8] shadow-card bg-white p-3">
                <img
                  src="/images/hero-clean.webp"
                  alt="Expert Professional Cleaning Team"
                  className="w-full h-80 sm:h-[420px] object-cover rounded-2xl"
                />
                
                {/* Floating Rating Pill */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-subtle border border-[#E7E2DC] flex items-center gap-2 text-xs font-bold text-[#323232]">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>4.88 Star Standard Across 12 Services</span>
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

      {/* 2. WHO WE ARE - INTRODUCTION TO THE COMPANY & FOUNDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7E2DC] shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#DDD0C8] text-xs font-bold text-[#323232] uppercase tracking-wider">
                <span>Who We Are</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#323232] tracking-tight leading-snug">
                Restoring True Hygiene, Not Just Cosmetic Dusting.
              </h2>

              <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
                Founded by <strong>M. Pranay</strong>, <strong>Expert Professional Services</strong> was established with one uncompromising mission: to give homeowners, commercial offices, and property managers a trustworthy, scientific alternative to chaotic local domestic cleaning.
              </p>

              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Every fabric sofa collects body oils and dust mites; every tiled floor absorbs dirt in porous grout lines; and kitchen chimneys trap flammable grease. Ordinary wiping cannot cure these problems. We deploy high-torque 175 RPM rotary scrubbers, injection-extraction vacuum systems, and non-hazardous hospital-grade chemical formulations to restore surfaces to their original, showroom-grade beauty.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E7E2DC] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-[#323232]">12 Specialized Cleaning Services</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E7E2DC] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-[#323232]">Zero Surprise Fees — Transparent ₹X Rates</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E7E2DC] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-[#323232]">Police & Background Verified Technicians</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E7E2DC] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-[#323232]">100% Safe For Children & Household Pets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-[#E7E2DC] space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#323232] text-[#DDD0C8] flex items-center justify-center mx-auto shadow-sm">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#323232]">Our Quality Pledge</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                "We never leave a client's property until every agreed square foot is inspected, approved, and signed off. If you are not completely delighted, we re-clean it free of charge."
              </p>
              <div className="pt-2 border-t border-[#EAE6E1]">
                <span className="text-xs font-bold text-[#323232] block">M. Pranay</span>
                <span className="text-[11px] text-[#8C8C8C]">Founder & Managing Director</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY PEOPLE NEED TO CHOOSE THEM - 6 VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#DDD0C8] text-xs font-bold text-[#323232] uppercase tracking-wider mb-2">
            <span>The Expert Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#323232] tracking-tight">
            Why People Need To Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2 leading-relaxed">
            Here is why over 1.8 Million households and corporate facilities choose Expert Professional Services instead of ordinary cleaners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] shadow-subtle hover:shadow-card transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#323232]">
              1. 100% Hospital-Grade Safe Chemistry
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              We exclusively use certified Bayer, Diversey, and 3M biodegradable formulations. Zero toxic fumes, zero harsh acids, and safe around crawling babies and pets.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] shadow-subtle hover:shadow-card transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] text-[#323232] border border-[#DDD0C8] flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#323232]">
              2. Heavy Industrial Machinery
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              We bring 1.5 HP single-disc rotary scrubbers operating at 175 RPM, high-pressure AC jet pumps, and injection-extraction shampooers that pull dirt deep from fabric foam.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] shadow-subtle hover:shadow-card transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-[#323232] border border-[#E7E2DC] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#323232]">
              3. Police-Verified In-House Specialists
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Never unvetted day-laborers. Our cleaning technicians undergo comprehensive police background verification, health checks, and professional training in uniform.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] shadow-subtle hover:shadow-card transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
              <BadgePercent className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#323232]">
              4. Transparent & Honest ₹X Quotations
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              No hidden doorstep surprises or inflated bills. What you see is what you pay. Standardized ₹X pricing with zero sudden charges for stairs or machinery.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] shadow-subtle hover:shadow-card transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#323232]">
              5. Ironclad 100% Satisfaction Guarantee
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Inspect the cleaning with our team lead. If any surface does not sparkle or any stain was missed, we re-clean it immediately or within 24 hours free of charge.
            </p>
          </div>

          {/* Pillar 6 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E7E2DC] hover:border-[#DDD0C8] shadow-subtle hover:shadow-card transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#DDD0C8]/60 text-[#323232] border border-[#DDD0C8] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#323232]">
              6. Direct Founder Accountability
            </h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Have a special request, large property, or urgent requirement? Founder M. Pranay is directly accessible on phone and WhatsApp to guarantee smooth execution.
            </p>
          </div>

        </div>
      </section>

      {/* 4. COMPARISON TABLE: EXPERT PROFESSIONAL SERVICES VS LOCAL UNTRAINED CLEANERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-[#E7E2DC]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
              Expert Professional Services vs. Local Cleaners
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
              See why our standards protect your home, health, and expensive furniture.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#DDD0C8]">
                  <th className="py-3.5 px-4 font-bold text-[#323232]">Quality Dimension</th>
                  <th className="py-3.5 px-4 font-black text-emerald-900 bg-emerald-50/80 rounded-t-xl">
                    Expert Professional Services
                  </th>
                  <th className="py-3.5 px-4 font-bold text-neutral-500">
                    Local Maids / Unorganized Cleaners
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E2DC]">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#323232]">Machinery & Equipment</td>
                  <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-950 font-medium">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Check className="w-4 h-4 text-emerald-600" />
                      1.5 HP rotary scrubbers, UV extractors & jet pumps
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <X className="w-4 h-4 text-red-500" />
                      Basic domestic broom, manual mop & rag
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#323232]">Cleaning Chemistry</td>
                  <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-950 font-medium">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Bayer, Diversey, 3M hospital-grade compounds
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <X className="w-4 h-4 text-red-500" />
                      Harsh hydrochloric acids, damaging detergents
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#323232]">Technician Verification</td>
                  <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-950 font-medium">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Police background checked & certified staff
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <X className="w-4 h-4 text-red-500" />
                      Unverified daily wage temporary laborers
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#323232]">Satisfaction Guarantee</td>
                  <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-950 font-medium">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Check className="w-4 h-4 text-emerald-600" />
                      100% Satisfaction + Free 24hr re-clean warranty
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <X className="w-4 h-4 text-red-500" />
                      Zero accountability after payment is taken
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#323232]">Pricing Transparency</td>
                  <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-950 font-medium">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Fixed, clear ₹X quotes with zero hidden fees
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <X className="w-4 h-4 text-red-500" />
                      Unpredictable doorstep bargaining & extra charges
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS - 3 SEAMLESS STEPS */}
      <section className="bg-white py-14 sm:py-20 border-y border-[#E7E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
              Fast & Hassle-Free
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
              How Booking Works
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2">
              Get an immaculate home in 3 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] text-center space-y-3">
              <span className="inline-block text-2xl font-black text-[#323232] bg-[#DDD0C8]/60 px-3 py-1 rounded-xl">
                01
              </span>
              <h3 className="text-lg font-bold text-[#323232]">Choose Your Service</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Browse our 12 specialized services with before/after photos and transparent ₹X pricing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] text-center space-y-3">
              <span className="inline-block text-2xl font-black text-[#323232] bg-[#DDD0C8]/60 px-3 py-1 rounded-xl">
                02
              </span>
              <h3 className="text-lg font-bold text-[#323232]">Pick Date & Time Slot</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Select a convenient slot that suits your schedule. Instant confirmation with zero advance deposit required.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] text-center space-y-3">
              <span className="inline-block text-2xl font-black text-[#323232] bg-[#DDD0C8]/60 px-3 py-1 rounded-xl">
                03
              </span>
              <h3 className="text-lg font-bold text-[#323232]">Inspect & Pay When Satisfied</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Our machine-equipped technicians arrive, transform your space, and you only pay after your complete inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
            Real Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
            Trusted by 1.8M+ Discerning Clients
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

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-1">
            Questions Answered
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

      {/* 8. FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#323232] to-[#1F1F1F] p-8 sm:p-14 text-white text-center space-y-6 shadow-card border border-neutral-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDD0C8]/20 border border-[#DDD0C8]/40 text-xs font-bold text-[#DDD0C8] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DDD0C8]" />
            <span>Ready for a Spotless Transformation?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
            Experience the Expert Clean Difference Today.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            View all 12 specialized services, inspect real before-and-after photos, and book your verified cleaning specialists in under 60 seconds.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleExploreServices()}
              className="px-8 py-3.5 rounded-2xl bg-[#DDD0C8] hover:bg-[#cfc1b7] text-[#323232] text-sm sm:text-base font-black tracking-wide shadow-sm transition-all flex items-center gap-2"
            >
              <span>Explore All 12 Services & Results</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:7036065361"
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm sm:text-base font-bold transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#DDD0C8]" />
              <span>Call Helpline: 7036065361</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
