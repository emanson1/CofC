import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {showModal, hideModal} from '../actions/bluevilleActions';
import Marquee from 'react-double-marquee';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import Background from '../Images/floorpic2.png';
import CofCLogo from '../Images/CofCLogo.jpg';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import HelpIcon from '@mui/icons-material/Help';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PaidIcon from '@mui/icons-material/Paid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { ReactComponent as StairsIcon } from '../Images/stairs_1.svg';
const tabs = {
  // 'instrument': Instruments,
  // 'settings':  Settings,
  // 'dashboard': Dashboard
}

const useStyles = makeStyles((theme) => ({
 triPane:{opacity:.75},
 blueBar:{backgroundColor:'#003569'},
  pageClass:{
  border:'1px solid #8C92B4',
  backgroundColor:'#003569',
  padding:20
  
 },
  iconSize:{
  transform: 'scale(13.8)',
  
  
 },
 iconSizeMedium:{
  transform: 'scale(4.1)',
  paddingTop: 15,
  
  
  
 },
 iconStairs:{
  transform: 'scale(0.8)',
  color:'white'
  
 },
 alignBottom:{
  display:'table-cell',
  verticalAlign:'middle',
  textAlign:'center',
  border:'1px dotted #888',
  
 },
  root: {
    width: '100%',
  },
  linkOffset:{
    paddingTop:20,
    
  },
  boxBlue:{
  backgroundColor:'#003569',
  paddingTop:30,
  paddingBottom:30,
  color:'#FFFFFF',
  textAlign:'center',
  fontSize:24,
  paddingLeft:30,
  paddingRight:30,
  height:81,
  width:121

  },
  marginTopBottom30:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
  linkClass:{
    fontSize:20,
    textAlign:'center'
  },
  headingClass:{
    backgroundColor:'white',
    
  },
 logoClass:
 {
  paddingTop:10,
  display: 'flex',
  justifyContent: 'center',
  textAlign:'center',   
  paddingBottom:10,
},
placeStairs: {
  verticalAlign:'top',
  position:'relative',
  top:-20,
},
copyWhite:{
fontSize:20,
color:'white',
//fontWeight:'bold'

},
logoColor:{
  paddingTop:30,
  color: '#003569',
  //color: '#8C92B4',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4'
  //fontFamily:'cursive'
},
  panorama:{
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    
    
  },
  headingLarge:{
    //paddingTop:50,
    //paddingBottom:10,
    
    color:'white',
    fontWeight:'bold',
    textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black'
  },
  headingMedium:{
   
    fontSize:45,
    fontWeight:'bold'
  },
  contactBox:{
    paddingTop:10,
    backgroundColor: '#ffcc00',
    color: '#003569',
    height:141,
    width:141,
    fontSize:30,
    display: 'flex',
    justifyContent: 'center',
    textAlign:'center',   
    fontWeight:'bold'
  },
  darkBlueBackgroundLayer:
  {
    backgroundColor:'#145493',
    color:'white'

  },
  whiteBackgroundLayer:
  {
    backgroundColor:'white',
    color:'#145493'

  },
  li:
  {
    fontSize:19
  }
}));
const InstrumentWrapper = props => {
  const {handleClose, handleOpen, rej, sel, instruments, setInstruments,setRej,setSel,setIsLoggedIn} = props;
  const classes = useStyles();
  
  
    

  useEffect(() => {
  }, []); // <-- Have to pass in [] here!

  // const handleClick = () => {
  //   setValue(-1);
  // };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);

  //   event.stopPropagation();
  // };
  var openModal = (modalProps)=>{
    props.showModal(modalProps);
 }
  return (
    <div className={classes.pageClass}>
      <Grid container className={classes.headingClass}>
      <Grid item xs={3}>
      <div className={classes.logoClass}><img src={CofCLogo}/></div></Grid>
      <Grid item xs={6}>
      <Grid container className={classes.linkOffset}>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>Home</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>Services</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>Gallery</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>About</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a href="https://classic-floors-of-charleston.business.site/?utm_source=gmb&utm_medium=referral" target="_blank">Google</a></Grid>
      <Grid item xs={2} ><a className={classes.linkClass} href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">Facebook</a></Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12}><Typography variant={'h2'} className={classes.logoColor} style={{textAlign:'center'}}> CFC Hardwood Floors LLC</Typography></Grid>
      </Grid>
      
      </Grid>  
      <Grid item xs={3}><div className={classes.marginTopBottom30}><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}><Box className={classes.contactBox}>Request Quote</Box></a></div>
      </Grid>
      </Grid>
<Grid container><Grid>&nbsp;</Grid></Grid>
      <Grid container className={classes.panorama}>
        <Grid item xs={12}>
        <Grid>
        <Grid item xs={12}>
          <Typography variant={'h3'} className={classes.headingLarge} style={{paddingTop:30,paddingBottom:30,textAlign:'center'}}>Wood Floor Refinishing Service in Irmo, SC.<br/>  Open today until 5:00 PM</Typography>
        </Grid>
        
      </Grid>
  <Grid className={classes.blueBar}><br/></Grid>    
      <Grid container style={{paddingTop:60}}>
        <Grid item xs={2}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={10}>
        <Grid container >
        <Grid item xs={1}>
        <AccountBoxIcon className={classes.iconSize} style={{paddingTop:16,paddingRight:12, color: '#003569'}}/>
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.headingLarge}  variant={'h4'}>
          <div className={classes.headingMedium}>CFC Hardwood is:</div>
          <ul>
            <li>Family owned business serving the greater Columbia area for over twenty years</li>
            <li>Exceptional work and honest pricing, with 100s of satisfied customers and a 5 star Google rating</li>
            </ul></Typography>
            </Grid>
      
            <Grid item xs={1}>
            </Grid>
        </Grid>
<Grid item xs={12}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></Grid>
          
          
          
         </Grid>
        <Grid item xs={1}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid item xs={12}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></Grid>
      
      <Grid container style={{backgroundColor:'white'}}>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>Home</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>Services</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>Gallery</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', data:{}})}>About</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a href="https://classic-floors-of-charleston.business.site/?utm_source=gmb&utm_medium=referral" target="_blank">Google</a></Grid>
      <Grid item xs={2} ><a className={classes.linkClass} href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">Facebook</a></Grid>
      </Grid>
      
      </Grid>
      </Grid>
      
    </div>
  
  );
}




const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps
});

const mapDispatchToProps = (dispatch) => ({
    showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
    hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(InstrumentWrapper);