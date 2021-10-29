import React from 'react'
import styled from "styled-components"
import background from "./pool.jpg"
import {AiOutlineClose} from "react-icons/ai"

const Forms = () => {
    return (
        <Container>
            <Wrapper>
                <OpacityColor>
                        <Form>
                            <FormItems>
                                <Cancel>
                                    <CancelIcon>
                                        <CloseIcon>
                                            <AiOutlineClose/>
                                        </CloseIcon>
                                    </CancelIcon>
                                </Cancel>
                                <InputContainer>
                                        <Inputs placeholder="Enter your Name"/>
                                        <Inputs placeholder="Next of kin Phone Number"/>
                                        <Inputs placeholder="Enter Phone Number"/>
                                        <Inputs placeholder="Enter your Next of Kin Name"/>
                                </InputContainer>
                                <ButtonHolder>
                                    <Button>Pay now</Button>
                                </ButtonHolder>
                            </FormItems>
                        </Form>
                </OpacityColor>
            </Wrapper>
        </Container>
    )
}

export default Forms

const CloseIcon = styled(AiOutlineClose)`
font-size: 25px;
color: white;
`


const Button = styled.div`
width: 150px;
height: 40px;
display:flex;
justify-content: center;
align-items: center;
color: white;
font-weight: bold;
background-color: blue;
font-size: 18px;
transform: scale(1);
cursor: pointer;
transition: all 350ms;
border-radius: 4px;
:hover{
    transform: scale(1.03);
}
`
const ButtonHolder = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;
@media screen and (max-width: 350px){
    margin-bottom: 30px;
}
`
const Inputs = styled.input`
width: 93%;
height: 35px;
border-radius: 5px;
border: solid black 2px;
padding-left: 12px;
margin: 15px 0;
@media screen and (max-width: 350px){
    margin: 8px 0;
}
`

const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction:column;
margin-bottom: 30px;
@media screen and (max-width: 350px){
    margin-bottom: 20px;
}
`
const XIcon = styled.div``
const CancelIcon = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: blue;
margin-bottom: 30px;
font-size: 8px;
color: white;
display: flex;
justify-content: center;
align-items: center;
transform: scale(1);
transition: all 350ms;
cursor: pointer;
:hover{
    transform: scale(1.02);
}
`


const Cancel = styled.div`
width: 100%;
display:flex;
justify-content: flex-end;
margin-top: 30px;
@media screen and (max-width: 350px){
    margin-top: 20px;
}
`

const FormItems = styled.div`
width: 90%;
display: flex;
align-items: center;
flex-direction: column;
`
const Form = styled.div`
width: 30%;
height: 100%auto;
background-color: rgba(255,255,255);
z-index: 10;
display: flex;
justify-content: center;
border-radius: 5px;
box-shadow: black 1px 1px 0 2px;
@media screen and (max-width: 1000px) and (min-width: 320px){
    width: 60%;
}
@media screen and (max-width: 1200px) and (min-width: 1000px){
    width:40%;
}
@media screen and (max-width: 500px) and (min-width: 320px){
    width:80%;
    border-radius: 6px;
}


`
const OpacityColor = styled.div`
width: 100%;
height: 100vh;
align-items: center;
background-color: rgba(0,0,0, 0.85);
display:flex;
justify-content: center;

`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: black;

`

const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-image: url(${background});
background-size: cover;
backdrop-filter: 20px;
background-repeat: no-repeat;
`
