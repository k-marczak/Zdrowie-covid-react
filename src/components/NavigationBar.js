import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { GiHealthNormal } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';



const Styles = styled.div`
    .navbar {
        background-color: black;
        
        @media screen and (min-width: 992px) {
        
            height: 72px;
        }
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover{
            scale: 1.01;
            color: pink;
        }
    }

    
`;



export const NavigationBar = () => {
    return (
        <Styles>
            <Container>
                <Navbar collapseOnSelect scrolling fixed="top" variant="dark" expand="lg">
                    <Navbar.Brand href="/">Zdrowie Covid <GiHealthNormal/>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ml-auto">
                        <Nav.Link eventKey="1"><Link to='/'> Informacje o covid </Link></Nav.Link>
                        
                        <Nav.Link eventKey="2"><Link to='/about'> Pomoc </Link></Nav.Link>
                        <Nav.Link eventKey="3"><Link to='/update'> Aktualizacje </Link></Nav.Link>
                        <Nav.Link eventKey="4"><Link to='/contact'> Kontakt </Link></Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Szukaj..." className="mr-sm-2" />
                        <Button variant="outline-success"> <GoSearch /> </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Styles>
    );
};

export default NavigationBar;