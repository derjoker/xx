/* eslint-env jest */
import { randomPlaces, wrap, replace } from './util'

describe('util', () => {
  describe('random places', () => {
    expect(randomPlaces(0).length).toBe(0)
    expect(randomPlaces(5).length).toBe(5)
    expect(randomPlaces(5).every(value => typeof value === 'boolean')).toBe(true)
  })

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
