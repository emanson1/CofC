import React, { useState } from 'react'
import { Frame, useMotionValue, useTransform, useAnimation } from 'framer';
import MainPageWrapper from './MainPageWrapper';
import { makeStyles } from '@material-ui/core/styles';
function MainPage(props) {

  const useStyles = makeStyles((theme) => ({
   
    container: {
      //display: 'flex',
      width: '95%',
      height:'95%',
      justifyContent: 'center',
      //  [theme.breakpoints.up('sm')]:
      //  { 
      //   width: 160,
      //   height: 400
      // },  
      //  [theme.breakpoints.down('sm')]: {
      //    //width: '90vw',
      //    width: 160,
      //    height: 400
      //  }
    },
    iconSize: {
    [theme.breakpoints.up('sm')]:
      { 
        transform: 'scale(13.8)',
      },  
      [theme.breakpoints.down('sm')]: {
        //width: '90vw',
        transform: 'scale(3.8)',
      }
    },
    iconSizeMedium:{
      transform: 'scale(4.1)',
      paddingTop: 15,
     },
         
  
}));
  
  const {handleClose, handleOpen, setIsLoggedIn} = props;
  const classes=useStyles();
  const [sel, setSel] = useState([]);       
  const [rej, setRej] = useState([]);       
  
   
  

  
  return (
    <div>
    
      {/* {instruments && instruments.map((instrument,i) => */}

          <div className={classes.container}>
           <MainPageWrapper handleOpen={handleOpen}  handleClose={handleClose}  rej={rej} sel={sel}  setSel={setSel} setRej={setRej} setIsLoggedIn={setIsLoggedIn}/>
    
          	{/* <Card key={i}  rej={rej} sel={sel}  setRej={setRej} setIsLoggedIn={setIsLoggedIn} setSel={setSel}></Card> */}
          </div>
          
        {/* )} */}
  </div>
      );
  }

export default MainPage;
