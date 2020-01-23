import { action } from '../types/types';
import { stat } from 'fs';

const platformReducer = (state: string = 'Steam', action: action) => {
  switch (action.type) {
    case 'STEAM':
      state = 'Steam';
      return state;
    case 'PS4':
      state = 'Ps4';
      return state;
    case 'XBOX':
      state = 'Xbox';
      return state;
    default:
      return state
  }
}

export default platformReducer;