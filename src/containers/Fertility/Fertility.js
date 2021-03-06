import React, { useEffect } from 'react';
import Parser from 'html-react-parser';
import { SectionWrapper } from '../styled/SectionWrapper';
import background from '../../assets/plodnosc.jpeg';
import { DarkWrapper } from '../styled/DarkWrapper';
import { TitleWrapper } from '../styled/TitleWrapper';
import { PageWrapper } from '../styled/PageWrapper';
import { Loader } from '../../components/loader/Loader';
import { ContentWrapper } from './../styled/ContentWrapper';
import { ContentLine } from './styled/ContentLine';
import { FertilityPicture } from './styled/FertilityPicture';


export const Fertility = (props) => {
    const { isFetchingPage, fetchPage, isError, page, isPageFetched } = props;
    useEffect(() => {
        if (!isFetchingPage && !isError && !isPageFetched) {
            fetchPage('plodnosc');
        }
    }, [isPageFetched, isError, isFetchingPage, fetchPage]);

    return (
        <>
            {isFetchingPage || !isPageFetched?
                <Loader /> :
                <PageWrapper>
                    <SectionWrapper top={true} img={background} >
                        <DarkWrapper top={true}>
                            <TitleWrapper top={true}>
                                {page.titlePlodnosc}
                            </TitleWrapper>
                        </DarkWrapper>
                    </SectionWrapper>
                    <SectionWrapper top={true}>
                        <ContentWrapper >
                            {
                                page.content && page.content.map(el => {
                                    return <ContentLine>
                                        {Parser(el)}
                                    </ContentLine>
                                })
                            }
                        </ContentWrapper>
                    </SectionWrapper>
                    <FertilityPicture/>
                </PageWrapper>}
        </>
    )
}