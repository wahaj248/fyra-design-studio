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
import VideoAnimationBanner from '@/components/videoAnimationBanner/VideoAnimationBanner';
import Slider from '@/components/slider/Slider';
import Pricing from '@/components/pricing/Pricing';
import AppSection from '@/reusable/AppSection';

export default function videoAnimation() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="overflow-hidden">
                <VideoAnimationBanner />
            </div>
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
