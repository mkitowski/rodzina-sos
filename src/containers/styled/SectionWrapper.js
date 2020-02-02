import styled from 'styled-components';

export const SectionWrapper = styled.section`
    width: 100vw;
    ${props => props.top ? `min-height: 50vh` : `min-height: 100vh`}
    background: url(${props => props.img}) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
`;