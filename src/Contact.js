import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';
import Footer from './components/Footer';


const Styles = styled.div`
    .col{
        padding: 0 40px;

        @media screen and (max-width: 850px) {
            margin: 20px 0;
        }
    }

   


    .row{

        @media screen and (max-width: 850px) {
            display: grid;
            grid-template-columns: 1fr;
        }


        @media screen and (max-width: 400px) {
            display: grid;
            grid-template-columns: 1fr;
        }
    }

    
`

export const Contact = () => {
    return (
        <Styles>
              <div style={{marginTop: '130px'}} >
                <Container >
                <Row>
                    <Col>
                        <h1>Nasza Lokacja</h1>
                        <iframe src="https://www.google.com/maps/d/u/1/embed?mid=17jdiFBQQXfejN0nAeluvvJkeK81UKA5d" 
                        style={{
                        border: '0', 
                        width: '100%', 
                        height: '315px', 
                        frameborder: '0'}}
                        allowFullScreen></iframe>
                    </Col>
                    <Col>
                        <h1>Kontakt</h1>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="email" placeholder="wpisz adres Email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Wybierz placówkę</Form.Label>
                                <Form.Control as="select">
                                <option>Warszawa</option>
                                <option>Wrocław</option>
                                <option>Poznań</option>
                                <option>Kraków</option>
                                <option>Łódź</option>
                                </Form.Control>
                            </Form.Group>
                        
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Wpisz treść wiadomości</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                </Container>
            </div>

            <Footer />

        </Styles>
      
    );
};

export default Contact;