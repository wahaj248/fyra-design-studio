import React from 'react'
import styles from '../../app/marque.module.css'
import { motion } from "framer-motion"

function Icon() {
  const divLeft = {
    hidden: { opacity: 0, x: -500, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5 } },
    hover: {
      scale: 0.8,
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
    hidden: { opacity: 0, x: 500, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5 } },
    hover: {
      scale: 0.8,
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
    <div id={styles.marquebg} className="container-fluid overflow-hidden">
      <div className="row">
        <div className="col-12 flex gap-3 justify-center py-5">
          <a href='#'>
            <motion.img
              variants={divLeft}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className='w-14 h-14 sm:w-40 sm:h-32' src="/images/phoneicon.png" alt="" /></a>
          <a href='#'>
            <motion.img
              variants={divLeft}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className='w-14 h-14 sm:w-40 sm:h-32' src="/images/ordericon.png" alt="" /></a>
          <a href='#'>
            <motion.img
              variants={divRight}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className='w-14 h-14 sm:w-40 sm:h-32' src="/images/liveicon.png" alt="" /></a>
          <a href='#'>
            <motion.img
              variants={divRight}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className='w-14 h-14 sm:w-40 sm:h-32' src="/images/usaicon.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Icon
