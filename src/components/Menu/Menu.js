import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuWrapper, MenuLogo } from './styled/MenuWrapper';

import { menu } from '../../constants/menu';
import logo from '../../assets/logo.png';

export const Menu = props => {
    const [isTopPosition, setPosition] = useState(true)
    const { lang } = props;

    useEffect(() => {
        const scrollPosition = window.addEventListener('scroll', () => {
            window.pageYOffset ? setPosition(false) : setPosition(true);
        })
        return () => {
            window.removeEventListener('scroll', scrollPosition);
        };
    }, []);

    return (
        <MenuWrapper top={isTopPosition}>
            <MenuLogo logo={logo} />
            <ul>
                {menu[lang].map(el => {
                    return (
                        el.slug !== 'vlog' ?
                            <li key={el.id}><Link to={el.path}>{el.slug}</Link></li> :
                            <li key={el.id}><a href={el.path}>{el.slug}</a></li>
                    )
                })}
            </ul>
        </MenuWrapper>
    )
}