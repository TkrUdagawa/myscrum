import * as React from 'react';
import PBI2 from "./PBI2";
import {PBI2Data} from '../../lib/api';
import { Typography } from '@mui/material';

export interface PBIList2Props {
    items: any,
    title: string,
    moveItem: any,
    columnId: number
}

const PBIList = ({items, title, columnId, moveItem}: PBIList2Props) => {
    return (
        <>
        <Typography>{title}</Typography>
        {items.map((item: any, idx: number) => {
            return <PBI2 key={idx} id={item.itemId} title={item.title}
                    columnId={columnId} columnIdx={idx} moveItem={moveItem}
                    />
            })}
        </>)
}

export default PBIList;