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

    // TODO: HTML
    it('html', () => {
      expect(replace('<div class="test">html</div>')).toBe(`<div class="test">html</div>`)
      // expect(replace('<div class="test">html</div>', [true])).toBe(`<div class="test">${wrap('html')}</div>`)
    })

    // TODO: Deutsch (ß)
    it('deutsch', () => {
      // expect(replace('ändern öffnen über bloß', [true, true, true, true])).toBe(`${wrap('ändern')} ${wrap('öffnen')} ${wrap('über')} ${wrap('bloß')}`)
    })

    // TODO: Chinese
    it('chinese', () => {
      // expect(replace('中文', [true, true])).toBe(`${wrap('中')}${wrap('文')}`)
    })
  })
})
