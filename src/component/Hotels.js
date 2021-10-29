import React, {useState,useEffect} from 'react'
import styled from "styled-components"
import pool from "./imgage/pool.jpg"
import {app} from "../base"
import {Link} from "react-router-dom"



const Rooms = () => {
    const[data, setData] = useState([])

    const getData = async ()=>{
    await app.firestore().collection("hotel").onSnapshot(snapshot=>{
    const item =[]
    snapshot.forEach(doc=>{
        item.push({...doc.data(), id:doc.id})
    })
    setData(item)
})
    }

    useEffect(()=>{
        getData()
        console.log(data)
    },[])

    return (
        <div>
                 
        <Container >
            <Wrapper>
            <Header>
                   <Content>
                   <Title>Hotel Collection</Title>
                  </Content>
</Header>
<Head>Verified Hotels</Head>
<Room>
 
{
    data?.map((props, i)=>(
      <Link to={`hotel/${props.id}`} >
        <Card1 key={i}>
    {/* <Sub> */}
        <Img  src={props.showImage}/>
       <Text>
       <Name>Name: <span>{props.hotelName}</span></Name>
        <Location>Location: <span> {props.location}</span></Location>
        <Desc>Detail: <span> {props.hotelDesc}</span></Desc>
       </Text>
    {/* </Sub> */}
</Card1>
      </Link>
    ))
}
 

</Room>


            </Wrapper>
        </Container>
        </div>
    )
}

export default Rooms

const Room = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: 95%;
justify-content:space-around;
`
const Head = styled.div`
color: black;
font-size:25px;
font-weight:bold;
margin-bottom: 10px;
margin-top: 30px;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-left: 30px;
`
const Card1 = styled.div`
width: 280px;
min-height: 450px;
margin-top: 20px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
:after{
        content: "";
        top: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.718);
        position: absolute;
        z-index: -2;
    }
&:hover{
  transition: all 350ms;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
@media screen and (max-width: 1224px){
    margin-top: 70px;
}
`


const Img = styled.img`
width: 100%;
height: 250px;
background-color:blue;
object-fit:cover;
position: relative;
border-radius: 5px;
`
const Location = styled.div`
color: black;
font-size:15px;
font-weight:bold;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-left: 20px;
margin-bottom: 5px;

span{
    font-size:14px;
    font-weight: normal;
}
`
const Text = styled.div`
width: 90%;
padding-top: 10px;
color: black;
display: flex;
flex-direction: column;
`

const Desc = styled.div`
color: black;
font-size:13px;
font-weight:bold;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-left: 20px;

span{
    font-size:14px;
    font-weight: normal;
}
`
const Name = styled.div`
color: black;
font-size:15px;
font-weight:bold;
margin-bottom: 5px;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-left: 20px;

span{
    font-size:14px;
    font-weight: normal;
}
`

const Header = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    background: url(${pool});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;
    :after{
        content: "";
        top: 0;
        width: 100%;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.718);
        position: absolute;
        z-index: -2;
    }
    /* background-color: green; */
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
    }
`
const Container = styled.div`
    width: 100%;
    min-height: 120%;
    display: flex;
    flex-direction: column;
    margin-bottom:30px;
`

const Title = styled.div`
    margin-top: 170px;
    font-size: 60px;
    color: #fff;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic; 
    @media (min-width: 320px) and (max-width: 1024px){
        font-size: 25px;
        font-weight: 700;
    }
`
const Content = styled.div`
    width: 100%;
    height: 450px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    span{
        width: 60%;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin-top: 10px;
        @media (min-width: 320px) and (max-width: 1024px){
        font-size: 15px;
        font-weight: 500;
        width: 90%;
        margin-bottom: 20px;
    }
    }
`
