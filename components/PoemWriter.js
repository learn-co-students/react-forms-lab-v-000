import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length
}

function isValidPoem(poem) {
  var lines = poem.split('\n').filter(l => l)
  var isRightAmountOfLines = lines.length === 3
  var hasRightAmountOfWords = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5
  return isRightAmountOfLines && hasRightAmountOfWords
}

export default class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      content: '',
      isValid: false,
    };

    this.setPoemContent = this.setPoemContent.bind(this);
  }

  setPoemContent(event) {
    const content = event.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: isValidPoem(content),
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
