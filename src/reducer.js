import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

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

export function items(state = [], action) {
  let items;
  switch (action.type) {
    case ITEMS_LOAD:
      return action.items;
    case ITEMS_PUSH:
      return [...state, action.item];
    case ITEMS_UPDATE:
      items = [...state];
      items[action.key] = action.item;
      return items;
    case ITEMS_DELETE:
      items = [...state];
      delete items[action.key];
      return items;
    default:
      return state;
  }
}

export default combineReducers({
  nav,
  key,
  items,
});
