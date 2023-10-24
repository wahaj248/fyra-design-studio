import React from "react";
import { Container } from "react-bootstrap";

function AppHeading({ text, para}) {
  return (
    <div className="text-center">
      <h2
        style={{
          color: "#FFCD24",
          fontFamily: "Saira",
          fontSize: "2.5rem",
          fontStyle: "normal",
          fontWeight: 800,
        }}
      >
        {text}
      </h2>
      <Container className="w-50" id="appHeadingContainer">
        <p
          style={{
            color: "#FFFFFF",
            fontFamily: "Saira",
            fontWeight: "400",
            fontSize: "0.8rem",
            fontStyle: "normal",
          }}
        >
          {para}
        </p>
      </Container>
    </div>
  );
}

export default AppHeading;
