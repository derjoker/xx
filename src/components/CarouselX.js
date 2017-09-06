import React from 'react'
import { Carousel, Row, Col } from 'antd'
import markdownIt from 'markdown-it'

import { randomPlaces, replace } from '../util'

const md = markdownIt({
  html: true
})

export default ({ content }) => {
  const matches = content.match(/[\w\d]+/gi)
  const counts = matches ? matches.length : 0
  const places = randomPlaces(counts)
  return (
    <Carousel>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{
            __html: md.render(content)
          }} />
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{
            __html: md.render(replace(content, places))
          }} />
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{
            __html: md.render(replace(content, places, true))
          }} />
          <br />
        </Col>
      </Row>
    </Carousel>
  )
}
