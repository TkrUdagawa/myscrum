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
import PBIList from './PBIList';

export interface PBIProps {
    title: string,
    point: number,
    children: PBIProps[],
    f: any
}

const PBI = ({title, point, children, f}: PBIProps) => {
    const [open, setOpen] = React.useState(false);
    const setHoge = () => {
        f([{title: "aaa", point:1000, children: []}]);
    }
    return (
        <>
        <TableRow>
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
            <TableCell onClick={() =>  f([{title: "aaa", point:1000, children: []}])}>
                <TextField id="standard-basic" label="pt" defaultValue={point} variant="standard" />
            </TableCell>                          
        </TableRow>
        <Box sx={{ml: 3}}>
        <Table>
            <TableRow>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <PBIList data={children} />
                </Collapse>
            </TableRow>
            </Table>
        </Box>  
        </>
    )
}
export default PBI;