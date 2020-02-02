import React, {useState} from 'react';
import {GridTail} from './styled/GridTail';

export const DataGrid = ({data}) => {
    const [visible, setVisible] = useState(false);
    
    const clickHandle = () => {
        const result = !visible;
        setVisible(result);
    }
    return(<>
    {data.map(el => {
        return (
            <>
                <GridTail title={el.title} content={el.content}/>
            </>
        )
    })}</>)
}
