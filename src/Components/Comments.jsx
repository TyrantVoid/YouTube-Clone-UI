import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';


const ChannelImgSource = 'https://i.pinimg.com/564x/84/e8/aa/84e8aa34bd65fe3ea47a72f8ac646fe6.jpg'


const Container = styled.div`
    
`;
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme})=> theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;


const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src={ChannelImgSource} />
                <Input placeholder='Add a comment....' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments