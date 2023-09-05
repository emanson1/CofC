import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, withFormik } from 'formik';
import { TextField as FormikTextField, Select } from 'formik-material-ui';
import {Grid} from '@material-ui/core';
import Logo from '../Images/LOGO.png';
import '../App.css';
import { connect } from 'react-redux';
import {showModal, hideModal} from '../actions/bluevilleActions';



const LoggedIn = props => {
const [emailCreated,setEmailCreated]=useState(false);
const [emailExists,setEmailExists]=useState(true); 
const [passwordCorrect,setPasswordCorrect]=useState(true);
const [showPassword,setShowPassword]=useState(false); 
const {setIsLoggedIn} = props;
const [registeredUsers, setRegisteredUsers]=useState([{email:"edwardmaddenanson@gmail.com",password:"blueville"}]);

const getSchema = () => {
  const yupObj=Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string()
      .required("Required"),

  });
  return yupObj
}
  const login = (values, setIsLoggedIn) => {
    const user=registeredUsers.find(a=>a.email===values.email);
    if (user===undefined)
    {
      setEmailExists(false);
      
    }
    else
    {
     if (user.password!==values.password) 
     {
      setPasswordCorrect(false);
      
     }
    else{
    setIsLoggedIn(true);
    }
  }
  };
  var openModal = (modalProps)=>{
    props.showModal(modalProps);
 }
  return (
    <Formik
    initialValues={{ email: '', password: '' }}
   // onSubmit={ (values)=>alert("here")}
    onSubmit={ (values, setSubmitting)=>login(values, setSubmitting, props.setIsLoggedIn)}
    validationSchema={getSchema()}
      >{({
        values,
        touched,
        errors,
        dirty,
        setSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      /* and other goodies */
    }) => (
      
    
      <div style={{backgroundColor:'white',border: '2px solid #444c4f',  borderRadius: '10px 10px 10px 10px'}}>
      
     <Form><div className='cardContainer' style={{  height:'60vh', width: '90vw', backgroundImage: `url(${Logo})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'contain', backgroundPosition:'center top', textAlign:'center', minHeight:'100%', minWidth:'40vh'}} >
     
       <Grid container className='loginTitle'>

      <Grid item xs={2}></Grid>
        <Grid item xs={8}>Please Login:</Grid>
        <Grid item xs={2} >
        </Grid>
      </Grid>
      </div>
     <div style={{position: 'relative', bottom: '0', left: '0', width:'100%' }}>
     <Grid container>
        {/* <Grid xs={12} lg={4} style={{verticalAlign:'bottom'}}>
      User Name:
      </Grid> */}
      <Grid xs={12}>
      <Field component={FormikTextField}
        variant="outlined"
        label="User Name"
        margin="dense"
        name="email"
        fullWidth 
        onClick={()=>setEmailExists(true)}/>
      {!emailExists && <div style={{color:"red",fontWeight:"bold"}}>User account cannot be found. Please create an account</div>}
      </Grid>

      </Grid>
      <Grid container>
        {/* <Grid xs={12} lg={4}>
      Password:
      </Grid> */}
      <Grid xs={12}>
        <Field component={FormikTextField}
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        label="Password"
        margin="dense"
        name="password"
        fullWidth 
        onClick={()=>setPasswordCorrect(true)}/>
          {!passwordCorrect && <div style={{color:"red",fontWeight:"bold"}}>The password does not match our records.</div>}
          </Grid>
      
      
        </Grid>
      <Grid container>
      <Grid xs={12}><React.Fragment>
      {emailCreated && <div style={{textAlign:"center",color:"red"}}>Your account has been created.  Please login.</div>}
        {values.password && values.email && !(errors.email) && 
        <div><button type="button" onClick={()=>login(values, props.setIsLoggedIn)} style={{backgroundColor:'#49b64a', border:'0px solid #444c4f', fontWeight:'bold', width:'100%', height:'30px', color:'#444c4f', fontSize:'14pt'}}>
          Login
        </button></div>}
        <br/></React.Fragment>
      </Grid>
      </Grid></div>
      </Form>
   <Grid container>
        {/* <Grid xs={12} lg={4}>
      Password:
      </Grid> */}
      <Grid xs={12}>
        
        <div><button onClick={()=>openModal({open:true, modalType:'CreateNewAccount',setCreated:setEmailCreated, regUsers:registeredUsers, setRegUsers:setRegisteredUsers, setLoggedIn:props.setIsLoggedIn, instrument:{}, background:Logo})} class={'loginClass'} >
          Create an account
        </button><br/></div>
      
      
        </Grid>
        
       </Grid> 
      <Grid container className='loginFoot'>
      <Grid item xs={2}></Grid>
        <Grid item xs={8}>&#169; Pinch Street LLC.</Grid>
        <Grid item xs={2} >
        </Grid>
      </Grid>   
      
      
     
     </div>
    
    
      )}
</Formik>);}
const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps
});

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
  hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);


