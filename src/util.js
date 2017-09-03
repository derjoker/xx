import { range, random } from 'lodash'

export function randomPlaces (n) {
  return range(n).map(i => random() > 0.5)
}

export function wrap (word) {
  return `<span class="word">${word}</span>`
}

export function replace (text, places = [], reverse = false) {
  let index = 0
  return text.replace(/\b\w+/g, (match) => {
    // console.log('match', match)
    const ret = (reverse ? !places[index] : places[index]) ? wrap(match) : match
    ++index
    return ret
  })
}
