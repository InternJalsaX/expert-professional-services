import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  ShieldCheck,
  Plus,
  Minus,
  Trash2,
  Tag,
  Check,
  ArrowRight,
  Sparkles,
  Lock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { availableCoupons } from '../data/coupons';

export const RightCartSidebar: React.FC = () => {
  const {
    cart,
    cartCount,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    safetyFee,
    taxes,
    total,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsBookingModalOpen
  } = useApp();

  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [couponExpanded, setCouponExpanded] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCodeInput.trim()) return;
    const res = applyCoupon(couponCodeInput);
    if (res.success) {
      setCouponCodeInput('');
    }
  };

  const handleQuickCoupon = (code: string) => {
    applyCoupon(code);
    setCouponCodeInput('');
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-4">
        
        {/* Why Choose Us / Expert Promise Card */}
        <div className="bg-white rounded-2xl p-5 border border-[#E7E2DC] shadow-subtle">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-[#DDD0C8]/60 text-[#323232] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-[#323232]">Expert Promise</h3>
          </div>

          <ul className="space-y-2.5 text-xs text-[#4A4A4A]">
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
              <span><strong>Verified Professionals:</strong> Background verified & vaccinated</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
              <span><strong>Safe Chemicals:</strong> Bayer & Diversey hospital-grade compounds</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
              <span><strong>Transparent Pricing:</strong> No surprise fees on doorstep</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
              <span><strong>Easy Rescheduling:</strong> Free change up to 2 hrs before</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
              <span><strong>Satisfaction Guarantee:</strong> Free re-clean if unsatisfied</span>
            </li>
          </ul>
        </div>

        {/* Cart Section */}
        <div className="bg-white rounded-2xl border border-[#E7E2DC] shadow-subtle overflow-hidden">
          
          {/* Cart Header */}
          <div className="p-4 border-b border-[#E7E2DC] flex items-center justify-between bg-[#FAF9F6]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#323232]" />
              <h3 className="font-bold text-sm text-[#323232]">Your Cart</h3>
            </div>
            {cartCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#323232] text-white">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>

          {/* Cart Body */}
          {cart.length === 0 ? (
            /* EMPTY STATE */
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] border border-[#E7E2DC] flex items-center justify-center mx-auto mb-3 text-neutral-400">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-[#323232] mb-1">Your cart is empty</h4>
              <p className="text-xs text-[#8C8C8C] max-w-xs mx-auto">
                Add a service package to schedule your professional cleaning.
              </p>
            </div>
          ) : (
            /* ACTIVE CART */
            <div className="p-4 space-y-4">
              
              {/* Item List */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.service.id}
                    className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E7E2DC] flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-[#323232] truncate">
                          {item.service.name}
                        </h4>
                        <span className="text-[11px] text-[#6B6B6B] block">
                          ₹X each
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.service.id)}
                        className="text-neutral-400 hover:text-red-500 p-1 rounded transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-[#EAE6E1]">
                      <div className="flex items-center bg-white border border-[#DDD0C8] rounded-lg px-2 py-0.5 gap-2">
                        <button
                          onClick={() => updateQuantity(item.service.id, -1)}
                          className="text-[#323232] hover:text-black p-0.5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#323232] min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.service.id, 1)}
                          className="text-[#323232] hover:text-black p-0.5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#323232]">
                        ₹X
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Accordion */}
              <div className="pt-2 border-t border-[#E7E2DC]">
                {appliedCoupon ? (
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-emerald-900">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      <div>
                        <span className="font-bold">{appliedCoupon.code}</span>
                        <span className="block text-[10px] text-emerald-700">✓ Coupon applied</span>
                      </div>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-emerald-700 font-semibold text-xs hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setCouponExpanded(!couponExpanded)}
                      className="w-full flex items-center justify-between text-xs font-bold text-[#323232] hover:text-black py-1"
                    >
                      <div className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#323232]" />
                        <span>Have a coupon?</span>
                      </div>
                      {couponExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {couponExpanded && (
                      <div className="mt-2 space-y-2">
                        <form onSubmit={handleApplyCoupon} className="flex gap-1.5">
                          <input
                            type="text"
                            placeholder="e.g. CLEAN500"
                            value={couponCodeInput}
                            onChange={(e) => setCouponCodeInput(e.target.value.toUpperCase())}
                            className="flex-1 px-3 py-1.5 bg-[#FAF9F6] border border-[#E7E2DC] rounded-lg text-xs font-medium uppercase text-[#323232] focus:outline-none focus:border-[#323232]"
                          />
                          <button
                            type="submit"
                            className="px-3 py-1.5 rounded-lg bg-[#323232] text-white text-xs font-bold hover:bg-black transition-colors"
                          >
                            Apply
                          </button>
                        </form>

                        <div className="flex flex-wrap gap-1">
                          {availableCoupons.slice(0, 2).map((cp) => (
                            <button
                              key={cp.code}
                              onClick={() => handleQuickCoupon(cp.code)}
                              className="px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#E7E2DC] text-[10px] font-semibold text-[#4A4A4A] hover:bg-[#F2ECE6] transition-colors"
                            >
                              {cp.code} (Special Offer)
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bill Details Breakdown */}
              <div className="pt-2 border-t border-[#E7E2DC] space-y-1.5 text-xs text-[#6B6B6B]">
                <div className="flex items-center justify-between">
                  <span>Item Subtotal</span>
                  <span className="font-semibold text-[#323232]">₹X</span>
                </div>

                {discount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-medium">
                    <span>Coupon Discount</span>
                    <span>-₹X</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span>Safety & Equipment Fee</span>
                  <span className="text-[#323232]">₹X</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Taxes & GST (5%)</span>
                  <span className="text-[#323232]">₹X</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#E7E2DC] text-sm font-bold text-[#323232]">
                  <span>Total Payable</span>
                  <span className="text-base font-extrabold text-[#323232]">
                    ₹X
                  </span>
                </div>
              </div>

              {/* Proceed to Book CTA */}
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full py-3 px-4 rounded-xl bg-[#323232] hover:bg-black text-white font-bold text-sm tracking-wide shadow-card flex items-center justify-center gap-2 transition-all group"
              >
                <span>Proceed to Book</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8C8C8C]">
                <Lock className="w-3 h-3" />
                <span>100% Secure Checkout & Free Cancellation</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </aside>
  );
};
