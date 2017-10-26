import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const isValid = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const rightAmountOfLines = poemLines.length === 3;
    const rightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
    return rightAmountOfLines && rightAmountOfWords
  }
  return false;
}
class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: '',
    };
  }

  handleTextChange = event => {
    const textArea = event.target.value;

    this.setState({
      textArea,
      isValid: isValid(textArea),
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.textarea}
          onChange={this.handleTextChange}
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
