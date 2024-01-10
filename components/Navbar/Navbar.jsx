import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../app/navbar.module.css'
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Button } from 'react-bootstrap';


const navbar = () => {
  const logoVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const linkVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const linkVariants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05, // Increase the size on hover
      transition: { duration: 0.3 },
    }
  };


  const buttonVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hover: {
      scale: 1.1, // Increase the size on hover
      transition: { duration: 0.3 },
    }
  };
  return (
    <Navbar expand="lg"
      id={styles.navbg} className='bg-dark' style={{ position: 'sticky', top: 0, zIndex: 3 }}>
      <Container>
        <Navbar.Brand as={Link} id={styles.navlink} href="/">
          <motion.img
            id={styles.navlogo}
            className='w-100 ms-2'
            src="/images/navlogo.png"
            alt=""
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          />
        </Navbar.Brand>A
        <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto me-5 my-2 py-lg-3 my-lg-0 text-center">

            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              key="item1"
            >
              <NavDropdown className={styles.navli} title={
                <span className="text-white text-center opacity-100">WEB DESIGN</span>
              } id="basic-nav-dropdown">
                <motion.div
                  variants={linkVariants2}
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  key="item2"
                >
                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/ecommerce-development">Ecommerce Development</NavDropdown.Item>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}

                >
                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/wordpress-development">
                    Wordpress Development
                  </NavDropdown.Item>
                </motion.div>
              </NavDropdown>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <NavDropdown className={styles.navli} title={
                <span className="text-white text-center opacity-100">WEB APPLICATION DEVELOPMENT</span>
              } id="basic-nav-dropdown">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}

                >
                  <NavDropdown.Item id={styles.navul} className='bg-dark text-center text-white' href="/mobile-application">Mobile App Development</NavDropdown.Item>

                </motion.div>
              </NavDropdown>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              key="item1"
            >
              <NavDropdown className={styles.navli} title={
                <span className="text-white text-center opacity-100">ANIMATION</span>
              } id="basic-nav-dropdown">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}
                >

                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/video-animation">Video Animation</NavDropdown.Item>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}
                >
                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/logo-animation">Logo Animation</NavDropdown.Item>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}
                >
                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/logo-design">Logo Designs</NavDropdown.Item>
                </motion.div>
              </NavDropdown>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              key="item1"
            >
              <NavDropdown className={styles.navli} title={
                <span className="text-white text-center opacity-100">DIGITAL MARKETING</span>
              } id="basic-nav-dropdown">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}
                >
                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/smm-service">SMM</NavDropdown.Item>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}
                >
                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/omr-service">ORM</NavDropdown.Item>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit" // Specify exit animation
                  whileHover="hover"
                  variants={linkVariants2}
                >
                  <NavDropdown.Item as={Link} id={styles.navul} className='bg-dark text-center text-white' href="/branding">Branding</NavDropdown.Item>
                </motion.div>
              </NavDropdown>
            </motion.div>

            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Nav.Link as={Link} id={styles.navul} className='text-white' href="/packages">PACKAGES</Nav.Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Nav.Link as={Link} id={styles.navul} className='text-white' href="/portfolio">PORTFOLIO</Nav.Link>
            </motion.div>
          </Nav>
          <div className="flex gap-3 flex-wrap justify-center">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Button id={styles.navbtn1} className='whitespace-nowrap'>Get a Quote</Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileHover="hover"
              animate="visible"
            >
              <Button id={styles.navbtn2} className='whitespace-nowrap'>Live Chat</Button>
            </motion.div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default navbar