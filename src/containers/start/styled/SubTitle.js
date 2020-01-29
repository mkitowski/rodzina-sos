import React, { Fragment } from 'react'

import styled from 'styled-components';

const SubTitleStyled = styled.div`
    color: #626262;
    margin: 0 auto 2rem;
    padding: 10rem 5px 15px;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
`;
const SubTitleUnderline = styled.div`
    width: 10%;
    min-width: 100px;
    height: 3px;
    margin: 20px auto;
    border-top: 1px solid #EFD77F;
    border-top-left-radius: 8px;
    border-left: 1px solid #EFD77F;
    border-right: 1px solid #EFD77F;
    border-top-right-radius: 8px;
`;

export const SubTitle = ({children}) => {
    return (
        <Fragment>
            <SubTitleStyled>
                {children}
                <SubTitleUnderline />
            </SubTitleStyled>
        </Fragment>

    )
}