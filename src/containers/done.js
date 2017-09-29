import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Button } from 'react-native';

const Done = ({ dispatch, navigation }) => (
  <Button
    title="Done"
    onPress={() => {
      dispatch(submit('edit'));
      navigation.goBack();
    }}
  />
);

Done.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
};

export default connect()(Done);
