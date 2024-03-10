import React from 'react'
import styled from 'styled-components'


const ChannelImgSource = 'https://i.pinimg.com/564x/84/e8/aa/84e8aa34bd65fe3ea47a72f8ac646fe6.jpg'


const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 20px 0px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme})=> theme.text};
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`;

const Text = styled.span`
    font-size: 14px;
`;

const Comment = () => {
    return (
        <Container>
            <Avatar src={ChannelImgSource} />
            <Details>
                <Name>Vishal <Date>1 day ago</Date></Name>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, rem.</Text>
            </Details>
        </Container>
    )
}

export default Comment