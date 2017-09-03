import React, { Component } from 'react'
import { Button } from 'reactstrap'

import X from './X'

class Item extends Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      x: 'foo bar'
    }
  }

  onClick () {
    this.setState({
      x: this.textarea.value
    })
  }

  render () {
    return (
      <div>
        <div>
          <Button color='primary' onClick={this.onClick}>XX</Button>
        </div>
        <div>
          <textarea ref={textarea => { this.textarea = textarea }} />
        </div>
        <div>
          <X content={this.state.x} />
        </div>
      </div>
    )
  }
}

export default Item
