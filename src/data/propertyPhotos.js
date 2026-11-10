import { getPhoto } from './images';
// Set your own image paths here when original photographs are available.
// These URLs are representative full-photo images, not screenshots.
const photosByKey = {
  apartment: [
    ['apartment','Building exterior'],
    ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','Living room'],
    ['https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85','Bedroom']
  ],
  villa: [
    ['villa','Villa exterior'],
    ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','Living room'],
    ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85','Interior']
  ],
  office: [['office','Office space']],
  apartment2: [['apartment2','Apartment interior']]
};
export function getPropertyPhotos(property) {
  const entries = photosByKey[property.image] || [[property.image,'Property photo']];
  return entries.map(([key,label])=>({url:key.startsWith('http')||key.startsWith('/')?key:getPhoto(key), label}));
}
