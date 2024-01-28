import React, { useState } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import '../src/App.css';
import MainPage from './Pages/MainPage';
import ModalRoot from './Shared/ModalRoot';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { hideModal } from './actions/bluevilleActions';
import Navigation from './Pages/Navigation.jsx';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Gallery from './Pages/Gallery.jsx';

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles((theme) => ({
}))

function App(props) {
  const modalProps=props.modalProps;
  const modalType=modalProps.modalType;
  const open=modalProps.open;
  const [openNav, setOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [curWindow, setCurWindow] = useState(<Home />);
  return (
    <React.Fragment>
      <Router>
        <Route
  exact path='/'
  render={(props) => (
    <MainPage  curWindow={curWindow} setCurWindow={setCurWindow}open={openNav} setOpen={setOpen} {...props}  Home={<Home />} Services={<Services />} Gallery={<Gallery />}/>
  )}
/>
<Navigation open={openNav} setOpen={setOpen} curWindow={curWindow} setCurWindow={setCurWindow} Home={<Home />} Services={<Services />}  Gallery={<Gallery />}/>
      </Router>
    
       {modalType!==undefined && modalType!==null && <ModalRoot handleClose={hideModal} open={open}/> }
       
       </React.Fragment>
 
       )
}
const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps,
  modalType: state.blueville.modalTYpe
});
const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
