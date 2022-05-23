import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const data = [
    {id: 1, title: "hogepiyo", point: 1, children: []},
    {id: 2, title: "hogepiyo", point: 1, children: []},
    {id: 3, title: "hogepiyo", point: 1, children: [
        {id: 4, title: "hogepiyo", point: 1, children: []},
        {id: 5, title: "hogepiyo", point: 1, children: []},        
    ]},
]

function renderChildren(children: any[]): any {
    return (
        children.map((child: any[]) => {
            return drawListItem(child);
        })
    )
}

function drawListItem(val: any): any {
    return (
        <>
            <ListItem>
                <ListItemText primary={val.id} />
                <ListItemText primary={val.title} />
                {val.children.length > 0 &&
                    <ExpandMore />
                }
            </ListItem>
            {val.children.length > 0 &&
                renderChildren(val.children)
            }
        </>
    )
}
const BacklogList2 = () => {
    return (
        <List>
            {data.map((val, idx) => {
                return drawListItem(val)
            })}
        </List>
    )
}

export default BacklogList2;
