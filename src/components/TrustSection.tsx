import React from 'react';
import { ShieldCheck, Sparkles, Clock, CheckCircle2, RotateCcw, HeartHandshake, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#323232]" />,
      title: 'Verified Professionals',
      description: '100% police background-checked and trained in industrial cleaning protocols.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#323232]" />,
      title: 'Safe Eco-Grade Products',
      description: 'Hospital-grade Bayer & Diversey chemicals that are safe for infants and pets.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#323232]" />,
      title: 'Transparent Pricing',
      description: 'Standard flat rates with no hidden fees or surge pricing on arrival.'
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-[#323232]" />,
      title: 'Free Rescheduling',
      description: 'Easily reschedule or cancel anytime up to 2 hours before your slot.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#323232]" />,
      title: 'Satisfaction Guarantee',
      description: 'Not satisfied with the finish? We provide a complimentary re-clean within 24 hours.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#323232]" />,
      title: 'Punctual Arrival',
      description: 'Our squad arrives fully equipped in company uniform within your 15-minute slot.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#E7E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-2">
            The Expert Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
            Why 1.8M+ Homeowners Trust Expert Professional Services
          </h2>
          <p className="text-sm text-[#6B6B6B] mt-2">
            Engineered around hygiene, machine scrubbing precision, and total transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] hover:border-[#DDD0C8] hover:shadow-subtle transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#DDD0C8]/50 flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-base font-bold text-[#323232] mb-1.5">{point.title}</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
