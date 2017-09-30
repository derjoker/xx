import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Edit from '../components/edit';
import { ITEMS_UPDATE } from '../actions';

export default connect(
  state => ({
    initialValues: state.items.get(state.key),
  }),
  dispatch => ({
    onSubmit: values =>
      dispatch({
        type: ITEMS_UPDATE,
        key: values.key,
        item: values,
      }),
  })
)(
  reduxForm({
    form: 'edit',
  })(Edit)
);
