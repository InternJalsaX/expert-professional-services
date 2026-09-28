export interface TransformationItem {
  id: string;
  serviceId: string;
  title: string;
  category: string;
  beforeAfterImage: string;
  beforeNote: string;
  afterNote: string;
  stats: string;
}

export const transformationsData: TransformationItem[] = [
  {
    id: 'trans-sofa',
    serviceId: 'sofa-cleaning-3seater',
    title: '1. Sofa Cleaning',
    category: 'Upholstery Care',
    beforeAfterImage: '/images/transformations/sofa-before-after.jpg',
    beforeNote: 'Heavy food and tea spills, body sweat stains & dust',
    afterNote: '100% stain extracted, sanitized & restored fabric',
    stats: '85% dry immediately'
  },
  {
    id: 'trans-mattress',
    serviceId: 'mattress-cleaning-king',
    title: '2. Mattress Cleaning',
    category: 'Hygiene & Allergen Shield',
    beforeAfterImage: '/images/transformations/mattress-before-after.jpg',
    beforeNote: 'Yellow sweat marks, dead skin & dust mite allergens',
    afterNote: 'Deep UV vacuum extraction, bright white & sterile',
    stats: 'Kills 99.9% dust mites'
  },
  {
    id: 'trans-carpet',
    serviceId: 'carpet-cleaning-large',
    title: '3. Carpet Cleaning',
    category: 'Rugs & Carpets',
    beforeAfterImage: '/images/transformations/carpet-before-after.jpg',
    beforeNote: 'Compacted mud traffic lanes, dull colors & pet odor',
    afterNote: 'Vibrant fluffy fibers, foam shampoo extraction',
    stats: '3-stage extraction'
  },
  {
    id: 'trans-dining',
    serviceId: 'dining-chairs-cleaning',
    title: '4. Dining Chairs Cleaning',
    category: 'Dining Sets',
    beforeAfterImage: '/images/transformations/dining-chairs-before-after.jpg',
    beforeNote: 'Curry drops, turmeric oil spots & greased cushions',
    afterNote: 'Spotless fabric, deodorized & conditioned finish',
    stats: 'Set of 6 chairs'
  },
  {
    id: 'trans-recliner',
    serviceId: 'recliner-sofa-cleaning',
    title: '5. Recliner Sofa Cleaning',
    category: 'Recliner Care',
    beforeAfterImage: '/images/transformations/recliner-sofa-before-after.jpg',
    beforeNote: 'Debris trapped in folding joints & hair-oil on headrest',
    afterNote: 'Folding mechanism vacuumed, fabric revived',
    stats: 'Safe on motor joints'
  },
  {
    id: 'trans-chimney',
    serviceId: 'chimney-deep-cleaning',
    title: '6. Chimney Deep Cleaning',
    category: 'Kitchen Appliance',
    beforeAfterImage: '/images/transformations/chimney-before-after.jpg',
    beforeNote: 'Choked black grease, dripping baffle filters',
    afterNote: 'Chemical immersion bath, 100% restored suction',
    stats: 'Full degreasing'
  },
  {
    id: 'trans-fridge',
    serviceId: 'fridge-deep-cleaning',
    title: '7. Fridge Deep Cleaning',
    category: 'Kitchen Appliance',
    beforeAfterImage: '/images/transformations/fridge-before-after.jpg',
    beforeNote: 'Dried sauce spills, black gasket mold & food odors',
    afterNote: 'Shelves sterilized with 100% food-safe disinfectant',
    stats: 'Zero chemical smell'
  },
  {
    id: 'trans-floor',
    serviceId: 'floor-deep-cleaning-machine',
    title: '8. Floor Deep Cleaning Machine',
    category: 'Rotary Machine Care',
    beforeAfterImage: '/images/transformations/floor-machine-before-after.jpg',
    beforeNote: 'Dulled tiles, blackened grout lines, sticky traffic dirt',
    afterNote: 'Single-disc rotary 175 RPM mirror gloss scrubbing',
    stats: '1.5 HP rotary disc'
  },
  {
    id: 'trans-disinfection',
    serviceId: 'disinfection-service',
    title: '9. Disinfection Service',
    category: 'Sterilization & Shield',
    beforeAfterImage: '/images/transformations/disinfection-before-after.jpg',
    beforeNote: 'High microbial count, airborne pathogens on touchpoints',
    afterNote: 'ULV cold mist fogging, hospital-grade viral kill',
    stats: '99.99% viral kill'
  },
  {
    id: 'trans-pest',
    serviceId: 'pest-control-service',
    title: '10. Pest Control Service',
    category: 'Pest Eradication',
    beforeAfterImage: '/images/transformations/pest-control-before-after.jpg',
    beforeNote: 'Cockroach sightings, insect nests behind cabinets',
    afterNote: 'Bayer herbal gel baiting with 90-day free warranty',
    stats: '100% odorless gel'
  },
  {
    id: 'trans-ac',
    serviceId: 'ac-service',
    title: '11. AC Service',
    category: 'AC Maintenance',
    beforeAfterImage: '/images/transformations/ac-service-before-after.jpg',
    beforeNote: 'Clogged cooling fins, musty smell, weak cooling airflow',
    afterNote: 'High-pressure jet pump wash, ice-cold airflow restored',
    stats: 'Waterproof bag used'
  },
  {
    id: 'trans-commercial',
    serviceId: 'commercial-sofa-cleaning',
    title: '12. Commercial Sofa Cleaning',
    category: 'Corporate & Bulk',
    beforeAfterImage: '/images/transformations/commercial-sofa-before-after.jpg',
    beforeNote: 'Worn reception sofas, coffee stains from office guests',
    afterNote: 'Corporate showroom hygiene, ready in 2 hours',
    stats: 'GST bill provided'
  }
];
