import React from 'react'
import styles from '../../app/header.module.css'
import { BiSolidPhone } from 'react-icons/Bi';
import { GrMail } from 'react-icons/Gr';
import { ImFacebook } from 'react-icons/Im';
import { BsInstagram } from 'react-icons/Bs';
import { BiLogoLinkedin } from 'react-icons/Bi';

function Header() {
  return (
    <div id={styles.headertop} className='container-fluid py-3 overflow-x-hidden'>
     <div className="row">
     <div className="d-flex justify-around items-center">
        <div className="logo lg:-ms-16 xl:-ms-16">
            <img className='w-100' src='/images/navlogo.png' alt="" />
        </div>
        <div className="header">
            <ul className='flex gap-4 mt-3 items-center whitespace-nowrap'>
                <li><a id={styles.ul} className='text-decoration-none' href="#">For Quick Inquiries</a></li>
                <li><a id={styles.ul} className='flex text-decoration-none' href="#"><BiSolidPhone className='text-sm me-3 mt-0.5 text-blue-600'/>800-898-8011</a></li>
                <li><a id={styles.ul} className='flex text-decoration-none' href="#"><GrMail className='text-sm me-3 mt-0.5 text-blue-600'/>sales@digitmediadesigns.com</a></li>
            </ul>
        </div>
        <div className="icon flex gap-7 px-4">
            <ImFacebook className='text-xl' id={styles.icon}/><BsInstagram className='text-xl' id={styles.icon}/><BiLogoLinkedin className='text-xl' id={styles.icon}/>
            </div>
      </div>
     </div>
    </div>
  )
}

export default Header
 