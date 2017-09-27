import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigator from './src/navigator';
import reducer from './src/reducer';

export default class App extends React.Component {
  store = createStore(reducer);

  render() {
    return (
      <Provider store={this.store}>
        <Navigator />
      </Provider>
    );
  }
}
