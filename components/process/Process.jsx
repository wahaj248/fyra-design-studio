import React from "react";
import styles from "../../app/process.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AppHeading from "../../reusable/AppHeading";
import { motion } from "framer-motion"

function Process() {
  const divLeft = {
    hidden: { opacity: 0, x: -250, },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
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
    hidden: { opacity: 0, x: 250, },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hover: {
      scale: 1,
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
  const divTop = {
    hidden: { opacity: 0, y: -250, },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hover: {
      scale: 1,
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
  const divBottom = {
    hidden: { opacity: 0, y: 250, },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hover: {
      scale: 1,
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

  return (
    <Container id={styles.processbg} fluid className="overflow-hidden py-5 ">
      <AppHeading
        text="Working Smarter & Delivering Quicker"
        para="Our matchless digital marketing services help you reach a wider audience with increasing sales and growth rates.
We create fitting digital solutions for your brand and ensure optimal results."
      />
      <Row className="flex justify-center gap-3 my-3">
        <motion.Card
          variants={divLeft}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          style={{
            width: "15rem",
            backgroundColor: "#191970",
            borderRadius: "0px",
          }}
        >
          <Card.Body>
            <Card.Title id={styles.processh4}>In-Depth Research</Card.Title>
            <Card.Text className="" id={styles.processpara}>
              Research is one of the most fundamental factors in creating a
              strong online presence. The design and development process will be
              complete and substantiated if the research
            </Card.Text>
            <Card.Link id={styles.processh4} href="#">
              01
            </Card.Link>
          </Card.Body>
        </motion.Card>
        <motion.Card
          variants={divTop}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          id={styles.cardWithBackground}
        >
          <Card.Body style={{ height: "18rem" }}>
            {/* <img src="/images/processimg1.png" alt="" /> */}
          </Card.Body>
        </motion.Card>
        <motion.Card
          variants={divTop}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          style={{
            width: "15rem",
            backgroundColor: "#191970",
            borderRadius: "0px",
          }}
        >
          <Card.Body>
            <Card.Title id={styles.processh4}>Order Placement</Card.Title>
            <Card.Text className="" id={styles.processpara}>
              Our representative notes your specifications and requirements
              concerning your project to develop a well-managed plan.
            </Card.Text>
            <Card.Link id={styles.processh4} href="#">
              02
            </Card.Link>
          </Card.Body>
        </motion.Card>
        <motion.Card
          variants={divRight}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          id={styles.cardWithBackground2}
        >
          <Card.Body style={{ height: "18rem" }}></Card.Body>
        </motion.Card>
      </Row>
      <Row className="flex justify-center gap-3 my-3 pb-5">
        <motion.Card
          variants={divLeft}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          id={styles.cardWithBackground3}
        >
          <Card.Body style={{ height: "18rem" }}></Card.Body>
        </motion.Card>
        <motion.Card
          variants={divBottom}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          style={{
            width: "15rem",
            backgroundColor: "#B3001B",
            borderRadius: "0px",
          }}
        >
          <Card.Body>
            <Card.Title id={styles.processh4}>Results & Reviews</Card.Title>
            <Card.Text className="" id={styles.processpara}>
              Positive reviews and results are mandatory for a successful online
              business. These factors generate more revenues, leads, and
              reputation, promoting the brand in the long run.
            </Card.Text>
            <Card.Link id={styles.processh4} href="#">
              03
            </Card.Link>
          </Card.Body>
        </motion.Card>
        <motion.Card
          variants={divBottom}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          id={styles.cardWithBackground4}
        >
          <Card.Body style={{ height: "18rem" }}>
            {/* <img src="/images/processimg1.png" alt="" /> */}
          </Card.Body>
        </motion.Card>
        <motion.Card
          variants={divRight}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="col-lg-3 col-md-6 col-12 text-center text-md-start"
          style={{
            width: "15rem",
            backgroundColor: "#B3001B",
            borderRadius: "0px",
          }}
        >
          <Card.Body>
            <Card.Title id={styles.processh4}>Implementation</Card.Title>
            <Card.Text className="" id={styles.processpara}>
              The process needs constant modifications to increase leads and
              engagement and bolster customer satisfaction. Provide your ideas
              to our experts for proper implementation.
            </Card.Text>
            <Card.Link id={styles.processh4} href="#">
              04
            </Card.Link>
          </Card.Body>
        </motion.Card>
      </Row>
    </Container>
  );
}

export default Process;
