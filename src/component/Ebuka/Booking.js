import React, { useEffect } from 'react'
import styled from 'styled-components'
// import img1 from 'images/back.jpg'
import background from './back.jpg'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {addHotel, addBooking, changeDays, removeBooking, costState} from "./ReduxGlobal"

const Booking = () => {
    const showBooking = useSelector((state) => state.myReducer.bookings)
    const dispatch = useDispatch()

    useEffect(() => {

    },[showBooking])
    return(
        <Container>
            <Wrapper>

            <Summ>
                    Summary
                   <H>
                   <Amount>
                        <span>Amount:</span>
                        <span>50,000</span>
                    </Amount>
                    <Troom>
                    <span>Total Rooms:</span>
                        <span>2</span>
                    </Troom>
                   </H>
                </Summ>

                
               <Top> {
                    showBooking.map((props, i) => (
                 <Card key={i}>  
                    <ImageTop src={props.roomImage}/>
                    <RoomPlace>
                        <Work>Room NO:</Work>
                        <Work2><span>{props.roomNo}</span></Work2>
                    </RoomPlace>

                    <PricePlace>
                        <Work>Price:</Work>
                        <Work2><span>{props.price}</span></Work2>
                    </PricePlace>
                    <Category1>
                        <Work>Category:</Work>
                        <Work2><span>{props.category}</span></Work2>
                    </Category1>

                    <Days>
                           <Mus onClick={()  => {
                                dispatch(changeDays(props))
                            }}>-</Mus>
                           <DayNum>No of Days
                           </DayNum>
                           <span>{props.QTY}</span>
                           <Add onClick={()  => {
                                dispatch(addBooking(props))
                            }}>+</Add>
                       </Days>

                       <ButtonPart>
                            <ButtonPP onClick={()  => {
                                dispatch(removeBooking(props))
                            }}>Cancel</ButtonPP>
                            <ButtonC to="/pay">Check Out</ButtonC>
                        </ButtonPart>
                </Card>
                    ))
                }
                </Top>


              
            </Wrapper>
        </Container>
    )
}

export default Booking

const Summ = styled.div`
width: 300px;
height: 100px;
background-color:white;
font-weight:bold;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 5px;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const H = styled.div`
display: flex;
justify-content: space-between;
`

const Amount = styled.div`
font-size:15px;
font-weight:bold;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-left: 20px;
display: flex;
flex-direction: column;
text-align: center;
margin-bottom: 5px;

`
const Troom = styled.div`
font-size:15px;
text-align: center;
font-weight:bold;
font-family: Georgia, 'Times New Roman', Times, serif;
margin-left: 20px;
display: flex;
flex-direction: column;
margin-bottom: 5px;

`
const Top = styled.div`
width: 100%;
height: 70%;
`


const Category1 = styled.div`
     width: 80%;
    justify-content: space-between;
    display: flex;
    margin: 5px;
    font-weight: bold;
`
const PricePlace = styled.div`
      width: 80%;
    justify-content: space-between;
    display: flex;
    margin: 5px;
    font-weight: bold;
`
const Work2 = styled.div`
    margin-right: 10px;
`
const Work = styled.div`
    margin-left: 10px;
`
const RoomPlace = styled.div`
    width: 80%;
    justify-content: space-between;
    display: flex;
    margin: 5px;
    font-weight: bold;
`
const ButtonC = styled(Link)`
    width: 150px;
    height: 40px;
    background-color: #387EFF;
    color: white;
    margin: 0px 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);

    :hover{
        cursor: pointer;
        transition: all 350ms ease-in-out;
       background-color:white;
       color: blue;
       border: 2px solid blue;

    }

    @media screen and (max-width: 475px) and (min-width: 320px){
        margin-left: 0;
    }

    @media screen and (max-width: 700px) and (min-width: 320px){
        font-size: 15px;
        /* font-weight:bold; */
        width: 100px; 
        height: 40px;       
    }
`
const ButtonPP = styled.div`
    width: 150px;
    height: 40px;
    background-color: red;
    color: white;
    border-radius: 5px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    margin: 0px 5px;

    :hover{
        cursor: pointer;
       transition: all 350ms ease-in-out;
       background-color:white;
       color: red;
       border: 2px solid red;

    }

    @media screen and (max-width: 700px) and (min-width: 320px){
            width: 350px;
        
    }

    @media screen and (max-width: 475px) and (min-width: 320px){
        font-size: 15px;
        font-weight:bold;
        width: 100px;
        height: 40px;   
        margin:0px 5px;
    }
`
const ButtonPart = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    @media screen and (max-width: 475px) and (min-width: 320px){  
        margin-bottom: 10px;
    }
`

const Add = styled.div`
     margin: 0px 15px;
     width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    border-radius: 50%;
    font-size: 20px;
    color: white;
    font-weight: bolder;
    cursor: pointer;

    @media screen and (max-width: 475px) and (min-width: 320px){
       margin: 0px 10px;
    }
`
const DayNum = styled.div`
     margin: 0px 15px;
     display: flex;
     flex-direction: column;
     align-items: center;
     font-size: 15px;
     font-weight: bold;
`
const Mus = styled.div`
    margin: 0px 15px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border-radius: 50%;
    font-size: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 475px) and (min-width: 320px){
       margin: 0px 10px;
    }
`
const Days = styled.div`
    display: flex;
    justify-content: center;
    margin: 25px 0px;
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-image: url(${background});
    background-position: center;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    position: relative;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;

    :after{
        content: " ";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.4);
        z-index: -5;
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 475px) and (min-width: 320px){
          flex-direction: column;   
    }
`

const ImageTop = styled.img`
width: 280px;
height: 230px;
background-color:blue;
object-fit:cover;
border-radius: 5px;
border-radius:10px 10px  0 0 ;



    @media screen and (max-width: 700px) and (min-width: 320px){
       width: 100%;
       height: 50%;
        
    }
`



const Card = styled.div`
width: 280px;
min-height:450px;
margin-top: 20px;
margin: 20px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color: white;
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