import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../app/header.module.css';
import { BiSolidPhone } from 'react-icons/Bi';
import { GrMail } from 'react-icons/Gr';
import { ImFacebook } from 'react-icons/Im';
import { BsInstagram } from 'react-icons/Bs';
import { BiLogoLinkedin } from 'react-icons/Bi';
import Link from 'next/link';

function Header() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1.1, transition: { duration: 0.5, delay: 0.8 } },
  };

  return (
    <motion.div
      id={styles.bg}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div id={styles.headertop} className="container-fluid py-3 overflow-x-hidden">
        <div className="row">
          <div className="d-flex justify-around items-center">
            <Link href="/">
              <motion.div
                className="logo lg:-ms-16 xl:-ms-16"
                variants={headerVariants}
              >
                <img className="w-100" src="/images/navlogo.png" alt="" />
              </motion.div>
            </Link>
            <motion.div
              className="header"
              variants={headerVariants}
            >
              <ul className="flex gap-4 mt-3 items-center whitespace-nowrap">
                <li>
                  <a id={styles.ul} className="text-decoration-none" href="#">
                    For Quick Inquiries
                  </a>
                </li>
                <li>
                  <a id={styles.ul} className="flex text-decoration-none" href="#">
                    <BiSolidPhone className="text-sm me-3 mt-0.5 text-blue-600" />
                    800-898-8011
                  </a>
                </li>
                <li>
                  <a id={styles.ul} className="flex text-decoration-none" href="#">
                    <GrMail className="text-sm me-3 mt-0.5 text-blue-600" />
                    sales@digitmediadesigns.com
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="icon flex gap-7 px-4"
              variants={iconVariants}
            >
              <ImFacebook className="text-xl" id={styles.icon} />
              <BsInstagram className="text-xl" id={styles.icon} />
              <BiLogoLinkedin className="text-xl" id={styles.icon} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
