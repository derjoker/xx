import React, { Component } from 'react'
import { Button, Modal } from 'antd'

import X from './X'

class Item extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
    this.state = {
      modal: false,
      x: window.localStorage.getItem('item') || 'foo bar'
    }
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  onClick () {
    this.setState({
      x: window.localStorage.getItem('item') || 'foo bar'
    })
  }

  onClickSave () {
    window.localStorage.setItem('item', this.textarea.value)
    this.setState({
      modal: false,
      x: this.textarea.value
    })
  }

  render () {
    return (
      <div>
        <div style={divStyle}>
          <Button.Group>
            <Button size='large' onClick={this.toggle}>Text</Button>
            <Button size='large' onClick={this.onClick}>XX</Button>
          </Button.Group>
        </div>
        <div>
          <Modal
            title='Text'
            visible={this.state.modal}
            onOk={this.onClickSave}
            onCancel={this.toggle}
          >
            <textarea style={textareaStyle} ref={textarea => { this.textarea = textarea }} defaultValue={this.state.x} />
          </Modal>
        </div>
        <div style={{margin: '10px'}}>
          <X content={this.state.x} />
        </div>
      </div>
    )
  }
}

export default Item

const divStyle = {
  textAlign: 'center'
}

const textareaStyle = {
  width: '100%',
  height: '300px',
  fontSize: '16px'
}
