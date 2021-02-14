import React, {useRef, useEffect} from 'react';
import styled from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image from '../assets/Health/undraw_medicine_b1ol.png'

import {TweenMax, Power3} from 'gsap';




const Styles = styled.div`
    .col{
        text-align: center;
    }

    h1{
        @media screen and (max-width: 600px) {
            font-size: 29px;
        }   
    }
    p{
        @media screen and (max-width: 600px) {
            font-size: 14px;
            width: 80%;
            margin: 0 auto;
        }   
    }

    .image{
        height: 370px;
        @media screen and (max-width: 1150px) {
            height: 300px;
        }   
        @media screen and (max-width: 600px) {
            height: 250px;
        }   

        @media screen and (max-width: 400px) {
            height: 200px;
        }
    }

    .row{
        margin-top: 180px;
    }

    .col1{
        margin-top: 65px;
        @media screen and (max-width: 900px) {
            margin-top: -30px;
        }
    }

    .row{

        @media screen and (max-width: 900px) {
            display: grid;
            grid-template-columns: repeat(1fr);
        }

    }

`



export const HomePage = () => {

    let logoItem = useRef(null);
    let textItem = useRef(null);
    let headItem = useRef(null);
    let button = useRef(null);

    

    useEffect(() => {
        console.log(logoItem)
        TweenMax.to(
            logoItem, 
            .8,
            {
                opacity: 1,
                y: -20,
                case: Power3.easeOut
            }
        )
        TweenMax.to(
            textItem, 
            .8,
            {
                opacity: 1,
                y: -10,
                case: Power3.easeOut,
                delay: .6
            }
        )
        TweenMax.to(
            headItem, 
            .8,
            {
                opacity: 1,
                y: -15,
                case: Power3.easeOut,
                delay: .2
            }
        )
        TweenMax.to(
            button, 
            .8,
            {
                opacity: 1,
                y: -15,
                case: Power3.easeOut,
                delay: .9
            }
        )
    }, [])

    return (
        <Styles>
            <Container>
                <Row style={{position: 'relative', top: '20px'}}>
                    <Col className="col1">
                        <h1 style={{opacity: '0', }} ref={el => {headItem = el}}>Zostań w domu. Bądź bezpieczny</h1>
                        <p style={{opacity: '0'}} ref={el => {textItem = el}}>Pierwszy przypadek zakażenia odnotowano w chińskim mieście Wuhan. Choroba w ciągu kilku miesięcy rozprzestrzeniła się na cały świat. Szacuje się, że około 70% wszystkich mieszkańców Ziemi zostanie zarażonych...</p>
                        <Button ref={el => {button = el}}  variant="info" style={{marginTop: '13px', opacity: '0'}}>Więcej</Button>{' '}
                    </Col>
                    <Col>
                        <img 
                            src={image} 
                            ref={el => {logoItem = el}} 
                            className="image" 
                            style={{opacity: '0'}}
                        />
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
};

export default HomePage;