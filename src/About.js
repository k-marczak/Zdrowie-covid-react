import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './assets/it.jpg'
import image2 from './assets/it2.jpg'
import image3 from './assets/it4.jpg'

import styled from 'styled-components'

const Styles = styled.div`
    .carousel{
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .carousel-item img{
        height: 500px;
    }
`

export const About = () => {
    return (
        <Styles>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </Styles>
    );
};

export default About;