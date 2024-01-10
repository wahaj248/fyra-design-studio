"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import '../mediaquery.css';
import '../slider.css';
import React from "react";
import Header from "@/components/header/Header";
import Marque from "@/components/marque/Marque";
import Navbar from "@/components/Navbar/Navbar"
import Pricing from "@/components/pricing/Pricing";
import Footer from "@/components/footer/Footer";
import Contactform from "@/components/contactform/Contactform";
import PricingBanner from '@/components/pricingBanner/PricingBanner';
import AppSection from '@/reusable/AppSection';
import Process from '@/components/process/Process';
import Icon from '@/components/icons/Icon';

export default function packages() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="overflow-hidden">
                <PricingBanner />
            </div>
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
