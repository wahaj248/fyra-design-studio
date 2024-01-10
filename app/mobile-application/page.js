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
import WebAndAppBanner from '@/components/webAndAppBanner/WebAndAppBanner';
import Slider from '@/components/slider/Slider';
import AppSection from '@/reusable/AppSection';
import AppTabs from '@/reusable/AppTabs';

export default function mobileApplication() {
    const tabsContent = [
        "Wordpress Websites",
        "Shopify Websites",
        "Drupal",
        "Joomla",
        "Responsive Websites",
    ];
    const tab1 = ["/images/ecommerceTab1.png", "Wordpress Websites", " What makes WordPress is a popular platform known for its versatility and premium-quality content. It controls 60% of the CMS market and powers 34% of all websites worldwide. Our experts are adept at creating posts and pages, customizing websites, adding navigation menus, and more. We build user-friendly eCommerce websites with attractive themes that generate a high appeal. Enhance your content quality and make it valuable for your readers."]

    const tab2 = ["/images/ecommerceTab2.png", "Shopify Websites", "Shopify is the best eCommerce platform for your business. We design exceptional Shopify websites for your online store. Our Shopify design enhances the theme of your website and adds colors for a better appeal. You will not face any technical errors with a Shopify website. In addition, you will receive 24/7 customer support."]

    const tab3 = ["/images/ecommerceTab3.png", "Drupal", "Drupal is one of the best platforms in eCommerce web development. We offer error-free coding to your website and make it open-source to modify and customize the content according to your overall requirements. Drupal is a multilingual website that offers readers an extra cushion of viewing the content in their preferred language."]

    const tab4 = ["/images/ecommerceTab4.png", "Joomla Websites", "An award-winning CMS platform, Joomla enables you to build websites and online applications. It entails several add-ons and features to turn a simple website into a comprehensive eCommerce store. Expand your business using Joomla and enjoy success. However, you will need to hire a reliable firm like Digit Media Designs for better results."]

    const tab5 = ["/images/ecommerceTab5.png", "Mobile Responsive", "Digit Media Designs is known for designing mobile-responsive websites for customers. Our experienced unit knows the benefits and drawbacks of each CMS, enabling users to manage their online stores with more flexibility and ease. Customers have also acknowledged the adaptability feature of our web pages; they function with the same features on different devices."]
    return (
        <>
            <Header />
            <Navbar />
            <div className="overflow-hidden">
                <WebAndAppBanner />
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
