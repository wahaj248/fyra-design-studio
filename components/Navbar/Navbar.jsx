
// @client

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../app/navbar.module.css'





const navbar = () => {
    
  
  return (
    <Navbar expand="lg" id={styles.navbg} className='overflow-hidden bg-dark'>
    <Container fluid>
      <Navbar.Brand id={styles.navlink} href="#"><img id={styles.navlogo} className='w-100 ms-2' src="/images/navlogo.png" alt="" /></Navbar.Brand>
      <Navbar.Toggle className=' bg-white' aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto me-5 my-2 py-lg-3 my-lg-0 text-center"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavDropdown className={styles.navli}  title="WEB DESIGN" id="navbarScrollingDropdown">
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action3">Ecommerce Development</NavDropdown.Item>
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action4">
              Wordpress Development
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className={styles.navli} title="WEB APPLICATION DEVELOPMENT" id="navbarScrollingDropdown">
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action3">Mobile App Development</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className={styles.navli} title="ANIMATION" id="navbarScrollingDropdown">
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action3">Video Animation</NavDropdown.Item>
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action4">
              Logo Animation
            </NavDropdown.Item>
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action5">
              Logo Designs
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className={styles.navli} title="DIGITAL MARKETING" id="navbarScrollingDropdown">
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action3">SMM</NavDropdown.Item>
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action4">
              ORM
            </NavDropdown.Item>
            <NavDropdown.Item id={styles.navul} className='bg-dark text-white text-center' href="#action5">
              branding
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link id={styles.navul}  href="#action1">PACKAGES</Nav.Link>
          <Nav.Link id={styles.navul}  href="#action1">PORTFOLIO</Nav.Link>
        </Nav>
        <div className="flex gap-3 justify-center items-center my-4 my-lg-0">
        <Button className='bg-white text-black rounded whitespace-nowrap'>Get a Quote</Button>{' '}
        <Button className='bg-primary rounded whitespace-nowrap'>Live Chat</Button>{' '}
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default navbar
