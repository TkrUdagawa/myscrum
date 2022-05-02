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
import { useDrag } from 'react-dnd'

import PBIList from './PBIList';
import {ItemTypes} from '../../itemtypes';

export interface PBIProps {
    title: string,
    point: number,
    childNodes: PBIProps[],
    f: any
}

const PBI = ({title, point, childNodes, f}: PBIProps) => {
    const [open, setOpen] = React.useState(false);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PBI,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))    
    const setHoge = () => {
        f([{title: "aaa", point:1000, childNodes: []}]);
    }
    return (
        <>
        <TableRow ref={drag} style={{
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
            <TableCell onClick={() =>  f([{title: "aaa", point:1000, childNodes: []}])}>
                <TextField id="standard-basic" label="pt" defaultValue={point} variant="standard" />
            </TableCell>                          
        </TableRow>
        <Box sx={{ml: 3}}>
        <Table>
            <TableRow>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <PBIList data={childNodes}/>
                </Collapse>
            </TableRow>
            </Table>
        </Box>  
        </>
    )
}
export default PBI;