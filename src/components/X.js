import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { randomPlaces, replace } from '../util'

import './X.css'

export default ({ content }) => {
  const matches = content.match(/[\w\d]+/gi)
  const counts = matches ? matches.length : 0
  const places = randomPlaces(counts)
  return (
    <Container>
      <Row>
        <Col xs='12' sm='4'
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        <Col xs='12' sm='4'
          dangerouslySetInnerHTML={{
            __html: replace(content, places)
          }}
        />
        <Col xs='12' sm='4'
          dangerouslySetInnerHTML={{
            __html: replace(content, places, true)
          }}
        />
      </Row>
    </Container>
  )
}
