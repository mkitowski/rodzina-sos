import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: fixed;
    ${props => props.top ? `background-color: rgba(0,0,0,.5);` : `background-color: rgb(98,98,98);`}
    // ${props => !props.top && 'background-color: rgb(98,98,98);'}
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    z-index: 500;
    top: 0;
    transition: background-color .3s ease-in-out;
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
                    ${props => props.top ? `color: gray` : `color: #e6bc28`};
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