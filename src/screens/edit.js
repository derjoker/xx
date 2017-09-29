import React from 'react';
import { View, Button } from 'react-native';

import Edit from '../containers/edit';
import Done from '../containers/done';

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
  const { navigation } = props;
  const { params } = navigation.state;
  return {
    title: 'Edit',
    headerLeft: <Button title="Cancel" onPress={() => navigation.goBack()} />,
    headerRight: <Done navigation={navigation} />,
  };
};
