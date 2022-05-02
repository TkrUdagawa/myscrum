// @ts-nocheck

import * as React from 'react';
import type { NextPage } from "next";
import ResponsiveAppBar from "../src/components/layout/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Button from '@mui/material/Button';


import PBIList, {PBIListProps} from '../src/components/objects/PBIList';
import {getPBIs} from '../src/lib/api';
const Backlog: NextPage = () => {
  const dummyf = () => {console.log("called dummy")};
  const [pbiData, setPBIData] = React.useState([]);
  React.useEffect(
    () => {
      const data = getPBIs();
      setPBIData(data)
    }
  , [])
  const addNode: void = () => {
    const newPbiData = [...pbiData,
      {"title": "hoge", "point": 1, f:setPBIData, childNodes:[]},
    ];
    setPBIData(newPbiData);
  }
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DndProvider backend={HTML5Backend}>
              <PBIList data={pbiData}/>
            </DndProvider>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={addNode}>add node</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Backlog;