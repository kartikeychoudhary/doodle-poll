import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Test extends Component {
  render() {
    return (
      <div
        style={{
          padding: "0px",
          minHeight: "100vh",
          background:
            "linear-gradient(320deg, rgba(115,31,170,1) 35%, rgba(255,0,82,1) 100%)",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          width="100%"
          alignItems="center"
        >
          <Grid
            item
            xs={11}
            sm={10}
            ms={8}
            style={{ marginTop: "10vw", width: "100%" }}
          >
            <Paper elevation={3} style={{ minHeight: "60vh" }}>
              Test
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Test;
