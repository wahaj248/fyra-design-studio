"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import '../mediaquery.css';
import '../slider.css';
import React from "react";
import Header from "@/components/header/Header";
import Marque from "@/components/marque/Marque";
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/footer/Footer";
import Contactform from "@/components/contactform/Contactform";
import Process from '@/components/process/Process';
import Icon from '@/components/icons/Icon';
import Slider from '@/components/slider/Slider';
import Pricing from '@/components/pricing/Pricing';
import AppSection from '@/reusable/AppSection';
import BrandingBanner from '@/components/brandingBanner/BrandingBanner';
import SocialMediaManagementBanner from '@/components/socialMediaManagementBanner/SocialMediaManagementBanner';
import SocialMediaIcons from '@/components/socialMediaIcons/SocialMediaIcons';

export default function SmmService() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="overflow-hidden">
                <SocialMediaManagementBanner />
            </div>
            <SocialMediaIcons />
            <Slider />
            <Pricing />
            <AppSection />
            <Process />
            <Icon />
            <Marque />
            <Contactform />
            <Footer />
        </>
    );
}
