import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

function AppHeading({ text, para }) {
  const fadeInVariant = {
    hidden: { opacity: 0, scale: 0.7, },
    visible: { opacity: 1, scale: 1, transition: { duration: 2.5 } },
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
  
  return (
    <div className="text-center">
      <motion.h2
        variants={fadeInVariant}
        initial="hidden"
        whileHover="hover"
        whileInView="visible"
        style={{
          color: "#FFCD24",
          fontFamily: "Saira",
          fontSize: "2.5rem",
          fontStyle: "normal",
          fontWeight: 800,
        }}
      >
        {text}
      </motion.h2>
      <Container className="w-50" id="appHeadingContainer">
        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          whileHover="hover"
          whileInView="visible"
          style={{
            color: "#FFFFFF",
            fontFamily: "Saira",
            fontWeight: "400",
            fontSize: "0.8rem",
            fontStyle: "normal",
          }}
        >
          {para}
        </motion.p>
      </Container>
    </div>
  );
}

export default AppHeading;
