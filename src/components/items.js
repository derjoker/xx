import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

class Items extends React.Component {
  componentWillMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { items = [], set, onPress } = this.props;
    return (
      <View>
        {items.map((item, index) => (
          <Text
            key={index}
            onPress={() => {
              set(index);
              onPress();
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
  onPress: PropTypes.func,
};

export default Items;
