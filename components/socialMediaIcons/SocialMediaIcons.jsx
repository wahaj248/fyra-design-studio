import React from "react";
import styles from "../../app/socialMediaIcons.module.css"
import AppHeading from "@/reusable/AppHeading";
import { motion, useAnimation } from "framer-motion"

export default function SocialMediaIcons() {
  const controls = useAnimation();

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
  const rotateAnimation = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: [2, -2, 2], transition: { duration: 1.5 } },
    hover: {
      scale: 0.9,
      rotate: 0,
      transition: {
        duration: 0.7,
      },
    },
    initial: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  const animateBackground = async () => {
    while (true) {
      await controls.start('visible');
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  };


  React.useEffect(() => {
    animateBackground();
  }, []);

  return (
    <>
      <div id={styles.socialMediaIconsBg} className="py-3">
        <div className="container text-white w-75 py-3">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileHover="hover"
            whileInView="visible"
            className={styles.box}>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <img src="/images/facebookIcon.png" alt="" />
              <div className="ps-4 "><h1 className={styles.mainhead}>Facebook</h1>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima ullam nesciunt voluptate? Architecto rerum dignissimos non? Impedit laborum, fuga aspernatur distinctio quisquam, vel ratione sed accusamus esse quas amet.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileHover="hover"
            whileInView="visible"
            className={styles.box}>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <img src="/images/instagramIcon.png" alt="" />
              <div className="ps-4 "><h1 className={styles.mainhead}>Instagram</h1>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima ullam nesciunt voluptate? Architecto rerum dignissimos non? Impedit laborum, fuga aspernatur distinctio quisquam, vel ratione sed accusamus esse quas amet.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileHover="hover"
            whileInView="visible"
            className={styles.box}>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <img src="/images/youtubeIcon.png" alt="" />
              <div className="ps-4 "><h1 className={styles.mainhead}>Youtube</h1>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima ullam nesciunt voluptate? Architecto rerum dignissimos non? Impedit laborum, fuga aspernatur distinctio quisquam, vel ratione sed accusamus esse quas amet.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileHover="hover"
            whileInView="visible"
            className={styles.box}>
            <div>
              <div className="row justify-content-evenly align-items-center">
                <div className="col-lg-7 col-md-7 col-12 mx-auto">
                  <h2 className={styles.headingTwo}>A Social Media Marketing
                    Agency That Helps You
                    Grow Boundless</h2>
                  <p className={styles.paragraph}>Hire us and get social media management services at affordable costs. Our SMM services
                    are synchronized and adaptable; we proceed ahead only after proper research and data
                    collection. We guarantee an attractive social media presence for your brand or business.
                    Moreover, you can select your platform, and we will deliver the results. Increase the web
                    traffic to your website and enhance your productivity by hiring our professional
                    marketers.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div>
                    <img src="/images/socialMobile.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="py-5">
          <AppHeading text="Perfect Media With A Perfect Partner, Digit
Media Designs SMM Services!" para="We help your business stabilize by providing customer-focused and business-driven plans, making your virtual presence a defining success." />
        </div>
        <section>
          <div className="container w-75 pb-4 pt-2">
            <div className="container1">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <motion.div
                    animate={controls}
                    variants={rotateAnimation}
                    initial="hidden"
                    whileHover="hover"
                    whileInView="visible"
                    className="box"
                  >
                    <div className="d-flex justify-content-center mb-3">
                      <img src="/images/seo-ser-slid-icon1.png.png" />
                    </div>
                    <h2 className="headingBox mb-3">
                      Brand Identity
                    </h2>
                    <p className="paraBox mb-5 pb-5">
                      We help you shape the perfect
                      brand personality that
                      attracts and inspire your
                      audience.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <motion.div
                    animate={controls}
                    variants={rotateAnimation}
                    initial="hidden"
                    whileHover="hover"
                    whileInView="visible"
                    className="box"
                  >
                    <div className="d-flex justify-content-center mb-3">
                      <img src="/images/seo-ser-slid-icon2.png.png" />
                    </div>
                    <h2 className="headingBox mb-3">
                      Brand Voice
                    </h2>
                    <p className="paraBox mb-5 pb-5">
                      Our content channels your
                      brand voice in an impressive
                      way, increasing customer
                      focus and communication.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <motion.div
                    animate={controls}
                    variants={rotateAnimation}
                    initial="hidden"
                    whileHover="hover"
                    whileInView="visible"
                    className="box"
                  >
                    <div className="d-flex justify-content-center mb-3">
                      <img src="/images/seo-ser-slid-icon3.png.png" />
                    </div>
                    <h2 className="headingBox mb-3">
                      Engagement
                    </h2>
                    <p className="paraBox mb-5 pb-5">
                      We employ social media
                      strategies that engage and
                      influence your target
                      audience effectively.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                  <motion.div
                    animate={controls}
                    variants={rotateAnimation}
                    initial="hidden"
                    whileHover="hover"
                    whileInView="visible"
                    className="box"
                  >
                    <div className="d-flex justify-content-center mb-3">
                      <img src="/images/seo-ser-slid-icon4.png.png" />
                    </div>
                    <h2 className="headingBox mb-3">
                      Traffic Rate
                    </h2>
                    <p className="paraBox mb-5 pb-5">
                      Through exciting and
                      customer-based content, your
                      platform received high traffic
                      and qualified leads.
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
                  animate={controls}
                  variants={rotateAnimation}
                  initial="hidden"
                  whileHover="hover"
                  whileInView="visible"
                  className="box"
                >
                  <div className="d-flex justify-content-center mb-3">
                    <img src="/images/seo-ser-slid-icon5.png.png" />
                  </div>
                  <h2 className="headingBox mb-3">
                    Conversion Rate
                  </h2>
                  <p className="paraBox mb-5 pb-5">
                    Attain high conversion rates
                    through persuasive and
                    compelling social media
                    strategies.
                  </p>
                </motion.div>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <motion.div
                  animate={controls}
                  variants={rotateAnimation}
                  initial="hidden"
                  whileHover="hover"
                  whileInView="visible"
                  className="box"
                >
                  <div className="d-flex justify-content-center mb-3">
                    <img src="/images/seo-ser-slid-icon6.png.png" />
                  </div>
                  <h2 className="headingBox mb-3">
                    Branding
                  </h2>
                  <p className="paraBox mb-5 pb-5">
                    Our SMM services are renowned for generating high discoverability and positive branding results.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div >

    </>
  );
}
