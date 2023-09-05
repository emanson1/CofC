import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function WishlistModal (props) {
const {instrument, modalProps, classes,handleClose}=props;
const handleClose1 = () => {
  const closestr="here";
  handleClose();
};
return(
        <div style={{width:"300px",backgroundColor:"white"}}>
           <button type="button" onClick={handleClose1}>
      Close Modal
    </button>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Wishlist Modal</Grid>
        </Grid>
        <Box>The wishlist items would appear here.</Box>
     </div>
    
     
    )
  };