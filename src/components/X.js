import React from 'react'
import { Row, Col } from 'antd'
import markdownIt from 'markdown-it'

import { randomPlaces, replace } from '../util'

import './X.css'

const md = markdownIt({
  html: true
})

export default ({ content }) => {
  const matches = content.match(/[\w\d]+/gi)
  const counts = matches ? matches.length : 0
  const places = randomPlaces(counts)
  return (
    <div>
      <Row gutter={10}>
        <Col xs={24} sm={8}>
          <div style={contentStyle} dangerouslySetInnerHTML={{
            __html: md.render(content)
          }} />
        </Col>
        <Col xs={24} sm={8}>
          <div style={contentStyle} dangerouslySetInnerHTML={{
            __html: md.render(replace(content, places))
          }} />
        </Col>
        <Col xs={24} sm={8}>
          <div style={contentStyle} dangerouslySetInnerHTML={{
            __html: md.render(replace(content, places, true))
          }} />
        </Col>
      </Row>
    </div>
  )
}

const contentStyle = {
  padding: '2px',
  border: '1px solid',
  borderRadius: '5px'
}
