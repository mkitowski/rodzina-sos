import React, {useEffect} from 'react';
import {ContactWrapper} from './styled/ContactWrapper';
import { ContactWrapperSection } from './component/ContactWrapperSection';


export const ContactSection = (props) => {
    const { isFetchingSection, fetchSection, section, isSectionFetched } = props;
   
    useEffect(() => {
        if (!isFetchingSection) {
            fetchSection('contactSection');
        }
    }, []);

    const renderWrappSections = () => {
            const result = [];
            for (const key in section){
                result.push(<ContactWrapperSection icon={key} text={section[key]}/>)
            }
            return result;
        
    }
    console.log(isSectionFetched)
    return <ContactWrapper>
        {isSectionFetched && renderWrappSections()}
    </ContactWrapper>;
}
