import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View>
        <Text>{item.text}</Text>
      </View>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
};
