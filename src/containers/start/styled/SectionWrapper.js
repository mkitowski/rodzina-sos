import styled from 'styled-components';

export const SectionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${props => props.img}) no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
`;