import React from 'react'
import styles from "../../app/design.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AppHeading from "../../reusable/AppHeading";
function Design() {
  return (
   <section id={styles.designbgimg}>
     <Container className='overflow-hidden pb-16 pt-5'>
       <p id={styles.designpara} className='text-center'
        style={{
          lineHeight: "58px",
          color: "#191970",
          fontFamily: "Saira",
          fontSize: "2.5rem",
          fontStyle: "normal",
          fontWeight: 800,
        }}
      >
        Tools & Technologies <br className="hidden lg:inline-block"/> Our Software Developers Use
      </p>
       <p id={styles.designpara2} className='text-center'
         style={{
          color: "#FFFFFF",
          fontFamily: "Saira",
          fontWeight: "400",
          fontSize: "1.25rem",
          fontStyle: "bold",
        }}
      >
        Digit Media Designs has grown into an international contestant in software engineering with wide-ranging  <br className="hidden lg:inline-block"/> expertise in all the areas needed for reliable software development.
      </p>
    <Row className='flex justify-center'>
    <Col id={styles.designbg} className='col-lg-6 col-12 mt-1 lg:mx-0.5 lg:mb-1 lg:pb-16'
         style={{
          width: "36rem",
        }}>
         <div className="flex py-3"><img className='' src="/images/designicon1.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>LANGUAGES</h3></div>
         <ul className='flex gap-2 flex-wrap -ml-6 lg:mr-20'>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>JAVA</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>C#</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>C/C++</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Objective C</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Python</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Groovy</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Swift</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Kotlin</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>PHP</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Rust</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Scala</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Java Script</li>
         </ul>
        </Col>
        <Col id={styles.designbg} className='col-lg-6 col-12 mt-1 lg:mx-0.5 lg:mb-1 '
         style={{
          width: "36rem",
        }}>
        <div className="flex py-3"><img className='' src="/images/designicon1.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>FRAMEWORKS</h3></div>
         <ul className='flex gap-2 flex-wrap -ml-6 lg:mr-16'>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>JDBC / JPA</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>JMS</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Hibernate</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>.NET</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>EJB</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Apache Camel</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Nodejs</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Firebase</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>LDAP / Active Directory</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Next Js</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>FLUTTER</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Reactive (Akka, RxJava, Reactor)</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Spring Boot</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>React Native</li>
         </ul>
        </Col>
    </Row>
    <Row className='flex justify-center'>
    <Col id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
        style={{
          width: "16.9rem",
        }}>
        <div className="flex py-3"><img className='' src="/images/designicon3.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>MOBILE</h3></div>
         <ul className='flex gap-2 flex-wrap -ml-6'>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>iOS</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Android</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>HTML5</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>React</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Xamarin</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>JavaScript</li>
         </ul>
        </Col>
        <Col id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
        style={{
          width: "20.9rem",
        }}>
        <div className="flex py-3"><img className='' src="/images/designicon4.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>WEB</h3></div>
         <ul className='flex gap-2 flex-wrap -ml-6'>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Vue</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Sass</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Coffee</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Vue Js</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Angular</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>WebGL</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Angular Js</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Laravel</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>PHP</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>React Js</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Next Js</li>
         </ul>
        </Col>
        <Col id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
        style={{
          width: "15.9rem",
        }}>
        <div className="flex py-3"><img className='' src="/images/designicon5.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>ORM</h3></div>
         <ul className='flex gap-2 flex-wrap -ml-6'>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Google Alerts</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Hootsuite</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Brandwatch</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Mention</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Reputation</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Yext</li>
         </ul>
        </Col>
        <Col id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
        style={{
          width: "17.9rem",
        }}>
        <div className="flex py-3"><img className='' src="/images/designicon6.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>SMM</h3></div>
         <ul className='flex gap-2 flex-wrap -ml-6'>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Hootesuite</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Bitly</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Canva</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Facebook Creator Suite</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>TweetDeck</li>
          <li id={styles.designli} className='whitespace-nowrap px-2 py-1'>Social Pilot</li>
         </ul>
        </Col>
    </Row>
    </Container>
   </section>
  )
}

export default Design
