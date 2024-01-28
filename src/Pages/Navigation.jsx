import React, { useState } from 'react';
import { SwipeableDrawer, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@mui/icons-material/HomeWork';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CameraIcon from '@mui/icons-material/CameraAlt';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import CofCLogoSmall from '../Images/CFCLogoSmall.png';
import { showModal, hideModal } from '../actions/bluevilleActions';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    iconSize: {
        color: '#003569',
        transform: 'scale(11.0)',
        paddingTop: 5,
        paddingLeft: 10,
        transform: 'scale(2.0)',
    },
    iconGrid: {
        height: 50
    },
    TitleClass: {
        color: '#003569',
        textAlign: 'center',
        fontWeight: 'bold',
        textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
        paddingTop: 15,
        fontSize: 24,
    },
    subContainerBackground: {
        backgroundImage: `url(${CofCLogoSmall})`,
        backgroundSize: 'cover',
      },
      subContainerOpacity:{
backgroundColor:'white',
opacity:'90%'
      },
     navClass:{
        minHeight:500
     },
quoteButton:{
    fontWeight:'bold',
    minWidth:'100%',
    textAlign:'center',
    backgroundColor:'yellow',
},
quoteButtonContainer:{
    width:'100%',
    textAlign:'center',
}
}))
const Navigation = (props) => {
    const { open, setOpen, setCurWindow, Home, Services, Gallery } = props;
    const classes = useStyles();
    var openModal = (modalProps) => {
        props.showModal(modalProps);
      }
    const top =
        
            <Grid container className={classes.navClass}>
                <Grid item xs={12}>
                    <Typography variant={'h2'} className={classes.TitleClass}>
                        CFC Hardwood Floors LLC
                    </Typography>
                </Grid>
                <Grid container className={classes.subContainerBackground}>
                <Grid item xs={12}>
                    <Grid container className={classes.subContainerOpacity}>
                <Grid item xs={12}>
                    <a href="#" onClick={() => setCurWindow(Home)}>
                        <Grid container>
                            <Grid className={classes.iconGrid} item xs={2}>
                                <HomeIcon className={classes.iconSize} />
                            </Grid>
                            <Grid item xs={10}>
                                Home
                            </Grid>
                        </Grid>
                    </a>
                </Grid>
                <Grid item xs={12}>
                    <a href="#" onClick={() => setCurWindow(Services)}>
                        <Grid container>
                            <Grid className={classes.iconGrid} item xs={2}>
                                <EngineeringIcon className={classes.iconSize} />
                            </Grid>
                            <Grid item xs={10}>
                                Services
                            </Grid>
                        </Grid>
                    </a>
                </Grid>
                <Grid item xs={12}>
                    <a href="#" onClick={() => setCurWindow(Gallery)}>
                        <Grid container>
                            <Grid className={classes.iconGrid} item xs={2}>
                                <CameraIcon className={classes.iconSize} />
                            </Grid>
                            <Grid item xs={10}>
                                Gallery
                            </Grid>
                        </Grid>
                    </a>
                </Grid>
                <Grid item xs={12}>
                    <a href="https://classic-floors-of-charleston.business.site/?utm_source=gmb&utm_medium=referral" target="_blank">
                        <Grid container>

                            <Grid className={classes.iconGrid} item xs={2}>
                                <GoogleIcon className={classes.iconSize} />
                            </Grid>
                            <Grid item xs={10}>
                                Google Business Site
                            </Grid>
                        </Grid>
                    </a>
                </Grid>
                <Grid item xs={12}>
                    <a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">
                        <Grid container>
                            <Grid className={classes.iconGrid} item xs={2}>
                                <FacebookIcon className={classes.iconSize} />
                            </Grid>
                            <Grid item xs={10}>
                                Facebook
                            </Grid>
                        </Grid>
                    </a>
                </Grid>
                <Grid item xs={12}>
                <Grid container className={classes.quoteButtonContainer}>
                      <a onClick={() => openModal({ open: true, modalType: 'quoteModal', data: {} })}>
                    <Button className={classes.quoteButton} variant="contained" >Request Quote</Button>
                </a>
                </Grid>
                </Grid>
                </Grid>
                
                </Grid>
                </Grid>
                </Grid>
    return (
        <React.Fragment>
            <React.Fragment key={'top'}>
                <SwipeableDrawer
                    anchor={'top'}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                >{top}
                </SwipeableDrawer>
            </React.Fragment>
        </React.Fragment>
    );
};
const mapStateToProps = (state) => ({
    modalProps: state.blueville.modalProps
  });
  
  const mapDispatchToProps = (dispatch) => ({
    showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
    hideModal: () => dispatch(hideModal()),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
