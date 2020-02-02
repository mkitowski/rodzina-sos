import styled from 'styled-components';

export const TitleWrapper = styled.div`
    
    font-family: 'Ubuntu', sans-serif;
    ${props => props.top ? `margin: calc(20% - 6rem) auto 5px` : `margin: 5px auto`};
    ${props => props.top ? `font-size: 2.5rem` : `font-size: 4rem`};
    font-weight: 700; 
    width: 70%;
    text-align: center;
`;