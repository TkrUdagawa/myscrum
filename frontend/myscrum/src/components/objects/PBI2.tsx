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
import { Typography } from '@mui/material';

import PBIList from './PBIList';
import {ItemTypes} from '../../itemtypes';
import {PBIData} from '../../lib/api';

export interface PBI2Props {
    id: number,
    title: string,
    columnId: number,
    columnIdx: number,
    moveItem: any,
}

const PBI2 = ({id, title, columnId, columnIdx, moveItem}: PBI2Props) => {
    const ref = React.useRef(null)
    const [, drop] = useDrop({
        accept: ItemTypes.PBI,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: any, monitor) {
            if (!ref.current) {
                return
            }
            const dragId = item.id
            const hoverId = id
            if (dragId === hoverId) {
                return
              }                        
            moveItem(item, columnId, columnIdx);
        },
        drop: () => {console.log("drop")},
    });
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PBI,
        item: {id, title, columnId, columnIdx},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))    
    drag(drop(ref));
    console.log(title);
    return (
        <div ref={ref}>
        <TableRow
          style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
                }}>
            <TableCell>
                <Typography>{title}</Typography>
            </TableCell>             
        </TableRow>
        </div>
    )
}
export default PBI2;