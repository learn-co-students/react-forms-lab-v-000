
import React from 'react'

function countWords(line) {
  return line.split(' ').filter(l => l).length
}

function isValidPoem(poem) {
  let rightAmountOfWords
  const poemLines = poem.split('\n').filter(l => l)
  const rightAmountOfLines = poemLines.length === 3
  if (rightAmountOfLines) {
    rightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5
  }
  return rightAmountOfLines && rightAmountOfWords
}

class PoemWriter extends React.Component {
  constructor () {
    super ()

    this.state = {
      poem: '',
      valid: false
    }
  }

  handleChange = e => {
    const poem = e.target.value
    if (poem) {
      this.setState({
        poem: poem,
        valid: isValidPoem(poem)
      })
    }
  }

  render () {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        {!this.state.valid ? <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div> : null}
      </div>
    )
  }
}

export default PoemWriter
