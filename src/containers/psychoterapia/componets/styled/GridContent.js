import styled from 'styled-components';

export const GridContent = styled.div`
    color: #626262;
    max-width: 870px;
    margin: 0 auto;
    padding: ${props => props.visible ? '10px 15px' : '0'};
    font-size: 1rem;
    text-transform: none;
    overflow: hidden;    
    max-height:${props => props.visible ? `500px` : `0`};
    opacity:${props => props.visible ? `1` : `0`};
    transition: all .3s linear;
    background-color: rgba(92,92,92,.2);
    :last-child {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    ul {
        margin-left: 2rem;
    }
`;