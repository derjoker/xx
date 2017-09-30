import { Map } from 'immutable';

import { key, items } from './reducer';
import {
  KEY_SET,
  ITEMS_LOAD,
  ITEMS_PUSH,
  ITEMS_UPDATE,
  ITEMS_DELETE,
} from './actions';

describe('reducer/key', () => {
  it('init', () => {
    expect(key(1, {})).toEqual(1);
  });

  it('set', () => {
    expect(
      key(undefined, {
        type: KEY_SET,
        key: 1,
      })
    ).toEqual(1);
  });
});

describe('reducer/items', () => {
  it('init', () => {
    expect(items(undefined, {})).toEqual(Map());
    expect(
      items(
        Map({
          key: 'value',
        }),
        {}
      ).toJS()
    ).toEqual({
      key: 'value',
    });
  });

  it('load', () => {
    expect(
      items(undefined, {
        type: ITEMS_LOAD,
        items: [['1', 'item1'], ['2', 'item2']],
      }).toJS()
    ).toEqual({
      '1': 'item1',
      '2': 'item2',
    });
  });

  it('push', () => {
    expect(
      items(Map(), {
        type: ITEMS_PUSH,
        item: {
          key: 'key',
          value: 'value',
        },
      }).toJS()
    ).toEqual({
      key: {
        key: 'key',
        value: 'value',
      },
    });
  });

  it('update', () => {
    expect(
      items(
        Map({
          key: {
            key: 'key',
            value: 'value',
          },
        }),
        {
          type: ITEMS_UPDATE,
          item: {
            key: 'key',
            value: 'item',
          },
        }
      ).get('key')
    ).toEqual({
      key: 'key',
      value: 'item',
    });
  });

  it('delete', () => {
    expect(
      items(Map([['key1', 'value1'], ['key2', 'value2']]), {
        type: ITEMS_DELETE,
        key: 'key1',
      }).toJS()
    ).toEqual({
      key2: 'value2',
    });
  });
});
