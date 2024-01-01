import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, withFormik } from 'formik';
import { TextField as FormikTextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CofCLogoSmall from '../Images/CFCLogoSmall.png';
import Attachments from '../Pages/Attachments.jsx';
import { SES } from '@aws-sdk/client-ses';
import { AWS } from 'aws-sdk';
import { Email } from '../Pages/Email.jsx';
import { render } from '@react-email/render';
import {
  SESClient,
  SendRawEmailCommand,
  SendEmailCommand,
} from "@aws-sdk/client-ses";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const emailHtml = render(<Email url="https://www.cfchardwoodfloorsllc.com" />);



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
      overflow: 'none',
      border: '2px solid #ffcc00',
      padding: 5,
     // overflow: 'hidden',
      justifyContent: 'center',
      
    },
    subContainerBackground: {
      backgroundImage: `url(${CofCLogoSmall})`,
      backgroundSize: 'cover',
      [theme.breakpoints.down('xs')]: {
        backgroundSize: '300px 500px',
        
      },
      
    },
    titleClass: {
      paddingTop: 10,
      color: '#003569',
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: 'white',
      textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
      fontSize: 45,

      [theme.breakpoints.down('lg')]:
      {
        fontSize: 40,
      },
      [theme.breakpoints.down('md')]:
      {
        fontSize: 35,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        textShadow: '-1px 0 #8C92B4, 0 1px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 23,
      },

    },
    subContainer: {
      backgroundColor: 'white',
      // width: '100%',
      // height: '100%',
      opacity: .85,
      padding: 10,
      [theme.breakpoints.down('xs')]: {
        padding: 2
      }

    },
    subHeading: {
    
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: '#ffcc00',
      color: '#003569',
      textAlign: 'center',
      opacity: 1,
      borderBottom: '2px solid #003569',
      borderTop: '2px solid #003569',
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 11,
      }

    },
    submitButtonGrid: {
      textAlign: 'center',

    },
    submitButton: {
      width: '90%',
      backgroundColor: 'green',
      fontSize: 25,
    },
    inputText: {
      fontSize: 22,
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]:
      {
        fontSize: 17,
      },
      
    }
  }));
  const classes = useStyles();
  const { modalProps, handleClose } = props;
  const handleClose1 = () => {
    const closestr = "here";
    handleClose();
  };

  
  
  const submitForm = async (values) => {
    const secret_name = "S3SESAPIKey";
  
    const client = new SecretsManagerClient({
      region: "us-east-1",
    });
    
    let response;
    
    try {
      response = await client.send(
        new GetSecretValueCommand({
          SecretId: secret_name,
          VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        })
      );
    } catch (error) {
      // For a list of exceptions thrown, see
      // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
      throw error;
    }
    
    const secret = response.SecretString;
      
    try
    {
      
      const params = {
        Source: 'edwardmaddenanson@gmail.com',
      Destination: {
        ToAddresses: ['edwardmaddenanson@gmail.com'],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: emailHtml,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'hello world',
        },
      },
    };
    process.env.AWS_SDK_LOAD_CONFIG = true; 
    var AWS = require("aws-sdk");
    console.log(AWS.config)
   
    const client = new SESClient({
      credentials: {
        accessKeyId: secret.AccessKeyId,
        secretAccessKey: secret.SecretAccessKey
      },
      region: "us-east-1",
    });
    
    const command = new SendEmailCommand(params);
    const response = await client.send(command);
  var here="here";
    
  //  await ses.sendEmail(params);
  }
  catch (ex)
  {
    
    alert(ex);
    var ex1=ex;
  }
  };
    
  const getSchema = () => {
    const yupObj = Yup.object().shape({
      customername: Yup.string().required("Please give us a good contact name"),
      comments: Yup.string().required("Please give us a little information.  We will reach out if we need more"),
      customerphone: Yup.string().when('customeremail', {is: (email) => !email || email.length === 0, then: Yup.string().required('Phone or email is required')}),
      customeremail: Yup.string().email('Must be a valid email address').max(255).when('customerphone', {is: (phone) => !phone || phone.length === 0, then: Yup.string().required('Phone or email is required')}),
    }
    , ['customerphone', 'customeremail']);
    return yupObj
  };
  return (
    <Formik
      initialValues={{ customername: '', customeremail: '',customerphone:'', comments: '', attachments: new Array() }}
      onSubmit={ (values)=>submitForm(values)}
    //  onSubmit={(values) => submitForm(values)}
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
          <Grid item xs={12}>
            <Typography variant={'h5'} className={classes.titleClass} style={{ textAlign: 'center' }}>
              CFC Hardwood Floors LLC
            </Typography>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid xs={12} item>
              <Typography className={classes.subHeading} variant="h6">
                Please enter the following information and we reach out with a quote and/or for more information.
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.subContainerBackground}>
            <Grid xs={12}>
              <Grid xs={12} className={classes.subContainer}>
                <Grid xs={12}>
                  <br />
                </Grid>
                <Grid container direction="row" alignItems="center">
                  <Grid xs={12} item>
                    <Typography className={classes.inputText} variant="h6">
                      Please supply your name:
                    </Typography>
                  </Grid>
                  <Grid xs={12} item >
                    <Field component={FormikTextField}
                      variant="outlined"
                      label="Name"
                      margin="dense"
                      name="customername"
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item >
                    <Typography variant="h6" className={classes.inputText} >
                      Please enter a valid email address (or phone number):
                    </Typography>
                  </Grid>
                  <Grid xs={12} item className={classes.inputClass}>
                    <Field component={FormikTextField}
                      variant="outlined"
                      label="Email"
                      margin="dense"
                      name="customeremail"
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item >
                    <Field component={FormikTextField}
                      variant="outlined"
                      label="Phone"
                      margin="dense"
                      name="customerphone"
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item >
                    <Typography variant="h6" className={classes.inputText} >
                      Please let us know what we can do to help:
                    </Typography>
                  </Grid>
                  <Grid xs={12} item className={classes.inputClass}>
                    <Field component={FormikTextField}
                      multiline
                      variant="outlined"
                      label="Comments"
                      margin="dense"
                      name="comments"
                      fullWidth
                      minRows={3}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} className={classes.submitButtonGrid} item>
            <Button type='submit' className={classes.submitButton} variant='contained' color='primary'>Send Info</Button>
          </Grid>
          <Grid xs={12} item >
            <hr />
          </Grid>
          <Grid xs={12} item >
            <Typography variant="h6" className={classes.inputText}>Upload any pictures/info?
            </Typography>
          </Grid>
          <Grid xs={12} item >
            <Attachments setFieldValue={setFieldValue} values={values} />
          </Grid>
        </Grid>
      </Form>)
      }
    </Formik >
  )
};