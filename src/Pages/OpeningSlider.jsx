import React, { Component } from "react";
import Slider from "react-slick";
import {View} from 'react-native';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import {Paper, Grid, Box, Typography} from '@material-ui/core';
import LoggedIn from '../Pages/LoggedIn';
import LogoLarge from '../Images/LogoLarge.jpg';
export default function SimpleSlider (props)  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <div className='cardContainer'>
     <div className='loginContainer'>
     <Box>
    <div>
        <Grid container><Grid item xs={3}></Grid><Grid item xs={6}></Grid><Grid item xs={3}>Login</Grid></Grid>
        <Slider {...settings}>
          <div>
          <img style={{width: '500px', height: '400px', objectFit: 'cover'}} src={LogoLarge} alt='Pin Street' title='Pin Street'/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <LoggedIn handleClose={props.hideModal} setIsLoggedIn={props.setIsLoggedIn}/>
          </div>
        </Slider>
      </div>
      </Box>
      </div>
      </div>
      </View>
    );
  }
