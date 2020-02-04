import React, { useEffect } from 'react';
import Parser from 'html-react-parser';
import { SectionWrapper } from '../styled/SectionWrapper';
import background from '../../assets/aboutTop.jpeg';
import { DarkWrapper } from '../styled/DarkWrapper';
import { AboutContentWrapper } from './styled/AboutContentWrapper';
import { PageWrapper } from '../styled/PageWrapper';
import { Loader } from '../../components/loader/Loader';
import { ContentLine } from './../Fertility/styled/ContentLine';
import { FertilityPicture } from './styled/FertilityPicture';
import { AboutTitleStyled } from './styled/AboutTitleStyled';


export const About = (props) => {
    const { isFetchingPage, fetchPage, isError, page, isPageFetched } = props;
    useEffect(() => {
        if (!isFetchingPage && !isError && !isPageFetched) {
            fetchPage('about');
        }
    }, [isFetchingPage, isError, isPageFetched, fetchPage]);
    console.log(!isPageFetched && isFetchingPage)
    return (
        <>
            {!isPageFetched && isFetchingPage ?
                <Loader /> :
                <PageWrapper>
                    <SectionWrapper top={true} img={background} >
                        <DarkWrapper top={true}>
                            <AboutTitleStyled>
                                {typeof page.titleAbout === 'string' && Parser(page.titleAbout)}
                            </AboutTitleStyled>
                        </DarkWrapper>
                    </SectionWrapper>
                    <SectionWrapper top={true}>
                        <AboutContentWrapper >
                            {
                                page.content && page.content.map(el => {
                                    return <ContentLine>
                                        {Parser(el)}
                                    </ContentLine>
                                })
                            }
                        </AboutContentWrapper>
                    </SectionWrapper>
                    <FertilityPicture/>
                </PageWrapper>}
        </>
    )
}