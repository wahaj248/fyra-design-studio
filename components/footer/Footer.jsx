import React from 'react'
import styles from '../../app/footer.module.css'
import { ImFacebook } from 'react-icons/Im';
import { BsInstagram } from 'react-icons/Bs';
import { BiLogoLinkedin } from 'react-icons/Bi';


function Footer() {
  return (
    <footer id={styles.footerbg} className="overflow-hidden">
    <div className="container px-40 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-left md:text-left md:mt-0 mt-10 ms-4">
      <h4 id={styles.footerh4} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Details</h4>
          <nav className="list-none text-left mb-10">
            <li>
              <a id={styles.footerlinks} className="no-underline">Phone: 800-898-8011 Email:</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">contact@fyradesignstudio.com</a>
            </li>
          </nav>
          <div className="flex gap-4 text-white pr-10 md:pr-0 lg:pr-0">
            <ImFacebook className='text-2xl lg:text-3xl'/><BiLogoLinkedin className='text-2xl lg:text-3xl'/><BsInstagram className='text-2xl lg:text-3xl'/><img className='w-8 lg:w-10' src="/images/footericonstar.png" alt="" /><img className='w-8 lg:w-10' src="/images/footericonb.png" alt="" />
          </div>
          <div className="mt-4">
          <img className='w-100 pr-10 md:pr-0 lg:pr-0' src="/images/footerpaymenticon.png" alt="" />
          </div>
      </div>
      <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
          <h4 id={styles.footerh4} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Industires</h4>
          <nav className="list-none text-left mb-10">
            <li>
              <a id={styles.footerlinks} className="no-underline">Accounting</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Church</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Dentist</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Electricain</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Law</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Real Estate</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
          {/* <h4 id={styles.footerh4} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h4> */}
          <nav className="list-none mb-10 text-left lg:mt-12">
            <li>
              <a id={styles.footerlinks} className="no-underline">Architect</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Restaurent</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Docter</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Wedding</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Plumber</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
          <h4 id={styles.footerh4} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Our Services</h4>
          <nav className="list-none mb-10 text-left">
            <li>
              <a id={styles.footerlinks} className="no-underline">Logo Design</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Web Design</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Video Animation</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Content Writing</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Corporate Profile</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Ecommerce Development</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
          {/* <h4 id={styles.footerh4} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h4> */}
          <nav className="list-none text-left mb-10 lg:mt-12">
            <li>
              <a id={styles.footerlinks} className="no-underline">Our Packages</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Our Portfolio</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Combo Package</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Contact Us</a>
            </li>
            <li>
              <a id={styles.footerlinks} className="no-underline">Blog</a>
            </li>
          </nav>
           
        </div>
      </div>
    </div>
    <div id={styles.footerbg}>
      <div className="container py-4 flex justify-evenly items-center flex-wrap flex-col sm:flex-row overflow-hidden">
        <p id={styles.footerallright} className="text-center whitespace-nowrap">Copyright © 2023 - All Rights Reserved.
        </p>
        <nav className="list-none flex gap-6 text-center">
            <li>
              <a id={styles.footerallright} className="no-underline whitespace-nowrap"> | &nbsp; &nbsp; &nbsp;Term of Use</a>
            </li>
            <li>
              <a id={styles.footerallright} className="no-underline whitespace-nowrap"> |  &nbsp; &nbsp; &nbsp;Privacy Policy</a>
            </li>
            <li>
              <a id={styles.footerallright} className="no-underline whitespace-nowrap"> | &nbsp; &nbsp; &nbsp;Return Policy</a>
            </li>
          </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer
