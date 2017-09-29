import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Edit from '../components/edit';
import { ITEMS_UPDATE } from '../actions';

export default connect(
  state => ({
    initialValues: state.items[state.key],
  }),
  dispatch => ({
    onSubmit: values =>
      dispatch({
        type: ITEMS_UPDATE,
        key: 1, // TODO
        item: values,
      }),
  })
)(
  reduxForm({
    form: 'edit',
  })(Edit)
);
