import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: fixed;
    ${props => props.top ? `background-color: rgba(0,0,0,.5);` : `background-color: rgb(98,98,98);`}
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    z-index: 500;
    top: 0;
    transition: background-color .3s ease-in-out;
    .burger {
        display: none;
        color: white;
        font-size: 3rem;
        z-index: 700;
    }
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
            :active {
                text-decoration: underline;
                font-weight: 700;
            }
        }
    }

    @media (max-width: 600px) {
        justify-content: space-between;

        ul {
            display: none;
            background-color: #626262;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            padding-top: 100px;
            box-sizing: border-box;
            li {
                font-size: 1.2rem;
                line-height: 2rem;
                text-align: center;
                padding: 10px;
            }
        }
        .burger {
            display: block;
            margin-left: 15px;
        }
        .menu_visible {
            display: block;
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
    @media (max-width: 600px) {
        margin-right: 15px;
    }
`