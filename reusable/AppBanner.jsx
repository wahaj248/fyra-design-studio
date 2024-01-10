import React from 'react';
import styles from '../app/AppBanner.module.css';
import { Col, Row } from 'react-bootstrap';
import { motion } from "framer-motion";

function AppBanner({ whiteHeading, YellowHeading, paragraphHeading, sideImage, paragraph, backgroundImg, backgroundColor, hideBtnAndPartnerImage }) {
    const backgroundStyle = {
        width: "100%",
        height: "100%",
    };
    if (backgroundImg) {
        backgroundStyle.background = `url(${backgroundImg}) no-repeat center center/cover`;
    } else if (backgroundColor) {
        backgroundStyle.backgroundColor = backgroundColor;
    }
    const variants = {
        hidden: { opacity: 0, x: -300, scale: 0.8 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5 } },
    };
    const hoverAnimation = {
        hover: {
            scale: 0.9,
            transition: {
                duration: 0.7,
            },
        },
        initial: {
            scale: 1,
            transition: {
                duration: 0.7,
            },
        },
    };
    
    return (
        <section style={backgroundStyle}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                exit="exit"
                className='container'>
                <Row className='justify-content-evenly'>
                    <Col lg={6} className='pt-5 mt-3'>
                        <div className="container mx-auto flex px-5 pt-5 md:flex-row flex-col items-center overflow-x-hidden">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                variants={hoverAnimation}
                                className="col-lg-9 col-md-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-lg-start text-md-start text-center">
                                <h1 id={styles.bannerh1White} className="title-font sm:text-4xl text-3xl">
                                    {whiteHeading}
                                </h1>
                                <h1 id={styles.bannerh1} className="title-font sm:text-4xl text-3xl">
                                    {YellowHeading}
                                </h1>
                                <div className="para text-start mt-4">
                                    <p id={styles.bannerpara} className=" leading-relaxe">
                                        {paragraph}
                                    </p>
                                </div>
                                <div className="flex justify-center mt-3 mb-4">
                                    <button id={styles.bannerbtn1} className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
                                    <button id={styles.bannerbtn2} className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Live Chat</button>
                                </div>
                                {!hideBtnAndPartnerImage && (
                                    <div className="flex gap-5 mt-5 mb-4">
                                        <a href="#"><img src="/images/bannericon1.png" alt="" /></a>
                                        <a href="#"><img src="/images/bannericon2.png" alt="" /></a>
                                        <a href="#"><img src="/images/bannericon3.png" alt="" /></a>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='pt-5'>
                            <img src={sideImage} />
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </section >
    )
}

export default AppBanner;
