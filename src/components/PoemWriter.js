import React from 'react'

function countWords(line) {
  return line.split(' ').filter(l => l).length
}

function poem(poem) {
  const lines = poem.split('\n').filter(l => l)
  const correct = lines.length === 3
  const words = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5
  return correct && words
}

class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      content: ' ',
      isValid: false,
    };

    this.setPoemContent = this.setPoemContent.bind(this)
  }

  setPoemContent(ev) {
    const content = ev.target.value

    if (content) {
      this.setState({
        content: content,
        isValid: poem(content),
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}></div> : null}
      </div>
    );
  }
}

export default PoemWriter