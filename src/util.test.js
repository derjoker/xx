/* eslint-env jest */
import { wrap, replace } from './util'

describe('util', () => {
  describe('wrap', () => {
    expect(wrap('text')).toBe('<span class="word">text</span>')
  })

  describe('replace', () => {
    it('text', () => {
      expect(replace('foo bar')).toBe(`foo bar`)

      expect(replace('foo bar', [true])).toBe(`${wrap('foo')} bar`)
      expect(replace('foo bar', [false, true])).toBe(`foo ${wrap('bar')}`)
      expect(replace('foo bar', [true, true])).toBe(`${wrap('foo')} ${wrap('bar')}`)

      // reverse
      expect(replace('foo bar', [], true)).toBe(`${wrap('foo')} ${wrap('bar')}`)

      expect(replace('foo bar', [true], true)).toBe(`foo ${wrap('bar')}`)
      expect(replace('foo bar', [false, true], true)).toBe(`${wrap('foo')} bar`)
      expect(replace('foo bar', [true, true], true)).toBe(`foo bar`)
    })

    // TODO: Deutsch
    it('deutsch', () => {
      expect(replace('über all')).toBe(`über all`)
      // expect(replace('über all', [true, true])).toBe(`${wrap('über')} ${wrap('all')}`)
    })

    // TODO: Chinese
    it('chinese', () => {
      expect(replace('中文')).toBe(`中文`)
      // expect(replace('中文', [true, true])).toBe(`${wrap('中')}${wrap('文')}`)
    })
  })
})
