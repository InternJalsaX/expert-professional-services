import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  // 1. Sofa Cleaning
  {
    id: 'sofa-cleaning-3seater',
    categoryId: 'sofa-cleaning',
    name: '3-Seater Fabric Sofa Deep Shampooing',
    subtitle: 'German injection-extraction technology for stain & dust removal',
    rating: 4.89,
    reviewsCount: 38400,
    price: 799,
    originalPrice: 1199,
    duration: '45 mins',
    image: '/images/sofa-clean.jpg',
    beforeAfterImage: '/images/transformations/sofa-before-after.jpg',
    tag: 'MOST POPULAR',
    description: 'Specialized deep cleaning for 3-seater fabric couch. Removes embedded body sweat, dust mites, accidental food stains, and pet odors with zero fabric shrinkage.',
    highlights: [
      'High-power vacuuming extracts embedded deep dust',
      'Non-toxic organic shampoo foam injection',
      'Gentle mechanical agitation on armrests & cushions',
      'Dual-motor moisture extraction leaving sofa 85% dry'
    ],
    inclusions: [
      '3 sofa seats + cushions + backrest + armrests',
      'Spot stain treatment for grease, tea, or food spills',
      'Fabric-safe sanitizing deodorizer spray'
    ],
    exclusions: [
      'Permanent chemical dye bleeding or tears in vintage fabric'
    ],
    processSteps: [
      { step: '01', title: 'Dry Vacuuming', description: 'High vacuum power extracts deep-seated dry dust.' },
      { step: '02', title: 'Shampoo Spray', description: 'Enzymatic foam applied evenly across all cushions.' },
      { step: '03', title: 'Agitation', description: 'Soft bristle scrub on heavy traffic spots.' },
      { step: '04', title: 'Suction Dry', description: 'High-lift moisture suction leaves fabric damp-dry.' }
    ]
  },
  {
    id: 'sofa-cleaning-5seater',
    categoryId: 'sofa-cleaning',
    name: '5-Seater (3+1+1) Luxury Sofa Spa',
    subtitle: 'Comprehensive treatment for 3-seater couch + 2 single armchairs',
    rating: 4.92,
    reviewsCount: 22100,
    price: 1299,
    originalPrice: 1899,
    duration: '1.2 hrs',
    image: '/images/dining-sofa.jpg',
    beforeAfterImage: '/images/transformations/sofa-before-after.jpg',
    tag: 'BEST VALUE',
    description: 'Complete 5-seat living room sofa set rejuvenation. Restores original fabric color, softens texture, and leaves a fresh clean fragrance.',
    highlights: [
      'Full 5 seats capacity: 3-seater + 2 armchairs',
      'Both sides of loose back cushions treated',
      'Crevices and under-frame vacuuming',
      'Anti-allergen sanitizing mist applied'
    ],
    inclusions: [
      'Complete 5-seater sofa set coverage',
      'Loose cushions and pillows shampooed',
      'Spot stain removal'
    ],
    exclusions: ['Wooden frame revarnishing'],
    processSteps: [
      { step: '01', title: 'De-dust', description: 'High-suction HEPA vacuuming.' },
      { step: '02', title: 'Foam Application', description: 'Eco-friendly cleaner dissolves body oils.' },
      { step: '03', title: 'Moisture Suction', description: 'Leaves sofa ready to use within 2-3 hours.' },
      { step: '04', title: 'Freshness Mist', description: 'Aromatic sanitizing touch.' }
    ]
  },

  // 2. Mattress Cleaning
  {
    id: 'mattress-cleaning-king',
    categoryId: 'mattress-cleaning',
    name: 'King / Queen Size Double Bed Mattress Cleaning',
    subtitle: 'UV extraction vacuuming & anti-dust mite sanitization',
    rating: 4.88,
    reviewsCount: 16200,
    price: 1099,
    originalPrice: 1599,
    duration: '50 mins',
    image: '/images/mattress-cleaning.jpg',
    beforeAfterImage: '/images/transformations/mattress-before-after.jpg',
    tag: 'HEALTH SHIELD',
    description: 'Specialized medical-grade dry and wet extraction for double bed mattresses. Eliminates dead skin cells, bed bugs, sweat stains, and dust mites.',
    highlights: [
      'High-frequency vibration to dislodge embedded mites',
      'Organic stain removal for sweat and accidental spills',
      'Anti-bacterial disinfectant misting',
      'Both top surface and side borders covered'
    ],
    inclusions: [
      '1 King or Queen size mattress (both sides)',
      'Spot stain lifting treatment',
      'Deodorizing freshness spray'
    ],
    exclusions: ['Spring mechanical repair'],
    processSteps: [
      { step: '01', title: 'Vibration Vacuum', description: 'Pulls out millions of microscopic allergens.' },
      { step: '02', title: 'Spot Stain Scrub', description: 'Clears surface discoloration.' },
      { step: '03', title: 'Sanitizing Steam/Mist', description: 'Kills 99.9% of bacteria and mites.' },
      { step: '04', title: 'Dry Extraction', description: 'High suction moisture recovery.' }
    ]
  },
  {
    id: 'mattress-cleaning-single',
    categoryId: 'mattress-cleaning',
    name: 'Single Bed Mattress Sanitization & Deep Clean',
    subtitle: 'Ideal for kids beds, hostel beds, and single divan mattresses',
    rating: 4.84,
    reviewsCount: 9400,
    price: 699,
    originalPrice: 999,
    duration: '35 mins',
    image: '/images/mattress-cleaning.jpg',
    beforeAfterImage: '/images/transformations/mattress-before-after.jpg',
    description: 'Thorough vacuuming and foam sanitization for single mattresses up to 3.5 x 6 feet.',
    highlights: [
      '1 Single bed mattress covered',
      'Removes dust mites and odor',
      'Fast drying time'
    ],
    inclusions: ['Top, bottom, and all 4 side borders'],
    exclusions: ['Mattress cover replacement'],
    processSteps: [
      { step: '01', title: 'Dry Suction', description: 'Deep fiber debris extraction.' },
      { step: '02', title: 'Shampoo Wipe', description: 'Gentle sanitizing solution.' },
      { step: '03', title: 'Aroma Spray', description: 'Long-lasting lavender freshness.' }
    ]
  },

  // 3. Carpet Cleaning
  {
    id: 'carpet-cleaning-large',
    categoryId: 'carpet-cleaning',
    name: 'Living Room Large Carpet Deep Shampoo Extraction',
    subtitle: 'Dual action vacuum and foam injection for rugs up to 50 sq ft',
    rating: 4.87,
    reviewsCount: 19800,
    price: 899,
    originalPrice: 1399,
    duration: '45 mins',
    image: '/images/carpet-cleaning.webp',
    beforeAfterImage: '/images/transformations/carpet-before-after.jpg',
    tag: 'BEST SELLER',
    description: 'Dual-action wet and dry extraction removes ground-in dust, pet dander, coffee spills, and dirt traffic lanes from delicate carpets and rugs.',
    highlights: [
      'Cleans carpets up to 50 sq. ft. area',
      'Non-sticky low moisture shampoo protects flooring beneath',
      'Anti-microbial and anti-mite sanitization',
      'Fast drying within 2-3 hours'
    ],
    inclusions: [
      '1 Large living room carpet or area rug',
      'Spot stain removal on heavy traffic paths',
      'Fabric conditioner treatment'
    ],
    exclusions: ['Fringe edge re-threading'],
    processSteps: [
      { step: '01', title: 'Beater Vacuum', description: 'Dislodges deep compacted grit.' },
      { step: '02', title: 'Shampoo Foam', description: 'Lifts greasy stains from fibers.' },
      { step: '03', title: 'Wet Recovery', description: 'Simultaneous rinse and suction.' }
    ]
  },
  {
    id: 'carpet-cleaning-small',
    categoryId: 'carpet-cleaning',
    name: 'Bedside Rug / Small Runner Carpet Cleaning',
    subtitle: 'Compact rugs and bedside runners up to 25 sq ft',
    rating: 4.80,
    reviewsCount: 8900,
    price: 449,
    originalPrice: 699,
    duration: '30 mins',
    image: '/images/carpet-cleaning.webp',
    beforeAfterImage: '/images/transformations/carpet-before-after.jpg',
    description: 'Gentle hand brush and machine extraction for small bedroom rugs and prayer mats.',
    highlights: ['Up to 25 sq. ft. area', 'Deep suction extraction', 'Color-safe solution'],
    inclusions: ['1 Compact rug or runner'],
    exclusions: ['Torn backing repair'],
    processSteps: [
      { step: '01', title: 'Pre-check', description: 'Color-fastness check.' },
      { step: '02', title: 'Clean & Dry', description: 'Quick vacuum and foam wash.' }
    ]
  },

  // 4. Dining Chairs Cleaning
  {
    id: 'dining-chairs-cleaning',
    categoryId: 'dining-chairs-cleaning',
    name: 'Dining Chairs Cleaning (Set of 6)',
    subtitle: 'Food stain & grease removal from fabric/cushion dining chairs',
    rating: 4.86,
    reviewsCount: 14200,
    price: 699,
    originalPrice: 1050,
    duration: '40 mins',
    image: '/images/dining-chairs.jpg',
    beforeAfterImage: '/images/transformations/dining-chairs-before-after.jpg',
    tag: 'KITCHEN COMBO',
    description: 'Specialized chemical formulation to dissolve curry spills, turmeric stains, oil marks, and sweat grime from upholstered dining chair seats and backrests.',
    highlights: [
      'Covers 6 upholstered dining chairs',
      'Deep stain lifting on seat cushions',
      'Microfiber frame and leg wipe down',
      'Anti-bacterial hygienic deodorization'
    ],
    inclusions: [
      '6 dining chair fabric seats and padded backrests',
      'Wooden/metal chair frame dusting and wiping'
    ],
    exclusions: ['Wood revarnishing or dent repairs'],
    processSteps: [
      { step: '01', title: 'Food Stain Treat', description: 'Pre-spray on gravy and drink spills.' },
      { step: '02', title: 'Foam Shampoo', description: 'Agitation with soft upholstery brushes.' },
      { step: '03', title: 'Extraction', description: 'Moisture suction leaves chairs fast-drying.' }
    ]
  },

  // 5. Recliner Sofa Cleaning
  {
    id: 'recliner-sofa-cleaning',
    categoryId: 'recliner-sofa-cleaning',
    name: 'Recliner Sofa Cleaning (1 to 2 Seater)',
    subtitle: 'Mechanism crevice cleaning, fabric conditioning & deep shampoo',
    rating: 4.90,
    reviewsCount: 11300,
    price: 599,
    originalPrice: 899,
    duration: '40 mins',
    image: '/images/recliner-sofa.jpg',
    beforeAfterImage: '/images/transformations/recliner-sofa-before-after.jpg',
    tag: 'SPECIALIZED',
    description: 'Custom care for motorized and manual recliners. Deep vacuuming of hidden fold mechanisms, headrest oil removal, and fabric/leatherette conditioning.',
    highlights: [
      'Detailed crevice cleaning in folding footrest mechanism',
      'Removes hair oil and sweat stains from headrest & arm pads',
      'Safe around motor wiring and metal linkages',
      'Moisture suction leaving fabric crisp and clean'
    ],
    inclusions: [
      'Footrest, seat, backrest, and arm cushions',
      'Vacuuming inside folding joints'
    ],
    exclusions: ['Motor electrical replacement or gearbox servicing'],
    processSteps: [
      { step: '01', title: 'Extension Check', description: 'Recline chair to reveal all folded crevices.' },
      { step: '02', title: 'De-grime', description: 'Vacuum crumbs and dust from hidden tracks.' },
      { step: '03', title: 'Shampoo & Extract', description: 'Shampooing of cushion surfaces.' }
    ]
  },

  // 6. Chimney Deep Cleaning
  {
    id: 'chimney-deep-cleaning',
    categoryId: 'chimney-deep-cleaning',
    name: 'Kitchen Chimney Deep Cleaning & Degreasing',
    subtitle: 'Baffle filter chemical bath, oil cup clearance & outer hood polish',
    rating: 4.89,
    reviewsCount: 26500,
    price: 899,
    originalPrice: 1299,
    duration: '1 hr',
    image: '/images/chimney-cleaning.jpg',
    beforeAfterImage: '/images/transformations/chimney-before-after.jpg',
    tag: 'HIGH DEMAND',
    description: 'Disassembly of baffle/mesh filters and immersion in high-potency hot chemical degreasers. Restores 100% chimney suction power and clears sticky oil build-up.',
    highlights: [
      'Baffle / mesh filter disassembly and hot chemical soak',
      'Clearance of oil collection cups and drainage channels',
      'Outer suction hood & stainless steel body buffing',
      'Motor exterior wiping and inspection'
    ],
    inclusions: [
      'All baffle/cassette filters and oil collectors',
      'Stainless steel / glass chimney body wiped streak-free',
      'Testing suction airflow post-reassembly'
    ],
    exclusions: ['Motor rewinding or duct pipe wall hole masonry'],
    processSteps: [
      { step: '01', title: 'Disassembly', description: 'Careful removal of filters and oil cups.' },
      { step: '02', title: 'Chemical Soak', description: 'Immersion in heavy oil-dissolving solution.' },
      { step: '03', title: 'Hood Degrease', description: 'Scrubbing of inner hood and outer glass.' },
      { step: '04', title: 'Refit & Test', description: 'Parts rinsed, dried, and suction verified.' }
    ]
  },

  // 7. Fridge Deep Cleaning
  {
    id: 'fridge-deep-cleaning',
    categoryId: 'fridge-deep-cleaning',
    name: 'Fridge Deep Cleaning & Sterilization',
    subtitle: 'Shelf removal, door gasket mold cleanup & food-grade sanitization',
    rating: 4.85,
    reviewsCount: 17400,
    price: 649,
    originalPrice: 949,
    duration: '45 mins',
    image: '/images/fridge-cleaning.jpg',
    beforeAfterImage: '/images/transformations/fridge-before-after.jpg',
    tag: 'ESSENTIAL HYGIENE',
    description: 'Comprehensive sanitization for single or double door refrigerators. Removable glass shelves washed, rubber door gaskets descaled of black mold, and interior deodorized.',
    highlights: [
      'Removal and washing of all vegetable trays & door bins',
      'Door rubber gasket antifungal mold eradication',
      '100% food-safe disinfectant spray (no toxic chemicals)',
      'Elimination of foul food and vegetable odors'
    ],
    inclusions: [
      'Interior freezer and refrigerator compartments',
      'All removable shelves and door racks',
      'Outer door handles, top, and condenser exterior dusting'
    ],
    exclusions: ['Compressor gas refill or mechanical repairs'],
    processSteps: [
      { step: '01', title: 'Empty & Tray Pull', description: 'Shelves and drawers detached.' },
      { step: '02', title: 'Gasket Mold Scrub', description: 'Antifungal cleaner on door seals.' },
      { step: '03', title: 'Interior Sanitize', description: 'Food-grade sanitizing wipe.' },
      { step: '04', title: 'Deodorize', description: 'Activated charcoal freshness wipe.' }
    ]
  },

  // 8. Floor Deep Cleaning Machine
  {
    id: 'floor-deep-cleaning-machine',
    categoryId: 'floor-deep-cleaning-machine',
    name: 'Floor Deep Cleaning Machine (Rotary Single-Disc)',
    subtitle: 'Industrial 1.5 HP rotary machine with nylon pads (up to 1000 sq ft)',
    rating: 4.93,
    reviewsCount: 31800,
    price: 1499,
    originalPrice: 2199,
    duration: '2 hrs',
    image: '/images/floor-machine.jpg',
    beforeAfterImage: '/images/transformations/floor-machine-before-after.jpg',
    tag: 'FLAGSHIP MACHINE',
    description: 'High-torque single-disc industrial scrubbing machine clears dulled wax, grout line blackening, and stubborn dirt from vitrified, ceramic, and marble floors.',
    highlights: [
      '17-inch industrial scrubbing disc with 175 RPM torque',
      'Covers up to 1000 sq. ft. of residential/office flooring',
      'pH-neutral tile rejuvenator dissolves sticky grime',
      'Industrial wet-suction recovery leaves floors instantly dry'
    ],
    inclusions: [
      'Living room, dining, bedrooms, and hallway floors',
      'Rotary disc passes with deep cleaning detergent',
      'Wet vacuum slurry removal and dry buffing'
    ],
    exclusions: ['Diamond cutting of stone or crack repairs'],
    processSteps: [
      { step: '01', title: 'Area Clear', description: 'Move lightweight chairs and tables.' },
      { step: '02', title: 'Chemical Spread', description: 'Surfactant solution applied to loosen grime.' },
      { step: '03', title: 'Rotary Disc Pass', description: 'Heavy mechanical scrub across tiles.' },
      { step: '04', title: 'Wet Vacuum', description: 'Immediate fluid extraction leaves floor clean & dry.' }
    ]
  },

  // 9. Disinfection Service
  {
    id: 'disinfection-service',
    categoryId: 'disinfection-service',
    name: 'Hospital-Grade Disinfection Service',
    subtitle: 'ULV cold fogging mist for whole home / office space (up to 1500 sq ft)',
    rating: 4.88,
    reviewsCount: 15600,
    price: 1199,
    originalPrice: 1699,
    duration: '45 mins',
    image: '/images/disinfection-service.png',
    beforeAfterImage: '/images/transformations/disinfection-before-after.jpg',
    tag: 'VIRUS SHIELD',
    description: 'Ultralow volume (ULV) cold mist fogging machine disperses microscopic silver-ion / quaternary disinfectant droplets that sterilize high-touch door knobs, air ducts, and walls.',
    highlights: [
      'Kills 99.99% of bacteria, fungi, and airborne viruses',
      'Reaches inaccessible ceiling corners and AC vents',
      'Non-staining, non-corrosive, safe on electronics',
      'Space ready for occupancy in 45 minutes'
    ],
    inclusions: [
      'All rooms, living area, kitchen, and washrooms',
      'High-touch surface contact disinfection'
    ],
    exclusions: ['Heavy physical debris or construction dust removal'],
    processSteps: [
      { step: '01', title: 'Safety Seal', description: 'Close windows to contain mist.' },
      { step: '02', title: 'ULV Cold Fogging', description: 'Ultra-fine aerosol fills the indoor volume.' },
      { step: '03', title: 'Contact Dwell', description: '15-minute pathogen destruction time.' },
      { step: '04', title: 'Ventilation', description: 'Air out for fresh, sterilized home.' }
    ]
  },

  // 10. Pest Control Service
  {
    id: 'pest-control-service',
    categoryId: 'pest-control-service',
    name: 'Pest Control Service (Odorless Herbal Gel)',
    subtitle: 'Cockroach & ant eradication with 90-day free warranty',
    rating: 4.91,
    reviewsCount: 42100,
    price: 999,
    originalPrice: 1499,
    duration: '40 mins',
    image: '/images/pest-control-hyderabad.jpg',
    beforeAfterImage: '/images/transformations/pest-control-before-after.jpg',
    tag: '90-DAY WARRANTY',
    description: 'Targeted application of Bayer herbal gel dots inside cabinet hinges, under sinks, behind refrigerators, and drain mouths. 100% odorless with no need to vacate kitchen.',
    highlights: [
      'Odorless Bayer Maxforce formulation',
      '100% safe around infants, elderly, and household pets',
      'No need to empty kitchen utensils or food containers',
      'Free re-treatment warranty within 90 days'
    ],
    inclusions: [
      'Complete kitchen, bathrooms, and all room corners',
      'Drain trap and pipe ingress blocking'
    ],
    exclusions: ['Termite wall drill treatments (available on request)'],
    processSteps: [
      { step: '01', title: 'Harbor Survey', description: 'Locate breeding nests behind appliances.' },
      { step: '02', title: 'Gel Baiting', description: 'Dots placed in dark warm crevices.' },
      { step: '03', title: 'Drain Treatment', description: 'Chemical barrier placed in floor drains.' }
    ]
  },

  // 11. AC Service
  {
    id: 'ac-service',
    categoryId: 'ac-service',
    name: 'AC Jet Pump Deep Cleaning & Service',
    subtitle: 'High-pressure jet pump coil washing, tray cleanup & filter wash',
    rating: 4.89,
    reviewsCount: 28900,
    price: 599,
    originalPrice: 899,
    duration: '45 mins',
    image: '/images/ac-jet-pump.webp',
    beforeAfterImage: '/images/transformations/ac-service-before-after.jpg',
    tag: 'COOLING BOOST',
    description: 'High-pressure jet spray cleans cooling coils, blower fan blades, drain trays, and outdoor condenser fins using a protective waterproof service jacket to prevent wall mess.',
    highlights: [
      'High-pressure water jet pump cleaning',
      'Waterproof service bag attached to protect walls',
      'Cooling coil & blower wheel deep wash',
      'Gas pressure & amp draw electrical check'
    ],
    inclusions: [
      'Indoor unit filters, coils, and blower fan',
      'Outdoor unit condenser water wash',
      'Drain pipe blockage flush'
    ],
    exclusions: ['Copper pipe welding or compressor replacement'],
    processSteps: [
      { step: '01', title: 'Pre-check', description: 'Test temperature drop and electrical amps.' },
      { step: '02', title: 'Jacket Mount', description: 'Install waterproof catchment jacket.' },
      { step: '03', title: 'Jet Wash', description: 'High-pressure wash clears compacted dirt.' },
      { step: '04', title: 'Airflow Test', description: 'Verify ice-cold airflow delivery.' }
    ]
  },

  // 12. Commercial Sofa Cleaning
  {
    id: 'commercial-sofa-cleaning',
    categoryId: 'commercial-sofa-cleaning',
    name: 'Commercial Sofa & Office Upholstery Cleaning',
    subtitle: 'Bulk cleaning for offices, lounges, conference rooms & hotels',
    rating: 4.94,
    reviewsCount: 8400,
    price: 2499,
    originalPrice: 3599,
    duration: '2.5 hrs',
    image: '/images/full-home-deep.jpg',
    beforeAfterImage: '/images/transformations/commercial-sofa-before-after.jpg',
    tag: 'CORPORATE / BULK',
    description: 'High-capacity extraction squad equipped for corporate offices, reception couches, executive cabin chairs, cafeteria lounges, and auditorium seating.',
    highlights: [
      'Covers up to 12 commercial seats or office lounge sofas',
      'Heavy-traffic stain dissolution formula',
      'Twin-vacuum rapid dry extraction (ready in 2 hours)',
      'GST tax invoice provided for corporate reimbursement'
    ],
    inclusions: [
      'Reception sofa sets, executive lounge armchairs',
      'Deep stain lifting and fabric odor deodorization',
      'Official GST tax invoice'
    ],
    exclusions: ['Structural upholstery replacement'],
    processSteps: [
      { step: '01', title: 'Volume Survey', description: 'Count seats and prioritize high-traffic zones.' },
      { step: '02', title: 'Pre-treat', description: 'Industrial foam applied to grease and ink stains.' },
      { step: '03', title: 'Rapid Extraction', description: 'High-lift extraction ensures quick turnaround.' }
    ]
  }
];
