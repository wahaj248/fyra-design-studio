import React from "react";
import { motion } from "framer-motion"
import styles from "../app/priceCard.module.css";

function PriceCard({ packageName, price, keypoints, cardColor, headColor, priceColor, keypointsColor, keypointsText }) {
    const fadeInVariant = {
        hidden: { opacity: 0, scale: 0.5, },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
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
    const fadeInVariant2 = {
        hidden: { opacity: 0, scale: 0.5, },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
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
        <motion.div variants={fadeInVariant} initial="hidden" whileHover="hover" whileInView="visible" class="h-full p-3 flex flex-col relative overflow-hidden" style={{ backgroundColor: cardColor }} id={styles.pricingCard}>
            <h2 className={styles.packageTitle} style={{ color: headColor }}>{packageName}</h2>
            <h1 class="leading-none flex items-center mb-4" style={{ color: priceColor }} id={styles.price}>
                <span>{price}</span>
                <span class="text-lg ml-1 font-normal" style={{ color: priceColor }} >Only</span>
            </h1>
            <motion.div variants={fadeInVariant2} initial="hidden" whileHover="hover" whileInView="visible" className={styles.division} style={{ background: keypointsColor }} >
                {keypoints.map((point, index) => (
                    <li key={index} className="flex items-center mb-2" style={{ color: keypointsText }}>
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0" style={{ color: keypointsText }}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        {point}
                    </li>
                ))}
            </motion.div>
            <div className="d-flex justify-content-around mt-3">
                <button id={styles.btn} className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
                <button id={styles.btn2} className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">Live Chat</button>
            </div>
        </motion.div>
    );
}

export default PriceCard;
