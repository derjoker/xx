import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Items from './items.container';
import Item from './item.container';
import Edit from './edit.container';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'xx',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Items onPress={() => navigation.navigate('Text')} />
      </View>
    );
  }
}

class TextScreen extends React.Component {
  render() {
    return (
      <View>
        <Item />
      </View>
    );
  }
}

TextScreen.navigationOptions = props => {
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

class EditScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Edit />
        <Button
          title="Delete"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  }
}

EditScreen.navigationOptions = props => {
  const { state } = props.navigation;
  const { params } = state;
  return {
    title: 'Edit',
    headerLeft: (
      <Button
        title="Cancel"
        onPress={() => {
          const { goBack } = props.navigation;
          goBack();
        }}
      />
    ),
    headerRight: (
      <Button
        title="Done"
        onPress={() => {
          const { goBack } = props.navigation;
          goBack();
        }}
      />
    ),
  };
};

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Text: { screen: TextScreen },
  Edit: { screen: EditScreen },
});

export default Navigator;
