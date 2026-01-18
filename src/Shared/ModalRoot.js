import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog,Grid } from '@material-ui/core';
import {connect} from 'react-redux';
import { hideModal } from '../actions/bluevilleActions';
//import QuoteModal from '../Modals/QuoteModal';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const Modals= {
    //   quoteModal: QuoteModal
   };
   
 
const ModalRoot = props => {
  const background=props.background;
  const modalProps=props.modalProps;
  const modalType=props.modalType;
  const instrument=props.modalProps.instrument;
  const SpecificModal = Modals[modalType];
 
 const classes = makeStyles();




return (
  
<Dialog
  open={props.open}
  onClose={props.hideModal}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
<div>
<SpecificModal handleClose={props.hideModal} modalProps={modalProps}  />
</div>
</Dialog>

);
}

const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps,
  modalType: state.blueville.modalProps.modalType,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);

