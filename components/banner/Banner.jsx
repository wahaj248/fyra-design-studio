import React from 'react'
import styles from '../../app/banner.module.css'

function Banner() {
  return (
    <section id={styles.bannerbg}>
  <div className="container mx-auto flex px-5 pt-5 md:flex-row flex-col items-center overflow-x-hidden">
    <div className="col-lg-9 col-md-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-lg-start text-md-start text-center">
      <h1 id={styles.bannerh1} className="title-font sm:text-4xl text-3xl">CONSTRUST & 
       TRANSFORM YOUR 
        BRAND IDENTITY
      </h1>
      <div className="para text-start">
      <p id={styles.bannerpara} className=" leading-relaxe">Communicate your brand message with FYRA Design Studio,<br className="hidden lg:inline-block"/>
one of the best firms in digital marketing company. It’s time to<br className="hidden lg:inline-block"/>
skyrocket your business with our bespoke marketing strategies.</p>
      </div>
      <div className="flex justify-center">
        <button id={styles.bannerbtn1} className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
        <button id={styles.bannerbtn2} className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Live Chat</button>
      </div>
      <div className="flex gap-5 mt-4 ms-2 p-4">
        <a href="#"><img src="/images/bannericon1.png" alt="" /></a>
        <a href="#"><img src="/images/bannericon2.png" alt="" /></a>
        <a href="#"><img src="/images/bannericon3.png" alt="" /></a>
        </div>
    </div>
   
  </div>
</section>
  )
}

export default Banner
