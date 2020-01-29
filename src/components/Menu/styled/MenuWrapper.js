import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: fixed;
    background: rgba(0,0,0,.5);
    width: 100vw;
    height: 80px;
    box-shadow: 0 0 10px 5px #000000;
    display: flex;
    align-items: center;
    z-index: 500;
    top: 0;
    ul {
        list-style: none;
        display: flex;
        width: 80%;

        li {
            margin: 0 1%;
            a {
                text-transform: uppercase;
                text-decoration: none;
                color: white;
                padding: 0 10px;
                :hover {
                    color: gray;
                    transition: color .3s ease-in-out;
                }
            }
        }
    }
`

export const MenuLogo = styled.div`
    background: url(${props => props.logo}) no-repeat;
    background-position: center;
    background-size: contain;
    height: 70%;
    width: 50px;
    margin-left: 2.5%;
`