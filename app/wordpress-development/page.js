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
import WordpressBanner from '@/components/wordpressBanner/WordpressBanner';
import LoadingComp from '@/components/loadingComp/LoadingComp';
import Slider from '@/components/slider/Slider';
import AppTabs from '@/reusable/AppTabs';
import Process from '@/components/process/Process';
import Icon from '@/components/icons/Icon';
import AppSection from '@/reusable/AppSection';

export default function WordpressDevelopment() {
    const tabsContent = [
        "Wordpress Theme Development",
        "Wordpress Plugin Development",
        "Wordpress Migration Services",
        "Custom Wordpress Development",
        "API Integration  & Development",
    ];
    const tab1 = ["/images/ecommerceTab1.png", "Wordpress Theme Development", " We work on creating premium themes that aren't bloated or confining. Thanks to our design and creative-led process, you will receive a stylish and responsive theme."]

    const tab2 = ["/images/ecommerceTab2.png", "Wordpress Plugin Development", "Our WordPress developers are skilled at creating custom plugins from scratch. Moreover, they can also manage built-in plugins for better page responses."]

    const tab3 = ["/images/ecommerceTab3.png", "Wordpress Migration Services", "It's not simple to switch to a new system. Work with our experts and migrate without risk of data loss, leaks, or downtime."]

    const tab4 = ["/images/ecommerceTab4.png", "Custom Wordpress Development", "Our WordPress development team provides customers with a flawless and responsive web design. With years of experience in web development, we ensure a smooth sailing online."]

    const tab5 = ["/images/ecommerceTab5.png", "API Integrations & Development", "Plugins are important for WordPress Page Development. Our experts are well-versed with their use with regards to themes and WP versions."]

    return (
        <>
            <Header />
            <Navbar />
            <div className="overflow-hidden">
                <WordpressBanner />
            </div>
            <AppTabs tabBackground="/images/loadingComponentBg.png" heading="Responsive & Interactive Websites" tabsContent={tabsContent} tab1={tab1} tab2={tab2} tab3={tab3} tab4={tab4} tab5={tab5} paragraph="User-friendly and responsive websites are our ‘area of expertise'. Websites, in our opinion, serve as key branding tools on the Internet. An impression-inducing website will likely convert visitors into paying customers. We ensure that the website meets the client’s short-term and long-term objectives." />
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
