import React from 'react'
import styles from "../../app/design.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion"
import Card from "react-bootstrap/Card";
import AppHeading from "../../reusable/AppHeading";

function Design() {
  const skillVariant = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.7,
      },
    },
  };
  const fadeInVariant = {
    hidden: { opacity: 0, scale: 0.7, },
    visible: { opacity: 1, transition: { duration: 2.5 }, scale: 1 },
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

  const divLeft = {
    hidden: { opacity: 0, x: -250, y: -250 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 0.95,
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
  const divRight = {
    hidden: { opacity: 0, x: 250, y: -250 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 0.95,
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
  const divLeftBottom = {
    hidden: { opacity: 0, x: -250, y: 250 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 0.95,
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
  const divRightBottom = {
    hidden: { opacity: 0, x: 250, y: 250 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 0.95,
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
  const controls = useAnimation();

  const animation = {
    initial: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    animate: {
      scale: 0.98,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
  };

  const animateBackground = async () => {
    while (true) {
      await controls.start('animate');
      await controls.start('initial');
    }
  };

  React.useEffect(() => {
    animateBackground();
  }, []);

  return (
    <section id={styles.designbgimg}>
      <motion.div variants={animation}
        animate={controls}
        initial="initial">
        <Container className='overflow-hidden pb-16 pt-5'>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileHover="hover"
            whileInView="visible"
          >
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
              Tools & Technologies <br className="hidden lg:inline-block" /> Our Software Developers Use
            </p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            whileHover="hover"
            initial="hidden"
            whileInView="visible"
          >
            <p id={styles.designpara2} className='text-center'
              style={{
                color: "#FFFFFF",
                fontFamily: "Saira",
                fontWeight: "400",
                fontSize: "1.25rem",
                fontStyle: "bold",
              }}
            >
              Digit Media Designs has grown into an international contestant in software engineering with wide-ranging  <br className="hidden lg:inline-block" /> expertise in all the areas needed for reliable software development.
            </p>
          </motion.div>
          <Row className='flex justify-center'>
            <motion.div
              variants={divLeft}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"

              id={styles.designbg} className='col-lg-6 col-12 mt-1 lg:mx-0.5 lg:mb-1 lg:pb-16'
              style={{
                width: "36rem",
              }}>
              <div className="flex py-3"><img className='' src="/images/designicon1.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>LANGUAGES</h3></div>
              <ul className='flex gap-2 flex-wrap -ml-6 lg:mr-20'>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>JAVA</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>C#</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>C/C++</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Objective C</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Python</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Groovy</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Swift</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Kotlin</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>PHP</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Rust</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Scala</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Java Script</motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={divRight}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"

              id={styles.designbg} className='col-lg-6 col-12 mt-1 lg:mx-0.5 lg:mb-1 '
              style={{
                width: "36rem",
              }}>
              <div className="flex py-3"><img className='' src="/images/designicon1.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>FRAMEWORKS</h3></div>
              <ul className='flex gap-2 flex-wrap -ml-6 lg:mr-16'>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>JDBC / JPA</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>JMS</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Hibernate</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>.NET</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>EJB</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Apache Camel</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Nodejs</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Firebase</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>LDAP / Active Directory</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Next Js</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>FLUTTER</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Reactive (Akka, RxJava, Reactor)</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Spring Boot</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>React Native</motion.li>
              </ul>
            </motion.div>
          </Row>
          <Row className='flex justify-center'>
            <motion.div
              variants={divLeftBottom}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"

              id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
              style={{
                width: "16.9rem",
              }}>
              <div className="flex py-3"><img className='' src="/images/designicon3.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>MOBILE</h3></div>
              <ul className='flex gap-2 flex-wrap -ml-6'>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>iOS</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Android</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>HTML5</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>React</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Xamarin</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>JavaScript</motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={divLeftBottom}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"

              id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
              style={{
                width: "20.9rem",
              }}>
              <div className="flex py-3"><img className='' src="/images/designicon4.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>WEB</h3></div>
              <ul className='flex gap-2 flex-wrap -ml-6'>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Vue</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Sass</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Coffee</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Vue Js</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Angular</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>WebGL</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Angular Js</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Laravel</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>PHP</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>React Js</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Next Js</motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={divRightBottom}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"

              id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
              style={{
                width: "15.9rem",
              }}>
              <div className="flex py-3"><img className='' src="/images/designicon5.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>ORM</h3></div>
              <ul className='flex gap-2 flex-wrap -ml-6'>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Google Alerts</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Hootsuite</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Brandwatch</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Mention</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Reputation</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Yext</motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={divRightBottom}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"

              id={styles.designbg} className='col-lg-3 col-12 mt-1 lg:mx-0.5 pb-28 lg:pb-4'
              style={{
                width: "17.9rem",
              }}>
              <div className="flex py-3"><img className='' src="/images/designicon6.png" alt="" /><h3 id={styles.designh3} className='mt-2.5 ms-2'>SMM</h3></div>
              <ul className='flex gap-2 flex-wrap -ml-6'>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Hootesuite</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Bitly</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Canva</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Facebook Creator Suite</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>TweetDeck</motion.li>
                <motion.li id={styles.designli} whileHover="hover" initial="initial" animate="animate" variants={skillVariant} className='whitespace-nowrap px-2 py-1'>Social Pilot</motion.li>
              </ul>
            </motion.div>
          </Row>
        </Container>
      </motion.div>
    </section>
  )
}

export default Design
