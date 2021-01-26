import React from 'react';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import Cards from './components/Cards';
import Section1 from './components/Section1';
import Footer from './components/Footer';



const Styles = styled.div`
    .margin{
        margin-top: 90px;
    }
`

export const Home = () => {
    return (
        <Styles>
            <div className="margin" />
            <HomePage />
            <Cards />
            <Section1 />
            <Footer />
        </Styles>
        
    );
};

export default Home;