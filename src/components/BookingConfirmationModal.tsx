import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Calendar, Clock, MapPin, Sparkles, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';

export const BookingConfirmationModal: React.FC = () => {
  const { confirmedBooking, setConfirmedBooking, setViewMode } = useApp();

  if (!confirmedBooking) return null;

  const handleViewBookings = () => {
    setConfirmedBooking(null);
    setViewMode('bookings');
  };

  const handleBackToHome = () => {
    setConfirmedBooking(null);
    setViewMode('catalog');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-modal border border-[#E7E2DC] overflow-hidden flex flex-col text-center p-6 sm:p-8">
        
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-sm animate-bounce">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-black text-[#323232] tracking-tight">
          Booking Confirmed!
        </h2>
        <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 mb-5">
          Your cleaning service has been scheduled. Our verified partner is assigned.
        </p>

        {/* Booking ID Badge */}
        <div className="bg-[#FAF9F6] border border-[#DDD0C8] rounded-2xl p-3 mb-5 inline-block mx-auto">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C8C8C] block">
            Booking ID
          </span>
          <span className="text-lg font-mono font-black text-[#323232] tracking-wider">
            {confirmedBooking.id}
          </span>
        </div>

        {/* Booking Details Card */}
        <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#E7E2DC] text-left space-y-3 mb-6 text-xs text-[#4A4A4A]">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#323232] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#323232] block">Selected Services:</span>
              <ul className="list-disc list-inside text-[#6B6B6B] text-[11px] mt-0.5">
                {confirmedBooking.services.map((item) => (
                  <li key={item.service.id}>
                    {item.service.name} (Qty: {item.quantity})
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-[#323232] flex-shrink-0" />
            <div>
              <span className="font-bold text-[#323232]">Date & Slot: </span>
              <span>{confirmedBooking.date}, {confirmedBooking.timeSlot}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#323232] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#323232]">Service Address: </span>
              <span className="text-[#6B6B6B]">
                {confirmedBooking.address.houseFlat}, {confirmedBooking.address.area}, {confirmedBooking.address.city}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#EAE6E1] flex items-center justify-between font-bold text-sm text-[#323232]">
            <span>Total Amount ({confirmedBooking.paymentMethod}):</span>
            <span className="text-base text-emerald-800">₹X</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleViewBookings}
            className="flex-1 py-3 px-4 rounded-xl bg-[#323232] hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>View in My Bookings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleBackToHome}
            className="flex-1 py-3 px-4 rounded-xl border border-[#E7E2DC] hover:bg-[#FAF9F6] text-[#323232] font-bold text-xs sm:text-sm transition-colors"
          >
            Back to Services
          </button>
        </div>

      </div>
    </div>
  );
};
