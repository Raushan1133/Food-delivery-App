import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../../assets/about/pizza.jpg'
import Salad from '../../assets/about/salad.webp'
import Bike from '../../assets/about/delevery-image.png'

const DummyData = [
  {
    image:Pizza,
    title:'Original',
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, error.'
  },
  {
    image:Salad,
    title:'Quality food',
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, error.'
  },
  {
    image:Bike,
    title:'Fastest Delivery',
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, error.'
  }
]


const Section2 = () => {
  return (
    <>
      <section className='about_section'>
      <Container>
      <Row>
        <Col lg={{span:8, offset:2}} className='text-center'>
          <h2>The burger tastes better when you eat it with your family</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab dolorem exercitationem quos ullam officia vitae rerum! Adipisci distinctio ipsum qui omnis dolore veritatis recusandae mollitia eius, id commodi quam!</p>
          <Link to='/' className='btn order_now btn-red'>Explore Full Menu</Link>
        </Col>
      </Row>
      </Container>
    </section>

    <section className='about_wrapper'>
    <Container>
       <Row className='justify-content-md-center'>
        {
          DummyData.map((cardData,index)=>(
            <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
            <div className='about_box text-center'>
              <div className='about_icon'>
                <img src={cardData.image} className='img-fluid' alt="icon" />
              </div>
              <h4>{cardData.title}</h4>
              <p>{cardData.paragraph}</p>
            </div>
          </Col>
          ))
        }
       </Row>
    </Container>
    </section>
    </>
  )
}

export default Section2;
