import styled from 'styled-components';

export const AboutTitleStyled = styled.div`

    text-align: center;
    font-size: 2rem;
    padding: 3vh;
    font-weight: 600;
    margin: 12vh auto 0;
    border-top: 1px solid #626262; 
    border-bottom: 1px solid #626262; 
    width: 60%;
    span {
        display: block;
        font-family: 'Sacramento', cursive;
        font-size: 4rem;
        color: #e6bc28;
    }
    @media (max-width: 600px) {
        font-size: 1.5rem;
        margin-top: 16vh;
        span {
            font-size: 2rem;
        }
    }
`;