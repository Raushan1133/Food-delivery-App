import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Burger from "../../assets/Banner/burger.webp"
import { Link } from 'react-router-dom'


const Section1 = () => {
  return (
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg={7} className='burger'>
            <div className='position-relative'>
              <img src={Burger} className='burger-img img-fluid' alt="" />
              <div className='price_badge'>
                <div className="badge_text">
                  <h4 className='h4_xs'>Only </h4>
                  <h4 className='h3_lg'>Rs.399/-</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} className='text-center'>
            <div className='hero_text text-center'>
              <h1 className='text-white'>New Burger</h1>
              <h2 className='text-white'>With Tomato</h2>
              <p className='text-white pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim excepturi aspernatur possimus beatae vero dicta fugiat doloremque, harum a sapiente at ullam optio, quisquam, molestiae dolores quidem corrupti eaque. Alias.</p>
            </div>
            <Link to='/' className='btn main-btn'>
              Order Now
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    
  )
}

export default Section1
