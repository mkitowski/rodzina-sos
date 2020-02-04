import React, { useEffect } from 'react';
import { Loader } from '../../components/loader/Loader';
import { PageWrapper } from '../styled/PageWrapper';
import { SectionWrapper } from '../styled/SectionWrapper';
import background from '../../assets/psycho-background.jpeg';
import { DarkWrapper } from '../styled/DarkWrapper';
import { TitleWrapper } from '../styled/TitleWrapper';
import { DataGrid } from './componets/DataGrid';
import { SectionsDescription } from './componets/SectionsDescription';
import { DeatilsWrapper } from './componets/styled/DetailsWrapper';
import { ExampleSituationWrapper } from './componets/styled/ExampleSituationWrapper';
import paper from './../../assets/paper.jpg'
import { ExampleTitleWrapper } from './componets/styled/ExampleTitleWrapper';
import { ExampleContentWrapper } from './componets/styled/ExampleContentWrapper';

export const Psycho = (props) => {
    const { isFetchingPage, fetchPage, isError, therapyPage, isPageFetched } = props;
    useEffect(() => {
        if (!isFetchingPage && !isError && !isPageFetched) {
            fetchPage('psyho');
        }
    }, [isFetchingPage, isError, isPageFetched, fetchPage]);
    const hasContent = therapyPage.hasOwnProperty('sections') && !isFetchingPage;

    return (
        <>
            {isFetchingPage || !hasContent  ?
                <Loader /> :
                <PageWrapper>
                    <SectionWrapper img={background} top={true}>
                        <DarkWrapper top={true}>
                            <TitleWrapper top={true}>
                                {therapyPage.title}
                            </TitleWrapper>
                        </DarkWrapper>
                    </SectionWrapper>
                    <SectionWrapper>
                        <SectionsDescription sections={therapyPage.sections} />
                        <DeatilsWrapper>
                            {therapyPage.details}
                        </DeatilsWrapper>
                        <DataGrid data={therapyPage.therapies} />
                    </SectionWrapper>
                    <SectionWrapper img={paper} top={true}>
                        <ExampleSituationWrapper>
                            <ExampleTitleWrapper>
                                {therapyPage.example.title}
                            </ExampleTitleWrapper>
                            <ExampleContentWrapper>
                                {therapyPage.example.content.map(el => {
                                    return <div>{el}</div>
                                })}
                            </ExampleContentWrapper>
                        </ExampleSituationWrapper>
                    </SectionWrapper>
                </PageWrapper>}
        </>
    )
}