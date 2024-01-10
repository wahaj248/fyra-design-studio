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
import PortfolioBanner from '@/components/portfolioBanner/PortfolioBanner';
import AppSection from '@/reusable/AppSection';
import Process from '@/components/process/Process';
import Icon from '@/components/icons/Icon';
import Slider from '@/components/slider/Slider';
import AppTabs from '@/reusable/AppTabs';

export default function portfolio() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="overflow-hidden">
                <PortfolioBanner />
            </div>
                <Slider />
            <AppSection />
            <Process />
            <Icon />
            <Marque />
            <Contactform />
            <Footer />
        </>
    );
}
