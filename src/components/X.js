import React from 'react'

import { randomPlaces, replace } from '../util'

import './X.css'

export default ({ content }) => {
  const matches = content.match(/[\w\d]+/gi)
  const counts = matches ? matches.length : 0
  const places = randomPlaces(counts)
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: replace(content, places)
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: replace(content, places, true)
        }}
      />
    </div>
  )
}
