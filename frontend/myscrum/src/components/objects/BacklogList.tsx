import * as React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import RootRef from "@material-ui/core/RootRef";
import ListItemText from '@mui/material/ListItemText';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


export default function BacklogList() {
    const data_list = ["hogefuga", "piyopiyo",  "gekogeko"]
    const [rows, setRows] = React.useState([
      { id: "1", name: "item1", index: 0, order: 0 },
      { id: "2", name: "item2", index: 1, order: 1 },
      { id: "3", name: "item3", index: 2, order: 2 },
      { id: "4", name: "item4", index: 3, order: 3 },
      { id: "5", name: "item5", index: 4, order: 4 },
    ]);

    const reorder = (startIndex: number, endIndex: number) => {
      const result = Array.from(rows);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      // result.map((row, index) => (row.order = index));
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

    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={"characters"}>
        {(provided) => (
            <List ref={provided.innerRef}>  
              {rows.map((item, index) => (
                <Draggable key={item.name} draggableId={item.name} index={item.index}>
                  {(provided) => (
                  <ListItem 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                    <ListItemText primary={item.id} />
                    <ListItemText primary={item.name} secondary={item.name}/>
                    <ListItemText primary={item.name} />
                  </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
      </Droppable>
    </DragDropContext>
  )
};

