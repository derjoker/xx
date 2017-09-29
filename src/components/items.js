import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

class Items extends React.Component {
  componentWillMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { items = [], set, navigation } = this.props;
    return (
      <View>
        {items.map((item, index) => (
          <Text
            key={index}
            onPress={() => {
              set(index);
              navigation.navigate('Item', { item });
            }}
          >
            {item.text}
          </Text>
        ))}
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
