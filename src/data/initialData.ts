import { Address, Booking, TimeSlot } from '../types';
import { services } from './services';

export const supportedCities = [
  { id: 'hyderabad', name: 'Hyderabad', activeAreas: ['Jubilee Hills', 'Banjara Hills', 'Gachibowli', 'Madhapur', 'Kondapur', 'Hitec City', 'Kukatpally', 'Secunderabad'] },
  { id: 'bengaluru', name: 'Bengaluru', activeAreas: ['Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'Bellandur', 'JP Nagar'] },
  { id: 'mumbai', name: 'Mumbai', activeAreas: ['Bandra West', 'Andheri West', 'Juhu', 'Powai', 'Worli', 'Thane West'] },
  { id: 'delhi-ncr', name: 'Delhi NCR', activeAreas: ['Gurgaon DLF', 'Noida Sector 62', 'Vasant Kunj', 'Greater Kailash', 'Dwarka'] },
  { id: 'chennai', name: 'Chennai', activeAreas: ['Adyar', 'Anna Nagar', 'Velachery', 'Besant Nagar', 'OMR'] },
  { id: 'pune', name: 'Pune', activeAreas: ['Kalyani Nagar', 'Koregaon Park', 'Baner', 'Wakad', 'Viman Nagar'] }
];

export const defaultAddresses: Address[] = [
  {
    id: 'addr-1',
    tag: 'Home',
    name: 'Rohan Sharma',
    phone: '+91 98765 43210',
    houseFlat: 'Flat 402, Oakwood Heights',
    street: 'Road No. 10, Jubilee Hills',
    area: 'Jubilee Hills',
    city: 'Hyderabad',
    pincode: '500033',
    isDefault: true
  },
  {
    id: 'addr-2',
    tag: 'Work',
    name: 'Rohan Sharma',
    phone: '+91 98765 43210',
    houseFlat: 'Suite 3B, Cyber Towers',
    street: 'Hitec City Main Road',
    area: 'Madhapur',
    city: 'Hyderabad',
    pincode: '500081'
  }
];

export const availableTimeSlots: TimeSlot[] = [
  { id: 'slot-1', time: '09:00 AM - 10:30 AM', available: true },
  { id: 'slot-2', time: '11:00 AM - 12:30 PM', available: true },
  { id: 'slot-3', time: '01:00 PM - 02:30 PM', available: false }, // booked
  { id: 'slot-4', time: '02:30 PM - 04:00 PM', available: true, surge: false },
  { id: 'slot-5', time: '04:30 PM - 06:00 PM', available: true },
  { id: 'slot-6', time: '06:30 PM - 08:00 PM', available: false } // booked
];

export const initialBookings: Booking[] = [
  {
    id: 'CLN-84920',
    createdAt: '2026-09-27T10:30:00Z',
    services: [
      {
        service: services[0], // 3-Seater Fabric Sofa Deep Shampooing
        quantity: 1
      },
      {
        service: services[7], // Floor Deep Cleaning Machine
        quantity: 1
      }
    ],
    address: defaultAddresses[0],
    date: 'Tomorrow, Sep 29',
    timeSlot: '02:30 PM - 04:00 PM',
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    status: 'Upcoming',
    subtotal: 2298,
    discount: 500,
    taxes: 90,
    safetyFee: 49,
    total: 1937,
    professionalName: 'M. Pranay (Lead Specialist)',
    professionalRating: 4.95,
    professionalPhone: '+91 70360 65361'
  },
  {
    id: 'CLN-67210',
    createdAt: '2026-09-12T14:15:00Z',
    services: [
      {
        service: services[5], // Chimney Deep Cleaning
        quantity: 1
      }
    ],
    address: defaultAddresses[0],
    date: 'Sep 14, 2026',
    timeSlot: '11:00 AM - 12:30 PM',
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    status: 'Completed',
    subtotal: 899,
    discount: 100,
    taxes: 40,
    safetyFee: 49,
    total: 888,
    professionalName: 'M. Pranay & Expert Team',
    professionalRating: 4.9,
    professionalPhone: '+91 63006 31794'
  }
];

export const customerReviews = [
  {
    id: 'rev-1',
    name: 'Priyanka Sen',
    location: 'Jubilee Hills, Hyderabad',
    service: 'Floor Deep Cleaning Machine (Rotary)',
    rating: 5,
    date: '3 days ago',
    comment: 'The single-disc rotary machine brought back the original mirror shine to our Italian marble floors. M. Pranay and his crew arrived right on time with heavy machines and left our home gleaming.'
  },
  {
    id: 'rev-2',
    name: 'Arunav Sengupta',
    location: 'Madhapur, Hyderabad',
    service: '3-Seater Fabric Sofa Deep Shampooing',
    rating: 5,
    date: '1 week ago',
    comment: 'Stubborn food stains on our cream-colored fabric sofa were 100% extracted. No harsh chemical smell at all—just a subtle fresh scent. Truly expert professional work.'
  },
  {
    id: 'rev-3',
    name: 'Meera Nambiar',
    location: 'HSR Layout, Bengaluru',
    service: 'Kitchen Chimney Deep Cleaning',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The chimney filters were dripping sticky oil. They disassembled the baffles, soaked them in hot degreaser, and now the suction is back to 100%. Super impressed!'
  }
];
