import React from "react";
import styles from "../../app/marque.module.css";
import { motion } from "framer-motion";

function Marque() {
  const slideVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  return (
    <section id={styles.marquebg} className="overflow-hidden">
      <div className="container mx-auto flex px-3 py-16 flex-lg-row flex-col items-center">
        <motion.div
          variants={slideVariants}
          initial="hidden"
          whileInView="visible"
          className="col-12 col-lg-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ms-lg-5 text-center text-md-start text-lg-start">
          <h4 id={styles.marqueh4}>
            Satisfied Clients <br className="hidden lg:inline-block" /> Our
            Biggest <br className="hidden lg:inline-block" /> Inspiration
          </h4>
          <p id={styles.marquepara} className="mb-8 leading-relaxed text-left">
            We value our customers by adhering to their feedback positively.{" "}
            <br className="hidden lg:inline-block" /> Growth is a never-ending
            process that results in more{" "}
            <br className="hidden lg:inline-block" /> productivity and revenues.
          </p>
          <div className="flex justify-center">
            <button id={styles.marquebtn} className="whitespace-nowrap">
              See More Reviews
            </button>
            <button id={styles.marquebtn1} className="whitespace-nowrap">
              Live Chat
            </button>
          </div>
        </motion.div>
        <div className="col-12 col-lg-6 flex items-center flex-col mt-4">

          <marquee behavior="" direction="up">
            <div className="flex flex-col items-center justify-center md:flex-row my-3 py-3 bg-white">
              <div className="sm:w-32 sm:h-32 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <img
                  className="w-24 md:w-44 lg:w-72 relative lg:-left-16 -z-0"
                  src="/images/marqueicon.png"
                  alt=""
                />
              </div>
              <div id={styles.boxContainer} className="flex-grow mt-6 sm:mt-0 text-center text-md-start px-2">
                <hr id={styles.hrline} />
                <h5
                  id={styles.marqueh5}
                  className="text-gray-900 text-lg title-font font-medium mb-2"
                >
                  Ian Jackson
                </h5>
                <p
                  id={styles.marqueparascrol}
                  className="leading-relaxed text-base"
                >
                  It was a pleasure working with Digit Media Designs. Their
                  phenomenal services helped our website acquire the traffic
                  rate we were anticipating. I recommend them to all.
                </p>
                <hr id={styles.hrline} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row my-3 py-3 bg-white">
              <div className="sm:w-32 sm:h-32 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <img
                  className="w-24 md:w-44 lg:w-72 relative lg:-left-16 -z-0"
                  src="/images/marqueicon.png"
                  alt=""
                />
              </div>
              <div id={styles.boxContainer} className="flex-grow mt-6 sm:mt-0 text-center text-md-start px-2">
                <hr id={styles.hrline} />
                <h5
                  id={styles.marqueh5}
                  className="text-gray-900 text-lg title-font font-medium mb-2"
                >
                  Ian Jackson
                </h5>
                <p
                  id={styles.marqueparascrol}
                  className="leading-relaxed text-base"
                >
                  It was a pleasure working with Digit Media Designs. Their
                  phenomenal services helped our website acquire the traffic
                  rate we were anticipating. I recommend them to all.
                </p>
                <hr id={styles.hrline} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row my-3 py-3 bg-white">
              <div className="sm:w-32 sm:h-32 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <img
                  className="w-24 md:w-44 lg:w-72 relative lg:-left-16 -z-0"
                  src="/images/marqueicon.png"
                  alt=""
                />
              </div>
              <div id={styles.boxContainer} className="flex-grow mt-6 sm:mt-0 text-center text-md-start px-2">
                <hr id={styles.hrline} />
                <h5
                  id={styles.marqueh5}
                  className="text-gray-900 text-lg title-font font-medium mb-2"
                >
                  Ian Jackson
                </h5>
                <p
                  id={styles.marqueparascrol}
                  className="leading-relaxed text-base"
                >
                  It was a pleasure working with Digit Media Designs. Their
                  phenomenal services helped our website acquire the traffic
                  rate we were anticipating. I recommend them to all.
                </p>
                <hr id={styles.hrline} />
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </section >
  );
}

export default Marque;