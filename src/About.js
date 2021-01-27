import React from 'react';
import { Jumbotron, Button, Container, Alert, Row, Col  } from 'react-bootstrap';
import image from './assets/image.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/it4.jpg'
import { GrMap } from 'react-icons/gr';
import { FcQuestions } from 'react-icons/fc';
import { FaNewspaper } from 'react-icons/fa';


import styled from 'styled-components'
import Footer from './components/Footer';

const Styles = styled.div`

    .jumbotron1{
       
        
        
        height: 400px;
        background: url(${image}) no-repeat fixed bottom;
        background-size: cover;
        z-index: -2;
        @media screen and (max-width: 991px) {
            position: relative;
            top: -17px;
        }  
    }

    .top{
        display: flex;
        padding: 10px;
        height: 40px;
        
    }

    .bottom{
        margin-top: 20px;
        padding: 20px;
    }

    .jumbotron2{
        margin-top: 100px;
        height: 400px;
        background: url(${image2}) no-repeat fixed bottom;
    }


    .jumbotron2 .container p{
        font-weight: 500;
        font-size: 17px;
    }

    .cards h3{
        @media screen and (max-width: 1150px) {
            font-size: 20px;
        }  

        
    }
    .cards p{
        @media screen and (max-width: 1150px) {
            font-size: 13px;
            width: 99%;
            margin: 0 auto 20px auto;
        }  
    }

    .cards{

        @media screen and (max-width: 800px){
            display: flex;
            flex-direction: column;
        }

    }

    .top{
        @media screen and (max-width: 800px){
            text-align: center;
            margin: 0 auto;
               
        }
    }

    h1{
        @media screen and (max-width: 650px) {
            font-size: 32px;
        }  
    }
    h2{
        @media screen and (max-width: 650px) {
            font-size: 26px !important;
        }  
    }

    
    

`;

export const About = () => {
    return (
        <Styles>
            
            <Jumbotron className="jumbotron1" fluid style={{marginTop: '72px'}}>
                <div className="overlay"></div>
                <Container>
                    <h1 style={{marginTop: '40px'}}> Potrzebujesz pomocy? </h1>
                    <h2>+48 123 431 432</h2>
                    <p>
                    Ruszyła infolinia dedykowana szczepieniom przeciwko COVID-19
                    </p>
                    <Button variant="secondary">Więcej...</Button>
                </Container>
            </Jumbotron>

            <Container>
            <Alert variant="info" style={{marginTop: '50px'}}>
                <Alert.Heading>O szczepionce na dedykowanej infolinii </Alert.Heading>
                <p>
                Szczepionka przeciwko COVID-19 to temat, który nasuwa wiele pytań. Zależy nam, aby każda osoba mogła rozwiać swoje wątpliwości i znaleźć odpowiedź na nurtujące pytania. Dlatego też uruchomiliśmy bezpłatną i całodobową infolinię.
                </p>
                <hr />
                <p className="mb-0">
                Jeśli dzwonisz z zagranicy lub gdy Twój operator nie obsługuje numerów specjalnych, zadzwoń pod numer 22 12 23 212.
                </p>
            </Alert>
            </Container>
            
            <Container>
                <h1 style={{fontSize: '35px', marginTop: '50px',marginBottom: '20px', marginLeft: '10px' }}>Dowiedz się</h1>
                <Row className='cards'>
                    <Col>
                        <div className="top">
                            <GrMap size={42} style={{marginRight: '10px'}} />
                            <h3>Gdzie zrobić test?</h3>
                        </div>  
                        <div className="bottom">
                            <p>Wykaz punktów, w których można 
                            wykonać test na obecność koronawirusa</p>
                            <Button variant="primary">Więcej...</Button>
                        </div>
                        
                       
                    </Col>
                    <Col>
                        <div className="top">
                            <FcQuestions size={42} style={{marginRight: '10px'}} />
                            <h3>Pytania i odpowiedzi</h3>
                        </div>  
                        <div className="bottom">
                            <p>Poznaj odpowiedzi na najczęściej zadawane pytania dotyczące koronawirusa</p>
                            <Button variant="primary">Więcej...</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="top" >
                            <FaNewspaper size={42} style={{marginRight: '10px'}} />
                            <h3 style={{marginTop: '-10px'}}>Aktualne zasady i ograniczenia</h3>
                        </div>  
                        <div className="bottom">
                            <p>Poznaj aktualne zasady i obostrzenia</p>
                            <Button variant="primary" style={{marginTop: '22px'}}>Więcej...</Button>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Jumbotron className="jumbotron2" fluid>
                <Container>
                    <h2 style={{fontSize: '32px'}}>Szczepienia przeciw COVID-19</h2>
                    <p style={{marginTop: '30px'}}>
                    - w placówkach POZ
                    </p>
                    <p>
                    - w innych placówkach medycznych
                    </p>
                    <p>
                    - w mobilnych zespołach szczepiących
                    </p>
                    <p>
                    - w centrach szczepiennych szpitali rezerwowych
                    </p>

                    <Button variant="light">DOWIEDZ SIĘ WIĘCEJ</Button> 

                </Container>
            </Jumbotron>

            
            <Footer />
            

            

        </Styles>
    );
};

export default About;