import React, { Fragment, useState, useEffect } from 'react';
import { icons } from '../../../constants/icons';


export const ContactWrapperSection = (props) => {
    const [linkAddress, setAddres] = useState(`https://${props.text}`);
    useEffect(() => {
        console.log(props.icon)
        switch (props.icon) {
            case 'phone':
                setAddres(`tel:${props.text}`);
                break;
            case 'email':
                setAddres(`mailto:${props.text}`);
                break;
            case 'address':
                setAddres(`https://goo.gl/maps/jQntkNC4Twd1ocQq8`);
                break;
            default: setAddres(`https://${props.text}`);
        }
    }, [])

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