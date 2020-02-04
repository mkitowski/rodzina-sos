import React from 'react';

import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay'
import heart from './../../../assets/logo.png';

export const Mapa = ({coordinates}) => {

    return (
        <Map defaultCenter={coordinates} defaultZoom={15} width={window.innerWidth} height={400}>
            <Overlay anchor={coordinates} offset={[20, 45]}>
                <img src={heart} width={40} height={45} alt='' />
            </Overlay>
        </Map>
    )

}