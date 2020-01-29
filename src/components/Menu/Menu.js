import React, { ReactFragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MenuWrapper, MenuLogo } from './styled/MenuWrapper';

import { menu } from '../../constants/menu';
import logo from '../../assets/logo.png';

export const Menu = props => {
    const { lang } = props;


    console.log(menu[lang]);

    return (
        <MenuWrapper>
            <MenuLogo logo={logo} />
            <ul>
                {menu[lang].map(el => {
                    return (
                        <li key={el.id}><Link to={el.path}>{el.slug}</Link></li>
                    )
                })}
            </ul>
        </MenuWrapper>
    )
}