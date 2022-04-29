import * as React from 'react';
import PBI, {PBIProps} from "./PBI";


const data = [{title: "hoge", point: 10, children: [
        {title: "fuga", point: 5, children: [
            {title: "var", point: 2, children: []}
        ]},
        {title: "piyo", point: 1, children: []}
    ]},
    {
        title: "aaa", point: 1, children: []
    }
]


const PBIList = ({data, f}) => {
    const callSetPBI = () => setPBIData([{title: "piyo", point: 1000, children: []}]);
    return data.map((pbi, idx) => {
        return <PBI key={idx} title={pbi.title}
                point={pbi.point}
                children={pbi.children} 
                f={f}
                />
    })
}

export default PBIList;