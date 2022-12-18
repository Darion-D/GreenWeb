import { useState} from "react"
import useFetch from "../hooks/useFetch"
import styled from "styled-components"

const FormContainer = styled.div`
    color: #f8f9fa;
    background-color: #40c057;
    padding: 2.375rem 3.75rem;
    border-radius: 10px;

    h1 {
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
`

const Form = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 2rem;

    input[type=text] {
        border: none;
        outline: none;
        padding: 1rem;
        border-radius: 10px;
        grid-column-start: 1;
    }

    input[type=submit] {
        font-size: 1.3rem;
        color: #f8f9fa;
        background-color: #2b8a3e;
        border: none;
        border-radius: 5px;
        padding: .5rem 1rem;
        cursor: pointer;
        grid-column-start: 2;
    }
`





const Calculator = (props) => {
    const [urlInput, setUrlInput] = useState('');

    const {data, executeFetch } = useFetch(urlInput)
    
    const handleChange = (e) => {
        setUrlInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        // props.setDisplay('loading');
        e.preventDefault()
        await executeFetch()
        
        props.updateData(data);
        props.setDisplay('data page')
    

    }

    return (
        <FormContainer>
            <h1>Estimate web page carbon footprint</h1>
            <p>Enter web address</p>
            <Form onSubmit={handleSubmit}>
                <label htmlFor='website'/>

                <input 
                    type="text"
                    required
                    name="website"
                    placeholder="Web page URL"
                    value={urlInput}
                    onChange={handleChange}
                />

                <input type="submit" value="Estimate" />
            </Form>
        </FormContainer>
    )
};
export default Calculator;