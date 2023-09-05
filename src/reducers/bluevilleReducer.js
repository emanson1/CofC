import { BluevilleActionTypes}  from '../Types/bluevilleTypes'

const initialState = {
    modalType: null,
    modalProps: {
      open: false,
      instrument: {},
      background:{}
    }
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case BluevilleActionTypes.showModal:
        return {
          modalProps: action.payload,
          
        }
      case BluevilleActionTypes.hideModal:
        return {
          modalProps: initialState.modalProps,
        }
      default:
        return state
    }
  }