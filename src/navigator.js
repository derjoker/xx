import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import HomeScreen from './screens/home';
import ItemScreen from './screens/item';
import EditScreen from './screens/edit';

export const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Item: { screen: ItemScreen },
  Edit: { screen: EditScreen },
});

const NavigatorWithState = ({ dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

NavigatorWithState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(NavigatorWithState);
