import styled from 'styled-components';
import React, { Fragment } from 'react';


const ImageStyledBox = styled.div`
    background: url(${props => props.image}) no-repeat;
    background-position: center;
    background-size: contain;
    width: 45%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        width: 90%;
    }
`;

const TextStyledBox = styled.div`
    width: 70%;
    text-align: center
`;


export const ImageBox = ({ image, text }) => {
    return (
        <Fragment>
            <ImageStyledBox image={image}>
                <TextStyledBox>
                    {text}
                </TextStyledBox>
            </ImageStyledBox>
        </Fragment>
    )
}