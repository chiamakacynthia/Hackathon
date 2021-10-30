import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import pool from "./img/pool.jpg"
import {useParams} from "react-router-dom"
import {app} from "../../base"
import {useDispatch} from "react-redux"
import {addBooking} from "../Ebuka/ReduxGlobal"

const Rooms = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const[data, setData] = useState([])

    const getData = async ()=>{
    await app.firestore().collection("hotel")
    .doc(id).collection("room")
   .onSnapshot(snapshot=>{
    const item =[]
    snapshot.forEach(doc=>{
        item.push({...doc.data(), id:doc.id})
    })
    setData(item)
})
    }

    useEffect(()=>{
        getData(id)
    },[])
    return (
        <div>
            

       
        <Container >
            <Wrapper>
            <Header>
                   <Content>
                   <Title>Bana Hotel and Suits</Title>
                    <span>Book Your Stay with us today, to enjoy comfort and luxury
                    </span>
                 
                  </Content>
</Header>

<Summ>
                 <All> <Amount>All</Amount>
                   
                   <Amount>
                        Regular
                    </Amount>
                   
                   <Amount>
                        Standard
                    </Amount>
                   
                   <Amount>
                        Luxury
                    </Amount></All>
                   
                 
                </Summ>

<Head>Our Ranked Rooms</Head>
<Room>
 
{
    data.map((props,i)=>(
         
<Card1 key ={i}>
    <Sub>
        <Img  src={props.roomImage}/>
       <Text>
       <Name>Room: <span>{props.roomNo}</span></Name>
        <Price>Price: <span> {props.price}</span></Price>
        <Category>Category: <span>{props.category}</span></Category>
        <Category>Max-No: <span>{props.maxPerson}</span></Category>
        <BH><Button
         onClick={() => {dispatch(addBooking(props))}}
        >Book Now</Button></BH>
       </Text>
    </Sub>
</Card1>
    ))
}

</Room>

<Head>Our Hotel Facilities</Head>
<Faci>
{
    data.map((props, k)=>(
        <Card key={k}>
    <Sub>
        <Image  src={props.facilityImage}/>
       <Text>
       <Name>Name: <span>{props.facilityName}</span></Name>
        <Price>Price: <span> {props.price}</span></Price>
        <Category>Detail: <span>{props.facilityDesc}</span></Category>
       </Text>
    </Sub>
</Card>

    ))
}

</Faci>

            </Wrapper>
        </Container>
        </div>
    )
}

export default Rooms

const Amount = styled.div`
font-size:15px;
font-weight:bold;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-left: 20px;
display: flex;
text-align: center;
margin-bottom: 5px;

`

const All = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

const Summ = styled.div`
margin-top: 10px;
width: 300px;
height: 70px;
background-color:white;
font-weight:bold;
display: flex;
align-items: center;
justify-content: space-around;
/* padding: 10px; */
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Button = styled.button`
width: 150px;
height: 40px;
border-radius:3px;
color: white;
background-color:#387EFF;
justify-content:center;
align-items: center;
display: flex;
margin-top: 10px;
outline: none;
border: none;
&:hover{
    cursor: pointer;
    transform: scale all(0.9)
}
`

const BH = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 10px;
margin-left: 10px;
`

const Room = styled.div`
display: flex;
flex-wrap: wrap;
/* flex-direction: column; */
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
const Card = styled.div`
width: 280px;
min-height: 450px;
margin-top: 20px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
:after{
        content: "";
        top: 0;
        width: 100%;
        /* height: 406px; */
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
const Card1 = styled.div`
width: 280px;
height: 420px;
min-height:450px;
margin-top: 20px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
:after{
        content: "";
        top: 0;
        width: 100%;
        /* height: 406px; */
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
const Sub = styled.div``
const Faci = styled.div`
display: flex;
flex-wrap: wrap;
width: 95%;
justify-content:space-around;
`

const Image = styled.img`
width: 100%;
height: 300px;
background-color:blue;
object-fit:cover;
position: relative;
border-radius: 5px;
`
const Img = styled.img`
width: 100%;
height: 250px;
background-color:blue;
object-fit:cover;
position: relative;
border-radius: 5px;
`
const Price = styled.div`
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
const Category = styled.div`
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
    height: 450px;
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
        height: 450px;
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
    align-items: center;
    @media (min-width: 320px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
    }
`
const Container = styled.div`
    width: 100%;
    min-height: 120%;
    margin-bottom:30px;
    display: flex;
    flex-direction: column;
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
