"use client";
import Header from "./../components/header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Contactform from "@/components/contactform/Contactform";
import Marque from "@/components/marque/Marque";
import Icon from "@/components/icons/Icon";
import Process from "@/components/process/Process";
import Design from "@/components/design/Design";
import PricingBanner from "@/components/pricingBanner/PricingBanner";
import Banner from "@/components/banner/Banner";
import Dottedslider from "@/components/dottedslider/Dottedslider";
import Slider from "@/components/slider/Slider";

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <section>
                <Banner />
            </section>
            <Dottedslider />
            <Slider />
            <Design />
            <Process />
            <Icon />
            <Marque />
            <Contactform />
            <Footer />
        </>
    );
}