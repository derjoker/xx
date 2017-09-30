import React from 'react';
import { connect } from 'react-redux';

import Item from '../components/item';

const mapStateToProps = state => ({
  item: state.items.get(state.key),
});

export default connect(mapStateToProps)(Item);
