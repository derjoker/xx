import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

const Done = ({ dispatch, navigation }) => (
  <Button
    title="Done"
    onPress={() => {
      dispatch({
        type: 'DONE', // TODO
      });
      navigation.goBack();
    }}
  />
);

Done.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
};

export default connect()(Done);
