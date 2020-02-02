import React from 'react';
import Parser from 'html-react-parser';
import {SubTitle} from './../../styled/SubTitle';
import {ContentWrapper} from './../../styled/ContentWrapper';

export const SectionsDescription = props => {
    const {sections} = props;
    return (
        <>
            {sections.map(el => {
                return (<>
                    <SubTitle>
                        {el.subTitle}
                    </SubTitle>
                    <ContentWrapper>
                        {
                            el.content.map(item => {
                                return <div>
                                    {Parser(item)}
                                </div>
                            })
                        }
                    </ContentWrapper>
                </>)
            })}
        </>
    )
}