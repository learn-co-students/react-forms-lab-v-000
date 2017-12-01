import React from 'react';

function wordCount(line) {
  return line.split(' ').filter(word => word).length;
}

function isValidPoem(content) {
  if (content) {
    const poemLines = content.split('\n').filter(line => line);
    const correctNumberOfLines = poemLines.length === 3;
    const correctNumberOfWords = wordCount(poemLines[0]) === 5 && wordCount(poemLines[1]) === 3 && wordCount(poemLines[2]) === 5;
    return correctNumberOfLines && correctNumberOfWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: true
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      isValid: isValidPoem(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {!this.state.isValid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
