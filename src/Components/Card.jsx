import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Imgsource from '../img/maxresdefault.jpg'
const ChannelImgSource = 'https://i.pinimg.com/564x/84/e8/aa/84e8aa34bd65fe3ea47a72f8ac646fe6.jpg'

const Container = styled.div`
    width: ${(props)=> props.type !== "sm" && "360px"};
    margin-bottom: ${(props)=> (props.type === "sm" ? "10px" : "45px") };
    cursor: pointer;
    border-radius: 15px;
    display: ${(props)=> (props.type === "sm" && "flex") };
    gap: 10px;
    /* background-color: red; */
`;

const Image = styled.img`
width: 100%;
height: ${(props)=> (props.type === "sm" ? "120px" : "202px") };
background-color: #999;
border-radius: 15px;
flex: 1;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${(props)=> (props.type !== "sm" && "16px") };
    gap: 12px;
    flex: 1;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props)=> props.type === "sm" && "none" };
`;

const Texts = styled.div`

`;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type} >
        <Image type={type} src={Imgsource} />
        <Details type={type} >
            <ChannelImage type={type} src={ChannelImgSource}/>
            <Texts>
                <Title>Test Video</Title>
                <ChannelName>Lama Dev</ChannelName>
                <Info>660,908 views • 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card