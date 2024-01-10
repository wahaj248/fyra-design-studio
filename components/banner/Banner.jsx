import React from 'react';
import styles from '../../app/banner.module.css';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Banner() {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } }, // Hover animation
  };

  return (
    <section id={styles.bannerbg} className='py-5'>
      <div className="container mx-auto flex px-5 pt-5 md:flex-row flex-col items-center overflow-x-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="col-lg-9 col-md-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-lg-start text-md-start text-center"
        >
          <h1 id={styles.bannerh1} className="title-font sm:text-4xl text-3xl">
            <TypeAnimation
              sequence={[
                'CONSTRUCT & TRANSFORM YOUR BRAND IDENTITY',
                1000,
                'ONGOING MARKETING ASSISTANCE & DESIGN',
                1000,
                'EXPERTS-DESIGNED ADD CAMPAIGN FOR INSTANT TRAFFIC',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <div className="para text-start text-white">
            <p id={styles.bannerpara} className=" leading-relaxe">
              Communicate your brand message with FYRA Design Studio,
              <br className="hidden lg:inline-block" />
              one of the best firms in digital marketing company. It’s time to
              <br className="hidden lg:inline-block" />
              skyrocket your business with our bespoke marketing strategies.
            </p>
          </div>
          <div>
            <motion.span className='d-flex flex-row text-white py-2' initial={{ x: -100 }} animate={{ x: 0, transition: { duration: 1 } }}>
              <div className='mt-1 me-2'>
                <AiOutlineArrowRight width={500} />
              </div>
              Result-oriented digital marketing solutions
            </motion.span>
            <motion.span className='d-flex flex-row text-white py-2' initial={{ x: -100 }} animate={{ x: 0, transition: { duration: 1 } }}>
              <div className='mt-1 me-2'>
                <AiOutlineArrowRight width={500} />
              </div>
              Exceptional traffic improvement
            </motion.span>
            <motion.span className='d-flex flex-row text-white py-2' initial={{ x: -100 }} animate={{ x: 0, transition: { duration: 1 } }}>
              <div className='mt-1 me-2'>
                <AiOutlineArrowRight width={500} />
              </div>
              Positive ROI
            </motion.span>
            <motion.span className='d-flex flex-row text-white py-2' initial={{ x: -100 }} animate={{ x: 0, transition: { duration: 1 } }}>
              <div className='mt-1 me-2'>
                <AiOutlineArrowRight width={500} />
              </div>
              High conversion rates
            </motion.span>
            <motion.span className='d-flex flex-row text-white pt-2 pb-4' initial={{ x: -100 }} animate={{ x: 0, transition: { duration: 1 } }}>
              <div className='mt-1 me-2'>
                <AiOutlineArrowRight width={500} />
              </div>
              Excellent market presence
            </motion.span>
          </div>
          <div className="flex justify-center">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 1 } }}
              whileHover="hover" // Apply hover animation
              id={styles.bannerbtn1}
              className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Get Started
            </motion.button>
             <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 1 } }}
            whileHover="hover" // Apply hover animation
            id={styles.bannerbtn2}
            className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            Live Chat
          </motion.button>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 1 } }}
            className="flex gap-5 mt-4 ms-2 p-4"
          >
            <a href="#">
              <img src="/images/bannericon1.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/bannericon2.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/bannericon3.png" alt="" />
            </a>
          </motion.div>
        </motion.div>
        <video
          autoPlay
          loop
          muted
          className={styles.videoBackground}
        >
          <source src="/images/amimationVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Banner;
