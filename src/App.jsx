import React, { useState } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import '../src/App.css';
import MainPage from './Pages/MainPage';
import ModalRoot from './Shared/ModalRoot';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { hideModal } from './actions/bluevilleActions';


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

 
  return (
    <React.Fragment>
      <Router>
        <Route
  exact path='/'
  render={(props) => (
    <MainPage {...props} />
  )}
/>
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
