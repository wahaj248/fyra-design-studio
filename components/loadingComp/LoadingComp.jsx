import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../app/loadingComp.module.css";

function LoadingComp() {
    return (
        <>
            <div id={styles.loadingCompBg}>
                <div className="container w-75 py-5 text-white">
                    <Row>
                        <Col lg={6} className="text-end mt-5">
                            <img src="/images/side-img-new-sec.png" id={styles.loadingCompImg} alt="" />
                        </Col>
                        <Col lg={6}>
                            <h1 className={styles.headingOne}>Hire Our Expert
                                ECommerce Web
                                Developers</h1>
                            <p className={styles.para}>Does your online store need branding to influence the target market? Or, do
                                you want to generate more awareness? Connect with Digit Media Designs and
                                achieve your objectives. Before accepting your project, our eCommerce web
                                designers discuss, analyze, and measure its viability.</p>
                            <h5 className={styles.smallHeading}>
                                We have 10+ years of experience. We offer
                                custom wordpress solutions and consultation
                                services.
                            </h5>
                            <div class="w-full bg-white rounded-full  dark:bg-gray-700 mt-3">
                                <div class=" font-semibold text-xs font-medium text-dark text-center p-0.5 leading-none rounded-full" id={styles.loadingOne} >89%</div>
                            </div>
                            <h6 className="my-2 uppercase" id={styles.wordPress}>Wordpress solution</h6>
                            <div class="w-full bg-white rounded-full  dark:bg-gray-700 mt-3">
                                <div class=" font-semibold text-xs font-medium text-dark text-center p-0.5 leading-none rounded-full" id={styles.loadingTwo} >92%</div>
                            </div>
                            <h6 className="mt-2 uppercase" id={styles.consultation}>Consultation Advices</h6>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default LoadingComp;
