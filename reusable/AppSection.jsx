import React from "react";
import { Container } from "react-bootstrap";
import styles from "../app/appSectionBg.module.css";
import { motion } from "framer-motion";

function AppSection({ text, para }) {
    const fadeInVariant = {
        hidden: { opacity: 0, scale: 0.7, },
        visible: { opacity: 1, scale: 1, transition: { duration: 2.5 } },
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
        <div className=" " id={styles.appSectionBg}>
            <div className="container w-75 text-center py-5">
                <div className="my-5">
                    <motion.h1
                        variants={fadeInVariant}
                        initial="hidden"
                        whileHover="hover"
                        whileInView="visible"
                        className={styles.heading}>All Website Designs Come with Complimentary Features</motion.h1>
                    <motion.p
                        variants={fadeInVariant}
                        initial="hidden"
                        whileHover="hover"
                        whileInView="visible"
                        className={styles.para}>We create designs that help your website stand out from the crowd. Get your website from us and avail complimentary features today.</motion.p>
                </div>
            </div>
        </div>
    );
}

export default AppSection;
