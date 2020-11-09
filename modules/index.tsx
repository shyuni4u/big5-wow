import { combineReducers } from 'redux';
import countModule from './count';

const rootReducer = combineReducers({
  countModule
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;