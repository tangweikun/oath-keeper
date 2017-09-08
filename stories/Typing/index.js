import React, { Component } from 'react'

export default class Typing extends Component {
  state = {
    currentPosition: 0,
    completedSentence: '',
    remindingSentence: '1234567890 12345',
    inputValue: '',
  }

  handleKeyDown = keyCode => {
    const {
      currentPosition,
      completedSentence,
      remindingSentence,
      inputValue,
    } = this.state

    if (remindingSentence[0].charCodeAt() === keyCode) {
      let nextInputValue = inputValue + String.fromCharCode(keyCode)
      if (keyCode === 32) {
        nextInputValue = ''
      }

      this.setState({
        completedSentence: `${completedSentence}${String.fromCharCode(
          keyCode,
        )}`,
        remindingSentence: remindingSentence.slice(1),
        inputValue: nextInputValue,
      })
    }
  }

  render() {
    const {
      currentPosition,
      completedSentence,
      remindingSentence,
      inputValue,
    } = this.state

    return (
      <div>
        <div>
          <span style={{ color: 'green', fontSize: 36 }}>
            {completedSentence}
          </span>
          <span style={{ fontSize: 40 }}>{remindingSentence}</span>
        </div>
        {remindingSentence && (
          <input
            type="text"
            onKeyDown={e => this.handleKeyDown(e.keyCode)}
            value={inputValue}
          />
        )}
      </div>
    )
  }
}
