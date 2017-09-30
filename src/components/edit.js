import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Field } from 'redux-form';

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
  },
  inputMultiline: {
    height: 120,
    padding: 5,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20,
  },
});

const renderField = ({ input }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      onChangeText={input.onChange}
      defaultValue={input.value}
    />
  </View>
);

const renderFieldMultiline = ({ input }) => (
  <View style={styles.inputContainer}>
    <TextInput
      multiline
      style={styles.inputMultiline}
      onChangeText={input.onChange}
      defaultValue={input.value}
    />
  </View>
);

class Edit extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <View onSubmit={onSubmit}>
        <Text>Title</Text>
        <Field name="title" component={renderField} />
        <Text>Text</Text>
        <Field name="text" component={renderFieldMultiline} />
      </View>
    );
  }
}

export default Edit;
