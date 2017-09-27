import React from 'react';
import { View } from 'react-native';

import Items from '../containers/items';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'xx',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Items onPress={() => navigation.navigate('Item')} />
      </View>
    );
  }
}
