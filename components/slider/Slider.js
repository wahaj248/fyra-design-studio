import AppHeading from '@/reusable/AppHeading';
import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion } from "framer-motion";

function Slider() {
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
  const divTop = {
    hidden: { opacity: 0, y: -350, },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hover: {
      scale: 1,
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
  let img1 = '/images/slider1.jpg';
  let img2 = '/images/slider2.jpg';
  let img3 = '/images/slider3.jpg';
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(1);
  const centerDivRef = useRef(null);
  const cornerDivRef = useRef(null);
  const intervalRef = useRef();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const centerDiv = centerDivRef.current;
    const cornerDiv = cornerDivRef.current;

    const handleHover = () => {
      intervalRef.current = setInterval(() => {
        if (centerDiv.scrollTop < centerDiv.scrollHeight - centerDiv.clientHeight) {
          centerDiv.scrollBy({ top: 3, behavior: 'smooth' }); // Increased scroll speed
        }
      }, 55); // Reduced the interval for faster scroll
    };

    const handleMouseLeave = () => {
      clearInterval(intervalRef.current);
      centerDiv.scrollTo({ top: 30, behavior: 'smooth' });
    };

    centerDiv.addEventListener('mouseenter', handleHover);
    centerDiv.addEventListener('mouseleave', handleMouseLeave);
    centerDiv.addEventListener('wheel', (e) => e.preventDefault(), { passive: false }); // Disable manual scroll
    cornerDiv.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
    return () => {
      centerDiv.removeEventListener('mouseenter', handleHover);
      centerDiv.removeEventListener('mouseleave', handleMouseLeave);
      centerDiv.removeEventListener('wheel', (e) => e.preventDefault(), { passive: false });
      cornerDiv.removeEventListener('wheel', (e) => e.preventDefault(), { passive: false });
    };
  }, []);


  return (
    <div id='sliderBg'>
      <div className='pt-5 pb-3'>
        <AppHeading
          text="Our Services At A Glance"
          para="Digit Media Designs is a hub of skilled digital marketers and web whizzes, delivering premium solutions at every turn. Our digital marketing services assist your brand in acquiring an unparalleled position in the market."
        />
      </div>
      <Container>
        <Row className="justify-content-center align-items-center slider-row position-relative">
          <Col md={4} className="slider-item d-none d-md-block" ref={cornerDivRef}>
            <img className='w-100' src={images[(current - 1 + images.length) % images.length]} alt="Left Image" />
          </Col>
          <Col md={4} xs={12} className="slider-item center px-" ref={centerDivRef}>
            <div className="slider-controls">
              <motion.img
                variants={divTop}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className='w-100'
                src={images[current]}
                alt="Center Image" />
            </div>
          </Col>
          <Col md={4} className="slider-item d-none d-md-block" ref={cornerDivRef}>
            <img className='w-100' src={images[(current + 1 + images.length) % images.length]} alt="Right Image" />
          </Col>
          <FaArrowLeft onClick={prevSlide} className="slider-control left" />
          <FaArrowRight onClick={nextSlide} className="slider-control right" />
        </Row>
      </Container>
      <motion.h1
        variants={fadeInVariant}
        initial="hidden"
        whileHover="hover"
        whileInView="visible"
        className='portfolio'
      >PORTFOLIO</motion.h1>
      {/* <div className='pt-4'>
        <AppHeading
          text="All Website Designs Come with Complimentary Features"
          para="We create designs that help your website stand out from the crowd. Get your website from us and avail complimentary features today."
        />
      </div> */}
    </div>
  );
}

export default Slider;
