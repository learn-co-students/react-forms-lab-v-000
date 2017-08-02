import React from 'react';


function countWords(line) {
  return line.split(' ').filter(Boolean).length
}

function isValidPoem(content) {
  let poemLines = content.split("\n")
  const correctLines = poemLines.length === 3
  const correctWordCounts = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5
  return correctLines && correctWordCounts
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      inputText: '',
      isValid: false
    };
  }

  handleText = (event) => {
    const content = event.target.value

    if (content) {
      this.setState({
        inputText: content,
        isValid: isValidPoem(content)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.inputText}
          onChange={this.handleText}
        />

        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}

      </div>
    );
  }
}

export default PoemWriter;
