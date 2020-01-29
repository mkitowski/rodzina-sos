import styled from 'styled-components';

export const LogoWrapper = styled.div`
    background: url(${props => props.logo}) no-repeat;
    background-size: contain;
    background-position: center;
    height: 30%;
    margin: 15% auto 5px;
`;