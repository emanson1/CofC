import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '@mui/icons-material/CameraAlt';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  
  imageCss:{
    width:300,
    heigh:300,
    [theme.breakpoints.down('lg')]:
    { 
      
     width: 250,
     height: 250
   },  
   
    [theme.breakpoints.down('md')]:
    { 
      
     width: 200,
     height: 200
   },  
   
    [theme.breakpoints.down('sm')]:
    { 
      
     width: 150,
     height: 150
   },  
    [theme.breakpoints.down('xs')]: {
      //width: '90vw',
      width: 100,
      height: 100
    }
  },
  iconSize: {
      
    color: '#003569',
    transform: 'scale(11.0)',
    paddingTop:20,
    paddingRight:10,

    [theme.breakpoints.down('lg')]:
      { 
        transform: 'scale(9.0)',
        paddingTop:16,
        paddingRight:12,
      },  
      [theme.breakpoints.down('md')]: {
        paddingTop:16,
        paddingRight:14,
        vtransform: 'scale(7.0)',
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop:12,
        paddingRight:16,
        transform: 'scale(4.5)',
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop:6,
        paddingRight:24,
        transform: 'scale(2.2)',
      }
    },
   
  triPane: { opacity: .75 },
  blueBar: { backgroundColor: '#003569' },
  pageClass: {
    border: '1px solid #8C92B4',
    backgroundColor: '#003569',
    padding: 20

  },
  iconStairs: {
    transform: 'scale(0.8)',
    color: 'white'

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
  linkOffset: {
    paddingTop: 20,

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
  marginTopBottom30: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  linkClass: {
    fontSize: 20,
    textAlign: 'center'
  },
  headingClass: {
    backgroundColor: 'white',

  },
  logoClass:
  {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: 10,
  },
  placeStairs: {
    verticalAlign: 'top',
    position: 'relative',
    top: -20,
  },
  copyWhite: {
    fontSize: 20,
    color: 'white',
    //fontWeight:'bold'

  },
  logoColor: {
    paddingTop: 30,
    color: '#003569',
    //color: '#8C92B4',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4'
    //fontFamily:'cursive'
  },
  headingLarge: {
    //paddingTop:50,
    //paddingBottom:10,

    color: 'white',
    fontWeight: 'bold',
    textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black'
  },
  headingMedium:{
    [theme.breakpoints.up('sm')]:
    { 
     fontSize:45,
   },  
    [theme.breakpoints.down('sm')]: {
      //width: '90vw',
    fontSize:32,
    },
    [theme.breakpoints.down('xs')]: {
      //width: '90vw',
    fontSize:22,
    },
   color:'white',
   fontWeight:'bold',
   textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black'
 },

  contactBox: {
    paddingTop: 10,
    backgroundColor: '#ffcc00',
    color: '#003569',
    height: 141,
    width: 141,
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
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
  }
}));
const Gallery = props => {
  const classes = useStyles();
  const [listOfImages, setListOfImages] = useState([]);
  const importAll = (r) => {
    const images = r.keys().map(r);
    return images;
  };
  useEffect(() => {
    const images = importAll(require.context('../Images/Gallery/', false, /\.(png|jpe?g|svg)$/));

    setListOfImages(images);
  }, []);
  return (
<div>
    <Grid container style={{ paddingTop: 60 }}>
      <Grid item xs={2}>
        {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
      </Grid>
      <Grid item xs={10}>
        <Grid container >
          <Grid item xs={1}>

            <CameraIcon className={classes.iconSize} style={{ paddingTop: 16, paddingRight: 12, color: '#003569' }} /></Grid>
          <Grid item xs={10} style={{ textAlign: 'middle' }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.headingMedium} variant={'h4'}>
                <div ><br/><br/><br/>CofC Hardwood Gallery:
                </div>
                </Typography>
                </Grid>
            </Grid>
            <Grid xs={2}></Grid>
          </Grid>
        </Grid>
        </Grid>

      
      
      
      </Grid>
      <Grid container><Grid xs={12}><hr/></Grid></Grid>
<Grid container>
  
  <Grid item xs={1}></Grid>
  <Grid item xs={10}>
      <Grid container >
      <Grid style={{textAlign: 'center', backgroundColor: 'white', opacity: '.6'}} item xs={12}><br/><br/><br/></Grid>
        {
        listOfImages.map(
          (image, index) => <Grid style={{textAlign: 'center', backgroundColor: 'white', opacity: '.6'}} md={3} sm={4} xs={4}><a Href={`${image}`} target='_blank'><img className={classes.imageCss} key={index} src={image} alt="info" style={{ border: '3px solid #003569' }}></img></a></Grid>
        )
      }
      </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
</Grid>
</div>      
      );
           
        }

const mapStateToProps = (state) => ({
        modalProps: state.blueville.modalProps
  });
  
  const mapDispatchToProps = (dispatch) => ({
      });
      export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
