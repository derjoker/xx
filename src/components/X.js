import React from 'react'

import { replace } from '../util'

import './X.css'

export default ({ content, places = [] }) => (
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
