import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { GiHealthNormal } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './nav-style.css'


const Styles = styled.div`
    .navbar {
        background-color: black;
        
        @media screen and (min-width: 992px) {
        
            height: 72px;
        }

             
        @media screen and (max-width: 400px) {
            width: 99%;
        }
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white !important;

        &:hover{
            scale: 1.01;
            color: pink;
        }
    }

    .form-control{
        margin: 10px 0;
    }

    .nav-link .link{
        color: white;
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
                        <Nav.Link eventKey="1"><Link className="link" to='/'> Informacje o covid </Link></Nav.Link>
                        
                        <Nav.Link eventKey="2"><Link className="link" to='/about'> Pomoc </Link></Nav.Link>
                        <Nav.Link eventKey="3"><Link className="link" to='/update'> Aktualizacje </Link></Nav.Link>
                        <Nav.Link eventKey="4"><Link className="link" to='/contact'> Kontakt </Link></Nav.Link>
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