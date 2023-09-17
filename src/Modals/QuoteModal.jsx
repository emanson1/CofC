import React from 'react';
import { useFormik } from 'formik';
import {Grid, Box, Typography} from '@material-ui/core';
export default function QuoteModal (props) {
const {instrument, modalProps, classes,handleClose}=props;
const handleClose1 = () => {
  const closestr="here";
  handleClose();
};
const formik = useFormik({
  initialValues: {
    email: '',
  },
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
});
return(
  <form onSubmit={formik.handleSubmit}>

  
        <div>
           <button type="button" onClick={handleClose1}>
      Close Modal
    </button>
      <Grid container direction="row" alignItems="center">
        <Grid xs={12} item >Quote Modal</Grid>
        </Grid>
        <Box>
        <Grid container direction="row" alignItems="center">
        <Grid xs={12} item ><Typography variant="h6">Please supply your name:</Typography></Grid>
        <Grid xs={12} item ><input id="customername" type="text" onChange={formik.handleChange} value={formik.values.customerName}/></Grid>
        <Grid xs={12} item ><Typography variant="h6">Please enter a valid email address:</Typography></Grid>
        <Grid xs={12} item ><input id="emailaddress" type="text" onChange={formik.handleChange} value={formik.values.emailaddress}/></Grid>
        <Grid xs={12} item ><Typography variant="h6">Please let us know what we can do to help:</Typography></Grid>
        <Grid xs={12} item ><textarea id="request" type="text" onChange={formik.handleChange} value={formik.values.request}/></Grid>
        <Grid xs={12} item ><Typography variant="h6">Upload any pictures of the project?</Typography></Grid>
        <Grid xs={12} item ></Grid>
        
        </Grid>
          
        </Box>
     </div>
    
     </form>
    )
  };