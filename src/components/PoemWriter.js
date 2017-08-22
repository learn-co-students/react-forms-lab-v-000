import React from 'react';

function validatePoem(poem) {
  const lines = poem.split('\n').filter(l => l);
  const isThreeLines = lines.length === 3;
  const isRightNumberOfWords = countWords(lines[0]) === 5  && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
  return isThreeLines && isRightNumberOfWords;
}

function countWords(line) {
  if (line) {
    return line.split(' ').filter(l => l).length;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const poem = event.target.value
    this.setState({
      value: poem,
      valid: validatePoem(poem)
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
        {this.state.valid ? null :
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
