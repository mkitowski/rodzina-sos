import React, { useState } from 'react';
import styled from 'styled-components';

import MapGL, { Marker } from 'react-map-gl';
import heart from './../../../assets/logo.png';

const Icon = styled.div`
    background: url(${heart}) no-repeat;
    width: 50px;
    height: 50px;
    background-size: contain;
    position: relative;
    top: -40px;
    left: -20px;

`;
const SIZE = 50;

export const Mapa = ({ coordinates }) => {

    const [viewport, setViewport] = useState({
        latitude: coordinates[0],
        longitude: coordinates[1],
        zoom: 12
    });

    return (
        <MapGL
            mapboxApiAccessToken={'pk.eyJ1IjoibWtpdG93c2tpIiwiYSI6ImNrNmR1c2g3cDBhaXczbm12ZnFrMW13NGgifQ.WoJPSjYOzJS3MWfCvf9XrA'}
            {...viewport}
            width="100vw"
            height="300px"
            onViewportChange={setViewport}
        >
            <Marker longitude={coordinates[1]} latitude={coordinates[0]}>
                <Icon />
                <svg
                    height={SIZE}
                    viewBox="0 0 24 24"
                    style={{
                        cursor: 'pointer',
                        fill: '#d00',
                        stroke: 'none',
                        transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                    }}
                />
            </Marker>
        </MapGL>
    );

}