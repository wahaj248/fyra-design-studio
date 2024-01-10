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
import SocialMediaIcons from '@/components/socialMediaIcons/SocialMediaIcons';
import OnlineReputationManagementBanner from '@/components/onlineReputationManagementBanner/OnlineReputationManagementBanner';
import AppHeading from '@/reusable/AppHeading';
import { motion } from "framer-motion"

export default function SmmService() {

    const divLeft = {
        hidden: { opacity: 0, x: -250, scale: 0.5 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5 } },
        hover: {
            scale: 0.9,
            transition: {
                duration: 0.7,
            },
        },
        initial: {
            scale: 1,
            transition: {
                duration: 0.8,
            },
        },
    };
    const divRight = {
        hidden: { opacity: 0, x: 250, scale: 0.5 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5 } },
        hover: {
            scale: 0.9,
            transition: {
                duration: 0.7,
            },
        },
        initial: {
            scale: 1,
            transition: {
                duration: 0.8,
            },
        },
    };
    return (
        <>
            <Header />
            <Navbar />
            <div className="overflow-hidden">
                <OnlineReputationManagementBanner />
            </div>
            <section className="boxBg">
                <div className='py-5'>
                    <AppHeading text="Benefits Of Online Reputation Management" para="Reputation is all about brand identification and public perceptions. To perfectly manage the ‘reputation factor’, you need to connect with an online reputation
management agency. Following are some of the benefits of ORM:" />
                </div>
                <div className="container w-75 pb-4 pt-2">
                    <div className="container1">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <motion.div
                                    variants={divLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    className="box">
                                    <div className="d-flex justify-content-center mb-3">
                                        <img src="/images/orm-icon1.png.png" />
                                    </div>
                                    <h2 className="headingBox">
                                        Remove <br /> Negativity
                                    </h2>
                                    <p className="paraBox mb-5 pb-5">
                                        Handling negative reviews is
                                        essential for a brand or
                                        business. The customer’s
                                        viewpoint should be catered
                                        to and understood for the
                                        positive feedback. Apart from
                                        that, the private response is
                                        also an option.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <motion.div
                                    variants={divLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    className="box">
                                    <div className="d-flex justify-content-center mb-3">
                                        <img src="/images/orm-icon2.png.png" />
                                    </div>
                                    <h2 className="headingBox">
                                        Promote <br /> Positivity
                                    </h2>
                                    <p className="paraBox mb-5 pb-5">
                                        Encouraging customers to
                                        share their positive
                                        experiences is a great option
                                        to enhance their reputation.
                                        Trusted brands do not spend
                                        much on marketing and
                                        generate high revenues than
                                        others.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <motion.div
                                    variants={divRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    className="box">
                                    <div className="d-flex justify-content-center mb-3">
                                        <img src="/images/orm-icon3.png.png" />
                                    </div>
                                    <h2 className="headingBox">
                                        Convey your <br /> Story
                                    </h2>
                                    <p className="paraBox mb-5 pb-5">
                                        We share your story with the
                                        target market to build a
                                        positive reputation. This
                                        eliminates misconceptions
                                        and helps customers develop
                                        an emotional connection.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <motion.div
                                    variants={divRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    className="box">
                                    <div className="d-flex justify-content-center mb-3">
                                        <img src="/images/orm-icon4.png.png" />
                                    </div>
                                    <h2 className="headingBox">
                                        Reputation and <br /> Brand Analysis
                                    </h2>
                                    <p className="paraBox mb-5 pb-5">
                                        Digit Media Designs caters to
                                        your online reputation in a
                                        simple and effective way. We
                                        combine SEO, marketing, and
                                        public relations for maximum
                                        effect.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w-75">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-3 col-12">
                            <motion.div
                                variants={divLeft}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                className="box">
                                <div className="d-flex justify-content-center mb-3">
                                    <img src="/images/orm-icon5.png.png" />
                                </div>
                                <h2 className="headingBox">
                                    ORM <br /> Implementation
                                </h2>
                                <p className="paraBox mb-5 pb-5">
                                    As an online reputation management company, we use practical approaches like promoting content, publishing press releases, posting customer reviews, and more.
                                </p>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <motion.div
                                variants={divRight}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                className="box">
                                <div className="d-flex justify-content-center mb-3">
                                    <img src="/images/orm-icon6.png.png" />
                                </div>
                                <h2 className="headingBox">
                                    Monitoring <br />  Online Reputation
                                </h2>
                                <p className="paraBox mb-5 pb-5">
                                    We keep a close check on your online reputation; our experts remove unwanted content from the review sections and feedback columns. Moreover, we understand the viewpoint of the customer and respond.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
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
