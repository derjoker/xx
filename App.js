import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'xx',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text
          onPress={() => {
            navigation.navigate('Text', { title: 'Text' });
          }}
        >
          Home
        </Text>
      </View>
    );
  }
}

class TextScreen extends React.Component {
  static navigationOptions = {
    title: 'Text',
  };

  render() {
    return (
      <View>
        <Text>Text</Text>
      </View>
    );
  }
}

TextScreen.navigationOptions = props => {
  const { state, setParams } = props.navigation;
  const { params } = state;
  return {
    title: params.title,
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
        <Text>Edit</Text>
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

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
