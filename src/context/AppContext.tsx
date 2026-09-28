import React, { createContext, useContext, useState, useEffect } from 'react';
import { Address, Booking, CartItem, Coupon, ServiceItem, ViewMode } from '../types';
import { defaultAddresses, initialBookings, supportedCities } from '../data/initialData';
import { availableCoupons } from '../data/coupons';

interface ToastState {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  // Navigation & View
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  activeCategory: string;
  setActiveCategory: (catId: string) => void;

  // Cart
  cart: CartItem[];
  addToCart: (service: ServiceItem) => void;
  removeFromCart: (serviceId: string) => void;
  updateQuantity: (serviceId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;

  // Pricing & Coupon
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  subtotal: number;
  discount: number;
  safetyFee: number;
  taxes: number;
  total: number;

  // Location & Address
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  savedAddresses: Address[];
  currentAddress: Address;
  setCurrentAddress: (addr: Address) => void;
  addAddress: (addr: Omit<Address, 'id'>) => Address;

  // Bookings
  bookings: Booking[];
  createBooking: (bookingData: {
    address: Address;
    date: string;
    timeSlot: string;
    paymentMethod: 'UPI' | 'Card' | 'Cash after service';
  }) => Booking;
  cancelBooking: (bookingId: string) => void;
  rescheduleBooking: (bookingId: string, date: string, timeSlot: string) => void;

  // Modals & Overlays
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLocationModalOpen: boolean;
  setIsLocationModalOpen: (open: boolean) => void;
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  selectedServiceForDetail: ServiceItem | null;
  setSelectedServiceForDetail: (service: ServiceItem | null) => void;
  confirmedBooking: Booking | null;
  setConfirmedBooking: (b: Booking | null) => void;

  // Toast
  toasts: ToastState[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [activeCategory, setActiveCategory] = useState<string>('sofa-cleaning');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const [selectedCity, setSelectedCity] = useState<string>('Hyderabad');
  const [savedAddresses, setSavedAddresses] = useState<Address[]>(defaultAddresses);
  const [currentAddress, setCurrentAddress] = useState<Address>(defaultAddresses[0]);

  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Management
  const addToCart = (service: ServiceItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.service.id === service.id);
      if (existing) {
        return prev.map((item) =>
          item.service.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { service, quantity: 1 }];
    });
    showToast(`Added "${service.name}" to cart`, 'success');
  };

  const removeFromCart = (serviceId: string) => {
    setCart((prev) => {
      const target = prev.find((i) => i.service.id === serviceId);
      if (target) {
        showToast(`Removed "${target.service.name}"`, 'info');
      }
      return prev.filter((item) => item.service.id !== serviceId);
    });
  };

  const updateQuantity = (serviceId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.service.id === serviceId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.service.price * item.quantity, 0);

  let discount = 0;
  if (appliedCoupon && subtotal >= appliedCoupon.minOrder) {
    if (appliedCoupon.discountType === 'fixed') {
      discount = appliedCoupon.discountValue;
    } else {
      const pct = (subtotal * appliedCoupon.discountValue) / 100;
      discount = appliedCoupon.maxDiscount ? Math.min(pct, appliedCoupon.maxDiscount) : pct;
    }
  } else if (appliedCoupon && subtotal < appliedCoupon.minOrder) {
    // If cart falls below min order, drop coupon
    setAppliedCoupon(null);
  }

  const safetyFee = cart.length > 0 ? 49 : 0;
  const taxableAmount = Math.max(0, subtotal - discount);
  const taxes = cart.length > 0 ? Math.round(taxableAmount * 0.05) : 0; // 5% GST
  const total = Math.max(0, taxableAmount + safetyFee + taxes);

  const applyCoupon = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const found = availableCoupons.find((c) => c.code === trimmed);

    if (!found) {
      showToast('Invalid coupon code. Try CLEAN500 or FIRSTBOOKING', 'error');
      return { success: false, message: 'Invalid coupon code.' };
    }

    if (subtotal < found.minOrder) {
      const msg = `Minimum booking requirements for ${found.code} not met. Add more services to apply.`;
      showToast(msg, 'error');
      return { success: false, message: msg };
    }

    setAppliedCoupon(found);
    showToast(`Coupon ${found.code} applied successfully!`, 'success');
    return { success: true, message: 'Coupon applied successfully!' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Addresses
  const addAddress = (addrData: Omit<Address, 'id'>): Address => {
    const newAddr: Address = {
      ...addrData,
      id: `addr-${Date.now()}`
    };
    setSavedAddresses((prev) => [newAddr, ...prev]);
    setCurrentAddress(newAddr);
    showToast('Address saved successfully', 'success');
    return newAddr;
  };

  // Bookings
  const createBooking = (bookingData: {
    address: Address;
    date: string;
    timeSlot: string;
    paymentMethod: 'UPI' | 'Card' | 'Cash after service';
  }): Booking => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newBooking: Booking = {
      id: `CLN-${randomDigits}`,
      createdAt: new Date().toISOString(),
      services: [...cart],
      address: bookingData.address,
      date: bookingData.date,
      timeSlot: bookingData.timeSlot,
      paymentMethod: bookingData.paymentMethod,
      paymentStatus: bookingData.paymentMethod === 'Cash after service' ? 'Pending' : 'Paid',
      status: 'Upcoming',
      subtotal,
      discount,
      safetyFee,
      taxes,
      total,
      professionalName: 'M. Pranay & Expert Cleaning Crew',
      professionalRating: 4.95,
      professionalPhone: '+91 70360 65361'
    };

    setBookings((prev) => [newBooking, ...prev]);
    setConfirmedBooking(newBooking);
    clearCart();
    setIsBookingModalOpen(false);
    showToast(`Booking ${newBooking.id} placed successfully!`, 'success');
    return newBooking;
  };

  const cancelBooking = (bookingId: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: 'Cancelled' as const } : b))
    );
    showToast(`Booking ${bookingId} cancelled`, 'info');
  };

  const rescheduleBooking = (bookingId: string, date: string, timeSlot: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, date, timeSlot } : b))
    );
    showToast(`Booking ${bookingId} rescheduled to ${date}, ${timeSlot}`, 'success');
  };

  return (
    <AppContext.Provider
      value={{
        viewMode,
        setViewMode,
        activeCategory,
        setActiveCategory,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        discount,
        safetyFee,
        taxes,
        total,
        selectedCity,
        setSelectedCity,
        savedAddresses,
        currentAddress,
        setCurrentAddress,
        addAddress,
        bookings,
        createBooking,
        cancelBooking,
        rescheduleBooking,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isLocationModalOpen,
        setIsLocationModalOpen,
        isBookingModalOpen,
        setIsBookingModalOpen,
        selectedServiceForDetail,
        setSelectedServiceForDetail,
        confirmedBooking,
        setConfirmedBooking,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
