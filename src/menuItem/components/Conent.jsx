import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
    </Grid>
  );
};

export default Content;
