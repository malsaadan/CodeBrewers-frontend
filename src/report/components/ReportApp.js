import React, { Component } from "react";

//import style.css
import "./style.css";

//Import children

// ###### Import Material UI ############
// Import Grid
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export class ReportApp extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item container spacing={0}>
          <Grid item xs={0} sm={2} />
          <Grid item xs={11} sm={8}>
            <Paper>
              <div className="reportApp">
                <h1> Reports</h1>
              </div>
            </Paper>
            <Grid item xs={0} sm={3}>
              <Paper>
                <div className="reportApp">
                  <h1> total sales</h1>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </Grid>

      // <Grid container direction="column">
      //   <Grid item xs={12}>
      //     <Paper>xs=12</Paper>
      //     <Grid item xs={6}>
      //       <Paper>xs=6</Paper>
      //       <Grid item xs={6}>
      //         <Paper>xs=6</Paper>
      //       </Grid>
      //     </Grid>
      //   </Grid>
      // </Grid>
    );
  }
}

export default ReportApp;
