import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import Burger from '../../assets/Banner/burger.webp';
import Cards from './Cards';
import { Link } from 'react-router-dom';

 const dummyData = [
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    },
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    },
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    },
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    },
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    },
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    },
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    },
    {
        id:"0001",
        image:Burger,
        title:'Crispy chicken',
        paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
        rating:5,
        price:199,
    }
 ];

//  Rating Logical data
const renderRatingsIcons = (rating) =>{
    const stars = [];

    for(let i=0; i<5; i++){
        if(rating > 0.5){
            stars.push(<i key={i} className='bi bi-star-fill'></i>);
            rating--;
        }else if(rating > 0 && rating < 1){
            stars.push(<i key={"half"} className='bi bi-star-half'></i>);
            rating--;
        }else{
            stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
        }
    }
    return stars;
}

const Section3 = () => {
  return (
   <section className='menu_section'>
    <Container>
        <Row>
            <Col lg={{span:8,offset:2}} className='text-center mb-5'>
                <h2>OUR CRAZY BURGERS</h2>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias laborum ullam beatae at numquam nihil similique, velit molestias necessitatibus non, repellendus officiis, itaque ut ea maiores asperiores! Illo, aspernatur?</p>
            </Col>
        </Row>
        <Row>
            {
                dummyData.map((cardData,index)=>(
                    <Cards
                     key={index}
                     image={cardData.image}
                     title={cardData.title}
                     price={cardData.price}
                     rating={cardData.rating}
                     paragraph={cardData.paragraph}
                     renderRatingsIcons={renderRatingsIcons}
                    />
                ))
            }
        </Row>

        <Row className='pt-5'>
            <Col sm={6} lg={5}>
                <div className='ads_box ads_img1 mb-5 mb-md-0'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to="/" className='btn main-btn px-4 rounded-0'>
                    Learn More
                    </Link>
                </div>
            </Col>

            <Col sm={6} lg={7}>
                <div className='ads_box ads_img2'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to="/" className='btn main-btn px-4 rounded-0'>
                    Learn More
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Section3;
