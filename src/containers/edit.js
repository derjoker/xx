import React from 'react';
import { connect } from 'react-redux';

import Edit from '../components/edit';

const mapStateToProps = state => ({
  item: state.items[state.key],
});

export default connect(mapStateToProps)(Edit);
