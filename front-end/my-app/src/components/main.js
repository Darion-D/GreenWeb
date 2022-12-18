import styled from "styled-components";
import Calculator from "./calculator";
import ShowData from "./ShowData";
import { useState } from "react";

const Section = styled.section`
padding-inline: 1rem;
`

const Container = styled.div`
max-width: 73.75rem;
margin-inline: auto;
`

const Main  = (props) => {

    const [displayPage, setDisplayPage] = useState('form page');
    const [state, setState] = useState({});

    const updateData = (newData) => {
        setState({...state, ...newData})
    }

    return (
        <Section>
        <Container>
            <h1 className="title">How Eco-Friendly is Your Favorite Website?</h1>
            <p className="overview">
                One overlooked source of energy consumption is the internet. Which consumes
                approximately 416.2TWh per year and produces carbon emissions close to that 
                of the global aviation industry! Here you can compare how green your favorite 
                websites are compared to other tested websites.
            </p>
            {displayPage === 'form page' ? <Calculator updateData={updateData} setDisplay={setDisplayPage}/> : <ShowData />}

            
        </Container>
        </Section>
    )
};

export default Main;