import * as React from 'react';
import PBI, {PBIProps} from "./PBI";
import {PBIData} from '../../lib/api';

export interface PBIListProps {
    data: PBIData[],
    depth: number,
    parentId: number,
    onChangeFunc: Function,
}

const PBIList = ({data, depth, parentId, onChangeFunc}: PBIListProps) => {
    return (
        <>
        {data.map((pbi, idx) => {
           return <PBI key={idx} id={pbi.id} title={pbi.title}
                point={pbi.point}
                parentId={parentId}
                depth={depth}
                childNodes={pbi.childNodes} 
                onChangeFunc={onChangeFunc}
                />
            })}
        </>)
    
}

export default PBIList;