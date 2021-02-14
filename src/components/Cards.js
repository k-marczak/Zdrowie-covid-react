import React, {useRef, useEffect} from 'react';
import { CardGroup, Card, Button, Container } from 'react-bootstrap'
import styled from 'styled-components';
import image1 from '../assets/card.svg';
import image2 from '../assets/card2.svg';
import image3 from '../assets/card3.svg';
import { TweenMax, Power3} from 'gsap';
import Aos from 'aos';
import "aos/dist/aos.css";



const Styles = styled.div`


    h1{
        @media screen and (max-width: 600px) {
            font-size: 27px;
            width: 80%;
            margin: 0 auto;
        }   
    }

    .card-heading{
        margin-top: 170px;
        margin-bottom: 50px;   
    }

    .image{
            
            padding: 35px;
        }


`

export const Cards = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <Styles>
            <Container>
                <div className="card-heading">
                    <h1 data-aos="fade-up">Najważniejsze informacje o koronawirusowej Kwarantannie</h1>
                </div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" className="image" src={image1} />
                        <Card.Body>
                        <Card.Title>Obostrzenia</Card.Title>
                        <Card.Text>
                        Gdzie nie jest obowiązkowe zakrywanie ust i nosa? W lasach, parkach, ogrodach podczas podróży prywatnym samochodem.
                        </Card.Text>
                        <Button variant="primary">Więcej </Button>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="image" src={image2}/>
                        <Card.Body>
                        <Card.Title> Konto pacjenta </Card.Title>
                        <Card.Text>
                        
                        Załóż konto i śledź informacje na bieżąco przez 24h na dobe.
                        </Card.Text>
                        <Button variant="primary">Więcej</Button>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="image" src={image3} />
                        <Card.Body>
                        <Card.Title>Informacje o szczepionce</Card.Title>
                        <Card.Text>
                        Koronawirus. Twórca szczepionki mówi, kiedy wrócimy do normalności
                        </Card.Text>
                        <Button variant="primary">Więcej </Button>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
                
        </Styles>
    );
};

export default Cards;