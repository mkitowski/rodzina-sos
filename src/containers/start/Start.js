import React, { useEffect, useRef } from 'react';
import { SectionWrapper } from '../styled/SectionWrapper';
import background from '../../assets/Couple.jpg';
import logo from '../../assets/logo.png';
import tail1 from '../../assets/tail1.jpeg';
import tail2 from '../../assets/tail2.jpeg';
import { LogoWrapper } from './styled/LogoWrapper';
import { TitleWrapper } from '../styled/TitleWrapper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MoreIconWrapper } from './styled/MoreIconWrapper';
import { DarkWrapper } from '../styled/DarkWrapper';
import { PageWrapper } from '../styled/PageWrapper';
import { SubTitle } from '../styled/SubTitle';
import { ContentWrapper } from '../styled/ContentWrapper';
import { BottomWrapper } from './styled/BottomWrapper';
import { ImageBox } from './components/ImageBox';
import { TailsWrapper } from './styled/TailsWrapper';
import { Loader } from '../../components/loader/Loader';

export const Start = (props) => {
    const { isFetchingPage, fetchPage, page, isError } = props;
    useEffect(() => {
        if (!isFetchingPage && !isError) {
            fetchPage('start');
        }
    }, []);
    console.log(page);

    const second = useRef(null)

    const clickHandler = () => {
        window.scrollTo(0, second.current.offsetTop);
    }

    const hasSettings = page.hasOwnProperty('motto') && !isFetchingPage;
    return (
        <>
            {!hasSettings || isFetchingPage ?
            <Loader/> :
            <PageWrapper>
                <SectionWrapper img={background}>
                    <DarkWrapper>
                        <LogoWrapper logo={logo} />
                        <TitleWrapper>
                            {page.title}
                        </TitleWrapper>
                        <MoreIconWrapper onClick={clickHandler}>
                            {page.more}
                            <ExpandMoreIcon />
                        </MoreIconWrapper>
                    </DarkWrapper>
                </SectionWrapper>
                <SectionWrapper ref={second}>
                    <SubTitle>
                        {page.subTitle}
                    </SubTitle>
                    <ContentWrapper>
                        {page.content}
                    </ContentWrapper>
                    <BottomWrapper>
                        {page.bottomTitle}
                    </BottomWrapper>
                    <TailsWrapper>
                        <ImageBox
                            image={tail1}
                            text={page.motto.first}
                        />
                        <ImageBox
                            image={tail2}
                            text={page.motto.second}
                        />
                    </TailsWrapper>
                </SectionWrapper>
            </PageWrapper>}
        </>
    )
}