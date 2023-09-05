import { BluevilleActionTypes } from '../Types/bluevilleTypes'

export const showModal = (modalProps) => {
  const types=BluevilleActionTypes;
  const here="here";
  return dispatch => 
  {
    dispatch({type: BluevilleActionTypes.showModal, payload: modalProps});
  }
};

export const showModal1 = ( modalProps, modalType ) => {
try{
  const here="here";
  
  return dispatch => {
    const here2="here2";
  //   dispatch({type: ActionTypes.showModal});
    }
}
catch (error) 
  {
    const here1=error;
  }
  };

export const hideModal = () => dispatch => {
  const here="here";
  dispatch({ type: BluevilleActionTypes.hideModal});
}
//#endregion

