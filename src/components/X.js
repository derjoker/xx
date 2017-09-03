import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import markdownIt from 'markdown-it'

import { randomPlaces, replace } from '../util'

import './X.css'

const md = markdownIt({
  html: true,
  breaks: true
})

export default ({ content }) => {
  const matches = content.match(/[\w\d]+/gi)
  const counts = matches ? matches.length : 0
  const places = randomPlaces(counts)
  return (
    <Container>
      <Row>
        <Col xs='12' sm='4'
          dangerouslySetInnerHTML={{
            __html: md.renderInline(content)
          }}
        />
        <Col xs='12' sm='4'
          dangerouslySetInnerHTML={{
            __html: md.renderInline(replace(content, places))
          }}
        />
        <Col xs='12' sm='4'
          dangerouslySetInnerHTML={{
            __html: md.renderInline(replace(content, places, true))
          }}
        />
      </Row>
    </Container>
  )
}
