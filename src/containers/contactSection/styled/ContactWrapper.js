import styled from 'styled-components';

export const ContactWrapper = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #626262;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 3rem 0;
    flex-wrap: wrap;
    >div, a {
        color: white;
        transition: color .3s ease-in-out;
        cursor: pointer;
        text-decoration: none;
        :hover {
            color: #E6BC28;
        }
    }
    svg {
        font-size: 1.8rem;
    }
    @media screen and (max-width: 800px) {
        .text {
            display: none;
        }
    }
`;