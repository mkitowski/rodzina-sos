import React, { useState, useEffect } from 'react';
import { icons } from '../../../constants/icons';


export const ContactWrapperSection = (props) => {
    const [linkAddress, setAddres] = useState(`https://${props.text}`);
    useEffect(() => {
        switch (props.icon) {
            case 'phone':
                setAddres(`tel:${props.text}`);
                break;
            case 'email':
                setAddres(`mailto:${props.text}`);
                break;
            case 'address':
                setAddres(`https://goo.gl/maps/PUZhgVUuSfVBiT7f8`);
                break;
            case 'facebook':
                setAddres('https://www.facebook.com/RodzinaSOSpl-261293988080556/');
                break;
            case 'youtube':
                setAddres('https://www.youtube.com/channel/UCnve3Px3V_AlJH2hirKkcKA/');
                break;
            default: setAddres(`https://${props.text}`);
        }
    }, [props.icon, props.text])

    return (
        <a href={linkAddress} target='_blanc'>
            {icons[props.icon]}<br />
            {Array.isArray(props.text) ?
                <div className='text'>
                    {props.text.map(el => {
                        return <div key={el}>{el}</div>
                    })}
                </div> :
                <div className='text'>{props.text}</div>
            }
        </a>
    )
}