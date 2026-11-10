import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import SectionHeading from './SectionHeading';
import ListingCard from './ListingCard';
import ProjectModal from './ProjectModal';
export default function ListingSection({eyebrow,title,description,items,reverse=false,moreLink,moreText}){const [selected,setSelected]=useState(null);return <section className="listing-section graph-bg"><div className="container"><SectionHeading eyebrow={eyebrow} title={title} description={description}/><div className="listings">{items.map(item=><ListingCard key={item.title} item={item} reverse={reverse} onOpen={setSelected}/>)}</div>{moreLink&&<Link className="view-all" to={moreLink}>{moreText} <ArrowRight size={16}/></Link>}</div><ProjectModal item={selected} onClose={()=>setSelected(null)}/></section>}
