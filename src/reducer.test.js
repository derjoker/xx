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
    expect(items([], {})).toEqual([]);
    expect(items(['item'], {})).toEqual(['item']);
  });

  it('load', () => {
    expect(
      items([], {
        type: ITEMS_LOAD,
        items: ['item'],
      })
    ).toEqual(['item']);
  });

  it('push', () => {
    expect(
      items([], {
        type: ITEMS_PUSH,
        item: 'item',
      })
    ).toEqual(['item']);
  });

  it('update', () => {
    expect(
      items([], {
        type: ITEMS_UPDATE,
        key: 2,
        item: 'item',
      })
    ).toEqual([undefined, undefined, 'item']);
  });

  it('delete', () => {
    expect(
      items(['item0', 'item1', 'item2'], {
        type: ITEMS_DELETE,
        key: 1,
      })
    ).toEqual(['item0', undefined, 'item2']);
  });
});
