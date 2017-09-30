import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { reducer as form } from 'redux-form';
import { Map } from 'immutable';

import { Navigator } from './navigator';

import {
  KEY_SET,
  ITEMS_LOAD,
  ITEMS_PUSH,
  ITEMS_UPDATE,
  ITEMS_DELETE,
} from './actions';

function nav(state, action) {
  return Navigator.router.getStateForAction(action, state);
}

export function key(state = 0, action) {
  switch (action.type) {
    case KEY_SET:
      return action.key;
    default:
      return state;
  }
}

export function items(state = Map(), action) {
  switch (action.type) {
    case ITEMS_LOAD:
      return Map(action.items);
    case ITEMS_PUSH:
    case ITEMS_UPDATE:
      return state.set(action.item.key, action.item);
    case ITEMS_DELETE:
      return state.delete(action.key);
    default:
      return state;
  }
}

export default combineReducers({
  nav,
  form,
  key,
  items,
});
