import React, { useEffect } from 'react';
import { SectionWrapper } from '../styled/SectionWrapper';
import { PageWrapper } from '../styled/PageWrapper';
import { Loader } from '../../components/loader/Loader';
import { TitleWrapper } from '../styled/TitleWrapper';
import { Mapa } from './components/Map';
import { ContentWrapper } from './../styled/ContentWrapper';
import background from './../../assets/contact.jpeg';
import { DarkWrapper } from '../styled/DarkWrapper';
import { ContentLine } from '../styled/ContentLine';


export const Contact = (props) => {
    const { isFetchingPage, fetchPage, isError, page, isPageFetched } = props;
    useEffect(() => {
        if (!isFetchingPage && !isError && !isPageFetched) {
            fetchPage('contact');
        }
    }, [isFetchingPage, isError, isPageFetched, fetchPage]);
    
    return (
        <>
            {!isPageFetched || isFetchingPage ?
                <Loader /> :
                <PageWrapper>
                    <SectionWrapper top={true} img={background}>
                        <DarkWrapper top={true}>
                            <TitleWrapper top={true}>
                                {page.title}
                            </TitleWrapper>
                        </DarkWrapper>

                    </SectionWrapper>
                    <SectionWrapper top={true}>

                        <ContentWrapper>
                            <ContentLine>{page.location}</ContentLine>
                            <ContentLine><b>{page.address[0]}</b></ContentLine>
                            <ContentLine><b>{page.address[1]}</b></ContentLine>
                            <ContentLine>{page.hint}</ContentLine>
                            <ContentLine><a href={`tel:${page.tel}`}>{page.tel}</a></ContentLine>
                            <ContentLine><a href={`mailto:${page.email}`}>{page.email}</a></ContentLine>
                        </ContentWrapper>
                        <Mapa coordinates={page.geolocation} />
                    </SectionWrapper>
                </PageWrapper>}
        </>
    )
}