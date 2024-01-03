import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';
import { Grid, Box, Typography } from '@material-ui/core';

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en"> 
      <Grid container>
      <Grid item xs={12}>
      You have received a website generated request from: |customername|.
      
      </Grid>
      <Grid item xs={12}>
      <hr/>
      </Grid>
      <Grid container>
      <Grid item xs={4}>
      Phone:
      </Grid>
      <Grid item xs={4}>
      |customerphone|
      </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={4}>
      Email:
      </Grid>
      <Grid item xs={4}>
      |customeremail|
      </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12}>
      <hr/>
      </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12}>
      |comments|
      </Grid>
      </Grid>

      </Grid>
      </Html>
  );
}