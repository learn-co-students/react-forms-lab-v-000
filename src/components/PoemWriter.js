import React from 'react';

const wordCount = (line) => {
  return line.split(' ').filter(word => word).length;
}

const isPoemValid = (poem) => {
  if (poem) {
    const poemLines = poem.split('\n').filter(line => line);
    const isCorrectAmountOfLines = poemLines.length === 3;
    const isCorrectAmountOfWords = wordCount(poemLines[0]) === 5 && wordCount(poemLines[1]) === 3 && wordCount(poemLines[2]) === 5;
    return isCorrectAmountOfLines && isCorrectAmountOfWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }

  changeContent = (event) => {
    const content = event.target.value;

    this.setState({
      content,
      isValid: isPoemValid(content)
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.changeContent}
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
