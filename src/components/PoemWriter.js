import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      poem: []
    };
  }

  handleTextArea = event => {
    this.setState({
      inputValue: event.target.value,
      poem: event.target.value.split(/\n/)
    });
  }

  poemValidation = () => {
    if (this.state.poem.length === 3 &&
        this.state.poem[0].trim().split(' ').length === 5 &&
        this.state.poem[1].trim().split(' ').length === 3 &&
        this.state.poem[2].trim().split(' ').length === 5) {
      return true;
    }
    return false;
  }

  render() {
    if (this.poemValidation()) {
      return (
        <div>
        <textarea
        rows="3"
        cols="60"
        value={this.state.inputValue}
        onChange={this.handleTextArea}
        />
        </div>
      );
    } else {
      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            value={this.state.inputValue}
            onChange={this.handleTextArea}
          />
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        </div>
      );
    }
  }
}

export default PoemWriter;
