import React from 'react';
import {Link} from 'react-router-dom';
import {MapPin,ArrowRight} from 'lucide-react';
export default function InquiryBanner(){return <section className="inquiry-banner"><div className="container inquiry-inner"><span className="inquiry-icon"><MapPin size={27}/></span><div><h2>Have a property requirement?</h2><p>Tell us your location, budget and requirements.</p></div><Link to="/contact">Send an inquiry <ArrowRight size={19}/></Link></div></section>;}
