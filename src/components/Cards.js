import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap'
import styled from 'styled-components';
import image1 from '../assets/Health/undraw_social_distancing_2g0u.png';
import image2 from '../assets/Health/undraw_followers_4i0p.png';
import image3 from '../assets/Health/undraw_medical_research_qg4d.png';



const Styles = styled.div`
    .card-heading{
        margin-top: 170px;
        margin-bottom: 50px;   
    }

    .image{
            max-height: 250px !important;
            padding: 35px;
        }


`

export const Cards = () => {
    return (
        <Styles>
            <div className="card-heading">
                <h1>Najważniejsze informacje o koronawirusowej Kwarantannie</h1>
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
        </Styles>
    );
};

export default Cards;