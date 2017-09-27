import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Edit extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }
}

Edit.propTypes = {
  item: PropTypes.object,
};

export default Edit;
