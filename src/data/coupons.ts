import { Coupon } from '../types';

export const availableCoupons: Coupon[] = [
  {
    code: 'CLEAN500',
    discountType: 'fixed',
    discountValue: 500,
    minOrder: 0,
    description: 'Special ₹X promotional discount on deep cleaning packages'
  },
  {
    code: 'FIRSTBOOKING',
    discountType: 'percentage',
    discountValue: 15,
    minOrder: 0,
    maxDiscount: 400,
    description: '15% instant discount for first-time customers'
  },
  {
    code: 'WELCOME10',
    discountType: 'percentage',
    discountValue: 10,
    minOrder: 0,
    maxDiscount: 250,
    description: '10% welcome discount on your booking'
  },
  {
    code: 'FESTIVE750',
    discountType: 'fixed',
    discountValue: 750,
    minOrder: 0,
    description: 'Special ₹X festival discount on full cleaning packages'
  }
];
