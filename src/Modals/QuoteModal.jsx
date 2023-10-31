import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, withFormik } from 'formik';
import { TextField as FormikTextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CofCLogo from '../Images/Gallery/CFCLogo.png';
import Attachments from '../Pages/Attachments.jsx';

export default function QuoteModal(props) {

  const [imageList, setImageList] = useState([]);
  const [image64, setImage64] = useState({});
  const [fileObj, setFileObj] = useState();

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file.name);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  const uplFile = (e) => {
    let file = e;
    getBase64(file);
  }
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundImage: `url(${CofCLogo})`,
      backgroundSize: 'cover',
      border: '2px solid black',
      //opacity: .7,
      minWidth: '100%',
      minHeight: 600,
      justifyContent: 'center',
    },
    subContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      opacity: .7,
    },
  }));
  const classes = useStyles();
  const { modalProps, handleClose } = props;
  const handleClose1 = () => {
    const closestr = "here";
    handleClose();
  };
  const submitForm = (values) => {
    return;
  };
  const getSchema = () => {
    const yupObj = Yup.object().shape({
      customeremail: Yup.string().email('Must be a valid email address').max(255).required('Email is required'),
      customername: Yup.string().required("Required"),
      comments: Yup.string().required("Required"),
    });
    return yupObj
  };
  return (
    <Formik
      initialValues={{ customername: '', emailaddress: '', comments: '', attachments: new Array() }}
      // onSubmit={ (values)=>alert("here")}
      onSubmit={(values) => submitForm(values)}
      validationSchema={getSchema()}
    >{({
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      setFieldValue
      /* and other goodies */
    }) => (

      <Form>


        <Grid container className={classes.container}>
          <Grid xs={12} className={classes.subContainer}>
            <Grid container direction="row" alignItems="center">
              <Grid xs={12} item >Quote Modal</Grid>
            </Grid>

            <Grid container direction="row" alignItems="center">
              <Grid xs={12} item ><Typography variant="h6">Please supply your name:</Typography></Grid>
              <Grid xs={12} item className={classes.inputClass}>
                <Field component={FormikTextField}
                  variant="outlined"
                  label="Name"
                  margin="dense"
                  name="customername"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item ><Typography variant="h6">Please enter a valid email address:</Typography></Grid>
              <Grid xs={12} item className={classes.inputClass}>
                <Field component={FormikTextField}
                  variant="outlined"
                  label="Email"
                  margin="dense"
                  name="customeremail"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item ><Typography variant="h6">Please let us know what we can do to help:</Typography></Grid>
              <Grid xs={12} item className={classes.inputClass}>
                <Field component={FormikTextField}
                  variant="outlined"
                  label="Comments"
                  margin="dense"
                  name="comments"
                  fullWidth
                  cols={10}
                />
              </Grid>
              <Grid xs={12} item ><Typography variant="h6">Upload any pictures of the project?</Typography></Grid>
              <Grid xs={12} item >
                <Attachments setFieldValue={setFieldValue} values={values} />
              </Grid>
            </Grid>
            <Button  onClick={handleClose1}>Close Modal</Button>

          </Grid>
        </Grid>

      </Form>)}
    </Formik>
  )
};