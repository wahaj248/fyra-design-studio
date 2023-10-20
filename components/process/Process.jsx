import React from 'react'
import styles from '../../app/process.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Process() {
  return (
    <Container fluid className='overflow-hidden'>
        <Row className='flex justify-center gap-3'>
        <Card className='col-12 col-md-6 col-lg-3 text-center text-md-start' style={{ width: '15rem'}}>
      <Card.Body>
        <Card.Title id={styles.processh4}>In-Depth Research</Card.Title>
        <Card.Text className='' id={styles.processpara}>
        Research is one of the most
fundamental factors in creating
a strong online presence. The
design and development
process will be complete and
substantiated if the research
        </Card.Text>
        <Card.Link id={styles.processh4} href="#">01</Card.Link>
      </Card.Body>
    </Card>
    <Card className='col-12 col-md-6 col-lg-3 text-center text-md-start' style={{ width: '15rem' }}>
      <Card.Body>
       <img src="/images/processimg1.png" alt="" />
      </Card.Body>
    </Card>
    <Card className='col-12 col-md-6 col-lg-3 text-center text-md-start' style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title id={styles.processh4}>In-Depth Research</Card.Title>
        <Card.Text className='' id={styles.processpara}>
        Research is one of the most
fundamental factors in creating
a strong online presence. The
design and development
process will be complete and
substantiated if the research
        </Card.Text>
        <Card.Link id={styles.processh4} href="#">01</Card.Link>
      </Card.Body>
    </Card>
    <Card className='col-12 col-md-6 col-lg-3 text-center text-md-start' style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title id={styles.processh4}>In-Depth Research</Card.Title>
        <Card.Text className='' id={styles.processpara}>
        Research is one of the most
fundamental factors in creating
a strong online presence. The
design and development
process will be complete and
substantiated if the research
        </Card.Text>
        <Card.Link id={styles.processh4} href="#">01</Card.Link>
      </Card.Body>
    </Card>
        </Row>
    </Container>
  )
}

export default Process
