import React, { useEffect, Fragment } from 'react';
import { SectionWrapper } from './styled/SectionWrapper';
import background from '../../assets/Couple.jpg';
import logo from '../../assets/logo.png';
import tail1 from '../../assets/tail1.jpeg';
import { LogoWrapper } from './styled/LogoWrapper';
import { TitleWrapper } from './styled/TitleWrapper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MoreIconWrapper } from './styled/MoreIconWrapper';
import { DarkWrapper } from './styled/DarkWrapper';
import { PageWrapper } from './styled/PageWrapper';
import { SubTitle } from './styled/SubTitle';
import { ContentWrapper } from './styled/ContentWrapper';
import { BottomWrapper } from './styled/BottomWrapper';
import { ImageBox } from './components/ImageBox';

export const Start = (props) => {
    const { isFetchingPage, fetchPage, page } = props;
    useEffect(() => {
        if (!isFetchingPage) {
            fetchPage('start');
        }
    }, []);

    const hasSettings = page.hasOwnProperty('motto') && !isFetchingPage;
    console.log(Object.keys(page));
    return (
        hasSettings && <PageWrapper>
            <SectionWrapper img={background} id={1}>
                <DarkWrapper>
                    <LogoWrapper logo={logo} />
                    <TitleWrapper>
                        {page.title}
                    </TitleWrapper>
                    <MoreIconWrapper>
                        {page.more}
                        <ExpandMoreIcon />
                    </MoreIconWrapper>
                </DarkWrapper>
            </SectionWrapper>
            <SectionWrapper id='second'>
                <SubTitle>
                    {page.subTitle}
                </SubTitle>
                <ContentWrapper>
                    {page.content}
                </ContentWrapper>
                <BottomWrapper>
                    {page.bottomTitle}
                </BottomWrapper>
                <Fragment>
                    <ImageBox
                        image={tail1}
                        text={page.motto.first}
                    />
                </Fragment>
            </SectionWrapper>
        </PageWrapper>

    )
}