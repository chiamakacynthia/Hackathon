import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"


const SideBar = ({toggle, setToggle}) => {
    return (
        <Container>
            <Content 
            onClick={()=>{
            setToggle(false);
            console.log(toggle);
            }}
            >
               <Holder to="/">
               <span>Home</span>
                <hr/>
               </Holder>
               <Holder to="/booking">
               <span>Bookings</span>
                <hr/>
               </Holder>
               <Holder to="/hotel">
               <span>Hotels</span>
                <hr/>
               </Holder>
              
              
            </Content>
           
        </Container>
    )
}

export default SideBar


const Container = styled.div`
width: 400px;
height: 80vh;
background-color: white;

`

const Content = styled.div`
padding-top: 30px;
height: 45%;
width: 90%;
display: flex;
justify-content: center;
flex-direction: column;
color:#004080;
`
const Holder = styled(Link)`
text-decoration: none;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

span{
    font-size: 20px;
    font-weight: bold;
    font-family: poppins;
    margin-left: 20px;
}

 hr{
   color:#004080;
width: 90%; 
} 
`