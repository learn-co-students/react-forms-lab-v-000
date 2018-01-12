import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const poemValid = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const rightAmountOfLines = poemLines.length === 3;
    const rightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
    return rightAmountOfLines && rightAmountOfWords;
  }
  return false
}

class PoemWriter extends React.Component {

  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }

  setPoemContent = event => {
    const content = event.target.value;

    this.setState({
      content,
      isValid: poemValid(content)
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.value}
          onChange = {this.setPoemContent}
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
