import React from 'react';

const wordsInLine = line => line.split(' ').filter(l => l).length;

const isPoem = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const numberOfLines = poemLines.length === 3;
    const numberOfWords = wordsInLine(poemLines[0]) === 5 && wordsInLine(poemLines[1]) === 3 && wordsInLine(poemLines[2]) === 5;
    return numberOfLines && numberOfWords;
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

  writePoem = event => {
    const content = event.target.value
    this.setState({
      content,
      isValid: isPoem(content),
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.writePoem}
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
