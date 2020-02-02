import React, { useEffect } from 'react';
import Parser from 'html-react-parser';
import { Loader } from '../../components/loader/Loader';
import { PageWrapper } from '../styled/PageWrapper';
import { SectionWrapper } from '../styled/SectionWrapper';
import background from '../../assets/psycho-background.jpeg';
import { DarkWrapper } from '../styled/DarkWrapper';
import { TitleWrapper } from '../styled/TitleWrapper';
import { SubTitle } from '../styled/SubTitle';
import { ContentWrapper } from '../styled/ContentWrapper';
import { DataGrid } from './componets/DataGrid';

export const Psycho = (props) => {
    const { isFetchingPage, fetchPage, isError, page } = props;
    useEffect(() => {
        if (!isFetchingPage && !isError) {
            fetchPage('psyho');
        }
    }, []);
    const hasContent = page.hasOwnProperty('sections') && !isFetchingPage;
    return (
        <>
            {isFetchingPage || !hasContent ?
                <Loader /> :
                <PageWrapper>
                    <SectionWrapper img={background} top={true}>
                        <DarkWrapper top={true}>
                            <TitleWrapper top={true}>
                                {page.title}
                            </TitleWrapper>
                        </DarkWrapper>
                    </SectionWrapper>
                    <SectionWrapper>
                        {page.sections.map(el => {
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
                        <DataGrid data={page.therapies} />
                    </SectionWrapper>
                </PageWrapper>}
        </>
    )
}