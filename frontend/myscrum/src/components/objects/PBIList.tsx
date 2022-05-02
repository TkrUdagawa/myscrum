import * as React from 'react';
import PBI, {PBIProps} from "./PBI";

export interface PBIListProps {
    data: PBIProps[]
}

const PBIList = ({data}: PBIListProps) => {
    return (
        <>
        {data.map((pbi, idx) => {
            return <PBI key={idx} title={pbi.title}
                point={pbi.point}
                childNodes={pbi.childNodes} 
                f={pbi.f}
                />
            })}
        </>)
    
}

export default PBIList;