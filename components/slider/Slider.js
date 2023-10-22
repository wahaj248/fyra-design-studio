import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import styles from '../../app/slider.module.css'
import img1 from '../../public/images/slider1.jpg';
import img2 from '../../public/images/slider1.jpg';
import img3 from '../../public/images/slider1.jpg';

function Slider() {
//   let img1 = '../../public/images/slider1.jpg';
// let img2 = '../../public/images/slider1.jpg';
// let img3 = '../../public/images/slider1.jpg';
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
        if(centerDiv.scrollTop < centerDiv.scrollHeight - centerDiv.clientHeight) {
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
    cornerDiv.addEventListener('wheel' , (e)=> e.preventDefault(),{passive: false});
    return () => {
      centerDiv.removeEventListener('mouseenter', handleHover);
      centerDiv.removeEventListener('mouseleave', handleMouseLeave);
      centerDiv.removeEventListener('wheel', (e) => e.preventDefault(), { passive: false });
      cornerDiv.removeEventListener('wheel' , (e)=> e.preventDefault(),{passive: false});
    };
  }, []);


  return (
    <Container fluid>
    <Row className="justify-content-center align-items-center slider-row position-relative">
      <Col md={4} className="slider-item d-none d-md-block" ref={cornerDivRef}>
        <img className='w-100' src={images[(current - 1 + images.length) % images.length]} alt="Left Image" />
      </Col>
      <Col md={4} xs={12} className="slider-item center px-" ref={centerDivRef}>
        <div className="slider-controls">
          <img className='w-100' src={images[current]} alt="Center Image" />
        </div>
      </Col>
      <Col md={4} className="slider-item d-none d-md-block" ref={cornerDivRef}>
      </Col>
      <FaArrowLeft onClick={prevSlide} className="slider-control left" />
      <FaArrowRight onClick={nextSlide} className="slider-control right" />
    </Row>
  </Container>
  );
}

export default Slider;
