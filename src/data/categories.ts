import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'sofa-cleaning',
    name: '1. Sofa Cleaning',
    slug: 'sofa-cleaning',
    iconName: 'Armchair',
    count: 2,
    description: 'Specialized 3-step injection-extraction shampooing and stain elimination for fabric and leather sofas.',
    bannerImage: '/images/sofa-clean.jpg',
    earliestSlot: 'Today, 2:30 PM'
  },
  {
    id: 'mattress-cleaning',
    name: '2. Mattress Cleaning',
    slug: 'mattress-cleaning',
    iconName: 'Bed',
    count: 2,
    description: 'High-power UV extraction vacuuming and anti-allergen mite sanitization for all mattress sizes.',
    bannerImage: '/images/mattress-cleaning.jpg',
    earliestSlot: 'Today, 3:00 PM'
  },
  {
    id: 'carpet-cleaning',
    name: '3. Carpet Cleaning',
    slug: 'carpet-cleaning',
    iconName: 'Sparkles',
    count: 2,
    description: 'Industrial foam extraction shampooing for living room carpets, Persian rugs, and runners.',
    bannerImage: '/images/carpet-cleaning.webp',
    earliestSlot: 'Today, 1:45 PM'
  },
  {
    id: 'dining-chairs-cleaning',
    name: '4. Dining Chairs Cleaning',
    slug: 'dining-chairs-cleaning',
    iconName: 'UtensilsCrossed',
    count: 1,
    description: 'Deep stain and grease removal from upholstered fabric dining chairs, seats, and backrests.',
    bannerImage: '/images/dining-chairs.jpg',
    earliestSlot: 'Today, 2:15 PM'
  },
  {
    id: 'recliner-sofa-cleaning',
    name: '5. Recliner Sofa Cleaning',
    slug: 'recliner-sofa-cleaning',
    iconName: 'Armchair',
    count: 1,
    description: 'Mechanized crevice vacuuming, fabric conditioning, and stain extraction for motorized/manual recliners.',
    bannerImage: '/images/recliner-sofa.jpg',
    earliestSlot: 'Today, 4:00 PM'
  },
  {
    id: 'chimney-deep-cleaning',
    name: '6. Chimney Deep Cleaning',
    slug: 'chimney-deep-cleaning',
    iconName: 'Flame',
    count: 1,
    description: 'Chemical soak of baffle filters, degreasing of suction hood, oil collection cups, and motor exterior.',
    bannerImage: '/images/chimney-cleaning.jpg',
    earliestSlot: 'Today, 3:30 PM'
  },
  {
    id: 'fridge-deep-cleaning',
    name: '7. Fridge Deep Cleaning',
    slug: 'fridge-deep-cleaning',
    iconName: 'Refrigerator',
    count: 1,
    description: 'Complete defrosting, anti-bacterial shelf sanitization, gasket mold removal, and deodorization.',
    bannerImage: '/images/fridge-cleaning.jpg',
    earliestSlot: 'Today, 2:00 PM'
  },
  {
    id: 'floor-deep-cleaning-machine',
    name: '8. Floor Deep Cleaning Machine',
    slug: 'floor-deep-cleaning-machine',
    iconName: 'Wrench',
    count: 1,
    description: 'Heavy 1.5 HP single-disc rotary machine scrubbing to restore original shine to tile and marble floors.',
    bannerImage: '/images/floor-machine.jpg',
    earliestSlot: 'Today, 4:30 PM'
  },
  {
    id: 'disinfection-service',
    name: '9. Disinfection Service',
    slug: 'disinfection-service',
    iconName: 'ShieldAlert',
    count: 1,
    description: 'Hospital-grade cold fogging mist that eliminates 99.99% of airborne viruses and pathogens.',
    bannerImage: '/images/disinfection-service.png',
    earliestSlot: 'Today, 5:00 PM'
  },
  {
    id: 'pest-control-service',
    name: '10. Pest Control Service',
    slug: 'pest-control-service',
    iconName: 'Bug',
    count: 1,
    description: '100% odorless Bayer herbal gel baiting for cockroaches and ants with free 90-day re-treatment warranty.',
    bannerImage: '/images/pest-control-hyderabad.jpg',
    earliestSlot: 'Today, 1:30 PM'
  },
  {
    id: 'ac-service',
    name: '11. AC Service',
    slug: 'ac-service',
    iconName: 'Wind',
    count: 1,
    description: 'High-pressure jet pump coil washing, cooling tray cleanup, filter sanitization, and gas pressure check.',
    bannerImage: '/images/ac-jet-pump.webp',
    earliestSlot: 'Today, 11:30 AM'
  },
  {
    id: 'commercial-sofa-cleaning',
    name: '12. Commercial Sofa Cleaning',
    slug: 'commercial-sofa-cleaning',
    iconName: 'Building2',
    count: 1,
    description: 'Heavy-duty extraction cleaning for corporate offices, reception lounges, conference halls, and auditoriums.',
    bannerImage: '/images/full-home-deep.jpg',
    earliestSlot: 'Tomorrow, 9:00 AM'
  }
];
