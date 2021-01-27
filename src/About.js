import React from 'react';
import { Jumbotron, Button, Container, Alert, Toast  } from 'react-bootstrap';
import image from './assets/image.jpg'
import image2 from './assets/it2.jpg'
import image3 from './assets/it4.jpg'

import styled from 'styled-components'

const Styles = styled.div`
    

    .container{
        width: 100vw;
    }

    .alert{
        position: relative;
        top: 520px;
    }


    .jumbotron{
       
        width: 100vw;
        left: 0;
        right: 0;
        height: 400px;
        background: url(${image}) no-repeat fixed bottom;
        background-size: cover;
        z-index: -2;
    }

`;

export const About = () => {
    return (
        <Styles>
            
            <Jumbotron fluid style={{marginTop: '72px'}}>
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

            <Alert variant="info">
                <Alert.Heading>O szczepionce na dedykowanej infolinii </Alert.Heading>
                <p>
                Szczepionka przeciwko COVID-19 to temat, który nasuwa wiele pytań. Zależy nam, aby każda osoba mogła rozwiać swoje wątpliwości i znaleźć odpowiedź na nurtujące pytania. Dlatego też uruchomiliśmy bezpłatną i całodobową infolinię.
                </p>
                <hr />
                <p className="mb-0">
                Jeśli dzwonisz z zagranicy lub gdy Twój operator nie obsługuje numerów specjalnych, zadzwoń pod numer 22 12 23 212.
                </p>
            </Alert>
            
            <Toast>
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
            <Toast>
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
            </Toast>

            

            

        </Styles>
    );
};

export default About;