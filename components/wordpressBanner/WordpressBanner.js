import React from 'react';
import AppBanner from '@/reusable/AppBanner';
import styles from "../../app/loadingComp.module.css"
import { Col, Row } from 'react-bootstrap';

function WordpressBanner() {
    return (
        <>
            <AppBanner
                YellowHeading="Grow Your Brand
            With Our Wordpress
            Services"
                paragraph="Our WordPress Development Agency is one of the best in the
            business; get a customized website designed in no time. We
            provide cost-effective solutions for all your business
            requirements."
                backgroundImg="/images/loadingComponentBg.png"
                sideImage="/images/wordpressBanner.png"
            />
            <div id={styles.loadingCompBg}>
                <div className="container w-75 py-5 text-white">
                    <Row>
                        <Col lg={6} className="text-end mt-5">
                            <img src="/images/side-img-new-sec.png" id={styles.loadingCompImg} alt="" />
                        </Col>
                        <Col lg={6}>
                            <h1 className={styles.headingOne}>WordPress As A
                                Foundation
                                To Your Business
                                Identity</h1>
                            <p className={styles.para}>Hire our experts and get your website to generate profits. With our in-depth
                                knowledge of WordPress and its working process, get yourself acknowledged
                                on the market. Digit Media Designs is a top WordPress development company
                                that ensures high credibility and recognition.</p>
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
    )
}

export default WordpressBanner;
