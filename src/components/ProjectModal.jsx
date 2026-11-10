import React from 'react';
import {X, MapPin, Mail} from 'lucide-react';
import {getPhoto} from '../data/images';
import {site} from '../data/site';
export default function ProjectModal({item,onClose}){if(!item)return null;return <div className="modal-backdrop" onClick={onClose}><section className="project-modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={onClose}><X/></button><img src={getPhoto(item.image)} alt={item.title}/><div className="project-modal-content"><span className="eyebrow">PROJECT DETAILS</span><h2>{item.title}</h2><strong className="price">{item.price}</strong><p className="location-line"><MapPin size={16}/>{item.location}</p><p>{item.description}</p><a className="primary-btn" href={'mailto:'+site.email+'?subject='+encodeURIComponent('Enquiry: '+item.title)}><Mail size={17}/> Enquire now</a></div></section></div>;}
