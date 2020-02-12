import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuWrapper, MenuLogo } from './styled/MenuWrapper';

import { menu } from '../../constants/menu';
import logo from '../../assets/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export const Menu = props => {
    const [isTopPosition, setPosition] = useState(true)
    const [isMenuVisible, setVisible] = useState(false)
    const { lang } = props;

    useEffect(() => {
        const scrollPosition = window.addEventListener('scroll', () => {
            window.pageYOffset ? setPosition(false) : setPosition(true);
        })
        return () => {
            window.removeEventListener('scroll', scrollPosition);
        };
    }, []);
    
    const clickHandler = () => {
        setVisible(!isMenuVisible);
    }

    return (
        <MenuWrapper top={isTopPosition}>
        {isMenuVisible ?
            <CloseIcon className={'burger'} onClick={clickHandler}/> :
            <MenuIcon className={'burger'} onClick={clickHandler}/>}

            <MenuLogo logo={logo} />
            <ul className={isMenuVisible && 'menu_visible'}>
                {menu[lang].map(el => {
                    return (
                        el.slug !== 'vlog' ?
                            <li key={el.id} onClick={clickHandler}><Link to={el.path}>{el.slug}</Link></li> :
                            <li key={el.id} onClick={clickHandler}><a href={el.path}>{el.slug}</a></li>
                    )
                })}
            </ul>
        </MenuWrapper>
    )
}