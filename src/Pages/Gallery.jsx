import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '@mui/icons-material/CameraAlt';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  imageCss: {
    width: 300,
    height: 300, // Fixed spelling typo: 'heigh' -> 'height'
    [theme.breakpoints.down('lg')]: {
      width: 250,
      height: 250
    },
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 200
    },
    [theme.breakpoints.down('sm')]: {
      width: 150,
      height: 150
    },
    [theme.breakpoints.down('xs')]: {
      width: 75,
      height: 75
    }
  },
  iconSize: {
    color: '#003569',
    transform: 'scale(11.0)',
    paddingTop: 20,
    paddingRight: 10,
    [theme.breakpoints.down('lg')]: {
      transform: 'scale(9.0)',
      paddingTop: 26,
      paddingRight: 12,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 28,
      paddingRight: 14,
      transform: 'scale(7.0)', // Fixed spelling typo: 'vtransform' -> 'transform'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 43,
      paddingRight: 16,
      transform: 'scale(4.5)',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56,
      paddingRight: 24,
      transform: 'scale(2.0)',
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
  logoClass: {
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
  },
  logoColor: {
    paddingTop: 30,
    color: '#003569',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4'
  },
  headingLarge: {
    color: 'white',
    fontWeight: 'bold',
    textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black'
  },
  headingMedium: {
    [theme.breakpoints.up('sm')]: {
      fontSize: 45,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
    color: 'white',
    fontWeight: 'bold',
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
  darkBlueBackgroundLayer: {
    backgroundColor: '#145493',
    color: 'white'
  },
  whiteBackgroundLayer: {
    backgroundColor: 'white',
    color: '#145493'
  },
  li: {
    fontSize: 19
  },
  containerClass: {
    paddingTop: 60,
    [theme.breakpoints.down('lg')]: {
      paddingTop: 40,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 30,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 10,
    }
  },
}));

const Gallery = props => {
  const classes = useStyles();
  const [listOfImages, setListOfImages] = useState([]);

  useEffect(() => {
  // 1. Tell Vite to scan your public directory path during compilation
  // (We use a broad wildcard to capture all standard casing variations)
  const globImages = import.meta.glob(
    '/public/images/Gallery/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG}', 
    { eager: true }
  );
  
  // 2. Extract the file keys, and remove the prefix "/public" 
  // because anything in public is served from the root domain directly on IONOS.
  const imageList = Object.keys(globImages).map((filePath) => 
    filePath.replace('/public', '')
  );
  
  setListOfImages(imageList);
}, []);

  return (
    <div>
      <Grid container className={classes.containerClass}>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={11} sm={10}>
          <Grid container >
            <Grid item xs={1}>
              <CameraIcon className={classes.iconSize} />
            </Grid>
            <Grid item xs={10} style={{ textAlign: 'middle' }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className={classes.headingMedium} variant={'h4'}>
                    <div>CofC Hardwood Gallery:</div>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container><Grid item xs={12}><hr /></Grid></Grid>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid style={{ textAlign: 'center', backgroundColor: 'white', opacity: '.6' }} item xs={12}><br /><br /><br /></Grid>
            {
              listOfImages.map((imagePath, index) =>
                <Grid item key={index} style={{ textAlign: 'center', backgroundColor: 'white', opacity: '.6' }} md={3} sm={4} xs={4}>
                  {/* Changed path link reference from image.default to standard fallback string */}
                  <a href={imagePath} target='_blank' rel="noreferrer">
                    <img 
                      className={classes.imageCss} 
                      src={imagePath} 
                      alt={`Gallery view item ${index + 1}`} 
                      style={{ border: '3px solid #003569' }} 
                    />
                  </a>
                </Grid>
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
