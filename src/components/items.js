import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

class Items extends React.Component {
  componentWillMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { items = [], set, navigation } = this.props;
    return (
      <View>
        <FlatList
          data={items}
          renderItem={info => (
            <Card title={info.item.title}>
              <Text
                onPress={() => {
                  set(info.item.key);
                  navigation.navigate('Item', { item: info.item });
                }}
              >
                {info.item.text}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}

Items.propTypes = {
  items: PropTypes.array,
  load: PropTypes.func,
  navigation: PropTypes.object,
};

export default Items;
