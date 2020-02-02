import React from 'react'
import { LoaderWrapper } from './styled/LoaderWrapper';
import CircularProgress from '@material-ui/core/CircularProgress';



export const Loader = () => {
    return <LoaderWrapper>
        <CircularProgress/>
    </LoaderWrapper>
}