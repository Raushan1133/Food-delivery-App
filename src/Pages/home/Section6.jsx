import React from 'react'
import { Container,Row, Carousel } from 'react-bootstrap';
import Person1 from '../../assets/Ratings/person1.avif'
import Person2 from '../../assets/Ratings/person2.jpg'
import Person3 from '../../assets/Ratings/person3.jpg'
import Person4 from '../../assets/Ratings/person4.avif'


const Section6 = () => {
  return (
    <>
    <section className='blog_section'>
    <Container>
            <Row>
            <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
                <div className='user_img'>
                    <img src={Person1} alt="brand3" className='img-fluid' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus culpa deserunt quo perferendis magnam laudantium magni eum quos quisquam.</p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY RAVI BHUSHAN</h5>
        </Carousel.Caption>
      </Carousel.Item>    

      <Carousel.Item>
        <Carousel.Caption>
                <div className='user_img'>
                    <img src={Person2} alt="brand3" className='img-fluid' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus culpa deserunt quo perferendis magnam laudantium magni eum quos quisquam.</p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY RAVI BHUSHAN</h5>
        </Carousel.Caption>
      </Carousel.Item> 

      <Carousel.Item>
        <Carousel.Caption>
                <div className='user_img'>
                    <img src={Person3} alt="brand3" className='img-fluid' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus culpa deserunt quo perferendis magnam laudantium magni eum quos quisquam.</p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY RAVI BHUSHAN</h5>
        </Carousel.Caption>
      </Carousel.Item> 

      <Carousel.Item>
        <Carousel.Caption>
                <div className='user_img'>
                    <img src={Person4} alt="brand3" className='img-fluid' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus culpa deserunt quo perferendis magnam laudantium magni eum quos quisquam.</p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY RAVI BHUSHAN</h5>
        </Carousel.Caption>
      </Carousel.Item> 

    </Carousel>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section6
