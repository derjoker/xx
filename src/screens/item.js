import React from 'react';
import { View, Button } from 'react-native';

import Item from '../containers/item';

export default class ItemScreen extends React.Component {
  render() {
    return (
      <View>
        <Item />
      </View>
    );
  }
}

ItemScreen.navigationOptions = props => {
  const { state, setParams } = props.navigation;
  const { params } = state;
  return {
    title: 'params.title',
    headerRight: (
      <Button
        title="Edit"
        onPress={() => {
          const { navigate } = props.navigation;
          navigate('Edit', params);
        }}
      />
    ),
  };
};
