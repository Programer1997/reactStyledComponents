import React from 'react';
import styled from 'styled-components';
import "./syled.scss";
import Image from './Image.png';
import Square from './Frame 29.png';


const SectionContainer = styled.div`
    padding:4%;
    background-color: rgb(40,44,51);
    //padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const SectionInfo = styled.div`
width: 515px;
display:flex;
flex-direction : column;
justify-content : space-around;
align-items:start;
`;
const SectionImg = styled.div`
`;

const Title = styled.h2`
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom:5%;
  display:flex;
  width:515px;
  align-items: center;

  

`;

const Description = styled.p`
color: var(--gray, #ABB2BF);
font-family: Fira Code;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; /* 162.5% */
margin-bottom:5%;
`;

const ProfileImage = styled.img`
  width: 200px;
  border-radius: 50%;
  position:relative;
`;
const Button = styled.button`
background-color: transparent;

color: #FFFFFF;
padding: 8px 16px;
border: 1.5px solid #C778DD;
//border-radius: 4px;
cursor: pointer;
`;

const SquareImg = styled.img`
width:5%;
position:absolute;
top:20%;
left:70%;
transform: translate(5%,-67%);
`;
const SquareImgTwo = styled.img`
width:5%;
position:absolute;
top:40%;
left:83%;
transform: translate(-50%,-60%);
`;

const AboutMe = () => {
  return (
    <SectionContainer>

    <SectionInfo>
        <Title>
            <span id='symbol'>#</span>
            <span className='text'>about-Me</span>
            <span className='line'></span>
        </Title>
        <Description>
        Hello, i’m Elias!,<br/><br/>I’m a self-taught front-end developer based in Kyiv, Ukraine.I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br/><br/> Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
        </Description>
        <Button>Read More</Button>

    </SectionInfo>
      
    <SectionImg>
        <ProfileImage src={Image} alt="Profile Picture" />
        <SquareImg src={Square}alt="somethiong is wrong"/>
        <SquareImgTwo src={Square}alt="somethiong is wrong"/>
    </SectionImg>
      
      
    </SectionContainer>
  );
};

export default AboutMe;
