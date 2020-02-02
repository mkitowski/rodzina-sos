import styled from 'styled-components';

export const DarkWrapper = styled.div`
    background: rgba(0,0,0,.3);
    width: 100%;
    ${props => props.top ? `height:50%` : `height: 100%`};
    position: absolute;
    top: 0;
`