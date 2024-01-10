import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppHeading from "./AppHeading";
import styles from "../app/AppTabs.module.css"

function AppTabs({ tabBackground, heading, paragraph, tabsContent, tab1, tab2, tab3, tab4, tab5 }) {

    const [activeTab, setActiveTab] = useState(tabsContent[0]);

    const handleTabClick = (tabId) => {
        if (tabId === activeTab) {
            return;
        }
        setActiveTab(tabId);
    };
    return (
        <div style={{
            backgroundImage: `url(${tabBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%'
        }}>
            <section className="pb-5">
                <div className="pt-5">
                    <AppHeading
                        text={heading}
                        para={paragraph}
                    />
                </div>
                {/* Tabs section */}
                <section>
                    <div className="container w-75">
                        <div className="d-flex justify-content-center gap-3 flex-wrap py-3">
                            {tabsContent.map((tab, index) => (
                                <button
                                    key={`tab${index}`}
                                    className={`${styles.customBtnTabs} ${activeTab === tab ? "active" : ""}`}
                                    onClick={() => handleTabClick(tab)}
                                    style={{
                                        backgroundColor: activeTab === tab ? "#245BCF" : "",
                                        color: activeTab === tab ? "#ffffff" : "",
                                        border: activeTab === tab ? "none" : ""
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    {activeTab === tabsContent[0] && (
                        <div className="container w-50 text-white ">
                            <Row className="mt-5 pt-2">
                                <Col lg={6} md={12} sm={12}>
                                    <h1 className={styles.appTabHeading}>{tab1[1]}</h1>
                                    <p className="mt-3" id={styles.appTabPara}>
                                        {tab1[2]}
                                    </p>
                                    <button
                                        id={styles.btn1}
                                        className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        id={styles.btn2}
                                        className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                    >
                                        Live Chat
                                    </button>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className={styles.scrollableImageContainer}>
                                        <img src={tab1[0]} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                    {activeTab === tabsContent[1] && (
                        <div className="container w-50 text-white ">
                            <Row className="mt-5 pt-2">
                                <Col lg={6} md={12} sm={12}>
                                    <h1 className={styles.appTabHeading}>{tab2[1]}</h1>
                                    <p className="mt-3" id={styles.appTabPara}>
                                        {tab2[2]}
                                    </p>
                                    <button
                                        id={styles.btn1}
                                        className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        id={styles.btn2}
                                        className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                    >
                                        Live Chat
                                    </button>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className={styles.scrollableImageContainer}>
                                        <img src={tab2[0]} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                    {activeTab === tabsContent[2] && (
                        <div className="container w-50 text-white ">
                            <Row className="mt-5 pt-2">
                                <Col lg={6} md={12} sm={12}>
                                    <h1 className={styles.appTabHeading}>{tab3[1]}</h1>
                                    <p className="mt-3" id={styles.appTabPara}>
                                        {tab3[2]}
                                    </p>
                                    <button
                                        id={styles.btn1}
                                        className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        id={styles.btn2}
                                        className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                    >
                                        Live Chat
                                    </button>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className={styles.scrollableImageContainer}>
                                        <img src={tab3[0]} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                    {activeTab === tabsContent[3] && (
                        <div className="container w-50 text-white ">
                            <Row className="mt-5 pt-2">
                                <Col lg={6} md={12} sm={12}>
                                    <h1 className={styles.appTabHeading}>{tab4[1]}</h1>
                                    <p className="mt-3" id={styles.appTabPara}>
                                        {tab4[2]}
                                    </p>
                                    <button
                                        id={styles.btn1}
                                        className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        id={styles.btn2}
                                        className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                    >
                                        Live Chat
                                    </button>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className={styles.scrollableImageContainer}>
                                        <img src={tab4[0]} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                    {activeTab === tabsContent[4] && (
                        <div className="container w-50 text-white ">
                            <Row className="mt-5 pt-2">
                                <Col lg={6} md={12} sm={12}>
                                    <h1 className={styles.appTabHeading}>{tab5[1]}</h1>
                                    <p className="mt-3" id={styles.appTabPara}>
                                        {tab5[2]}
                                    </p>
                                    <button
                                        id={styles.btn1}
                                        className="inline-flex whitespace-nowrap border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        id={styles.btn2}
                                        className="ml-4 inline-flex whitespace-nowrap bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                    >
                                        Live Chat
                                    </button>
                                </Col>
                                <Col lg={6} md={12} sm={12}>
                                    <div className={styles.scrollableImageContainer}>
                                        <img src={tab5[0]} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                </section>
            </section>
        </div>
    );
}

export default AppTabs;
