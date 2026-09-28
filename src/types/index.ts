export interface ServiceItem {
  id: string;
  categoryId: string;
  name: string;
  subtitle?: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  duration: string;
  image: string;
  beforeAfterImage?: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  processSteps: { step: string; title: string; description: string }[];
  tag?: string; // e.g. "BEST VALUE", "MOST POPULAR", "TRENDING"
  minQuantity?: number;
  pricingUnit?: string; // e.g. "per sofa", "per bhk", "per bathroom"
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  count: number;
  description: string;
  bannerImage: string;
  earliestSlot: string;
}

export interface CartItem {
  service: ServiceItem;
  quantity: number;
  customOptions?: Record<string, string>;
}

export interface Coupon {
  code: string;
  discountType: 'fixed' | 'percentage';
  discountValue: number;
  minOrder: number;
  description: string;
  maxDiscount?: number;
}

export interface Address {
  id: string;
  tag: 'Home' | 'Work' | 'Other';
  name: string;
  phone: string;
  houseFlat: string;
  street: string;
  area: string;
  city: string;
  pincode: string;
  isDefault?: boolean;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  surge?: boolean;
}

export interface Booking {
  id: string;
  createdAt: string;
  services: CartItem[];
  address: Address;
  date: string;
  timeSlot: string;
  paymentMethod: 'UPI' | 'Card' | 'Cash after service';
  paymentStatus: 'Paid' | 'Pending';
  status: 'Upcoming' | 'In Progress' | 'Completed' | 'Cancelled';
  subtotal: number;
  discount: number;
  taxes: number;
  safetyFee: number;
  total: number;
  professionalName?: string;
  professionalRating?: number;
  professionalPhone?: string;
}

export type ViewMode = 'catalog' | 'landing' | 'bookings';
