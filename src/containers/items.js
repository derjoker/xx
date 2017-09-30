import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import uuid from 'uuid/v1';

import Items from '../components/items';

import { KEY_SET, ITEMS_LOAD } from '../actions';

const items = [
  {
    title: 'iPhone 8',
    text:
      'Ein ganz neues Design aus Glas. Die beliebteste Kamera der Welt, jetzt noch besser. Der intelligenteste und leistungs­stärkste Chip, den es je in einem Smartphone gab. Kabelloses Laden – ganz einfach. Und Augmented Reality, so beeindruckend wie noch nie. iPhone 8. Eine neue iPhone Generation.',
  },
  {
    title: 'iPhone X',
    text:
      'Unsere Vision war schon immer ein iPhone, das nur aus Display besteht. So faszinierend, dass das eigentliche Gerät hinter dem Erlebnis verschwindet. Und so intelligent, dass es auf ein Tippen, ein Wort und sogar einen Blick reagieren kann. Mit dem iPhone X ist diese Vision jetzt Realität. Sag der Zukunft hallo.',
  },
];

const mapStateToProps = state => ({
  items: state.items.valueSeq().toJS(),
});

const mapDispatchToProps = dispatch => ({
  load: () =>
    dispatch({
      type: ITEMS_LOAD,
      items: items.map(item => {
        item.key = uuid();
        return [item.key, item];
      }),
    }),
  set: key =>
    dispatch({
      type: KEY_SET,
      key,
    }),
});

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(Items)
);
