import React from 'react';
import { View, Button } from 'react-native';

import Edit from '../containers/edit';

export default class EditScreen extends React.Component {
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
