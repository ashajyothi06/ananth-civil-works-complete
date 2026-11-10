import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PropertiesPage from './pages/PropertiesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ServicePage from './pages/ServicePage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import {construction,interiors,lifts} from './data/listings';
export default function App(){return <BrowserRouter><Routes><Route element={<SiteLayout/>}><Route path="/" element={<HomePage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/properties" element={<PropertiesPage/>}/><Route path="/properties/:slug" element={<PropertyDetailsPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/gallery" element={<GalleryPage/>}/><Route path="/construction-works" element={<ServicePage eyebrow="CONSTRUCTION WORKS" title="From the blueprint to the finishing touch" description="Explore construction and civil projects undertaken by our team." items={construction} reverse/>}/><Route path="/interior-design" element={<ServicePage eyebrow="INTERIOR DESIGN" title="Spaces designed to feel like home" description="Interior concepts, material choices and project execution, tailored to the way you live." items={interiors}/>}/><Route path="/lift-design" element={<ServicePage eyebrow="LIFT DESIGN PROJECTS" title="A new level of lift design" description="Browse lift projects combining comfort, engineering and thoughtful aesthetics." items={lifts} reverse/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes></BrowserRouter>;}
