import React from 'react'
import styles from "../../app/dottedslider.module.css";
import Card from 'react-bootstrap/Card';

function Dottedslider() {
  return (
    <section id={styles.dottedsliderbg} className="overflow-hidden">
    <div className="container mx-auto flex px-3 py-16 flex-lg-row flex-col items-center">
      <div className="col-12 col-lg-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ms-lg-5 text-center text-md-start text-lg-start">
        <h4 id={styles.dottedsliderh4}>
        USA’s Best Digital Marketing Agency <br className="hidden lg:inline-block" />
At Your Service
        </h4>

        <p id={styles.dottedslidertext} className="mt-5 leading-relaxed text-left">
        We Are the Ultimate Growth  <br className="hidden lg:inline-block" />
        Accelerators
        </p>
        <p id={styles.dottedsliderpara} className="leading-relaxed text-left">
        Your brand’s progress commences with our digital marketing <br className="hidden lg:inline-block" /> services. With smart and proficient digital marketers, we provide <br className="hidden lg:inline-block" /> solutions based on the client’s requirements. Our research and <br className="hidden lg:inline-block" />analysis department provides a distinctive edge over the <br className="hidden lg:inline-block" /> competition.
        </p>
        <div className="flex justify-center">
          <button id={styles.dottedsliderbtn} className="whitespace-nowrap">
            Get Started
          </button>
          <button id={styles.dottedsliderbtn1} className="whitespace-nowrap">
            Live Chat
          </button>
        </div>
      </div>
      <div id={styles.dotted} className="col-12 col-lg-7 flex justify-center gap-3">
      
      <Card className='bg-primary' style={{ width: '17rem', borderRadius: "10px" }}>
      <Card.Body>
        <img src="/images/dottedicon2.png" alt="" />
        <Card.Title className='mt-4' id={styles.dottedh3}>SMM</Card.Title>
        <Card.Text className='mt-2' id={styles.dottedpara}>
        Creative, Content, Customers! Our high- end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='bg-primary' style={{ width: '17rem', borderRadius: "10px" }}>
      <Card.Body>
        <img src="/images/dottedicon2.png" alt="" />
        <Card.Title className='mt-4' id={styles.dottedh3}>SMM</Card.Title>
        <Card.Text className='mt-2' id={styles.dottedpara}>
        Creative, Content, Customers! Our high- end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.
        </Card.Text>
      </Card.Body>
    </Card>
          
      </div>
    </div>
  </section>
  )
}

export default Dottedslider
