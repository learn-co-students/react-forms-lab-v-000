import React from 'react';

function wordCount(line) {
  return line.split(' ').filter(l => l).length
}

function isValidPoem(poem) {
  const poemLines = poem.split('\n').filter(l => l)
  const isCorrectNumOfLines = poemLines.length === 3
  const hasCorrectNumWords = wordCount(poemLines[0]) === 5 && wordCount(poemLines[1]) === 3 && wordCount(poemLines[2]) === 5
  return isCorrectNumOfLines && hasCorrectNumWords
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,
    };

    this.setPoemContent = this.setPoemContent.bind(this)
  }

  setPoemContent(event) {
    const content = event.target.value
    if (content) {
      this.setState({
        content: content,
        isValid: isValidPoem(content),
        },
        function() {
          console.log(this.state)
        }
      )
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
