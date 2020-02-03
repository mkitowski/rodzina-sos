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
                        <SectionsDescription sections={page.sections} />
                        <DeatilsWrapper>
                            {page.details}
                        </DeatilsWrapper>
                        <DataGrid data={page.therapies} />
                    </SectionWrapper>
                    <SectionWrapper img={paper} top={true}>
                        <ExampleSituationWrapper>
                            <ExampleTitleWrapper>
                                {page.example.title}
                            </ExampleTitleWrapper>
                            <ExampleContentWrapper>
                                {page.example.content.map(el => {
                                    return <div>{el}</div>
                                })}
                            </ExampleContentWrapper>
                        </ExampleSituationWrapper>
                    </SectionWrapper>
                </PageWrapper>}
        </>
    )
}