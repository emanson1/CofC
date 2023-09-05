import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { connect } from 'react-redux';
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
   const Gallery = props => {
    const classes = useStyles();
    const [listOfImages, setListOfImages] = useState([]);
    const importAll = (r) => {
        const images=r.keys().map(r);
        return images;
    };
    useEffect(() => {
        const images=importAll(require.context('../Images/', false, /\.(png|jpe?g|svg)$/));

        setListOfImages(images);
    }, []);
            return(
                <Grid container style={{paddingTop:60}}>
                  <Grid item xs={12}><Typography className={classes.headingLarge}  variant={'h4'}><div className={classes.headingMedium}>CofC Hardwood Gallery:</div></Typography></Grid>

                  {
                        listOfImages.map(
                          (image, index) =>    <Grid item xs={2} style={{border:'1px yellow solid'}}><img height={100} width={100} key={index} src={image} alt="info"></img></Grid>
                        )
                  }
                </Grid>
            );
        }

const mapStateToProps = (state) => ({
    modalProps: state.blueville.modalProps
  });
  
  const mapDispatchToProps = (dispatch) => ({
   });
  export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
