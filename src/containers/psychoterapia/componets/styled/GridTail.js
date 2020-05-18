import React, { useState } from 'react';
import styled from 'styled-components';
import { GridContent } from './GridContent';
import Parser from 'html-react-parser';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const GridTailStyled = styled.div`
    color: #626262;
    max-width: 860px;
    margin: 0 auto;
    border-top: 1px solid #626262;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: ${props => props.visible ? '0' : '15px'};
    border-bottom-right-radius: ${props => props.visible ? '0' : '15px'};
    line-height: 3rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: rgba(92,92,92,.2);
    transition: all .3s ease-in-out;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
        background-color: #626262;
        color: #e6bc28;
    }
    svg {
        transform: rotate(${props => props.visible ? '180' : '0'}deg);
        transition: transform .3s ease-in-out;
    }
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export const GridTail = ({ title, content }) => {
    const [visible, setVisible] = useState(false);

    const clickHandler = () => {
        setVisible(!visible);
    }

    return (<>
        <GridTailStyled onClick={clickHandler} visible={visible}>
            {title}
            <ArrowDropDownIcon/>
        </GridTailStyled>
        {content.map(item => {
            return (
                <GridContent visible={visible}>
                    {typeof item !== 'object' ? Parser(item) :
                    <ul>
                        {item.list.map(el => {
                            return <li key={el}>{el}</li>
                        })}
                    </ul>
                    }
                </GridContent>
            )
        })}
    </>)
}