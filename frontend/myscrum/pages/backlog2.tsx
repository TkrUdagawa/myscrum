import * as React from 'react';
import type { NextPage } from "next";
import ResponsiveAppBar from "../src/components/layout/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Button from "@material-ui/core/Button";
import PBIList from '../src/components/objects/PBIList';
const Backlog: NextPage = () => {
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
const [pbiData, setPBIData] = React.useState(data);
  
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PBIList data={pbiData} f={setPBIData}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Backlog;