import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { reduxForm } from 'redux-form';
import uuid from 'uuid/v1';

import Edit from '../components/edit';
import { ITEMS_UPDATE } from '../actions';

export default connect(
  state => ({
    initialValues: state.items.get(state.key),
  }),
  dispatch => ({
    onSubmit: values => {
      values.key || (values.key = uuid());
      AsyncStorage.setItem(values.key, JSON.stringify(values)).then(() => {
        dispatch({
          type: ITEMS_UPDATE,
          key: values.key,
          item: values,
        });
      });
    },
  })
)(
  reduxForm({
    form: 'edit',
  })(Edit)
);
