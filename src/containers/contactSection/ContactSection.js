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
                result.push(<ContactWrapperSection key ={key} icon={key} text={section[key]}/>)
            }
            return result;
        
    }
    return <ContactWrapper>
        {isSectionFetched && renderWrappSections()}
    </ContactWrapper>;
}
