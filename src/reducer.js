import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import Navigator from './navigator.component';

function nav(state, action) {
  return Navigator.router.getStateForAction(action, state);
}

export default combineReducers({
  nav,
});
