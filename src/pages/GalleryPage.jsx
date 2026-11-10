import React,{useState} from 'react';
import {properties,construction,interiors,lifts} from '../data/listings';
import {getPhoto} from '../data/images';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
export default function GalleryPage(){const [selected,setSelected]=useState(null);const groups=[['Properties',properties],['Construction Works',construction],['Interior Design',interiors],['Lift Design',lifts]];return <div className="graph-bg gallery-page"><div className="container"><SectionHeading eyebrow="OUR WORK IN PICTURES" title="Project gallery" description="Browse our portfolio of properties, construction works, interior spaces and lifts."/><div className="gallery-grid">{groups.flatMap(([group,items])=>items.map(item=><button key={item.title} onClick={()=>setSelected(item)}><img src={getPhoto(item.image)} alt={item.title}/><span><strong>{group}</strong><small>{item.title}</small></span></button>))}</div></div><ProjectModal item={selected} onClose={()=>setSelected(null)}/></div>;}
