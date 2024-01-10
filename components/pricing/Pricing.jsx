import React, { useState } from "react";
import "../../app/pricing.css"
import PriceCard from "@/reusable/PriceCard";
import AppHeading from "@/reusable/AppHeading";
import styles from "../../app/priceCard.module.css";

function Pricing() {
    const data1 = [
        "Upto 08 Unique Pages Website",
        "Conceptual & Dynamic Web",
        "Content Management System",
        "Mobile Responsive",
        "Easy Product Search",
        "Product Reviews",
        "Up To 50 Products",
        "Up To 5 Categories",
    ];

    const data2 = [
        "Upto 15 Unique Pages Website",
        "Conceptual & Dynamic Web",
        "Content Management System",
        "Mobile Responsive",
        "Easy Product Search",
        "Product Reviews",
        "Up To 100 Products",
        "Up To 7 Categories",
    ];

    const data3 = [
        "Unlimited Unique Pages Web",
        "Conceptual & Dynamic Web",
        "Content Management System",
        "Mobile Responsive",
        "Easy Product Search",
        "Product Reviews",
        "Unlimited Products",
        "Unlimited Categories",
    ];

    const [activeTab, setActiveTab] = useState("Website Design");

    const handleTabClick = (tabId) => {
        if (tabId === activeTab) {
            return;
        }
        setActiveTab(tabId);
    };

    return (
        <>
            <div className={styles.pricingBg}>
                <div className="pt-5 mb-4">
                    <AppHeading
                        text="Our Custom Packages For Our Clients"
                        para="Our core values are honesty, integrity, and innovation. We have excelled based on providing the work with complete transparency to all our clients. We offer various packages to cater to as many customers and turn away no one who feels the rates would make it difficult for them to avail the services. Our packages are very accommodating and considerate to allow more people to avail of all of our services. This has allowed way more customers to reach out to us."
                    />
                </div>
                <div className="d-flex justify-content-center gap-3 flex-wrap py-3">
                    {[
                        "Website Design",
                        "Ecommerce",
                        "Branding",
                        "Animation",
                        "Digital Marketing",
                        "Combo",
                        "Logo Design",
                    ].map((tab, index) => (
                        <button
                            key={`tab${index}`}
                            className={`custom-btn ${activeTab === tab ? "active" : ""}`}
                            onClick={() => handleTabClick(tab)}
                            style={{ backgroundColor: activeTab === tab ? "#FFFFFF" : "" }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {activeTab === "Website Design" || activeTab === "Ecommerce" ? (
                    <section className="text-gray-600 body-font overflow-hidden container">
                        <div className="px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Basic E-Commerce Package"
                                        price="$500"
                                        keypoints={data1}
                                        priceColor="#ffffff"
                                        keypointsColor="#1766FF"
                                        keypointsText="#ffffff"
                                        cardColor="#245BCF"
                                        headColor="#ffffff"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Startup E-Commerce Package"
                                        price="$999"
                                        keypoints={data2}
                                        priceColor="#ffffff"
                                        keypointsColor="#3C3CE0"
                                        keypointsText="#ffffff"
                                        cardColor="#191970"
                                        headColor="#FFCD24"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Professional E-Commerce Package"
                                        price="$999"
                                        keypoints={data3}
                                        priceColor="#000000"
                                        keypointsColor="#FFB906"
                                        keypointsText="#000000"
                                        cardColor="#FFCD24"
                                        headColor="#245BCF"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {activeTab === "All Packages" || activeTab === "Branding" ? (
                    <section className="text-gray-600 body-font overflow-hidden container">
                        <div className="px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Mobile App Basic Package"
                                        price="$299"
                                        keypoints={data1}
                                        priceColor="#ffffff"
                                        keypointsColor="#3D9D02"
                                        keypointsText="#ffffff"
                                        cardColor="#54CB37"
                                        headColor="#ffffff"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Mobile App Pro Package"
                                        price="$599"
                                        keypoints={data2}
                                        priceColor="#ffffff"
                                        keypointsColor="#744ACE"
                                        keypointsText="#ffffff"
                                        cardColor="#245BCF"
                                        headColor="#FFCD24"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Mobile App Premium Package"
                                        price="$999"
                                        keypoints={data3}
                                        priceColor="#ffffff"
                                        keypointsColor="#FF2F4F"
                                        keypointsText="#000000"
                                        cardColor="#B3001B"
                                        headColor="#FFCD24"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {activeTab === "All Packages" || activeTab === "Animation" ? (
                    <section className="text-gray-600 body-font overflow-hidden container">
                        <div className="px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Basic E-Commerce Package"
                                        price="$500"
                                        keypoints={data1}
                                        priceColor="#ffffff"
                                        keypointsColor="#1766FF"
                                        keypointsText="#ffffff"
                                        cardColor="#245BCF"
                                        headColor="#ffffff"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Startup E-Commerce Package"
                                        price="$999"
                                        keypoints={data2}
                                        priceColor="#ffffff"
                                        keypointsColor="#3C3CE0"
                                        keypointsText="#ffffff"
                                        cardColor="#191970"
                                        headColor="#FFCD24"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Professional E-Commerce Package"
                                        price="$999"
                                        keypoints={data3}
                                        priceColor="#000000"
                                        keypointsColor="#FFB906"
                                        keypointsText="#000000"
                                        cardColor="#FFCD24"
                                        headColor="#245BCF"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {activeTab === "All Packages" || activeTab === "Digital Marketing" ? (
                    <section className="text-gray-600 body-font overflow-hidden container">
                        <div className="px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Basic E-Commerce Package"
                                        price="$500"
                                        keypoints={data1}
                                        priceColor="#ffffff"
                                        keypointsColor="#1766FF"
                                        keypointsText="#ffffff"
                                        cardColor="#245BCF"
                                        headColor="#ffffff"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Startup E-Commerce Package"
                                        price="$999"
                                        keypoints={data2}
                                        priceColor="#ffffff"
                                        keypointsColor="#3C3CE0"
                                        keypointsText="#ffffff"
                                        cardColor="#191970"
                                        headColor="#FFCD24"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Professional E-Commerce Package"
                                        price="$999"
                                        keypoints={data3}
                                        priceColor="#000000"
                                        keypointsColor="#FFB906"
                                        keypointsText="#000000"
                                        cardColor="#FFCD24"
                                        headColor="#245BCF"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {activeTab === "All Packages" || activeTab === "Combo" ? (
                    <section className="text-gray-600 body-font overflow-hidden container">
                        <div className="px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Basic E-Commerce Package"
                                        price="$500"
                                        keypoints={data1}
                                        priceColor="#ffffff"
                                        keypointsColor="#1766FF"
                                        keypointsText="#ffffff"
                                        cardColor="#245BCF"
                                        headColor="#ffffff"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Startup E-Commerce Package"
                                        price="$999"
                                        keypoints={data2}
                                        priceColor="#ffffff"
                                        keypointsColor="#3C3CE0"
                                        keypointsText="#ffffff"
                                        cardColor="#191970"
                                        headColor="#FFCD24"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Professional E-Commerce Package"
                                        price="$999"
                                        keypoints={data3}
                                        priceColor="#000000"
                                        keypointsColor="#FFB906"
                                        keypointsText="#000000"
                                        cardColor="#FFCD24"
                                        headColor="#245BCF"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {activeTab === "All Packages" || activeTab === "Logo Design" ? (
                    <section className="text-gray-600 body-font overflow-hidden container">
                        <div className="px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Basic E-Commerce Package"
                                        price="$500"
                                        keypoints={data1}
                                        priceColor="#ffffff"
                                        keypointsColor="#1766FF"
                                        keypointsText="#ffffff"
                                        cardColor="#245BCF"
                                        headColor="#ffffff"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Startup E-Commerce Package"
                                        price="$999"
                                        keypoints={data2}
                                        priceColor="#ffffff"
                                        keypointsColor="#3C3CE0"
                                        keypointsText="#ffffff"
                                        cardColor="#191970"
                                        headColor="#FFCD24"
                                    />
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/3 w-full">
                                    <PriceCard
                                        packageName="Professional E-Commerce Package"
                                        price="$999"
                                        keypoints={data3}
                                        priceColor="#000000"
                                        keypointsColor="#FFB906"
                                        keypointsText="#000000"
                                        cardColor="#FFCD24"
                                        headColor="#245BCF"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}

            </div>
        </>
    );
}

export default Pricing;
