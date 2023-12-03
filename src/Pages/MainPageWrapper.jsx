import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { showModal, hideModal } from '../actions/bluevilleActions';
import Marquee from 'react-double-marquee';
import Home from '../Pages/Home.jsx';
import Services from '../Pages/Services.jsx';
import About from '../Pages/About.jsx';
import Gallery from '../Pages/Gallery.jsx';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import Background from '../Images/Gallery/floorpic2.png';
import CofCLogo from '../Images/Gallery/CFCLogo.png';
const tabs = {
  // 'instrument': Instruments,
  // 'settings':  Settings,
  // 'dashboard': Dashboard
}

const useStyles = makeStyles((theme) => ({
  triPane: { opacity: .75 },
  blueBar: { backgroundColor: '#003569' },
  pageClass: {
    border: '1px solid #8C92B4',
    backgroundColor: '#003569',
    padding: 20,
    [theme.breakpoints.down('sm')]: {

      padding: 10,
    },
    [theme.breakpoints.down('xs')]: {

      padding: 10,
    },


  },
  alignBottom: {

    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    border: '1px dotted #888',

  },
  root: {
    width: '100%',
  },
  marginTopBottom30: {
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },

  boxBlue: {
    backgroundColor: '#003569',
    paddingTop: 30,
    paddingBottom: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    paddingLeft: 30,
    paddingRight: 30,
    height: 81,
    width: 121

  },
  linkOffset: {
    paddingBottom: 20,
    backgroundColor: 'white',
    paddingTop: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingBottom: 10,
    },

    [theme.breakpoints.down('sm')]: {

      paddingBottom: 5,
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 2,

    },

  },
  linkClass: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    
    [theme.breakpoints.down('lg')]:
    {
      fontSize: 30,
    },
    [theme.breakpoints.down('md')]:
    {
      fontSize: 24,
    },
    [theme.breakpoints.down('sm')]: {
      //width: '90vw',
      fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
      //width: '90vw',
      fontSize: 13,
    },

  },
  headingClass: {
    backgroundColor: 'white',

  },
  logoClass:
  {
    paddingTop: 30,
    paddingBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 5,
      paddingBottom: 5,
    },

  },

  copyWhite: {
    fontSize: 20,
    color: 'white',
    //fontWeight:'bold'

  },
  TitleClass: {
    paddingTop: 180,
    color: '#003569',
    textAlign: 'center',

    fontWeight: 'bold',
    textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
    fontSize: 85,

    [theme.breakpoints.down('lg')]:
    {
      fontSize: 70,
    },
    [theme.breakpoints.down('md')]:
    {
      paddingTop: 95,
      fontSize: 60,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 70,
      fontSize: 30,
      textShadow: '-1px 0 #8C92B4, 0 1px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',

    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 15,

      fontSize: 18,
    },


  },
  panorama: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
  },
  headingLargeContainer: {
    borderTop: '#003569 20px solid',
    borderBottom: '#003569 20px solid',
    [theme.breakpoints.down('sm')]:
    {
      borderTop: '#003569 10px solid',
      borderBottom: '#003569 10px solid',
    },
    [theme.breakpoints.down('xs')]:
    {
      borderTop: '#003569 5px solid',
      borderBottom: '#003569 5px solid',
    },

  },
  headingLarge: {
    fontSize: 65,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black',
    [theme.breakpoints.down('lg')]:
    {
      fontSize: 50,
    },
    [theme.breakpoints.down('md')]:
    {
      fontSize: 40,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      paddingTop: 10,
      paddingBottom: 10,

    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      paddingTop: 5,
      paddingBottom: 5,

    },

  },
  headingMedium: {
    fontSize: 45,
    fontWeight: 'bold'
  },

  contactBox: {
    paddingTop: 10,
    backgroundColor: '#ffcc00',
    color: '#003569',
    height: 140,
    width: 140,
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    [theme.breakpoints.down('lg')]:
    {
      fontSize: 25,
      height: 120,
      width: 120,

    },
    [theme.breakpoints.down('md')]:
    {
      fontSize: 20,
      height: 100,
      width: 100,

    },
    [theme.breakpoints.down('sm')]: {
      //width: '90vw',
      fontSize: 15,
      height: 80,
      width: 80,

    },
    [theme.breakpoints.down('xs')]: {
      //width: '90vw',
      justifyContent: 'center',
      paddingTop: 5,
      marginLeft: 10,
      marginTop: 10,
      height: 30,
      width: 35,
      fontSize: 10,

    },
  },
  darkBlueBackgroundLayer:
  {
    backgroundColor: '#145493',
    color: 'white'

  },
  whiteBackgroundLayer:
  {
    backgroundColor: 'white',
    color: '#145493'

  },
  li:
  {
    fontSize: 19
  },
  imageClass:
  {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',

    },

  }
}));
const MainPageWrapper = props => {
  const { handleClose, handleOpen, rej, sel, instruments, setInstruments, setRej, setSel, setIsLoggedIn } = props;
  const [curWindow, setCurWindow] = useState(<Home />);
  const classes = useStyles();

  useEffect(() => {
  }, []); // <-- Have to pass in [] here!

  var openModal = (modalProps) => {
    props.showModal(modalProps);
  }
  return (
    <div className={classes.pageClass}>
      <Grid container className={classes.headingClass}>
        <Grid item xs={2} sm={3}>
          <div className={classes.logoClass}><img src={CofCLogo} className={classes.imageClass} /></div></Grid>
        <Grid item xs={8} sm={6}>

          <Grid container>
            <Grid item xs={12}><Typography variant={'h2'} className={classes.TitleClass}>CFC Hardwood Floors LLC</Typography></Grid>
          </Grid>

        </Grid>
        <Grid item xs={2} sm={3} className={classes.marginTopBottom30}><a onClick={() => openModal({ open: true, modalType: 'quoteModal', data: {} })}><Box className={classes.contactBox}>Request Quote</Box></a>
        </Grid>
      </Grid>
      <Grid container className={classes.linkOffset}>
        <Grid item xs={3} className={classes.linkClass} ><a onClick={() => setCurWindow(<Home />)}>Home</a></Grid>
        <Grid item xs={2} className={classes.linkClass} ><a onClick={() => setCurWindow(<Services />)}>Services</a></Grid>
        <Grid item xs={2} className={classes.linkClass} ><a onClick={() => setCurWindow(<Gallery />)}>Gallery</a></Grid>
        <Grid item xs={2} className={classes.linkClass}>&nbsp;&nbsp;&nbsp;<a href="https://classic-floors-of-charleston.business.site/?utm_source=gmb&utm_medium=referral" target="_blank">Google</a></Grid>
        <Grid item xs={3} className={classes.linkClass}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">Facebook</a></Grid>

      </Grid>
      <Grid container className={classes.panorama}>
        <Grid item xs={12}>
          <Grid>
            <Grid item xs={12} style={{ opacity: .9 }} className={classes.headingLargeContainer} >
              <Typography variant={'h3'} className={classes.headingLarge}> Wood Floor Refinishing Service in Irmo, SC.<br />  Open today until 5:00 PM</Typography>
            </Grid>

          </Grid>
          <Grid item xs={12} style={{ width: 1600 }}>{curWindow}</Grid>
          <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Grid>

          <Grid container style={{ backgroundColor: 'white' }}>
            <Grid item xs={2} className={classes.linkClass} ><a onClick={() => setCurWindow(<Home />)}>Home</a></Grid>
            <Grid item xs={2} className={classes.linkClass} ><a onClick={() => setCurWindow(<Services />)}>Services</a></Grid>
            <Grid item xs={2} className={classes.linkClass} ><a onClick={() => setCurWindow(<Gallery />)}>Gallery</a></Grid>
            <Grid item xs={3} className={classes.linkClass} ><a href="https://classic-floors-of-charleston.business.site/?utm_source=gmb&utm_medium=referral" target="_blank">Google</a></Grid>
            <Grid item xs={3} className={classes.linkClass} ><a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">Facebook</a></Grid>

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
export default connect(mapStateToProps, mapDispatchToProps)(MainPageWrapper);