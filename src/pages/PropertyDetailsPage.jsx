import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Bath, BedDouble, Building2, CalendarDays, Camera,
  CarFront, Check, ChevronLeft, ChevronRight, Compass, ExternalLink,
  Images, MapPin, MessageSquareText, Pause, Phone, Play, Share2, Sofa
} from 'lucide-react';
import { findPropertyBySlug } from '../data/listings';
import { getPropertyDetails } from '../data/propertyDetails';
import { getPropertyPhotos } from '../data/propertyPhotos';

function DetailBlock({ title, children, className = '' }) {
  return <section className={`pd-block ${className}`}><h2>{title}</h2>{children}</section>;
}

function ContactSidebar({ property, details }) {
  const subject = encodeURIComponent(`Inquiry: ${property.title}`);
  const body = encodeURIComponent(`Hello, I would like more information about ${property.title} (${details.listingId || 'property listing'}).`);
  return <aside className="pd-contact-card">
    <small>Property price</small><strong>{property.price}</strong><span>{property.rate}</span>
    <p className="pd-location"><MapPin size={16}/>{property.location}</p>
    <div className="pd-listing-id"><span>Listing ID</span><b>{details.listingId || property.rera || 'On request'}</b></div>
    <a className="pd-primary-action" href="tel:+918074595152"><Phone size={17}/>Contact property advisor</a>
    <Link className="pd-primary-action" to={`/contact?property=${encodeURIComponent(property.title)}`}><MessageSquareText size={17}/>Make an inquiry</Link>
    <p>Interested in this listing? Tell us your requirements in a short form. Our team will contact you.</p>
    <a className="pd-map-link" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.address || property.location)}`}><ExternalLink size={15}/>View location on map</a>
    <p>Verify availability, legal documents and final pricing directly with the organization.</p>
  </aside>;
}

function PhotoSlider({ photos, title }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => { setActive(0); }, [photos]);
  useEffect(() => {
    if (!playing || photos.length < 2) return;
    const timer = window.setInterval(() => setActive(n => (n + 1) % photos.length), 4500);
    return () => window.clearInterval(timer);
  }, [photos, playing]);
  const move = step => setActive(index => (index + step + photos.length) % photos.length);
  return <div className="pd-gallery-card">
    <div className="pd-hero-photo">
      <img src={photos[active].url} alt={`${title} - photo ${active + 1}`} />
      {photos.length > 1 && <><button className="pd-slide-arrow left" onClick={() => move(-1)} aria-label="Previous photo"><ChevronLeft/></button><button className="pd-slide-arrow right" onClick={() => move(1)} aria-label="Next photo"><ChevronRight/></button></>}
      <span className="pd-photo-count"><Camera size={13}/>{active + 1} / {photos.length} photos</span>
      {photos.length > 1 && <button className="pd-play" onClick={() => setPlaying(v => !v)}>{playing ? <Pause size={13}/> : <Play size={13}/>} {playing ? 'Pause' : 'Play'}</button>}
    </div>
    <div className="pd-thumbnails">{photos.map((photo, i) => <button key={`${photo.url}-${i}`} className={active === i ? 'active' : ''} onClick={() => setActive(i)} aria-label={`View photo ${i + 1}`}><img src={photo.url} alt={photo.label || `Photo ${i+1}`}/></button>)}</div>
  </div>;
}

function Overview({ property, details }) {
  const fields = [
    {label:'Bedrooms', value:details.bedrooms || property.meta?.[0] || '—', Icon:BedDouble},
    {label:'Bathrooms', value:details.bathrooms || '—', Icon:Bath},
    {label:'Balconies', value:details.balconies, Icon:Building2},
    {label:'Floor', value:details.floor, Icon:Building2},
    {label:'Total floors', value:details.totalFloors, Icon:Building2},
    {label:'Parking', value:details.parking, Icon:CarFront},
    {label:'Facing', value:details.facing, Icon:Compass},
    {label:'Furnishing', value:details.furnishing, Icon:Sofa},
    {label:'Availability', value:details.availability, Icon:CalendarDays},
    {label:'Year built', value:details.yearBuilt, Icon:CalendarDays}
  ];
  return <DetailBlock title="Property overview"><div className="pd-overview-grid">{fields.map(({label,value,Icon}) => <div className="pd-overview-item" key={label}><Icon size={21}/><div><small>{label}</small><strong>{value}</strong></div></div>)}</div></DetailBlock>;
}

function MoreDetails({ property, details }) {
  const rows = [
    ['Price breakup', details.priceBreakup], ['Address', details.address || property.location],
    ['Furnishing', details.furnishing], ['Type of ownership', details.ownership],
    ['Overlooking', details.overlooking || 'Contact for details'], ['Age of construction', details.age],
    ['Possession status', details.possession], ['RERA ID', property.rera || 'Not provided']
  ];
  return <DetailBlock title="More details"><div className="pd-spec-grid">{rows.map(([label,value]) => <div className="pd-spec" key={label}><span>{label}</span><b>{value}</b></div>)}</div></DetailBlock>;
}

export default function PropertyDetailsPage() {
  const { slug } = useParams();
  const property = findPropertyBySlug(slug);
  const details = getPropertyDetails(slug);
  const photos = property ? getPropertyPhotos(property) : [];
  if (!property) return <div className="pd-not-found container"><h1>Property not found</h1><Link to="/properties">Back to all properties</Link></div>;
  const share = () => { if (navigator.share) navigator.share({title:property.title,url:window.location.href}).catch(()=>{}); else navigator.clipboard?.writeText(window.location.href).then(()=>window.alert('Link copied to clipboard')).catch(()=>{}); };
  return <div className="property-details-page">
    <header className="pd-title-area"><div className="pd-wide-container">
      <Link className="pd-back" to="/properties"><ChevronLeft size={15}/>All properties</Link>
      <div className="pd-title-row"><div><div className="pd-tags"><span>{details.purpose}</span><span>{property.category}</span></div><h1>{property.title}</h1><p><MapPin size={15}/>{details.address || property.location}</p></div><button className="pd-share" onClick={share}><Share2 size={16}/>Share</button></div>
    </div></header>
    <div className="pd-quickfacts"><div className="pd-wide-container pd-quickfacts-grid">
      <div><small>Property price</small><strong>{property.price}</strong><b>{property.rate}</b></div>
      <div><Building2/><span><small>Developer</small><strong>{details.developer}</strong></span></div>
      <div><Building2/><span><small>Project</small><strong>{details.project}</strong></span></div>
      <div><Building2/><span><small>Floor</small><strong>{details.floor}</strong></span></div>
      <div><CalendarDays/><span><small>Transaction type</small><strong>{details.transactionType}</strong></span></div>
    </div></div>
    <div className="pd-wide-container pd-main-grid"><div className="pd-main-column">
      <PhotoSlider key={slug} photos={photos} title={property.title}/>
      <Overview property={property} details={details}/>
      <MoreDetails property={property} details={details}/>
      <DetailBlock title="Description"><p className="pd-description">{property.description}</p></DetailBlock>
      {property.features?.map((feature, index) => {const [label,...value] = feature.split(':');return <DetailBlock key={index} title={label}><p>{value.join(':').trim() || feature}</p>{index===0&&photos[0]&&<img className="pd-feature-image" src={photos[0].url} alt={property.title}/>}</DetailBlock>;})}
      {details.special && <DetailBlock title="Special Architectural Highlights"><p>{details.special}</p></DetailBlock>}
      {details.possessionDate && <DetailBlock title="Possession Date"><p>{details.possessionDate}</p></DetailBlock>}
      <div className="pd-media"><span className="pd-eyebrow">MEDIA GALLERY</span><h2>Photos &amp; videos</h2><p>{photos.length} photos · 0 videos</p><div className="pd-media-grid">{photos.map((photo,i)=><a href={photo.url} target="_blank" rel="noreferrer" key={i}><img src={photo.url} alt={`${property.title} ${i+1}`}/><small>{photo.label}</small></a>)}</div></div>
      {details.amenities?.length > 0 && <DetailBlock title="Amenities"><div className="pd-amenities">{details.amenities.map(a=><div key={a}><Check size={13}/>{a}</div>)}</div></DetailBlock>}
      <div className="pd-block"><span className="pd-eyebrow">ABOUT PROJECT</span><h2>{details.project}</h2><p>by {details.developer}</p><p>{details.projectDescription || property.description}</p></div>
      <Link className="pd-all-properties" to="/properties"><ArrowLeft size={16}/>Browse all properties</Link>
    </div><div className="pd-sidebar"><ContactSidebar property={property} details={details}/></div></div>
  </div>;
}
