import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image from '../assets/Health/undraw_medicine_b1ol.png'

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
    return (
        <Styles>
            <Container>
                <Row>
                    <Col className="col1">
                        <h1>Zostań w domu. Bądź bezpieczny</h1>
                        <p>Pierwszy przypadek zakażenia odnotowano w chińskim mieście Wuhan. Choroba w ciągu kilku miesięcy rozprzestrzeniła się na cały świat. Szacuje się, że około 70% wszystkich mieszkańców Ziemi zostanie zarażonych...</p>
                        <Button variant="info" style={{marginTop: '13px'}}>Więcej</Button>{' '}
                    </Col>
                    <Col>
                        <img src={image} className="image" />
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
};

export default HomePage;