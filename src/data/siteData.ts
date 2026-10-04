import type { Service, CaseStudy, Testimonial, Stat } from '../types';

export const siteDetails = {
  name: 'Urban Marketing Enterprise LLC',
  abbreviation: 'UME',
  tagline: 'We Make Brands Own the City.',
  heroEyebrow: 'URBAN GROWTH AGENCY · EST. 2014',
  heroHeadline: 'We Make Brands\nOwn the City.',
  heroSubheadline: 'Street-smart strategy and premium creative for brands that refuse to be background noise in the markets that matter most.',
  heroDescription: 'From Brooklyn to the South Side, we build campaigns that move on the block and convert in the cart — brand strategy, paid media, social and live activations under one roof.',
  footprintCard: {
    number: '12 cities',
    label: 'ACTIVE CAMPAIGN\nFOOTPRINT'
  },
  contact: {
    address: '312 W Monroe St, Chicago, IL',
    email: 'hello@urbanmarketingenterprise.com',
    phone: '(312) 555-0148'
  },
  socials: [
    { label: 'INSTAGRAM', url: '#' },
    { label: 'LINKEDIN', url: '#' },
    { label: 'TIKTOK', url: '#' }
  ]
};

export const marqueeBrands = [
  'HALSTON',
  'AURA STUDIOS',
  'CITY COLLECTIVE',
  'NORTHBOUND',
  'RIVET & ROW'
];

export const servicesData: Service[] = [
  {
    number: '01',
    title: 'Brand Strategy',
    description: 'Positioning, narrative and identity systems built from real neighborhood insight — not national averages.',
    services: [
      'Market & culture research',
      'Positioning platform',
      'Identity systems'
    ]
  },
  {
    number: '02',
    title: 'Digital Marketing',
    description: 'Paid media engineered around zip codes, transit lines and storefront foot traffic, measured to revenue.',
    services: [
      'Geo-targeted paid media',
      'SEO & local search',
      'Conversion tracking'
    ]
  },
  {
    number: '03',
    title: 'Social Campaigns',
    description: 'Editorial content and creator partnerships that speak the language of the block, at the pace of the feed.',
    services: [
      'Creator casting',
      'Always-on content',
      'Community management'
    ]
  },
  {
    number: '04',
    title: 'Urban Activations',
    description: 'Pop-ups, murals, block takeovers and launch nights that turn a street corner into earned media.',
    services: [
      'Pop-up production',
      'OOH & murals',
      'Launch events'
    ]
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'halston',
    clientLocation: 'HALSTON LEATHER CO. · CHICAGO',
    campaign: 'The Burgundy Edit',
    result: '+312% direct-to-store traffic in eight weeks',
    imageUrl: '/assets/halston.jpg',
    description: 'A targeted street takeover and geo-fenced digital campaign launching Halston\'s luxury leather autumn edit across Chicago\'s premier shopping corridors.',
    challenge: 'Drive immediate foot traffic to physical retail stores during a competitive fall season without discounting premium products.',
    strategy: 'Deployed hyper-local billboard projections, localized social ads within 2 miles of stores, and exclusive VIP preview pop-ups.'
  },
  {
    id: 'aura',
    clientLocation: 'AURA STUDIOS · BROOKLYN',
    campaign: 'Opening Night Takeover',
    result: '4,100 RSVPs · 11M organic impressions',
    imageUrl: '/assets/aura.jpg',
    description: 'An immersive warehouse launch experience combining live urban art, creator performances, and viral social hooks.',
    challenge: 'Break through the noise of Brooklyn nightlife and position Aura Studios as the new premier creative hub.',
    strategy: 'Curated 15 neighborhood creator partnerships, executed street poster wild-posting, and produced an invitation-only opening night.'
  },
  {
    id: 'city-collective',
    clientLocation: 'CITY COLLECTIVE · ATLANTA',
    campaign: 'Rebrand & Rollout',
    result: 'Category share up 18 points in one year',
    imageUrl: '/assets/hero_bg.jpg',
    description: 'Complete brand transformation and multi-channel campaign repositioning City Collective for modern urban consumers.',
    challenge: 'Outdated brand perception amidst rapidly shifting demographic trends in key metro hubs.',
    strategy: 'Redesigned core identity narrative, launched transit takeover ads, and engineered targeted digital acquisition funnels.'
  }
];

export const statisticsData: Stat[] = [
  {
    value: '10+',
    label: 'YEARS IN MARKET'
  },
  {
    value: '250+',
    label: 'BRANDS PARTNERED'
  },
  {
    value: '98%',
    label: 'CLIENT RETENTION'
  },
  {
    value: '500M+',
    label: 'IMPRESSIONS GENERATED'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    quote: 'They understood our neighborhood better than we did. Six weeks in, we had a line outside a store nobody could find in March.',
    attribution: 'DEJA WHITFIELD — FOUNDER, HALSTON LEATHER CO.'
  },
  {
    quote: 'Most agencies send a deck. UME sent a crew, a plan and a number they were willing to be held to.',
    attribution: 'MARCUS OYELARAN — CMO, AURA STUDIOS'
  },
  {
    quote: 'UME turned our regional launch into a citywide culture movement. The foot traffic and brand lift exceeded every forecast.',
    attribution: 'ELENA ROSTOVA — HEAD OF BRAND, CITY COLLECTIVE'
  },
  {
    quote: 'Street-level authentic with corporate-grade execution. UME is the only agency we trust with our urban market strategy.',
    attribution: 'DARIUS VANCE — VP MARKETING, NORTHBOUND ATHLETICS'
  },
  {
    quote: 'Their OOH takeover and pop-up activations resulted in our highest single-day retail sales volume in company history.',
    attribution: 'SABRINA CHEN — BRAND DIRECTOR, RIVET & ROW'
  },
  {
    quote: 'From hyper-local digital ads to street murals, every touchpoint hit the target demographic with total precision.',
    attribution: 'TRENT HOLLOWAY — CREATIVE DIRECTOR, METRO LABS'
  }
];
