import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <Row className='footer my-5 p-5 bg-success text-light textDecoration:none '>
      <Col className='mt-3 mb-4' sm={12} md={6} lg={3} >
        <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
      </Col>
      <Col className=' mt-3 mb-4' sm={12} md={6} lg={3}  >
        <h3>About Us</h3>
        <br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Our Heritage</a>
        <br /> <br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Coffeehouse</a>
        <br /> <br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Our Company</a>
      </Col>
      <Col className=' mt-3 mb-4' sm={12} md={6} lg={3} >
        <h3>Responsibility</h3>
        <br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Diversity</a>
        <br /><br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Community</a>
        <br /><br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Ethical Sourcing</a>
        <br /><br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Environmental Stewardship</a>
        <br /><br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>Learn More</a>
      </Col>
      <Col className=' mt-3 mb-4  justify-content-between mt-3' sm={12} md={6} lg={3} >
        <h3>Contact</h3>
        <br />
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-solid fa-phone'></i> Phone</a>
              <br /><br />
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-brands fa-instagram'></i> Instagram</a>
              <br /><br />
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'>
              <i className='fa-brands fa-facebook'></i> Fcacebook </a>
        
      </Col>
      <hr />
      <p className='text-center'>© 2024 Starbucks Coffee Company. All rights reserved.</p>
    </Row>
    </>
  )
}

export default Footer
