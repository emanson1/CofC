import React from 'react';
import {Grid} from '@material-ui/core';

export default function NavBar (props) {
const {instrument,openModal, rej, sel,setRej,setSel, instruments, setInstruments, background}=props;
    return(
    
      <Grid className='cardLinksBottom' container direction="row" justify="center" alignItems="center">
        <Grid xs={4} item><a className='linkClassPlain'>MarketPlace</a></Grid>
        <Grid xs={4} item><a className='linkClassPlain'>Dashboard</a></Grid>
        <Grid xs={4} item><a onClick={()=>openModal({open:true, modalType:'Swiped',instruments:instruments, setInstruments:setInstruments, instrument:instrument, background:background, setRej:setRej, setSel:setSel, rej:rej, sel:sel})} className='linkClassPlain'>Swiped</a></Grid>
      </Grid>
    
    )
  }