import {action} from '../types/types';

const platformReducer = (state = 'Steam', action:action) => {
  switch(action.type) {
    case 'STEAM':
      state = 'Steam';
      return state;
    case 'PS4': 
      state = 'Ps4';
      return state;
    case 'XBOX': 
      state = 'Xbox';
      return state;
  }
}

export default platformReducer;