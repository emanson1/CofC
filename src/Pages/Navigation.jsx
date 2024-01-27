import React, { useState } from 'react';
import { SwipeableDrawer, Typography, Grid } from '@material-ui/core';

const Navigation = (props) => {
  const {open, setOpen} = props;
    const left =
    <Grid container>
    <Grid item xs={12}><a href="#" onClick={() => setCurWindow(<Home />)}>Home</a></Grid>
    <Grid item xs={12}><a href="#" onClick={() => setCurWindow(<Services />)}>Services</a></Grid>
    <Grid item xs={12}><a href="#" onClick={() => setCurWindow(<Gallery />)}>Gallery</a></Grid>
    <Grid item xs={12}><a href="https://classic-floors-of-charleston.business.site/?utm_source=gmb&utm_medium=referral" target="_blank">Google</a></Grid>
    <Grid item xs={12}><a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">Facebook</a></Grid>
    </Grid>

return (
    <React.Fragment>
    <React.Fragment key={'right'}>
            <SwipeableDrawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >{right}
            </SwipeableDrawer>
        </React.Fragment>
    </React.Fragment>
);
};
export default Navigation;