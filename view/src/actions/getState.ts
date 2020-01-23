import { action } from '../types/types'


const getState = () => {
  const obj:action = {
    type: 'GETSTATS'
  };
  return obj;
}

export default getState;