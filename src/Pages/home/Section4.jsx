import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Foods from '../../assets/Promotions/Food3.jpg';



const Section4 = () => {
  return (
    <>
    <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                    <img src={Foods} className='img-fluid' alt="Promotion" />
                </Col>

                <Col lg={6} className='px-5'>
                    <h2>Nothing brings people together like a good burger</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque, eos voluptatibus fuga dolor molestias, impedit suscipit in nihil nesciunt distinctio earum sequi minima, eius eligendi reprehenderit qui accusamus nam!</p>
                    <ul>
                        <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugiat? Aliquam iure tenetur soluta fugit?</p></li>
                        <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugiat? Aliquam iure tenetur soluta fugit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, culpa.</p></li>
                        <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugiat? Aliquam iure tenetur soluta fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quasi blanditiis consequuntur explicabo eaque nesciunt.</p></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>

    {/* BG parallax Scroll */}
    <section className='bg-parallax-scroll'>

    </section>
    </>
  )
}

export default Section4;
