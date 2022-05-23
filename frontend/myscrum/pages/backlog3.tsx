// @ts-nocheck

import * as React from 'react';
import type { NextPage } from "next";
import ResponsiveAppBar from "../src/components/layout/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Button from '@mui/material/Button';


import PBIList2, {PBIList2Props} from '../src/components/objects/PBIList2';
import {getPBIs2} from '../src/lib/api';

const dummyData = {
    columns: [
        {columnId: 0, title: "todo", items: [
            {itemId: 0, title: "hoge1"},
            {itemId: 1, title: "hoge2"},
            {itemId: 2, title: "hoge3"},                        
        ]},
        {columnId: 1, title: "doing", items: [
            {itemId: 3, title: "fuga1"},
            {itemId: 4, title: "fuga2"},
            {itemId: 5, title: "fuga3"},                        
        ]},
        {columnId: 2, title: "done", items: [
            {itemId: 6, title: "piyo1"},
            {itemId: 7, title: "piyo2"},
            {itemId: 8, title: "piyo3"},                        
        ]},
    ]
}

const Backlog: NextPage = () => {
  const dummyf = () => {console.log("called dummy")};
  const [pbiData, setPBIData] = React.useState({columns: []});
  React.useEffect(
    () => {
      //const data = getPBIs2();
      setPBIData(dummyData)
    }
  , [])
  /*
  const addNode: void = () => {
      const newId = pbiData.length + 1
    const newPbiData = [...pbiData,
      {id: newId, title: "hoge", body: "fugafuga"}
    ];
    setPBIData(newPbiData);
  }
  */

  const filterItem = (column: any, item: any, destColumnId: number, index: number) =>{
    console.log("filterItem")
    const newItems = column.items.filter((newItem) => newItem.itemId !== item.id)
    const movedItem = {itemId: item.id, title: item.title}
    const newNewItems = column.columnId === destColumnId
            ? [...newItems.slice(0, index), 
               movedItem,
                ...newItems.slice(index)]
            : newItems
        return newNewItems
  }
  const moveItem = (item: any, destColumnId: number, index: number) => {
    const newData = {
        columns: pbiData.columns.map((column, idx) => {
            return {
                ...column,
                items: filterItem(column, item, destColumnId, index)
            }
        })
    }
    setPBIData(newData);
  }
  
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid container spacing={2}>
            <DndProvider backend={HTML5Backend}>
                {console.log("pbidata", pbiData)}
                {pbiData.columns.map((column, idx) => {
                    return (<Grid key={idx} item xs={4}>
                            <PBIList2 key={idx} items={column.items} title={column.title} 
                                columnId={idx} index={idx} moveItem={moveItem}/>
                        </Grid>
                        )
                })}
            </DndProvider>
          
          <Grid item xs={12}>
            <Button variant="contained">add node</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Backlog;