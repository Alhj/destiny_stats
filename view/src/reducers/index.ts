import platformReducer from './platform';
import platformNumberReducer from './platformNumber';
import { combineReducers } from 'redux'

interface test {
  
}

const allReducers = combineReducers( {
  platform:platformReducer,
  platformNumber: platformNumberReducer
})

export default allReducers