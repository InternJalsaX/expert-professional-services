import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  CreditCard,
  Check,
  ChevronRight,
  ChevronLeft,
  Plus,
  ShieldCheck,
  Smartphone,
  Banknote,
  Building,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Address } from '../types';
import { availableTimeSlots } from '../data/initialData';

export const BookingModal: React.FC = () => {
  const {
    isBookingModalOpen,
    setIsBookingModalOpen,
    cart,
    subtotal,
    discount,
    safetyFee,
    taxes,
    total,
    savedAddresses,
    currentAddress,
    setCurrentAddress,
    addAddress,
    createBooking,
    selectedCity,
    showToast
  } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Address Form State
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [newAddressForm, setNewAddressForm] = useState({
    tag: 'Home' as 'Home' | 'Work' | 'Other',
    name: 'Rohan Sharma',
    phone: '+91 98765 43210',
    houseFlat: '',
    street: '',
    area: '',
    city: selectedCity,
    pincode: ''
  });

  // Date & Time Selection
  const dates = [
    { label: 'Today', day: '28 Sep', sub: 'Limited Slots' },
    { label: 'Tomorrow', day: '29 Sep', sub: 'Available' },
    { label: 'Wed', day: '30 Sep', sub: 'Available' },
    { label: 'Thu', day: '01 Oct', sub: 'Available' },
    { label: 'Fri', day: '02 Oct', sub: 'Available' }
  ];
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 29 Sep');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('02:30 PM - 04:00 PM');

  // Payment Selection
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Cash after service'>('UPI');
  const [upiOption, setUpiOption] = useState<'gpay' | 'phonepe' | 'paytm' | 'qr'>('gpay');

  if (!isBookingModalOpen) return null;

  const handleCreateAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddressForm.houseFlat || !newAddressForm.area || !newAddressForm.pincode) {
      showToast('Please fill all required address fields', 'error');
      return;
    }
    const created = addAddress(newAddressForm);
    setCurrentAddress(created);
    setShowAddAddressForm(false);
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!currentAddress) {
        showToast('Please select or add a delivery address', 'error');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedTimeSlot) {
        showToast('Please select an available time slot', 'error');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handleConfirmBooking = () => {
    createBooking({
      address: currentAddress,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      paymentMethod
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-modal border border-[#E7E2DC] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header with Step Tracker */}
        <div className="p-4 sm:p-5 border-b border-[#E7E2DC] bg-[#FAF9F6] flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#323232] text-[#DDD0C8] flex items-center justify-center text-xs font-bold">
                {step}
              </span>
              <h3 className="font-bold text-base text-[#323232]">
                {step === 1 && 'Step 1: Select Address & Location'}
                {step === 2 && 'Step 2: Choose Date & Time Slot'}
                {step === 3 && 'Step 3: Review Your Booking'}
                {step === 4 && 'Step 4: Select Payment Method'}
              </h3>
            </div>

            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-[#323232] hover:bg-[#EAE6E1]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s <= step ? 'bg-[#323232]' : 'bg-[#E7E2DC]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          
          {/* STEP 1: ADDRESS */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                  Saved Addresses in {selectedCity}
                </span>
                {!showAddAddressForm && (
                  <button
                    onClick={() => setShowAddAddressForm(true)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#323232] hover:underline"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add New Address</span>
                  </button>
                )}
              </div>

              {!showAddAddressForm ? (
                <div className="space-y-3">
                  {savedAddresses.map((addr) => {
                    const isSelected = currentAddress?.id === addr.id;
                    return (
                      <div
                        key={addr.id}
                        onClick={() => setCurrentAddress(addr)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#FAF9F6] border-[#323232] shadow-sm'
                            : 'bg-white hover:bg-[#FAF9F6] border-[#E7E2DC]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isSelected ? 'bg-[#323232] text-white' : 'bg-[#FAF9F6] text-[#6B6B6B]'
                          }`}>
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-[#DDD0C8]/50 text-[#323232]">
                                {addr.tag}
                              </span>
                              <span className="text-sm font-bold text-[#323232]">{addr.name}</span>
                              <span className="text-xs text-[#8C8C8C]">• {addr.phone}</span>
                            </div>
                            <p className="text-xs text-[#4A4A4A] mt-1 leading-relaxed">
                              {addr.houseFlat}, {addr.street}, {addr.area}, {addr.city} - {addr.pincode}
                            </p>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-[#323232] bg-[#323232] text-white' : 'border-[#DDD0C8]'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Add New Address Form */
                <form onSubmit={handleCreateAddress} className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#DDD0C8] space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E7E2DC]">
                    <span className="text-xs font-bold uppercase text-[#323232]">New Address Details</span>
                    <button
                      type="button"
                      onClick={() => setShowAddAddressForm(false)}
                      className="text-xs text-[#6B6B6B] hover:text-[#323232]"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Contact Name</label>
                      <input
                        type="text"
                        required
                        value={newAddressForm.name}
                        onChange={(e) => setNewAddressForm({ ...newAddressForm, name: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#E7E2DC] rounded-xl text-xs text-[#323232] focus:outline-none focus:border-[#323232]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={newAddressForm.phone}
                        onChange={(e) => setNewAddressForm({ ...newAddressForm, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#E7E2DC] rounded-xl text-xs text-[#323232] focus:outline-none focus:border-[#323232]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">House / Flat / Villa No.</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Flat 304, Tower B"
                        value={newAddressForm.houseFlat}
                        onChange={(e) => setNewAddressForm({ ...newAddressForm, houseFlat: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#E7E2DC] rounded-xl text-xs text-[#323232] focus:outline-none focus:border-[#323232]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Street / Building Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lotus Boulevard"
                        value={newAddressForm.street}
                        onChange={(e) => setNewAddressForm({ ...newAddressForm, street: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#E7E2DC] rounded-xl text-xs text-[#323232] focus:outline-none focus:border-[#323232]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Locality / Area</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Madhapur"
                        value={newAddressForm.area}
                        onChange={(e) => setNewAddressForm({ ...newAddressForm, area: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#E7E2DC] rounded-xl text-xs text-[#323232] focus:outline-none focus:border-[#323232]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">City</label>
                      <input
                        type="text"
                        disabled
                        value={newAddressForm.city}
                        className="w-full px-3 py-2 bg-[#EAE6E1]/50 border border-[#E7E2DC] rounded-xl text-xs text-[#6B6B6B]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#4A4A4A] block mb-1">Pincode</label>
                      <input
                        type="text"
                        required
                        placeholder="500081"
                        value={newAddressForm.pincode}
                        onChange={(e) => setNewAddressForm({ ...newAddressForm, pincode: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#E7E2DC] rounded-xl text-xs text-[#323232] focus:outline-none focus:border-[#323232]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#323232] text-white text-xs font-bold hover:bg-black transition-colors"
                  >
                    Save & Use This Address
                  </button>
                </form>
              )}
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-2.5">
                  Select Service Date
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {dates.map((d) => {
                    const fullLabel = `${d.label}, ${d.day}`;
                    const isSelected = selectedDate === fullLabel;
                    return (
                      <button
                        key={d.day}
                        onClick={() => setSelectedDate(fullLabel)}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? 'bg-[#323232] text-white border-[#323232] shadow-sm'
                            : 'bg-white hover:bg-[#FAF9F6] border-[#E7E2DC] text-[#323232]'
                        }`}
                      >
                        <span className="text-[11px] uppercase tracking-wider font-semibold block opacity-80">
                          {d.label}
                        </span>
                        <span className="text-sm font-bold block my-0.5">{d.day}</span>
                        <span className={`text-[10px] block ${isSelected ? 'text-[#DDD0C8]' : 'text-emerald-700'}`}>
                          {d.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block mb-2.5">
                  Select Time Slot
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableTimeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot.time;
                    return (
                      <button
                        key={slot.id}
                        disabled={!slot.available}
                        onClick={() => setSelectedTimeSlot(slot.time)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-medium transition-all ${
                          !slot.available
                            ? 'bg-[#FAF9F6] text-neutral-400 border-[#EAE6E1] cursor-not-allowed opacity-60'
                            : isSelected
                            ? 'bg-[#323232] text-white border-[#323232] shadow-sm'
                            : 'bg-white hover:bg-[#FAF9F6] border-[#E7E2DC] text-[#323232]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-semibold">{slot.time}</span>
                        </div>
                        {!slot.available ? (
                          <span className="text-[10px] text-red-500 font-bold">Booked</span>
                        ) : isSelected ? (
                          <Check className="w-4 h-4 text-[#DDD0C8]" />
                        ) : (
                          <span className="text-[10px] text-emerald-700">Available</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  Our professional cleaning team will arrive within 15 minutes of your selected time slot with all machinery and cleaning supplies.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: REVIEW */}
          {step === 3 && (
            <div className="space-y-4">
              {/* Selected Services Summary */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E7E2DC] space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block">
                  Service Checklist ({cart.length})
                </span>
                <div className="divide-y divide-[#EAE6E1]">
                  {cart.map((item) => (
                    <div key={item.service.id} className="py-2 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#323232]">{item.service.name}</span>
                        <span className="text-[#8C8C8C] block text-[11px]">{item.service.duration}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-[#323232]">
                          Qty: {item.quantity} × ₹X
                        </span>
                        <span className="block font-bold text-[#323232]">
                          ₹X
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slot & Address Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl border border-[#E7E2DC] bg-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#6B6B6B] uppercase mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#323232]" />
                    <span>Scheduled Slot</span>
                  </div>
                  <p className="text-sm font-bold text-[#323232]">{selectedDate}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">{selectedTimeSlot}</p>
                </div>

                <div className="p-4 rounded-2xl border border-[#E7E2DC] bg-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#6B6B6B] uppercase mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#323232]" />
                    <span>Service Location</span>
                  </div>
                  <p className="text-sm font-bold text-[#323232] truncate">{currentAddress.name}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5 line-clamp-2">
                    {currentAddress.houseFlat}, {currentAddress.area}, {currentAddress.city}
                  </p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="p-4 rounded-2xl border border-[#E7E2DC] bg-white space-y-1.5 text-xs text-[#6B6B6B]">
                <div className="flex items-center justify-between">
                  <span>Item Subtotal</span>
                  <span className="font-semibold text-[#323232]">₹X</span>
                </div>
                {discount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-semibold">
                    <span>Discount</span>
                    <span>-₹X</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span>Safety & Hygiene Kits</span>
                  <span className="text-[#323232]">₹X</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Applicable GST (5%)</span>
                  <span className="text-[#323232]">₹X</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#E7E2DC] text-sm font-bold text-[#323232]">
                  <span>Total Payable Amount</span>
                  <span className="text-base font-extrabold text-[#323232]">
                    ₹X
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: PAYMENT */}
          {step === 4 && (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] block">
                Choose Payment Method
              </span>

              {/* Option 1: UPI */}
              <div
                onClick={() => setPaymentMethod('UPI')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'UPI'
                    ? 'bg-[#FAF9F6] border-[#323232] shadow-sm'
                    : 'bg-white hover:bg-[#FAF9F6] border-[#E7E2DC]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#DDD0C8]/50 text-[#323232] flex items-center justify-center font-bold text-xs">
                      UPI
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#323232]">Instant UPI Payment</h4>
                      <p className="text-xs text-[#6B6B6B]">Google Pay, PhonePe, Paytm or UPI ID</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'UPI' ? 'border-[#323232] bg-[#323232] text-white' : 'border-[#DDD0C8]'
                  }`}>
                    {paymentMethod === 'UPI' && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                {paymentMethod === 'UPI' && (
                  <div className="mt-3 pt-3 border-t border-[#EAE6E1] grid grid-cols-4 gap-2">
                    {[
                      { id: 'gpay', label: 'Google Pay' },
                      { id: 'phonepe', label: 'PhonePe' },
                      { id: 'paytm', label: 'Paytm' },
                      { id: 'qr', label: 'Scan QR' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUpiOption(opt.id as any);
                        }}
                        className={`py-1.5 px-2 rounded-lg text-xs font-semibold border text-center transition-all ${
                          upiOption === opt.id
                            ? 'bg-[#323232] text-white border-[#323232]'
                            : 'bg-white text-[#4A4A4A] border-[#E7E2DC]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Option 2: Credit / Debit Card */}
              <div
                onClick={() => setPaymentMethod('Card')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'Card'
                    ? 'bg-[#FAF9F6] border-[#323232] shadow-sm'
                    : 'bg-white hover:bg-[#FAF9F6] border-[#E7E2DC]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#DDD0C8]/50 text-[#323232] flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#323232]">Credit / Debit Card</h4>
                      <p className="text-xs text-[#6B6B6B]">Visa, MasterCard, RuPay & Amex</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'Card' ? 'border-[#323232] bg-[#323232] text-white' : 'border-[#DDD0C8]'
                  }`}>
                    {paymentMethod === 'Card' && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              </div>

              {/* Option 3: Cash after service */}
              <div
                onClick={() => setPaymentMethod('Cash after service')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'Cash after service'
                    ? 'bg-[#FAF9F6] border-[#323232] shadow-sm'
                    : 'bg-white hover:bg-[#FAF9F6] border-[#E7E2DC]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#DDD0C8]/50 text-[#323232] flex items-center justify-center">
                      <Banknote className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#323232]">Pay After Service Inspection</h4>
                      <p className="text-xs text-[#6B6B6B]">Inspect the cleaning quality, then pay by Cash or UPI</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'Cash after service' ? 'border-[#323232] bg-[#323232] text-white' : 'border-[#DDD0C8]'
                  }`}>
                    {paymentMethod === 'Cash after service' && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              </div>

              {/* Trust Guarantee */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Zero cancellation fees up to 2 hours before scheduled slot.</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Navigation Buttons */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E7E2DC] flex items-center justify-between gap-4 flex-shrink-0">
          {step > 1 ? (
            <button
              onClick={() => setStep((step - 1) as any)}
              className="px-4 py-2.5 rounded-xl border border-[#E7E2DC] text-xs sm:text-sm font-semibold text-[#323232] hover:bg-[#FAF9F6] flex items-center gap-1.5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] uppercase text-[#8C8C8C] block font-semibold">Total to Pay</span>
              <span className="text-base font-extrabold text-[#323232]">₹X</span>
            </div>

            {step < 4 ? (
              <button
                onClick={handleNextStep}
                className="px-6 sm:px-8 py-3 rounded-xl bg-[#323232] hover:bg-black text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleConfirmBooking}
                className="px-6 sm:px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-card"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Booking (₹X)</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
