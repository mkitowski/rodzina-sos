import styled from 'styled-components';

export const TitleWrapper = styled.div`
    
    font-family: 'Ubuntu', sans-serif;
    ${props => props.top ? `font-size: 2.5rem` : `font-size: 4rem`};
    font-weight: 700; 
    text-align: center;
    padding: 3vh;
    margin: 12vh auto 0;
    border-top: 1px solid #626262; 
    border-bottom: 1px solid #626262; 
    width: 60%;
    @media (max-width: 450px){
        ${props => props.top ? `font-size: 1.5rem` : `font-size: 2rem`};
        margin-top: 16vh;
    }
`;