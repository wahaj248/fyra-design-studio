import React from 'react'
import styles from '../../app/contactform.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Contactform() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        textArea: '',
        radioOption: 'option1', // Default radio option
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
      };
  return (
     <section id={styles.contactbg} className='overflow-hidden'>
    <Container className='py-20'>
        <Row>
         <Col className='flex justify-center' md={12} lg={5}>
            <img className='w-72' src="/images/contactphone.png" alt="" />
         </Col>
         <Col md={12} lg={7} className='mt-5'>
            <h4 id={styles.contacth4} className='text-center'> Ready to Prosper?</h4>
            <p id={styles.contactpara}>Contact our team now and discuss your project.</p>
         <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <div>
        <input
        id={styles.nameemailinput}
        placeholder='Full Name'
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
          <input
          id={styles.nameemailinput}
        placeholder='Email'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <input
        id={styles.phoneinput}
        placeholder='Phone Number'
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <textarea
        placeholder='Message...'
        id={styles.phoneinput}
          name="textArea"
          value={formData.textArea}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label id={styles.checkboxinput}>
          <input
            type="checkbox"
            name="radioOption"
            value="option1"
            checked={formData.radioOption === 'option1'}
            onChange={handleInputChange}
          /> I have read & fully understood and agreed to the Terms of Use <br className="hidden lg:inline-block"/> and the Privacy Policy.
        </label>
        <br className="hidden lg:inline-block"/>
        <label  id={styles.checkboxinput}>
          <input
            type="checkbox"
            name="radioOption"
            value="option2"
            checked={formData.radioOption === 'option2'}
            onChange={handleInputChange}
          /> Please send me a copy of them.
        </label>
      </div>

      <button id={styles.submitbtn} className='whitespace-nowrap self-center lg:self-start' type="submit">Submit Request</button>
    </form>
         </Col>
        </Row>
    </Container>
</section>

  )
}

export default Contactform
