import React from "react";
import styled from "styled-components";
import CardMain from "../CardMain/CardMain";
import Bounce from "react-reveal/Bounce";

const Home1 = () => {
  return (
    <Container>
      <Wrapper>
        <Bounce bottom>
          <CardMain />
          <CardMain />
          <CardMain />
          <CardMain />
        </Bounce>
      </Wrapper>
    </Container>
  );
};

export default Home1;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-items: center; */
`;
