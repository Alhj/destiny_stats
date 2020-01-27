import { actionTypes } from '../types/types';

const displayName = (state = 'none', action: actionTypes) => {
  switch (action.type) {
    case 'SETDISPLAYNAME':
      state = action.payload;
      return state;
      default: 
      return state;
  }
}


export default displayName;