import styled, { keyframes } from 'styled-components';

const heartbeat = keyframes`{
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(1.4);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(1.1);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(1.2);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  }`;

export const MoreIconWrapper = styled.div`

    text-align: center;
    font-size: .8rem;
    text-transform: uppercase;
    position: absolute;
    bottom: 10px;
    width: 100%;
    cursor: pointer;
    svg {
        font-size: 3rem;
        display: block;
        margin: -15px auto 0;
    }
    :hover {
        color: red;
        svg {
            animation: ${heartbeat} 1.5s ease-in-out infinite both;
        }
    }
    @media (max-width: 450px){
      bottom: 40px;
    }
`;