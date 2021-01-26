import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { GiHealthNormal } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';



const Styles = styled.div`
    .navbar {
        background-color: black;
        
    
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover{
            scale: 1.01;
            color: pink;
        }
    }

    
`



export const NavigationBar = () => {
    return (
        <Styles>
            <Navbar scrolling fixed="top" variant="dark" expand="lg">
                <Navbar.Brand href="/">Zdrowie Covid <GiHealthNormal/>  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                    <Nav.Link href="/">Informacje o Covid</Nav.Link>
                    <Nav.Link href="/about">Pomoc</Nav.Link>
                    <Nav.Link href="/update">Aktualizacje</Nav.Link>
                    <Nav.Link href="/contact">Kontakt</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Szukaj..." className="mr-sm-2" />
                    <Button variant="outline-success"> <GoSearch /> </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
};

export default NavigationBar;