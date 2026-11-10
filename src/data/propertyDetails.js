// Extra information for each listing. The first property follows the supplied reference.
// Remaining details are illustrative placeholders; replace with verified listing data.
const base = {
  purpose: 'Sale', transactionType: 'New Property', developer: 'Contact for details',
  project: 'Residential Property', floor: 'Contact for details', totalFloors: '—',
  parking: 'Contact for details', facing: '—', furnishing: 'Contact for details',
  availability: 'Contact for availability', yearBuilt: '—',
  ownership: 'Contact for details', age: '—', possession: 'Contact for availability',
  priceBreakup: 'Confirm with property advisor', balconies: '—',
  amenities: [],
};
export const propertyDetails = {
  'luxurious-3-bhk-apartment-in-heart-of-financial-district': {
    purpose: 'Sale', transactionType: 'New Property', developer: 'Prestige Group',
    project: 'Prestige High Heights', floor: '8th of 18', totalFloors: '18',
    bedrooms: '3', bathrooms: '3', balconies: '2', parking: '2 Covered Spaces',
    facing: 'East', furnishing: 'Semi-Furnished', availability: 'Immediately', yearBuilt: '2024',
    priceBreakup: '₹1.40 Cr Base Price + ₹5 Lakh Car Parking & Maintenance Deposit',
    address: 'Flat 802, Tower B, Prestige High Heights, Nanakramguda, Gachibowli, Hyderabad, Telangana 500032',
    ownership: 'Freehold', age: '2 years', possession: 'Ready to Move',
    listingId: 'PR-C455BE882A',
    special: 'Double-height ceiling living room with floor-to-ceiling double-glazed glass windows offering panoramic views of the lake. Includes Italian marble flooring and automated ambient lighting.',
    possessionDate: '2026-12-31', waterSupply: '24 Hours Municipal & Borewell',
    evCharging: 'Yes',
    amenities: ['Swimming Pool', 'Fully Equipped Gym', 'Clubhouse', '24/7 Security & CCTV', 'Power Backup', "Children’s Play Area", 'Jogging Track', 'Tennis Court', 'Indoor Games Room', 'EV Charging Station'],
    projectDescription: 'A premium gated community spread across 12 acres with 70% open space, state-of-the-art security, and luxurious lifestyle amenities tailored for working professionals and families.',
  },
  'ultra-luxury-4-bhk-gated-community-villa-with-private-garden': {
    purpose: 'Sale', project: 'Private Garden Villa', bedrooms: '4', bathrooms: '5',
    balconies: '3', furnishing: 'Luxury Finished', parking: 'Covered Parking',
    amenities: ['Private Garden', 'Home Lift', 'Smart Home Features', 'Terrace Garden'],
    special: 'Contemporary triplex layout with double-height interiors and premium finishes.',
  },
  'fully-furnished-it-office-space-in-prime-hitec-city': {
    purpose: 'Sale', project: 'HITEC City Business Space', bedrooms: '—', bathrooms: '10',
    furnishing: 'Fully Furnished', parking: 'Contact for details',
    amenities: ['Office Workstations', 'Meeting Areas', 'Modern Interiors'],
    special: 'Plug-and-play office space for corporate and technology operations.',
  },
  'premium-3-bhk-luxury-apartment-in-sarjapur-road': {
    purpose: 'Sale', project: 'Sarjapur Road Apartment', bedrooms: '3', bathrooms: '3',
    balconies: 'Contact for details', furnishing: 'Contact for details',
    amenities: ['Contemporary Interiors', 'Residential Community'],
  },
};
export function getPropertyDetails(slug) { return { ...base, ...(propertyDetails[slug] || {}) }; }
