import React, { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import styles from "../../app/dottedslider.module.css";
import Card from "react-bootstrap/Card";

import { motion } from 'framer-motion';
const DottedSlider = () => {
  const owlOptions = {
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
  };
  const slideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const buttonVariants = {
    hover: {
      scale: 1.1, // Increase the size on hover
      transition: { duration: 0.3 },
    }
  };

  return (
    <>
      <section id={styles.dottedsliderbg} className="overflow-hidden">
        <div className="container mx-auto flex px-3 py-16 flex-lg-row flex-col items-center">
          <div className="col-12 col-lg-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ms-lg-5 text-center text-md-start text-lg-start">
            <motion.h4
              id={styles.dottedsliderh4}
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
            >
              USA’s Best Digital Marketing Agency
              <br className="hidden lg:inline-block" />
              At Your Service
            </motion.h4>
            <motion.p
              id={styles.dottedslidertext}
              className="mt-5 leading-relaxed text-center text-lg-start"
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
            >
              We Are the Ultimate Growth
              <br className="hidden lg:inline-block" />
              Accelerators
            </motion.p>
            <motion.p
              id={styles.dottedsliderpara}
              className="leading-relaxed text-center text-lg-start"
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
            >
              Your brand’s progress commences with our digital marketing
              <br className="hidden lg:inline-block" /> services. With smart and
              proficient digital marketers, we provide
              <br className="hidden lg:inline-block" /> solutions based on the
              client’s requirements. Our research and
              <br className="hidden lg:inline-block" />
              analysis department provides a distinctive edge over the
              <br className="hidden lg:inline-block" /> competition.
            </motion.p>
            <motion.div
              className="flex justify-center"
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.button
                id={styles.dottedsliderbtn}
                className="whitespace-nowrap"
                variants={buttonVariants}
                whileHover="hover"
              >
                Get Started
              </motion.button>
              <motion.button
                id={styles.dottedsliderbtn1}
                className="whitespace-nowrap"
                variants={buttonVariants}
                whileHover="hover"
              >
                Live Chat
              </motion.button>
            </motion.div>
          </div>
          <div
            id={styles.dotted}
            className="col-12 col-lg-8 flex justify-center mt-5 mt-lg-0"
          >
            <OwlCarousel {...owlOptions} className="owl-theme">
              <motion.div
                className="item"
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
              >
                <Row className="flex justify-center lg:justify-between items-center">
                  <Col className="col-lg-3 hidden lg:block">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon2.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          ORM
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                  <Col className="col-lg-3 hidden lg:block">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon2.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          ORM
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                  <Col className="col-lg-3 hidden lg:block">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon3.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          Web Design
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                </Row>
              </motion.div>
              {/* Content for Slide 2 */}
              <motion.div
                className="item"
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
              >
                <Row className="flex justify-center lg:justify-between items-center">
                  <Col className="col-lg-3 hidden lg:block">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon2.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          ORM
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                  <Col className="col-lg-3">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon2.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          ORM
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                  <Col className="col-lg-3 hidden lg:block">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon3.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          Web Design
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                </Row>

              </motion.div>
              {/* Content for Slide 3 */}
              <motion.div
                className="item"
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
              >
                <Row className="flex justify-center lg:justify-between items-center">
                  <Col className="col-lg-3 hidden lg:block">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon2.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          ORM
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                  <Col className="col-lg-3 hidden lg:block">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon2.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          ORM
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                  <Col className="col-lg-3">
                    <Card
                      id={styles.cards}
                      className="bg-primary p-2"
                      style={{ width: "17rem", borderRadius: "10px" }}
                    >
                      <Card.Body>
                        <img
                          className="w-50"
                          src="/images/dottedicon3.png"
                          alt=""
                        />
                        <Card.Title className="mt-4" id={styles.dottedh3}>
                          Web Design
                        </Card.Title>
                        <Card.Text className="mt-2" id={styles.dottedpara}>
                          Creative, Content, Customers! Our high- end digital
                          marketing agency focuses on three Cs to help you grow
                          beyond bounds. With our social media marketing strategies
                          bound to create a thriving environment, we position your
                          brand as an authoritative and trustworthy source.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                </Row>

              </motion.div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default DottedSlider;