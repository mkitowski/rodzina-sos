import React from 'react';
import styled from 'styled-components';
import {GridTail} from './styled/GridTail';

const GridStyled = styled.div`
    margin: .5rem auto 3rem;
`;

export const DataGrid = ({data}) => {

    return(<GridStyled>
    {data.map(el => {
        return (           
                <GridTail title={el.title} content={el.content}/>
        )
    })}</GridStyled>)
}
