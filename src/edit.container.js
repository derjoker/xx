import React from 'react';
import { connect } from 'react-redux';

import Edit from './edit.component';

const mapStateToProps = state => ({
  item: state.items[state.key],
});

export default connect(mapStateToProps)(Edit);
