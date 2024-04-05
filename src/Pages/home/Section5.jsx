import React from 'react'
import { Col, Container,Row, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PlayStore from '../../assets/shop/googleplay.png';
import IOSstore from '../../assets/shop/appstore.jpg';
import Shop from '../../assets/shop/shop.webp';
import Brand1 from '../../assets/Carousel/brand1.jpg'
import Brand2 from '../../assets/Carousel/brand2.png'
import Brand3 from '../../assets/Carousel/brand3.webp'
import Brand4 from '../../assets/Carousel/brand4.avif'
import Brand5 from '../../assets/Carousel/brand5.avif'
import Brand6 from '../../assets/Carousel/brand6.jpg'
import Brand7 from '../../assets/Carousel/brand7.jpg'
import Brand8 from '../../assets/Carousel/brand8.webp'



const Section5 = () => {
  return (
    <>
    <section className='shop_section'>
        <Container>
            <Row className='align-items-center'>
                
                    <Col className='text-center text-lg-start mb-5 mb-lg-0'>
                        <h4>Download Mobile App And</h4>
                        <h2>Save upto 20%</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt magnam fuga deleniti eaque ex quasi fugit molestias aspernatur? Similique.4</p>
                        <Link to='/'>
                        <img src={PlayStore} alt="IOS" className='img-fluid store me-3'/>
                        </Link>
                        <Link to='/'>
                        <img src={IOSstore} alt="android" className='img-fluid store me-3'/>
                        </Link>
                    </Col>
                <Col lg={6}>
                    <img src={Shop} alt="shop" className='img-fluid e_shop' />
                </Col>
            </Row>
        </Container>
    </section>

    {/* Carousel */}
    <section className='brand_section'>
        <Container>
            <Row>
            <Carousel>
      <Carousel.Item>
        
        <Carousel.Caption>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='brand_img'>
                    <img src={Brand3} alt="brand3" className='img-fluid' />
                </div>
                <div className='brand_img'>
                    <img src={Brand4} alt="brand4" className='img-fluid' />
                </div>
                <div className='brand_img'>
                    <img src={Brand5} alt="brand5" className='img-fluid' />
                </div>
                <div className='brand_img'>
                    <img src={Brand6} alt="brand6" className='img-fluid' />
                </div>
            </div>

        </Carousel.Caption>
      </Carousel.Item>    

      <Carousel.Item>
        
        <Carousel.Caption>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='brand_img'>
                    <img src={Brand7} alt="brand7" className='img-fluid' />
                </div>
                <div className='brand_img'>
                    <img src={Brand8} alt="brand8" className='img-fluid' />
                </div>

                <div className='brand_img'>
                    <img src={Brand1} alt="brand1" className='img-fluid' />
                </div>

                <div className='brand_img'>
                    <img src={Brand2} alt="brand2" className='img-fluid' />
                </div>
            </div>

            
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section5;
