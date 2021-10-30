import React from "react";
import styled from "styled-components";
import testImf from "../Images/hooot.jpg";
import testImf1 from "../Images/hotp.png";
import testImf2 from "../Images/luxx.jpg";
import testImf3 from "../Images/gff.jpg";
import testImf4 from "../Images/perm.jpg";

const Home3 = () => {
  return (
    <Container>
      <Wrapper>
        <TextDisc>Popular Destinations</TextDisc>
        <CardDisplay>
          <FirstHold>
            <CardOne src={testImf} alt="" />
          </FirstHold>
          <SecondHold>
            <CardTwo src={testImf1} alt="" />
            <CardTwo src={testImf2} alt="" />
          </SecondHold>
          <ThirdHold>
            <CardThree src={testImf3} alt="" />
            <CardThree src={testImf} alt="" />
            <CardThree src={testImf4} alt="" />
          </ThirdHold>
        </CardDisplay>
      </Wrapper>
    </Container>
  );
};

export default Home3;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-flow: column wrap;
`;
const TextDisc = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
`;
const CardDisplay = styled.div`
  width: 100%;
`;
const FirstHold = styled.div`
  margin: 20px 0;
`;
const CardOne = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
`;
const SecondHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
  background-color: aliceblue;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;
const CardTwo = styled.img`
  width: 560px;
  height: 300px;
  border-radius: 20px;
  background-color: rebeccapurple;
  margin: 15px 0;

  @media screen and (max-width: 600px) {
    width: 400px;
  }
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;
const ThirdHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;
const CardThree = styled.img`
  max-width: 350px;
  height: 300px;
  border-radius: 20px;
  margin: 15px 0;
`;
