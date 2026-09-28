import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Booking } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  RotateCcw,
  XCircle,
  FileText,
  User,
  Phone,
  Star,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';
import { availableTimeSlots } from '../data/initialData';

export const MyBookingsPage: React.FC = () => {
  const { bookings, cancelBooking, rescheduleBooking, setViewMode, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Completed' | 'Cancelled'>('Upcoming');

  // Reschedule state
  const [rescheduleTarget, setRescheduleTarget] = useState<Booking | null>(null);
  const [newDate, setNewDate] = useState('Tomorrow, 29 Sep');
  const [newSlot, setNewSlot] = useState('02:30 PM - 04:00 PM');

  // Cancel target state
  const [cancelTarget, setCancelTarget] = useState<Booking | null>(null);

  // Invoice / Details modal
  const [viewDetailsTarget, setViewDetailsTarget] = useState<Booking | null>(null);

  const filteredBookings = bookings.filter((b) => b.status === activeTab);

  const handleConfirmReschedule = () => {
    if (rescheduleTarget) {
      rescheduleBooking(rescheduleTarget.id, newDate, newSlot);
      setRescheduleTarget(null);
    }
  };

  const handleConfirmCancel = () => {
    if (cancelTarget) {
      cancelBooking(cancelTarget.id);
      setCancelTarget(null);
    }
  };

  const dates = [
    { label: 'Today', day: '28 Sep' },
    { label: 'Tomorrow', day: '29 Sep' },
    { label: 'Wed', day: '30 Sep' },
    { label: 'Thu', day: '01 Oct' },
    { label: 'Fri', day: '02 Oct' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
              My Service Bookings
            </h1>
            <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
              Manage your scheduled professional cleaning sessions, rescheduling, and receipts.
            </p>
          </div>

          <button
            onClick={() => setViewMode('catalog')}
            className="self-start sm:self-auto px-4 py-2 rounded-xl bg-[#323232] text-white text-xs font-bold hover:bg-black transition-colors flex items-center gap-1.5"
          >
            <span>Book New Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#E7E2DC] shadow-subtle max-w-md">
          {(['Upcoming', 'Completed', 'Cancelled'] as const).map((tab) => {
            const count = bookings.filter((b) => b.status === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-[#323232] text-white shadow-sm'
                    : 'text-[#6B6B6B] hover:text-[#323232]'
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#DDD0C8] text-[#323232]' : 'bg-[#FAF9F6] text-[#8C8C8C]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 border border-[#E7E2DC] text-center shadow-subtle">
            <div className="w-16 h-16 rounded-full bg-[#FAF9F6] border border-[#E7E2DC] flex items-center justify-center mx-auto mb-3 text-neutral-400">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-[#323232]">No {activeTab.toLowerCase()} bookings</h3>
            <p className="text-xs text-[#6B6B6B] max-w-xs mx-auto mt-1 mb-5">
              {activeTab === 'Upcoming'
                ? "You don't have any cleaning appointments scheduled. Choose a service to get started."
                : `You don't have any ${activeTab.toLowerCase()} service history at this moment.`}
            </p>
            {activeTab === 'Upcoming' && (
              <button
                onClick={() => setViewMode('catalog')}
                className="px-5 py-2.5 rounded-xl bg-[#323232] text-white text-xs font-bold hover:bg-black transition-colors"
              >
                Explore Cleaning Services
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E7E2DC] shadow-subtle hover:shadow-card transition-all space-y-4"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#FAF9F6]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-[#323232] bg-[#FAF9F6] px-3 py-1 rounded-xl border border-[#E7E2DC]">
                      {booking.id}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        booking.status === 'Upcoming'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : booking.status === 'Completed'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : 'bg-neutral-100 text-neutral-600 border border-neutral-300'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#8C8C8C]">
                    <span>Booked on {new Date(booking.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  </div>
                </div>

                {/* Service Details & Schedule */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Services Itemized */}
                  <div className="md:col-span-2 space-y-2">
                    <span className="text-[11px] font-bold uppercase text-[#6B6B6B] block">
                      Services Booked
                    </span>
                    <div className="space-y-2">
                      {booking.services.map((item) => (
                        <div key={item.service.id} className="flex items-center gap-3 bg-[#FAF9F6] p-2.5 rounded-xl border border-[#E7E2DC]">
                          <img
                            src={item.service.image}
                            alt={item.service.name}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="font-bold text-[#323232] truncate">{item.service.name}</h4>
                            <span className="text-[#6B6B6B] text-[11px]">
                              Qty: {item.quantity} • {item.service.duration} • ₹X
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Assigned Professional */}
                    {booking.professionalName && booking.status !== 'Cancelled' && (
                      <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-xl border border-[#EAE6E1] text-[11px] text-[#4A4A4A]">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-[#323232]" />
                          <span>Specialist: <strong>{booking.professionalName}</strong></span>
                          <span className="flex items-center text-amber-600 font-bold">
                            <Star className="w-3 h-3 fill-current ml-1" />
                            {booking.professionalRating}
                          </span>
                        </div>
                        <span className="text-emerald-700 font-medium">Police Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Schedule & Location */}
                  <div className="space-y-3 bg-[#FAF9F6] p-4 rounded-2xl border border-[#E7E2DC] flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[#8C8C8C] block">Date & Time</span>
                        <div className="flex items-center gap-1.5 font-bold text-[#323232] mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-[#323232]" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] mt-0.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{booking.timeSlot}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#EAE6E1]">
                        <span className="text-[10px] font-bold uppercase text-[#8C8C8C] block">Service Location</span>
                        <p className="text-xs text-[#323232] font-semibold mt-0.5 truncate">{booking.address.name}</p>
                        <p className="text-[11px] text-[#6B6B6B] line-clamp-2">
                          {booking.address.houseFlat}, {booking.address.area}, {booking.address.city}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#EAE6E1] flex items-center justify-between">
                      <span className="text-xs text-[#6B6B6B]">Total Paid:</span>
                      <span className="text-sm font-extrabold text-[#323232]">
                        ₹X
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="pt-3 border-t border-[#FAF9F6] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setViewDetailsTarget(booking)}
                    className="text-xs font-bold text-[#323232] hover:text-black flex items-center gap-1.5 py-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Bill Breakdown</span>
                  </button>

                  {booking.status === 'Upcoming' && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setRescheduleTarget(booking)}
                        className="px-3.5 py-1.5 rounded-xl border border-[#DDD0C8] hover:border-[#323232] bg-white text-xs font-bold text-[#323232] transition-colors flex items-center gap-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reschedule</span>
                      </button>
                      <button
                        onClick={() => setCancelTarget(booking)}
                        className="px-3.5 py-1.5 rounded-xl border border-red-200 hover:bg-red-50 text-xs font-bold text-red-700 transition-colors flex items-center gap-1"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Cancel Booking</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* RESCHEDULE MODAL */}
        {rescheduleTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-modal border border-[#E7E2DC] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-[#323232]">Reschedule Booking</h3>
                <button
                  onClick={() => setRescheduleTarget(null)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-[#323232]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#6B6B6B]">
                Select a new convenient date and time slot for booking <strong>{rescheduleTarget.id}</strong>. Rescheduling is 100% free.
              </p>

              <div>
                <span className="text-xs font-bold uppercase text-[#6B6B6B] block mb-2">New Date</span>
                <div className="grid grid-cols-3 gap-2">
                  {dates.slice(0, 3).map((d) => {
                    const label = `${d.label}, ${d.day}`;
                    const isSelected = newDate === label;
                    return (
                      <button
                        key={d.day}
                        onClick={() => setNewDate(label)}
                        className={`p-2 rounded-xl border text-xs font-medium text-center ${
                          isSelected
                            ? 'bg-[#323232] text-white border-[#323232]'
                            : 'bg-white text-[#323232] border-[#E7E2DC]'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase text-[#6B6B6B] block mb-2">New Slot</span>
                <div className="space-y-1.5 max-h-40 overflow-y-auto">
                  {availableTimeSlots.filter((s) => s.available).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setNewSlot(s.time)}
                      className={`w-full p-2.5 rounded-xl border text-xs font-medium text-left flex items-center justify-between ${
                        newSlot === s.time
                          ? 'bg-[#323232] text-white border-[#323232]'
                          : 'bg-white text-[#323232] border-[#E7E2DC]'
                      }`}
                    >
                      <span>{s.time}</span>
                      {newSlot === s.time && <CheckCircle2 className="w-3.5 h-3.5 text-[#DDD0C8]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setRescheduleTarget(null)}
                  className="flex-1 py-2.5 rounded-xl border border-[#E7E2DC] text-xs font-bold text-[#6B6B6B]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmReschedule}
                  className="flex-1 py-2.5 rounded-xl bg-[#323232] text-white text-xs font-bold hover:bg-black"
                >
                  Confirm New Slot
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CANCEL CONFIRMATION MODAL */}
        {cancelTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-modal border border-[#E7E2DC] text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>

              <h3 className="font-bold text-base text-[#323232]">Cancel This Booking?</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Are you sure you want to cancel booking <strong>{cancelTarget.id}</strong>? If paid online, 100% of the amount will be refunded to your source account within 24 hours.
              </p>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setCancelTarget(null)}
                  className="flex-1 py-2.5 rounded-xl border border-[#E7E2DC] text-xs font-bold text-[#323232]"
                >
                  Keep Booking
                </button>
                <button
                  onClick={handleConfirmCancel}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold"
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW DETAILS / BILL BREAKDOWN MODAL */}
        {viewDetailsTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-modal border border-[#E7E2DC] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E2DC]">
                <div>
                  <h3 className="font-bold text-base text-[#323232]">Booking Details</h3>
                  <span className="text-xs font-mono text-[#8C8C8C]">{viewDetailsTarget.id}</span>
                </div>
                <button
                  onClick={() => setViewDetailsTarget(null)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-[#323232]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 text-xs text-[#6B6B6B]">
                <div className="flex justify-between">
                  <span>Item Subtotal</span>
                  <span className="font-semibold text-[#323232]">₹X</span>
                </div>
                {viewDetailsTarget.discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount Applied</span>
                    <span>-₹X</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Safety & Equipment Fee</span>
                  <span className="text-[#323232]">₹X</span>
                </div>
                <div className="flex justify-between">
                  <span>GST & Taxes (5%)</span>
                  <span className="text-[#323232]">₹X</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E7E2DC] text-sm font-bold text-[#323232]">
                  <span>Total Amount</span>
                  <span className="text-base font-extrabold text-[#323232]">₹X</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#E7E2DC] text-xs text-[#4A4A4A] space-y-1">
                <p><strong>Payment Method:</strong> {viewDetailsTarget.paymentMethod}</p>
                <p><strong>Payment Status:</strong> {viewDetailsTarget.paymentStatus}</p>
              </div>

              <button
                onClick={() => setViewDetailsTarget(null)}
                className="w-full py-2.5 rounded-xl bg-[#323232] text-white text-xs font-bold hover:bg-black"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
