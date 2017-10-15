import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import { KEY_SET } from '../actions';

const Add = ({ set, navigation }) => (
  <Button
    title="Add"
    onPress={() => {
      set('%%UNDEFINED_KEY_ADD%%');
      navigation.navigate('Edit');
    }}
  />
);

Add.propTypes = {
  set: PropTypes.func,
  navigation: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  set: key =>
    dispatch({
      type: KEY_SET,
      key,
    }),
});

export default connect(null, mapDispatchToProps)(Add);
