import React from 'react';
import { connect } from 'react-redux';

import Item from './item.component';

const mapStateToProps = state => ({
  item: state.items[state.key],
});

export default connect(mapStateToProps)(Item);
