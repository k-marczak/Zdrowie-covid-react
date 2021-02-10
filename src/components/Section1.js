import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/Health/undraw_wash_hands_nwl2.png'

const Styles = styled.div`
    .section1{
        margin-top: 150px;
    }

    .section1-heading{
        text-align: center;
        margin-bottom: 10px;
    }

    ol{
        list-style: none;
    }

    .col ol li p{
        margin: 50px 0;
        font-size: 19px;
    }

    .paragraphs{
        margin-top: 60px;
    }

    .image{
        height: 500px;

        @media screen and (max-width: 400px) {
            height: 400px;
        }
    }


    @media screen and (max-width: 900px) {
        .row{
            display: grid;
            grid-template-columns: 1fr;
        }
    }




    


`


export const section1 = () => {
    return (
        <Styles>
            <Container className="section1">
                <Row>
                    <Col>
                        <div className="section1-heading">
                            <h3>Jeśli chcesz zwiekszyć swoja szanse</h3>
                            <h2>ZAPAMIĘTAJ!</h2>
                        </div>
                        <img src={image1} className="image" />
                    </Col>
                    <Col className="paragraphs">
                        <ol>
                            <li>
             
                                <p>
                               - Często myj ręce mydłem i wodą lub środkiem dezynfekującym na bazie 
                                alkoholu (co najmniej 60%Zawartość alkoholu).
                                
                            </p>
                            </li>
                            <li>
 
                                <p>
                                - Unikaj dotykania oczu, nosa i ust. Zakrywaj usta i nos.
                                
                            </p>
                            </li>
                            <li>
           
                                <p>
                               - Podczas kaszlu zakryj usta i nos zgięciem
                                ramienia lub jednorazową chusteczkąlub kichnąć.
                                
                            </p>
                            </li>
                            <li>
                 
                                <p>
                                - Trzymaj się z dala od chorych.
                                
                            </p>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </Styles>
    );
};

export default section1;