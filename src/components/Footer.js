import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .links{
        display: flex;
        padding: 10px;
        text-align: center;
        margin: 0 auto;
        justify-content: center;

        
    }

    .links p{
        padding: 4px 15px;

    }

    h3{
        text-align: center;
    }

    .footer{
        text-align: center;
        margin-top: 30px;
    }

    .brake{
        border-bottom: 2px solid black;
        width: 100%;
    }

    .rights{
        margin-top: 13px;
        margin-bottom: 30px;
    }


`

export const Footer = () => {
    return (
        <Styles>
            <div className="footer">
                <Container>
                    <h3>Zdrowie Covid</h3>
                    <div className="links">
                        <p>Informacje o covid</p>
                        <p>Pomoc</p>
                        <p>Aktualizacje</p>
                        <p>Kontakt</p>
                    </div>
                    <div className="brake" />
                    <div className="rights">
                        <p>Wszelkie prawa zastzeżone 2021r.</p>
                    </div>
                </Container>
            </div>
        </Styles>
    );
};

export default Footer;