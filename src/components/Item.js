import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

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
        <div>
          <Button color='primary' onClick={this.toggle}>Text</Button>
          {' '}
          <Button color='primary' onClick={this.onClick}> XX </Button>
        </div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              <textarea style={textareaStyle} ref={textarea => { this.textarea = textarea }} defaultValue={this.state.x} />
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={this.onClickSave}>Save</Button>
              <Button color='secondary' onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
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

const textareaStyle = {
  width: '100%',
  height: '300px'
}
