import styled from 'styled-components';
import React from 'react';


const ImageStyledBox = styled.div`
    background: url(${props => props.image}) no-repeat;
    background-position: center;
    background-size: contain;
    width: 45%;
    min-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        width: 90%;
        min-height: 250px;
        font-size: 1.5rem;
    }
    transition: filter .3s ease-in-out;
        > div{
            color: #e6bc28;
            background-color: rgba(98,98,98,.7);
            box-shadow: 0 0 10px 10px rgba(98,98,98,.7);
            max-width: 200px;
            
        }
    }
`;

const TextStyledBox = styled.div`
    width: 70%;
    text-align: center;
    font-weight: 700;
    color: #626262;
    transition: color .3s ease-in-out, background-color .3s ease-in-out, box-shadow .3s ease-in-out;
    font-size: 2rem; 
    border-radius: 15px;
    box-shadow: 0 0 10px 10px rgba(98,98,98,0);
    cursor: default;
`;


export const ImageBox = ({ image, text }) => {
    return (
        <>
            <ImageStyledBox image={image}>
                <TextStyledBox>
                    {text}
                </TextStyledBox>
            </ImageStyledBox>
        </>
    )
}