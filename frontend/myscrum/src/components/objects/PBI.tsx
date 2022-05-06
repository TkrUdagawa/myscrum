import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { useDrag, useDrop } from 'react-dnd'

import PBIList from './PBIList';
import {ItemTypes} from '../../itemtypes';
import {PBIData} from '../../lib/api';

export interface PBIProps {
    id: number,
    depth: number,
    parentId: number | null,
    title: string,
    point: number,
    childNodes: PBIData[],
    onChangeFunc: Function,
}

const PBI = ({id, depth, parentId, title, point, childNodes, onChangeFunc}: PBIProps) => {
    const ref = React.useRef(null)
    const [open, setOpen] = React.useState(false);
    const getId = () => {return id};
    const getDepth = () => {return depth};
    const getParentId = () => {return parentId};

    const [, drop] = useDrop({
        accept: ItemTypes.PBI,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            console.log(item);
        },
        drop: () => {console.log("drop")},
    });
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PBI,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))    
    const setHoge = () => {
        onChangeFunc([{title: "aaa", point:1000, childNodes: []}]);
    }
    drag(drop(ref));
    return (
        <>
        <TableRow
         ref={ref} style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
                }}>
            <TableCell>
                <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                 </IconButton>
            </TableCell>
            <TableCell>
                <TextField id="standard-basic" label="Title" defaultValue={title} variant="standard" />
            </TableCell> 
            <TableCell onClick={() =>  onChangeFunc([{title: "aaa", point:1000, childNodes: []}])}>
                <TextField id="standard-basic" label="pt" defaultValue={point} variant="standard" />
            </TableCell>                          
        </TableRow>
        <Box sx={{ml: 3}}>
        <Table>
            <TableRow>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <PBIList data={childNodes} depth={depth+1} parentId={id} onChangeFunc={onChangeFunc}/>
                </Collapse>
            </TableRow>
            </Table>
        </Box>  
        </>
    )
}
export default PBI;