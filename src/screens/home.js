import React from 'react';
import { View } from 'react-native';

import Items from '../containers/items';
import Add from '../containers/add';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Items />
      </View>
    );
  }
}

HomeScreen.navigationOptions = props => {
  const { navigation } = props;
  return {
    title: 'xx',
    headerRight: <Add navigation={navigation} />,
  };
};
