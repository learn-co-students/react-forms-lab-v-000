import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      validPoem: false
    };
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  validPoem = event => {
    const { text } = this.state;
    let textArr = text.split('\n');

    if (textArr.length === 3) {
      if (textArr[0].trim().split(' ').length === 5
          && textArr[1].trim().split(' ').length === 3
          && textArr[2].trim().split(' ').length === 5) {
            return true
      }
    }
    return false
  }

  render() {
    const valid = this.validPoem();
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.handleTextChange}
        ></textarea>
        { valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div> }
      </div>
    );
  }
}

export default PoemWriter;
