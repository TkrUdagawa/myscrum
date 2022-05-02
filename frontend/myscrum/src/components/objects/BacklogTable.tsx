import * as React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TextField from '@mui/material/TextField';
import Point from "./Point";


export default function DragAndDropTable() {
    const [rows, setRows] = React.useState([
      { id: "1", title: "モンスターボールを作る", index: 0, point: 3 },
      { id: "2", title: "最初のポケモンを仲間にする", index: 1, point: 2 },
      { id: "3", title: "ポケモン図鑑を手に入れる", index: 2, point: 1 },
      { id: "4", title: "ジムリーダーを倒す", index: 3, point: 55 },
      { id: "5", title: "四天王を倒す", index: 4, point: 55 },
    ]);
  
    const [age, setAge] = React.useState('');

    const reorder = (startIndex: number, endIndex: number) => {
      const result = Array.from(rows);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };
    // @ts-ignore  
    const onDragEnd = (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      const update = reorder(source.index, destination.index);
      setRows(update);
    };
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 50 }}>id</TableCell>
              <TableCell>title</TableCell>
              <TableCell>point</TableCell>
            </TableRow>
          </TableHead>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={"dndTableBody"}>
              {(provided) => (
                <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                  {rows.map((row, index) => (
                    <Draggable
                      draggableId={row.id}
                      index={index}
                      key={row.id}
                    >
                      {(provided) => (
                        <TableRow
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TableCell >{row.id}</TableCell>
                          <TableCell ><TextField id={row.id} defaultValue={row.title} fullWidth variant="standard" /></TableCell>
                          <TableCell ><Point defaultValue={row.point} /></TableCell> 
                        </TableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </DragDropContext>
        </Table>
      </TableContainer>
    );
  }