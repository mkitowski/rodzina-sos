import React, {useState} from 'react';
import styled from 'styled-components';
import {GridTail} from './styled/GridTail';

const GridStyled = styled.div`
    margin: .5rem auto 3rem;
`;

export const DataGrid = ({data}) => {
    const [visible, setVisible] = useState(false);
    
    const clickHandle = () => {
        const result = !visible;
        setVisible(result);
    }
    return(<GridStyled>
    {data.map(el => {
        return (           
                <GridTail title={el.title} content={el.content}/>
        )
    })}</GridStyled>)
}
