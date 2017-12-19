import React, { Component } from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const isValidPoem = poem => {
  if (!poem) return false;
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords =
    countWords(poemLines[0]) === 5 &&
    countWords(poemLines[1]) === 3 &&
    countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
};

class PoemWriter extends Component {
  state = {
    poem: '',
    isValid: true,
  };

  handleChange = e => {
    const poem = e.target.value;
    const isValid = isValidPoem(poem);
    this.setState({ poem, isValid });
  };

  render() {
    const { isValid } = this.state;
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        {!isValid && (
          <div id="poem-validation-error" style={{ color: 'red' }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
