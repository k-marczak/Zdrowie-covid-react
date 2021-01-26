import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
    .content{
        margin-top: 70px;
        height: 1900px;
    }
`

export const Home = () => {
    return (
        <Styles>
            <div className="content">
                <h1>Hello from Home</h1>
            </div>
        </Styles>
        
    );
};

export default Home;