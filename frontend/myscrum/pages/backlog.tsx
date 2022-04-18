import type { NextPage } from "next";
import ResponsiveAppBar from "../src/components/layout/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Button from "@material-ui/core/Button";
import BacklogList from '../src/components/objects/BacklogList';

const Backlog: NextPage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BacklogList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Backlog;
